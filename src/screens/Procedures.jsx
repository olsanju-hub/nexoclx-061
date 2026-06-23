import { ContentBlock } from '../components/detail/ContentBlock.jsx';

export function Procedures() {
  return (
    <div className="screen">
      <div className="section-heading">
        <h1>Procedimientos</h1>
        <p>Procedimientos vinculados a escena, monitorización y traslado.</p>
      </div>
      <ContentBlock title="Dolor torácico">
        <p>El protocolo organiza ECG prehospitalario, prealerta, registro y transferencia al hospital útil.</p>
      </ContentBlock>
    </div>
  );
}
