export function ProtocolHeader({ protocol }) {
  return (
    <>
      <div className="protocol-title">
        <span className={protocol.priority === 'amenaza vital' ? 'tag danger' : 'tag'}>{protocol.priority}</span>
        <h1>{protocol.title}</h1>
        <p>{protocol.summary}</p>
      </div>
    </>
  );
}
