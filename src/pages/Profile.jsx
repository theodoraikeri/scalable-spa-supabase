function Profile({ session }) {
    return (
      <div>
        <h2>Customer Profile</h2>
        <p><strong>Email:</strong> {session?.user?.email}</p>
  
        <h3>Order History</h3>
        <p>No orders yet.</p>
      </div>
    )
  }
  
  export default Profile