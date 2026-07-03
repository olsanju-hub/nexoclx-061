import { useState } from 'react';
import { ContentBlock } from '../components/detail/ContentBlock.jsx';

export function Calculations() {
  const [mode, setMode] = useState('code');
  const result = {
    code: 'Coordina código o circuito territorial si el ECG y la red asistencial lo indican.',
    prealert: 'Prealerta con hora de inicio, ECG, constantes, estabilidad y cambios durante traslado.',
    transfer: 'Selecciona hospital útil según estabilidad, ECG y sospecha tiempo-dependiente.',
  }[mode];

  return (
    <div className="screen">
      <div className="section-heading">
        <h1>Selector operativo</h1>
        <p>Elige el escenario.</p>
      </div>
      <ContentBlock title="Asistencia 061">
        <div className="segmented-control" aria-label="Escenario operativo">
          <button className={mode === 'code' ? 'is-active' : ''} type="button" onClick={() => setMode('code')}>Código</button>
          <button className={mode === 'prealert' ? 'is-active' : ''} type="button" onClick={() => setMode('prealert')}>Prealerta</button>
          <button className={mode === 'transfer' ? 'is-active' : ''} type="button" onClick={() => setMode('transfer')}>Traslado</button>
        </div>
        <div className="decision-result">
          <h3>{mode === 'code' ? 'Activación' : mode === 'prealert' ? 'Comunicación' : 'Hospital útil'}</h3>
          <p>{result}</p>
        </div>
      </ContentBlock>
    </div>
  );
}
