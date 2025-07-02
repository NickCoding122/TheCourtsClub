export default function Contact() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Contact Us</h1>
      <p>Email us at <a href="mailto:info@thecourtsclub.com">info@thecourtsclub.com</a></p>
      <form style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "400px" }}>
        <label>
          Name
          <input type="text" name="name" style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }} />
        </label>
        <label>
          Email
          <input type="email" name="email" style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }} />
        </label>
        <label>
          Message
          <textarea name="message" rows={4} style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }} />
        </label>
        <button type="submit" style={{ padding: "0.5rem 1rem", backgroundColor: "#111", color: "#fff", border: "none", borderRadius: "4px" }}>Send</button>
      </form>
    </main>
  );
}
