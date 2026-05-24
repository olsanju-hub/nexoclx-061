export function ProtocolHeader({ protocol, meta }) {
  return (
    <>
      <div className="protocol-title">
        <span className={protocol.priority === 'amenaza vital' ? 'tag danger' : 'tag'}>{protocol.priority}</span>
        <h1>{protocol.title}</h1>
        <p>{protocol.summary}</p>
      </div>
      <dl className="protocol-meta-grid">
        <div><dt>Contexto</dt><dd>061 · extrahospitalaria</dd></div>
        <div><dt>Categoría</dt><dd>{protocol.category}</dd></div>
        <div><dt>Prioridad</dt><dd>{protocol.priority}</dd></div>
        {meta?.reviewedAt && <div><dt>Revisión</dt><dd>{meta.reviewedAt}</dd></div>}
      </dl>
    </>
  );
}
