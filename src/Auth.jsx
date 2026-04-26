import { useState } from "react"
import { supabase } from "./lib/supabaseClient"

function Auth() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) alert(error.message)
    else alert("Check your email to confirm signup")
  }

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) alert(error.message)
    else alert("Logged in!")
  }

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Login / Sign Up</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <button onClick={login} style={{ width: "100%", marginBottom: "10px" }}>
        Login
      </button>

      <button onClick={signUp} style={{ width: "100%" }}>
        Sign Up
      </button>
    </div>
  )
}

export default Auth