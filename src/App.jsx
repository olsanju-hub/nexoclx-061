import { useMemo, useState } from 'react'
import { bibliography, bibliographyById } from './data/bibliography'
import { calculators } from './data/calculators'
import { medicationById } from './data/medications'
import { modules, procedures, procedureById } from './data/modules'
import { protocolMetaById } from './data/protocols'
import { protocolFlows, TAB_ORDER } from './data/protocolFlows'

const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'protocolos', label: 'Protocolos' },
  { id: 'procedimientos', label: 'Procedimientos' },
  { id: 'calculos', label: 'Cálculos' },
  { id: 'bibliografia', label: 'Bibliografía' },
]

const quickBlocks = [
  { label: 'ABCDE', view: 'procedimientos', id: 'abcde' },
  { label: 'SBAR', view: 'procedimientos', id: 'sbar-prealerta' },
  { label: 'Traslado crítico', view: 'procedimientos', id: 'traslado-critico' },
  { label: 'Shock Index', view: 'calculos', id: 'shock-index' },
]

const norm = (value) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')

function App() {
  const [view, setView] = useState('inicio')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Todos')
  const [selectedProtocolId, setSelectedProtocolId] = useState(protocolFlows[0].id)
  const [selectedProcedureId, setSelectedProcedureId] = useState(procedures[0].id)
  const [selectedCalculatorId, setSelectedCalculatorId] = useState(calculators[0].id)
  const [activeTab, setActiveTab] = useState(TAB_ORDER[0])

  const protocol = protocolFlows.find((item) => item.id === selectedProtocolId)
  const procedure = procedureById[selectedProcedureId]
  const calculator = calculators.find((item) => item.id === selectedCalculatorId)

  const searchable = useMemo(() => {
    const protocolRows = protocolFlows.map((item) => ({ ...item, type: 'protocolo' }))
    const procedureRows = procedures.map((item) => ({ ...item, type: 'procedimiento' }))
    const calculatorRows = calculators.map((item) => ({
      ...item,
      keywords: [item.title, item.category, ...item.relatedProtocols],
      summary: item.formula,
      type: 'cálculo',
    }))
    return [...protocolRows, ...procedureRows, ...calculatorRows]
  }, [])

  const results = useMemo(() => {
    const value = norm(query.trim())
    if (!value) return []
    return searchable
      .filter((item) => norm([item.title, item.summary, item.category, ...(item.keywords || [])].join(' ')).includes(value))
      .slice(0, 8)
  }, [query, searchable])

  const protocolCategories = ['Todos', ...new Set(protocolFlows.map((item) => item.category))]
  const visibleProtocols = protocolFlows.filter(
    (item) =>
      category === 'Todos' ||
      item.category === category ||
      norm([item.title, item.summary, ...item.keywords].join(' ')).includes(norm(category)),
  )

  const openItem = (item) => {
    if (item.type === 'protocolo') {
      setSelectedProtocolId(item.id)
      setActiveTab(TAB_ORDER[0])
      setView('protocolos')
    }
    if (item.type === 'procedimiento') {
      setSelectedProcedureId(item.id)
      setView('procedimientos')
    }
    if (item.type === 'cálculo') {
      setSelectedCalculatorId(item.id)
      setView('calculos')
    }
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => setView('inicio')} type="button">
          <img src="/assets/brand/nexoclx-061-icon-source.png" alt="" />
          <span>
            <strong>NexoClx 061</strong>
            <small>extrahospitalaria y traslado crítico</small>
          </span>
        </button>
      </header>

      <main className="main-panel">
        <SearchBox query={query} setQuery={setQuery} results={results} openItem={openItem} />

        <p className="clinical-warning">
          NexoClx 061 es una herramienta de apoyo clínico. No sustituye el juicio clínico, los
          protocolos oficiales del servicio de emergencias, la coordinación médica ni la valoración
          individual del paciente.
        </p>

        {view === 'inicio' && (
          <Home
            openItem={openItem}
            setView={setView}
            setSelectedProcedureId={setSelectedProcedureId}
            setSelectedCalculatorId={setSelectedCalculatorId}
          />
        )}

        {view === 'protocolos' && (
          <ProtocolsView
            protocol={protocol}
            category={category}
            setCategory={setCategory}
            protocolCategories={protocolCategories}
            visibleProtocols={visibleProtocols}
            setSelectedProtocolId={setSelectedProtocolId}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}

        {view === 'procedimientos' && (
          <ProceduresView
            procedure={procedure}
            selectedProcedureId={selectedProcedureId}
            setSelectedProcedureId={setSelectedProcedureId}
          />
        )}

        {view === 'calculos' && (
          <CalculatorsView
            calculator={calculator}
            selectedCalculatorId={selectedCalculatorId}
            setSelectedCalculatorId={setSelectedCalculatorId}
          />
        )}

        {view === 'bibliografia' && <BibliographyView />}
      </main>

      <nav className="bottom-nav" aria-label="Navegación principal">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={view === item.id ? 'active' : ''}
            onClick={() => setView(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

function SearchBox({ query, setQuery, results, openItem }) {
  return (
    <section className="search-wrap" aria-label="Búsqueda clínica">
      <label htmlFor="search">Buscar decisión clínica</label>
      <input
        id="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="dolor torácico, código ictus, prealerta, hipotensión..."
      />
      {results.length > 0 && (
        <div className="search-results">
          {results.map((item) => (
            <button key={`${item.type}-${item.id}`} type="button" onClick={() => openItem(item)}>
              <span>{item.title}</span>
              <small>{item.type} · {item.category}</small>
            </button>
          ))}
        </div>
      )}
    </section>
  )
}

function Home({ openItem, setView, setSelectedProcedureId, setSelectedCalculatorId }) {
  return (
    <section className="view-stack">
      <div className="section-head">
        <h1>Qué decidir ahora</h1>
        <p>Ficha rápida para valorar, estabilizar, trasladar y comunicar.</p>
      </div>

      <div className="quick-grid">
        {quickBlocks.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              if (item.view === 'procedimientos') setSelectedProcedureId(item.id)
              if (item.view === 'calculos') setSelectedCalculatorId(item.id)
              setView(item.view)
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <ClinicalList title="Protocolos frecuentes" items={protocolFlows} onOpen={openItem} />

      <div className="compact-row">
        <button type="button" onClick={() => setView('procedimientos')}>Procedimientos operativos</button>
        <button type="button" onClick={() => setView('calculos')}>Cálculos que cambian conducta</button>
      </div>
    </section>
  )
}

function ClinicalList({ title, items, onOpen }) {
  return (
    <section className="list-block">
      <h2>{title}</h2>
      <div className="clinical-list">
        {items.map((item) => (
          <button key={item.id} type="button" onClick={() => onOpen({ ...item, type: item.type || 'protocolo' })}>
            <span>
              <strong>{item.title}</strong>
              <small>{item.category} · {item.summary}</small>
            </span>
            <b>›</b>
          </button>
        ))}
      </div>
    </section>
  )
}

function ProtocolsView({
  protocol,
  category,
  setCategory,
  protocolCategories,
  visibleProtocols,
  setSelectedProtocolId,
  activeTab,
  setActiveTab,
}) {
  const meta = protocolMetaById[protocol.id]
  return (
    <section className="split-view">
      <aside className="side-list">
        <div className="filter-row">
          {protocolCategories.map((item) => (
            <button key={item} type="button" className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>
              {item}
            </button>
          ))}
        </div>
        <ClinicalList
          title="Protocolos"
          items={visibleProtocols}
          onOpen={(item) => {
            setSelectedProtocolId(item.id)
            setActiveTab(TAB_ORDER[0])
          }}
        />
      </aside>

      <article className="clinical-card">
        <div className="protocol-title">
          <span className={protocol.priority === 'amenaza vital' ? 'tag danger' : 'tag'}>{protocol.priority}</span>
          <h1>{protocol.title}</h1>
          <p>{protocol.summary}</p>
        </div>

        <div className="tabs" role="tablist">
          {TAB_ORDER.map((tab) => (
            <button key={tab} type="button" className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </div>

        <ul className="action-list">
          {protocol.tabs[activeTab].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <Connections protocol={protocol} meta={meta} />
      </article>
    </section>
  )
}

function Connections({ protocol, meta }) {
  return (
    <div className="connections">
      <Connector title="Cálculos" items={protocol.calculators} />
      <Connector title="Procedimientos" items={protocol.procedures} map={procedureById} />
      <section>
        <h3>Tratamientos conectados</h3>
        <div className="drug-grid">
          {protocol.medications.map((id) => {
            const drug = medicationById[id]
            return (
              <details key={id}>
                <summary>{drug.genericName}</summary>
                <p><strong>Dosis:</strong> {drug.dose}</p>
                <p><strong>Vía:</strong> {drug.route}</p>
                <p><strong>Evitar/precaución:</strong> {drug.contraindications}</p>
                <p><strong>CIMA:</strong> {drug.cimaUrl}</p>
              </details>
            )
          })}
        </div>
      </section>
      <section>
        <h3>Revisión</h3>
        <p>{meta.verificationStatus}</p>
        <small>Revisión interna: {meta.reviewedAt} · confianza: {meta.confidence}</small>
      </section>
    </div>
  )
}

function Connector({ title, items, map }) {
  return (
    <section>
      <h3>{title}</h3>
      <div className="chips">
        {items.map((id) => (
          <span key={id}>{map?.[id]?.title || calculators.find((item) => item.id === id)?.title || id}</span>
        ))}
      </div>
    </section>
  )
}

function ProceduresView({ procedure, selectedProcedureId, setSelectedProcedureId }) {
  return (
    <section className="split-view">
      <aside className="side-list">
        <ClinicalList
          title="Procedimientos"
          items={procedures}
          onOpen={(item) => setSelectedProcedureId(item.id)}
        />
      </aside>
      <article className="clinical-card">
        <div className="protocol-title">
          <span className="tag">{procedure.category}</span>
          <h1>{procedure.title}</h1>
          <p>{procedure.summary}</p>
        </div>
        <div className="procedure-sections">
          {Object.entries(procedure.sections).map(([key, values]) => (
            <section key={key}>
              <h2>{labelize(key)}</h2>
              <ul className="action-list">
                {values.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          ))}
        </div>
        <small>Seleccionado: {selectedProcedureId} · Fuente: {procedure.source.join(', ')}</small>
      </article>
    </section>
  )
}

function CalculatorsView({ calculator, selectedCalculatorId, setSelectedCalculatorId }) {
  return (
    <section className="split-view">
      <aside className="side-list">
        <ClinicalList
          title="Cálculos"
          items={calculators.map((item) => ({ ...item, summary: item.formula }))}
          onOpen={(item) => setSelectedCalculatorId(item.id)}
        />
      </aside>
      <article className="clinical-card">
        <div className="protocol-title">
          <span className="tag">{calculator.category}</span>
          <h1>{calculator.title}</h1>
          <p>{calculator.formula}</p>
        </div>
        <CalculatorRunner calculator={calculator} key={selectedCalculatorId} />
        <section className="meta-box">
          <h3>Uso clínico</h3>
          <p>Protocolos relacionados: {calculator.relatedProtocols.join(', ')}</p>
          <p>Limitaciones: {calculator.limitations}</p>
          <small>Fuente: {calculator.source.join(', ')} · revisión {calculator.reviewedAt}</small>
        </section>
      </article>
    </section>
  )
}

function CalculatorRunner({ calculator }) {
  const [values, setValues] = useState({})
  const set = (key, value) => setValues((current) => ({ ...current, [key]: value }))

  if (calculator.type === 'checklist') {
    return (
      <div className="checklist">
        {calculator.fields.map((field) => (
          <label key={field}><input type="checkbox" /> {field}</label>
        ))}
      </div>
    )
  }

  if (calculator.type === 'score') {
    const total = calculator.fields.reduce((sum, field) => sum + Number(values[field.key] || field.options[0][0]), 0)
    return (
      <div className="calc-box">
        {calculator.fields.map((field) => (
          <label key={field.key}>
            {field.label}
            <select value={values[field.key] || field.options[0][0]} onChange={(event) => set(field.key, event.target.value)}>
              {field.options.map(([value, label]) => <option key={value} value={value}>{value} · {label}</option>)}
            </select>
          </label>
        ))}
        <output>Resultado: {total}</output>
      </div>
    )
  }

  if (calculator.id === 'shock-index') {
    const hr = Number(values.hr || 0)
    const sbp = Number(values.sbp || 0)
    const result = hr && sbp ? (hr / sbp).toFixed(2) : 'pendiente'
    return <NumericCalc calculator={calculator} values={values} set={set} result={result} />
  }

  if (calculator.id === 'fluid-bolus') {
    const weight = Number(values.weight || 0)
    const mlkg = Number(values.mlkg || 0)
    const result = weight && mlkg ? `${Math.round(weight * mlkg)} ml` : 'pendiente'
    return <NumericCalc calculator={calculator} values={values} set={set} result={result} />
  }

  if (calculator.type === 'choice') {
    return (
      <div className="calc-box">
        {calculator.fields.map((field) => (
          <label key={field.key}>
            {field.label}
            <select onChange={(event) => set(field.key, event.target.value)}>
              {field.options.map(([value, label]) => <option key={value} value={value}>{value} · {label}</option>)}
            </select>
          </label>
        ))}
        <output>Resultado: {values.killip || 'I'}</output>
      </div>
    )
  }
}

function NumericCalc({ calculator, values, set, result }) {
  return (
    <div className="calc-box">
      {calculator.fields.map((field) => (
        <label key={field.key}>
          {field.label}
          <input
            type="number"
            min={field.min}
            max={field.max}
            value={values[field.key] || ''}
            onChange={(event) => set(field.key, event.target.value)}
            placeholder={field.unit}
          />
        </label>
      ))}
      <output>Resultado: {result}</output>
    </div>
  )
}

function BibliographyView() {
  return (
    <section className="view-stack">
      <div className="section-head">
        <h1>Bibliografía trazable</h1>
        <p>Fuentes estructuradas usadas por los protocolos piloto. Bibliografía local privada queda fuera de Git.</p>
      </div>
      <div className="biblio-list">
        {bibliography.map((item) => (
          <article key={item.referenceId}>
            <h2>{item.title}</h2>
            <p>{item.institution} · {item.year} · {item.type}</p>
            <p>{item.note}</p>
            <a href={item.url} target="_blank" rel="noreferrer">Abrir fuente</a>
            <small>Confianza: {item.confidence} · revisión {item.reviewedAt} · {item.pendingQuestions}</small>
          </article>
        ))}
      </div>
      <section className="meta-box">
        <h3>Relación de módulos</h3>
        <p>{modules.length} módulos catalogados. Referencias activas: {Object.keys(bibliographyById).length}.</p>
      </section>
    </section>
  )
}

function labelize(key) {
  const labels = {
    indicacion: 'Indicación',
    preparacion: 'Preparación',
    pasos: 'Pasos',
    erroresCriticos: 'Errores críticos',
    reevaluacion: 'Reevaluación',
    escalar: 'Cuándo escalar',
  }
  return labels[key] || key
}

export default App
