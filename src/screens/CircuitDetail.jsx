import { DetailHeader } from '../components/detail/DetailHeader.jsx';
import { ContentBlock } from '../components/detail/ContentBlock.jsx';

export function CircuitDetail({ onBack }) {
  return (
    <div className="screen">
      <DetailHeader title="Dolor torácico" subtitle="Circuito extrahospitalario" onBack={onBack} />
      <ContentBlock title="Flujo">
        <p>Escena segura, ABCDE, ECG prehospitalario, prealerta y traslado al hospital útil según estabilidad y sospecha tiempo-dependiente.</p>
      </ContentBlock>
    </div>
  );
}
