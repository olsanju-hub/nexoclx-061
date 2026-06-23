import { ContentBlock } from '../components/detail/ContentBlock.jsx';

export function Tools() {
  return (
    <div className="screen">
      <div className="section-heading">
        <h1>Herramientas</h1>
        <p>Apoyo operativo vinculado al protocolo Dolor torácico.</p>
      </div>
      <ContentBlock title="ECG y transmisión">
        <p>ECG prehospitalario, reevaluación y transmisión al sistema receptor si está disponible.</p>
      </ContentBlock>
      <ContentBlock title="Prealerta y destino">
        <p>Comunicación estructurada y selección de hospital útil según estabilidad, ECG y sospecha tiempo-dependiente.</p>
      </ContentBlock>
    </div>
  );
}
