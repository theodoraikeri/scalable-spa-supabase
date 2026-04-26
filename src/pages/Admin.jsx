import { useState } from "react"
import { supabase } from "../lib/supabaseClient"

function Admin({ products }) {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [editingId, setEditingId] = useState(null)
  const [editName, setEditName] = useState("")
  const [editPrice, setEditPrice] = useState("")
  const [editCategory, setEditCategory] = useState("")

  const addProduct = async () => {
    const { error } = await supabase.from("products").insert([
      {
        name,
        price: Number(price),
        category,
        description: "New product",
        image_url: "",
        stock_quantity: 10,
      },
    ])

    if (error) {
      alert("Error adding product")
    } else {
      window.location.reload()
    }
  }

  const deleteProduct = async (id) => {
    await supabase.from("products").delete().eq("id", id)
    window.location.reload()
  }

  const startEdit = (product) => {
    setEditingId(product.id)
    setEditName(product.name)
    setEditPrice(product.price)
    setEditCategory(product.category)
  }

  const saveEdit = async (id) => {
    const { error } = await supabase
      .from("products")
      .update({
        name: editName,
        price: Number(editPrice),
        category: editCategory,
      })
      .eq("id", id)

    if (error) {
      alert("Error updating product")
    } else {
      window.location.reload()
    }
  }

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <h3>Add Product</h3>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
      <input placeholder="Category" onChange={(e) => setCategory(e.target.value)} />

      <button onClick={addProduct}>Add Product</button>

      <hr />

      <h3>All Products</h3>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            background: "white",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "12px",
          }}
        >
          {editingId === product.id ? (
            <>
              <input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />

              <input
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
              />

              <input
                value={editCategory}
                onChange={(e) => setEditCategory(e.target.value)}
              />

              <button onClick={() => saveEdit(product.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <h3>{product.name}</h3>
              <p>${product.price} | {product.category} | Stock: {product.stock_quantity}</p>

              <button onClick={() => startEdit(product)}>Edit</button>
              <button
                onClick={() => deleteProduct(product.id)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default Admin