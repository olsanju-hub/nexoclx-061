import { CompactList } from '../components/lists/CompactList.jsx';
import { ListRow } from '../components/lists/ListRow.jsx';

export function Circuits({ onOpen }) {
  return (
    <div className="screen">
      <div className="section-heading">
        <h1>Circuitos</h1>
        <p>Activación, prealerta y destino útil para emergencias extrahospitalarias.</p>
      </div>
      <CompactList label="Listado de circuitos">
        <ListRow
          title="Dolor torácico"
          description="ECG prehospitalario, código IAM, prealerta y traslado seguro."
          meta="Circuito"
          onClick={onOpen}
        />
      </CompactList>
    </div>
  );
}
