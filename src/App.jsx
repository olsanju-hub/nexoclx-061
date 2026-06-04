import { useMemo, useState } from 'react'
import { bibliography, bibliographyById, clinicalGovernanceNote } from './data/bibliography'
import { calculators } from './data/calculators'
import { medicationById, medicationStatusLabels } from './data/medications'
import { circuitById, circuits, procedures, procedureById } from './data/modules'
import { protocolMetaById } from './data/protocols'
import { protocolFlows, TAB_ORDER } from './data/protocolFlows'
import { ProtocolHeader } from './components/protocols/ProtocolHeader'
import { ProtocolList } from './components/protocols/ProtocolList'
import { ProtocolSection } from './components/protocols/ProtocolSection'

const navItems = [
  { id: 'inicio', label: 'Inicio', icon: '⌂' },
  { id: 'protocolos', label: 'Protocolos', icon: '▤' },
  { id: 'circuitos', label: 'Circuitos', icon: '⌁' },
  { id: 'mas', label: 'Más', icon: '＋' },
]

const norm = (value) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')

const statusLabels = {
  ...medicationStatusLabels,
  verified: 'verificado',
  'verified-external-protocol': 'verificado con referencia operativa externa',
  inactive: 'inactivo',
  'removed-from-active-flow': 'retirado del flujo activo',
}

const statusLabel = (status) => statusLabels[status] || status || 'sin estado'

function App() {
  const [view, setView] = useState('inicio')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Todos')
  const [protocolMode, setProtocolMode] = useState('list')
  const [selectedProtocolId, setSelectedProtocolId] = useState(protocolFlows[0].id)
  const [selectedCircuitId, setSelectedCircuitId] = useState(circuits[0].id)
  const [selectedProcedureId, setSelectedProcedureId] = useState(procedures[0].id)
  const [selectedCalculatorId, setSelectedCalculatorId] = useState(calculators[0].id)
  const [activeTab, setActiveTab] = useState(TAB_ORDER[0])
  const [returnProtocolId, setReturnProtocolId] = useState(null)

  const protocol = protocolFlows.find((item) => item.id === selectedProtocolId)
  const circuit = circuitById[selectedCircuitId]
  const procedure = procedureById[selectedProcedureId]
  const calculator = calculators.find((item) => item.id === selectedCalculatorId)

  const searchable = useMemo(() => {
    const protocolRows = protocolFlows.map((item) => ({ ...item, type: 'protocolo' }))
    const circuitRows = circuits.map((item) => ({ ...item, type: 'circuito' }))
    const procedureRows = procedures.map((item) => ({ ...item, type: 'procedimiento' }))
    const calculatorRows = calculators.map((item) => ({
      ...item,
      keywords: [
        item.id,
        item.title,
        item.category,
        ...item.relatedProtocols,
        ...(item.variables || []),
        ...(item.fields || []).map((field) => (typeof field === 'string' ? field : field.label)),
      ],
      summary: item.formula,
      type: 'cálculo',
    }))
    return [...protocolRows, ...circuitRows, ...procedureRows, ...calculatorRows]
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
      setReturnProtocolId(null)
      setProtocolMode('detail')
      setView('protocolos')
    }
    if (item.type === 'procedimiento') {
      setSelectedProcedureId(item.id)
      setReturnProtocolId(null)
      setView('procedimientos')
    }
    if (item.type === 'circuito') {
      setSelectedCircuitId(item.id)
      setReturnProtocolId(null)
      setView('circuitos')
    }
    if (item.type === 'cálculo') {
      setSelectedCalculatorId(item.id)
      setReturnProtocolId(null)
      setView('calculos')
    }
    setQuery('')
  }

  const openProtocolList = () => {
    setProtocolMode('list')
    setReturnProtocolId(null)
    setView('protocolos')
  }

  const openProtocolDetail = (id) => {
    setSelectedProtocolId(id)
    setActiveTab(TAB_ORDER[0])
    setProtocolMode('detail')
    setView('protocolos')
  }

  const isProtocolDetail = view === 'protocolos' && protocolMode === 'detail'

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => setView('inicio')} type="button">
          <img src={`${import.meta.env.BASE_URL}assets/icons/icon-192.png`} alt="" />
          <span>
            <strong>NexoClx 061</strong>
            <small>extrahospitalaria y traslado crítico</small>
          </span>
        </button>
        {view !== 'inicio' && (
          <nav className="top-nav" aria-label="Navegación principal">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={view === item.id || (item.id === 'mas' && ['procedimientos', 'calculos', 'bibliografia'].includes(view)) ? 'active' : ''}
                onClick={() => {
                  if (item.id === 'protocolos') {
                    openProtocolList()
                    return
                  }
                  setView(item.id)
                }}
              >
                <span aria-hidden="true">{item.icon}</span>
                <small>{item.label}</small>
              </button>
            ))}
          </nav>
        )}
      </header>

      <main className={`main-panel${view === 'inicio' ? ' main-panel-home' : ''}`}>
        {!isProtocolDetail && view !== 'inicio' && !['mas', 'bibliografia'].includes(view) && (
          <SearchBox query={query} setQuery={setQuery} results={results} openItem={openItem} />
        )}

        {view === 'inicio' && (
          <Home query={query} setQuery={setQuery} results={results} openItem={openItem} setView={setView} openProtocolList={openProtocolList} />
        )}

        {view === 'protocolos' && (
          <ProtocolsView
            protocol={protocol}
            category={category}
            setCategory={setCategory}
            protocolCategories={protocolCategories}
            visibleProtocols={visibleProtocols}
            protocolMode={protocolMode}
            openProtocolDetail={openProtocolDetail}
            openProtocolList={openProtocolList}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setSelectedCalculatorId={setSelectedCalculatorId}
            setSelectedCircuitId={setSelectedCircuitId}
            setSelectedProcedureId={setSelectedProcedureId}
            setReturnProtocolId={setReturnProtocolId}
            setView={setView}
          />
        )}

        {view === 'circuitos' && (
          <CircuitsView
            circuit={circuit}
            selectedCircuitId={selectedCircuitId}
            setSelectedCircuitId={setSelectedCircuitId}
            returnProtocolId={returnProtocolId}
            setReturnProtocolId={setReturnProtocolId}
            setSelectedProtocolId={setSelectedProtocolId}
            setProtocolMode={setProtocolMode}
            setActiveTab={setActiveTab}
            setView={setView}
          />
        )}

        {view === 'procedimientos' && (
          <ProceduresView
            procedure={procedure}
            selectedProcedureId={selectedProcedureId}
            setSelectedProcedureId={setSelectedProcedureId}
            setSelectedCircuitId={setSelectedCircuitId}
            returnProtocolId={returnProtocolId}
            setReturnProtocolId={setReturnProtocolId}
            setSelectedProtocolId={setSelectedProtocolId}
            setProtocolMode={setProtocolMode}
            setActiveTab={setActiveTab}
            setView={setView}
          />
        )}

        {view === 'calculos' && (
          <CalculatorsView
            calculator={calculator}
            selectedCalculatorId={selectedCalculatorId}
            setSelectedCalculatorId={setSelectedCalculatorId}
            setSelectedCircuitId={setSelectedCircuitId}
            returnProtocolId={returnProtocolId}
            setReturnProtocolId={setReturnProtocolId}
            setSelectedProtocolId={setSelectedProtocolId}
            setProtocolMode={setProtocolMode}
            setActiveTab={setActiveTab}
            setView={setView}
          />
        )}

        {view === 'bibliografia' && <BibliographyView />}
        {view === 'mas' && <MoreView setView={setView} />}
      </main>

      {view !== 'inicio' ? (
        <nav className="bottom-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={view === item.id || (item.id === 'mas' && ['procedimientos', 'calculos', 'bibliografia'].includes(view)) ? 'active' : ''}
              onClick={() => {
                if (item.id === 'protocolos') {
                  openProtocolList()
                  return
                }
                setView(item.id)
              }}
            >
              <span aria-hidden="true">{item.icon}</span>
              <small>{item.label}</small>
            </button>
          ))}
        </nav>
      ) : null}
    </div>
  )
}

function SearchBox({ query, setQuery, results, openItem }) {
  return (
    <section className="search-wrap" aria-label="Búsqueda clínica">
      <label htmlFor="search">Buscar protocolo, síntoma, cálculo...</label>
      <input
        id="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="código infarto, ictus, shock, traslado..."
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

function Home({ query, setQuery, results, openItem, setView, openProtocolList }) {
  const sections = [
    { id: 'protocolos', title: 'Protocolos', icon: '▤', note: 'Listado completo de protocolos extrahospitalarios.' },
    { id: 'circuitos', title: 'Circuitos', icon: '⌁', note: 'Códigos y circuitos de coordinación 061.' },
    { id: 'procedimientos', title: 'Procedimientos', icon: '□', note: 'Procedimientos operativos y apoyo a circuitos.' },
    { id: 'calculos', title: 'Cálculos', icon: '◎', note: 'Herramientas de cálculo vinculadas a decisiones clínicas.' },
    { id: 'bibliografia', title: 'Fuentes', icon: '§', note: 'Bibliografía trazable y fuentes estructuradas.' },
  ]

  return (
    <section className="view-stack">
      <div className="home-intro-line">
        <p>Extrahospitalaria y traslado crítico.</p>
      </div>

      <SearchBox query={query} setQuery={setQuery} results={results} openItem={openItem} />
      <div className="home-section-map" aria-label="Secciones disponibles">
        {sections.map((item) => (
          <button key={item.id} type="button" onClick={() => (item.id === 'protocolos' ? openProtocolList() : setView(item.id))}>
            <span className="home-section-icon" aria-hidden="true">{item.icon}</span>
            <strong>{item.title}</strong>
            <small>{item.note}</small>
            <span className="home-section-chevron" aria-hidden="true">›</span>
          </button>
        ))}
      </div>
    </section>
  )
}

function ClinicalList({ title, items, onOpen }) {
  return <ProtocolList title={title} items={items} onOpen={onOpen} />
}

function ProtocolsView({
  protocol,
  category,
  setCategory,
  protocolCategories,
  visibleProtocols,
  protocolMode,
  openProtocolDetail,
  openProtocolList,
  activeTab,
  setActiveTab,
  setSelectedCalculatorId,
  setSelectedCircuitId,
  setSelectedProcedureId,
  setReturnProtocolId,
  setView,
}) {
  const meta = protocolMetaById[protocol.id]

  if (protocolMode === 'list') {
    return (
      <section className="view-stack">
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
          onOpen={(item) => openProtocolDetail(item.id)}
        />
      </section>
    )
  }

  return (
    <section className="protocol-detail-view">
      <article className="clinical-card">
        <button className="return-link" type="button" onClick={openProtocolList}>
          ← Protocolos
        </button>
        <ProtocolHeader protocol={protocol} />

        <div className="tabs" role="tablist">
          {TAB_ORDER.map((tab) => (
            <button key={tab} type="button" className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </div>

        <ProtocolSection key={activeTab} title={activeTab} items={protocol.tabs[activeTab]} />

        <Connections
          protocol={protocol}
          meta={meta}
          setSelectedCalculatorId={setSelectedCalculatorId}
          setSelectedCircuitId={setSelectedCircuitId}
          setSelectedProcedureId={setSelectedProcedureId}
          setReturnProtocolId={setReturnProtocolId}
          setView={setView}
        />
      </article>
    </section>
  )
}

function Connections({
  protocol,
  meta,
  setSelectedCalculatorId,
  setSelectedCircuitId,
  setSelectedProcedureId,
  setReturnProtocolId,
  setView,
}) {
  const activeMedicationIds = protocol.medications.filter((id) =>
    ['verified', 'verified-external-protocol'].includes(medicationById[id]?.status),
  )
  const removedMedicationNames = protocol.medications
    .map((id) => medicationById[id])
    .filter((drug) => drug && !['verified', 'verified-external-protocol'].includes(drug.status))
    .map((drug) => drug.genericName)

  return (
    <div className="connections">
      <details className="secondary-panel">
        <summary>Apoyos operativos</summary>
        <Connector
          title="Códigos y circuitos 061"
          items={protocol.circuits || []}
          map={circuitById}
          onOpen={(id) => {
            setSelectedCircuitId(id)
            setReturnProtocolId(protocol.id)
            setView('circuitos')
          }}
        />
        <Connector
          title="Cálculos"
          items={protocol.calculators}
          onOpen={(id) => {
            setSelectedCalculatorId(id)
            setReturnProtocolId(protocol.id)
            setView('calculos')
          }}
        />
        <Connector
          title="Procedimientos"
          items={protocol.procedures}
          map={procedureById}
          onOpen={(id) => {
            setSelectedProcedureId(id)
            setReturnProtocolId(protocol.id)
            setView('procedimientos')
          }}
        />
        <Connector title="Bibliografía activa" items={protocol.bibliography} map={bibliographyById} />
      </details>
      <section className="treatment-block">
        <h3>Tratamientos farmacológicos verificados</h3>
        <div className="drug-grid">
          {activeMedicationIds.map((id) => {
            const drug = medicationById[id]
            const useInProtocol = drug.protocolIndications?.[protocol.id] || drug.indications.join(', ')
            const protocolDosing = drug.protocolDosing?.[protocol.id] || {}
            return (
              <details key={id}>
                <summary>{drug.genericName}</summary>
                <div className="drug-core">
                  <p className="drug-use">{useInProtocol}</p>
                  <dl>
                    <div><dt>Dosis</dt><dd>{protocolDosing.dose || drug.dose}</dd></div>
                    <div><dt>Vía</dt><dd>{protocolDosing.route || drug.route}</dd></div>
                    <div><dt>Repetir</dt><dd>{protocolDosing.frequency || drug.frequency}</dd></div>
                    <div><dt>Máx.</dt><dd>{protocolDosing.maximum || drug.maximum}</dd></div>
                    <div><dt>Evitar si</dt><dd>{drug.contraindications}</dd></div>
                  </dl>
                </div>
                <details className="safety-details">
                  <summary>Seguridad y fuente</summary>
                  <p><strong>Precauciones:</strong> {drug.precautions}</p>
                  <p><strong>Fuente:</strong> {drug.source.join(', ')}</p>
                  {drug.operationalNote && <p><strong>Nota:</strong> {drug.operationalNote}</p>}
                  <p><strong>CIMA/AEMPS:</strong> {drug.cimaUrl}</p>
                </details>
              </details>
            )
          })}
        </div>
        {removedMedicationNames.length > 0 && (
          <p className="local-note">
            Tratamientos no mostrados como pauta activa por falta de fármaco, dosis o protocolo operativo suficiente en V1: {removedMedicationNames.join(', ')}.
          </p>
        )}
        <p className="local-note">
          Pautas desde CIMA/AEMPS, guías oficiales o protocolos operativos oficiales; adaptar a dotación, competencias y protocolo local.
        </p>
      </section>
      <details className="secondary-panel">
        <summary>Revisión y notas</summary>
        <p>{meta.verificationStatus}</p>
        <small>Revisión interna: {meta.reviewedAt} · confianza: {meta.confidence}</small>
      </details>
    </div>
  )
}

function Connector({ title, items, map, onOpen }) {
  return (
    <section>
      <h3>{title}</h3>
      <div className="chips">
        {items.map((id) => {
          const label = map?.[id]?.title || calculators.find((item) => item.id === id)?.title || id
          return onOpen ? (
            <button key={id} type="button" onClick={() => onOpen(id)}>
              {label}
            </button>
          ) : (
            <span key={id}>{label}</span>
          )
        })}
      </div>
    </section>
  )
}

function ReturnToProtocol({
  returnProtocolId,
  setReturnProtocolId,
  setSelectedProtocolId,
  setProtocolMode,
  setActiveTab,
  setView,
}) {
  if (!returnProtocolId) return null
  const protocol = protocolFlows.find((item) => item.id === returnProtocolId)
  if (!protocol) return null

  return (
    <button
      className="return-link"
      type="button"
      onClick={() => {
        setSelectedProtocolId(returnProtocolId)
        setActiveTab(TAB_ORDER[0])
        setProtocolMode('detail')
        setReturnProtocolId(null)
        setView('protocolos')
      }}
    >
      Volver a {protocol.title}
    </button>
  )
}

function CircuitsView({
  circuit,
  selectedCircuitId,
  setSelectedCircuitId,
  returnProtocolId,
  setReturnProtocolId,
  setSelectedProtocolId,
  setProtocolMode,
  setActiveTab,
  setView,
}) {
  return (
    <section className="split-view">
      <aside className="side-list">
        <ClinicalList
          title="Códigos y circuitos 061"
          items={circuits}
          onOpen={(item) => setSelectedCircuitId(item.id)}
        />
      </aside>
      <article className="clinical-card">
        <ReturnToProtocol
          returnProtocolId={returnProtocolId}
          setReturnProtocolId={setReturnProtocolId}
          setSelectedProtocolId={setSelectedProtocolId}
          setProtocolMode={setProtocolMode}
          setActiveTab={setActiveTab}
          setView={setView}
        />
        <div className="protocol-title">
          <span className="tag">{circuit.category}</span>
          <h1>{circuit.title}</h1>
          <p>{circuit.summary}</p>
        </div>
        <div className="procedure-sections">
          {Object.entries(circuit.sections).map(([key, values]) => (
            <section key={key}>
              <h2>{labelize(key)}</h2>
              <ul className="action-list">
                {values.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          ))}
        </div>
        <small>Seleccionado: {selectedCircuitId} · Fuente: {circuit.source.join(', ')}</small>
      </article>
    </section>
  )
}

function ProceduresView({
  procedure,
  selectedProcedureId,
  setSelectedProcedureId,
  setSelectedCircuitId,
  returnProtocolId,
  setReturnProtocolId,
  setSelectedProtocolId,
  setProtocolMode,
  setActiveTab,
  setView,
}) {
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
        <ReturnToProtocol
          returnProtocolId={returnProtocolId}
          setReturnProtocolId={setReturnProtocolId}
          setSelectedProtocolId={setSelectedProtocolId}
          setProtocolMode={setProtocolMode}
          setActiveTab={setActiveTab}
          setView={setView}
        />
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
        <RelatedCircuits
          title="Circuitos relacionados"
          items={circuits.filter((item) => item.relatedProcedures.includes(selectedProcedureId))}
          onOpen={(id) => {
            setSelectedCircuitId(id)
            setView('circuitos')
          }}
        />
        <small>Seleccionado: {selectedProcedureId} · Fuente: {procedure.source.join(', ')}</small>
      </article>
    </section>
  )
}

function CalculatorsView({
  calculator,
  selectedCalculatorId,
  setSelectedCalculatorId,
  setSelectedCircuitId,
  returnProtocolId,
  setReturnProtocolId,
  setSelectedProtocolId,
  setProtocolMode,
  setActiveTab,
  setView,
}) {
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
        <ReturnToProtocol
          returnProtocolId={returnProtocolId}
          setReturnProtocolId={setReturnProtocolId}
          setSelectedProtocolId={setSelectedProtocolId}
          setProtocolMode={setProtocolMode}
          setActiveTab={setActiveTab}
          setView={setView}
        />
        <div className="protocol-title">
          <span className="tag">{calculator.category}</span>
          <h1>{calculator.title}</h1>
          <p>{calculator.formula}</p>
        </div>
        <CalculatorRunner calculator={calculator} key={selectedCalculatorId} />
        <section className="meta-box">
          <h3>Uso clínico</h3>
          <p>Estado: {statusLabel(calculator.status)}</p>
          <p>Protocolos relacionados: {calculator.relatedProtocols.join(', ')}</p>
          <p>Limitaciones: {calculator.limitations}</p>
          {calculator.warnings && <p>Advertencia: {calculator.warnings}</p>}
          <small>Fuente: {calculator.source.join(', ')} · revisión {calculator.reviewedAt}</small>
        </section>
        <RelatedCircuits
          title="Circuitos relacionados"
          items={circuits.filter((item) => item.relatedCalculators.includes(selectedCalculatorId))}
          onOpen={(id) => {
            setSelectedCircuitId(id)
            setView('circuitos')
          }}
        />
      </article>
    </section>
  )
}

function RelatedCircuits({ title, items, onOpen }) {
  if (!items.length) return null
  return (
    <section className="meta-box">
      <h3>{title}</h3>
      <div className="chips">
        {items.map((item) => (
          <button key={item.id} type="button" onClick={() => onOpen(item.id)}>
            {item.title}
          </button>
        ))}
      </div>
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
        <output key={total}>Resultado: {total}</output>
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
        <output key={values.killip || 'I'}>Resultado: {values.killip || 'I'}</output>
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
      <output key={result}>Resultado: {result}</output>
    </div>
  )
}

function MoreView({ setView }) {
  const items = [
    { id: 'procedimientos', title: 'Procedimientos', note: 'Procedimientos operativos y apoyo a circuitos.' },
    { id: 'calculos', title: 'Cálculos', note: 'Herramientas de cálculo vinculadas a decisiones clínicas.' },
    { id: 'bibliografia', title: 'Fuentes', note: 'Bibliografía trazable y fuentes estructuradas.' },
  ]

  return (
    <section className="view-stack">
      <div className="section-head">
        <h1>Más</h1>
        <p>Accesos secundarios y trazabilidad.</p>
      </div>
      <div className="more-list">
        {items.map((item) => (
          <button key={item.id} type="button" onClick={() => setView(item.id)}>
            <strong>{item.title}</strong>
            <small>{item.note}</small>
            <span aria-hidden="true">›</span>
          </button>
        ))}
      </div>
    </section>
  )
}

function BibliographyView() {
  return (
    <section className="view-stack">
      <div className="section-head">
        <h1>Bibliografía trazable</h1>
        <p>Fuentes estructuradas usadas por los protocolos piloto. {clinicalGovernanceNote}</p>
      </div>
      <div className="biblio-list">
        {bibliography.filter((item) => item.status !== 'inactive').map((item) => (
          <details key={item.referenceId} className="biblio-item">
            <summary>{item.title}</summary>
            <p>{item.institution} · {item.year} · {item.type}</p>
            <p>{item.note}</p>
            <p>Uso: {[...(item.relatedProtocols || []), ...(item.relatedProcedures || [])].join(', ')}</p>
            <a href={item.url} target="_blank" rel="noreferrer">Abrir fuente</a>
            <small>Confianza: {item.confidence} · revisión {item.reviewedAt} · {item.pendingQuestions}</small>
          </details>
        ))}
      </div>
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
    cuandoActivarlo: 'Cuándo activarlo',
    datosMinimos: 'Qué datos mínimos recoger',
    comunicar: 'Qué comunicar',
    noRetrasar: 'Qué no debe retrasar el traslado',
    destino: 'Destino útil según red local',
    limitaciones: 'Limitaciones y dependencia local',
    condicionesMinimas: 'Condiciones mínimas si se traslada',
  }
  return labels[key] || key
}

export default App
