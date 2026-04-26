import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import { supabase } from "./lib/supabaseClient"
import Auth from "./Auth"
import Products from "./pages/Products"
import Profile from "./pages/Profile"
import Admin from "./pages/Admin"

function App() {
  const [products, setProducts] = useState([])
  const [session, setSession] = useState(null)
  const [role, setRole] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const startApp = async () => {
      const { data } = await supabase.auth.getSession()
      setSession(data.session)

      if (data.session) {
        await fetchRole(data.session.user.id)
      }

      await fetchProducts()
      setLoading(false)
    }

    startApp()

    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session)

      if (session) {
        await fetchRole(session.user.id)
      } else {
        setRole(null)
      }
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*")

    if (error) {
      console.error("Error fetching products:", error)
    } else {
      setProducts(data)
    }
  }

  const fetchRole = async (userId) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", userId)
      .maybeSingle()

    if (error) {
      console.error("Error fetching role:", error)
      setRole("user")
    } else {
      setRole(data?.role || "user")
    }
  }

  const logout = async () => {
    await supabase.auth.signOut()
    setSession(null)
    setRole(null)
  }

  if (loading) {
    return <p style={{ padding: "40px" }}>Loading...</p>
  }

  if (!session) {
    return <Auth />
  }

  return (
    <BrowserRouter basename="/jewelry-app">
      <div style={{ padding: "40px", background: "#f8f6f2", minHeight: "100vh" }}>
        
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <h1>Gems & Jewels Boutique</h1>

          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <Link to="/">Products</Link>
            <Link to="/profile">Profile</Link>

            {role === "admin" && <Link to="/admin">Admin</Link>}

            <button
              onClick={logout}
              style={{
                padding: "10px 18px",
                background: "black",
                color: "white",
                border: "none",
                borderRadius: "8px",
              }}
            >
              Logout
            </button>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Products products={products} />} />
            <Route path="/profile" element={<Profile session={session} />} />

            <Route
              path="/admin"
              element={
                role === "admin" ? (
                  <Admin products={products} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App