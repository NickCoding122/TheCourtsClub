export default function Membership() {
  return (
    <main
      style={{
        fontFamily: "sans-serif",
        padding: "2rem",
        color: "#333",
        backgroundColor: "#fafafa",
      }}
    >
      <h1>Membership</h1>
      <p>
        Our members enjoy unrivaled access to premium courts, expert coaching,
        and a vibrant social community. Choose the plan that fits your game.
      </p>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>Pricing Tiers</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Standard</strong> – $50/month
            <br />
            Weekday access and introductory clinics.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Premium</strong> – $90/month
            <br />
            Priority court booking, weekend play, and advanced coaching.
          </li>
          <li>
            <strong>Elite</strong> – $150/month
            <br />
            Unlimited reservations, private lockers, and concierge service.
          </li>
        </ul>
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>Benefits</h2>
        <ul style={{ listStyle: "disc", marginLeft: "1.5rem" }}>
          <li>Professional-grade courts and equipment</li>
          <li>Exclusive tournaments and social events</li>
          <li>Access to member lounge and networking</li>
        </ul>
      </section>

      <p style={{ marginTop: "2rem" }}>
        Ready to elevate your game?
        <a href="/join" style={{ textDecoration: 'underline' }}>
          Join The Courts Club today
        </a>
        .
      </p>
    </main>
  );
}
