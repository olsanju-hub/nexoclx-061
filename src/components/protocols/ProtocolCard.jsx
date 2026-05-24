export function ProtocolCard({ item, onOpen }) {
  return (
    <button type="button" onClick={() => onOpen({ ...item, type: item.type || 'protocolo' })}>
      <span>
        <strong>{item.title}</strong>
        <small>{item.category} · {item.summary}</small>
      </span>
      <b>›</b>
    </button>
  );
}
