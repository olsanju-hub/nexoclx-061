import { ProtocolCard } from './ProtocolCard';

export function ProtocolList({ title, items, onOpen }) {
  return (
    <section className="list-block">
      <h2>{title}</h2>
      <div className="clinical-list">
        {items.map((item) => <ProtocolCard key={item.id} item={item} onOpen={onOpen} />)}
      </div>
    </section>
  );
}
