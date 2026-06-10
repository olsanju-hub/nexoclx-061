export function ProtocolSection({ id, title, items }) {
  return (
    <section className="protocol-section-card" id={id}>
      <h2>{title}</h2>
      <ul className="action-list">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}
