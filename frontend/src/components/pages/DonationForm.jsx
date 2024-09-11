import React, { useState, useEffect } from "react";

function Donate({ user }) {
  // Initialize state for form data, use user details from props if available
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    contact: user?.contact || "",
    amount: "",
    message: "",
  });

  useEffect(() => {
    // If user props change, update the formData state
    if (user) {
      setFormData({
        ...formData,
        name: user.name || "",
        email: user.email || "",
        contact: user.contact || "",
      });
    }
  }, [user]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle payment logic
  const handlePayment = async (e) => {
  };
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f9',
      padding: '20px',
    },
    form: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '500px',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
      backgroundColor: '#f9f9f9',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
      backgroundColor: '#f9f9f9',
      resize: 'vertical',
      height: '100px',
    },
    button: {
      width: '100%',
      padding: '15px',
      backgroundColor: 'orange',
      color: '#fff',
      fontSize: '18px',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '20px',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handlePayment}>
        <h2 style={styles.heading}>Donate Now</h2>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Donation Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
          ></textarea>
        </div>
        <button type="submit" style={styles.button}>
          Donate
        </button>
      </form>
    </div>
  );
}

export default Donate;
