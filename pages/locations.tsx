export default function Locations() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Our Locations</h1>
      <div
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          marginTop: "2rem",
        }}
      >
        <section style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem" }}>
          <h2>London</h2>
          <p>The heart of The Courts Club with world-class courts and luxury amenities.</p>
        </section>
        <section style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem" }}>
          <h2>Paris</h2>
          <p>Experience Parisian elegance with state-of-the-art facilities and scenic views.</p>
        </section>
        <section style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem" }}>
          <h2>Dubai</h2>
          <p>Our newest club offers a desert oasis of padel luxury and year-round sunshine.</p>
        </section>
      </div>
    </main>
  );
}
