import { useMemo, useState } from 'react';
import { ContentBlock } from '../components/detail/ContentBlock.jsx';

const checks = [
  'ECG prehospitalario realizado si procede.',
  'Transmisión o comunicación del ECG al receptor si está disponible.',
  'Prealerta estructurada preparada.',
  'Hospital útil seleccionado según estabilidad, ECG y sospecha.',
  'Cambios durante el traslado comunicados.',
];

export function Tools() {
  const [selected, setSelected] = useState([]);
  const [copied, setCopied] = useState(false);
  const summary = useMemo(() => `Dolor torácico 061 - prealerta y traslado\n${selected.map((item) => `- ${item}`).join('\n') || '- Sin elementos marcados.'}`, [selected]);
  const toggle = (item) => {
    setSelected((current) => (current.includes(item) ? current.filter((value) => value !== item) : [...current, item]));
    setCopied(false);
  };
  const copySummary = async () => {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
  };

  return (
    <div className="screen">
      <div className="section-heading">
        <h1>Herramientas</h1>
        <p>Apoyo operativo vinculado al protocolo Dolor torácico.</p>
      </div>
      <ContentBlock title="Checklist de prealerta">
        <div className="checklist-grid">
          {checks.map((item) => (
            <label className={selected.includes(item) ? 'clinical-check is-checked' : 'clinical-check'} key={item}>
              <input type="checkbox" checked={selected.includes(item)} onChange={() => toggle(item)} />
              <span>{item}</span>
            </label>
          ))}
        </div>
        <div className="decision-result">
          <h3>{selected.length >= 4 ? 'Transferencia estructurada' : 'Completar prealerta'}</h3>
          <p>Usa el circuito Dolor torácico para coordinar destino y entrega de información al hospital receptor.</p>
          <button className="copy-button" type="button" onClick={copySummary}>{copied ? 'Resumen copiado' : 'Copiar resumen'}</button>
        </div>
      </ContentBlock>
    </div>
  );
}
