function Products({ products }) {
    return (
      <div>
        <h2>Products</h2>
  
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "25px",
            marginTop: "30px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  background: "#f3ead7",
                  padding: "4px 10px",
                  borderRadius: "20px",
                }}
              >
                {product.category}
              </span>
  
              <div
                style={{
                  height: "150px",
                  background: "#ddd",
                  margin: "15px 0",
                  borderRadius: "10px",
                }}
              />
  
              <h3>{product.name}</h3>
              <p style={{ fontWeight: "bold" }}>${product.price}</p>
              <p style={{ fontSize: "14px", color: "#555" }}>{product.description}</p>
  
              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  background: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  marginTop: "10px",
                }}
              >
                View Details
              </button>
  
              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "8px",
                  borderRadius: "8px",
                  border: "1px solid black",
                  background: "white",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Products