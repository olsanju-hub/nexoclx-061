# Auditoria clinica V1.0.2

Fecha: 2026-05-30

## Alcance

Auditoria clinica de seguridad sobre los 6 protocolos activos de NexoClx 061:

1. SCA / dolor toracico critico
2. Ictus agudo / codigo ictus
3. Insuficiencia respiratoria aguda / disnea grave
4. Shock / sepsis / paciente inestable
5. Parada cardiorrespiratoria / SVA adulto
6. Trauma grave / politrauma

Archivos revisados antes de editar: `src/data/protocolFlows.js`, `src/data/protocols.js`, `src/data/calculators.js`, `src/data/medications.js`, `src/data/modules.js`, `src/data/bibliography.js`, `README.md` y `CHANGELOG.md`.

Objetivo: corregir errores clinicos reales, omisiones relevantes o conexiones peligrosas manteniendo formato rapido extrahospitalario.

## Fuentes consultadas

- ESC. 2023 ESC Guidelines for the management of acute coronary syndromes: https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/acute-coronary-syndromes-acs-guidelines/
- AHA/ASA. 2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke: https://professional.heart.org/en/science-news/2026-guideline-for-the-early-management-of-patients-with-acute-ischemic-stroke
- ERC. European Resuscitation Council Guidelines 2025: Adult Advanced Life Support: https://www.erc.edu/media/vedoa2ga/gl2025-05-als-e.pdf
- AHA. 2025 Adult Advanced Life Support: https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-advanced-life-support
- GINA. 2025 Global Strategy for Asthma Management and Prevention: https://ginasthma.org/2025-gina-strategy-report/
- GOLD. 2026 Global Strategy for Prevention, Diagnosis and Management of COPD: https://goldcopd.org/2026-gold-report/
- ESC. 2021 Guidelines for acute and chronic heart failure: https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Acute-and-Chronic-Heart-Failure
- Surviving Sepsis Campaign 2021: https://www.sccm.org/Clinical-Resources/Guidelines/Guidelines/Surviving-Sepsis-Guidelines-2021
- SERGAS. Actuacion ante paciente con sepsis confirmada: https://www.sergas.es/Asistencia-sanitaria/sepse-actuacion-paciente-sepse-confirmada
- NICE NG39. Major trauma: assessment and initial management: https://www.nice.org.uk/guidance/ng39
- Xunta de Galicia / Galicia-061. Guia farmacologica 061-2018: https://libraria.xunta.gal/es/guia-farmacologica-fundacion-publica-urxencias-sanitarias-de-galicia-061-compendio-de-medicamentos
- INGESA / 061 Ceuta. Manual de Emergencias 061 de Ceuta: https://ingesa.sanidad.gob.es/ingesa/Recursos-documentales/Catalogo-publicaciones-INGESA/Manual-de-Emergencias-061-de-Ceuta
- CIMA/AEMPS fichas tecnicas enlazadas en `src/data/bibliography.js` para AAS, nitroglicerina, morfina, ticagrelor, glucosa hipertonica, midazolam, salbutamol, ipratropio, metilprednisolona, adrenalina, amiodarona, furosemida y cloruro sodico 0,9%.

## Inventario clinico previo

| Protocolo | Pestañas | Medicamentos activos | Herramientas | Bibliografia asociada | Riesgos detectados |
| --- | --- | --- | --- | --- | --- |
| SCA | Sospecha, Valoracion, Decision, Tratamiento, Traslado | Oxigeno, AAS, nitroglicerina, morfina, ticagrelor | Killip, SBAR, traslado critico, ABCDE, oxigenoterapia | ESC ACS 2023, Galicia-061, CIMA | Ya incluia diseccion antes de AAS/nitratos, oxigeno no rutinario y ticagrelor dependiente de circuito. Sin error activo detectado. |
| Ictus | Sospecha, Valoracion, Decision, Tratamiento, Traslado | Oxigeno, glucosa hipertonica, midazolam | GCS, BEFAST/Cincinnati, SBAR, traslado critico, ABCDE | AHA/ASA 2026, Galicia-061, CIMA | Ya incluia ultima vez visto bien, glucemia, mimetizadores y no antiagregar antes de neuroimagen. Sin error activo detectado. |
| Insuficiencia respiratoria | Sospecha, Valoracion, Decision, Tratamiento, Traslado | Oxigeno, salbutamol, ipratropio, metilprednisolona, adrenalina IM, nitroglicerina, furosemida | ABCDE, Shock Index, SBAR, traslado, oxigenoterapia | GINA, GOLD, ESC HF, Galicia-061, CIMA | Pautas condicionadas por patron correcto; VMNI limitada a recurso/competencia. Sin error activo detectado. |
| Shock/sepsis | Sospecha, Valoracion, Decision, Tratamiento, Traslado | Oxigeno, cristaloide, adrenalina IM si anafilaxia | Shock Index, ABCDE, bolo, SBAR, traslado, fluidoterapia | SSC, SERGAS, Galicia-061, CIMA | Ya evitaba bolo universal y retiraba vasopresor/antibiotico como rutina. Sin error activo detectado. |
| RCP/SVA adulto | Sospecha, Valoracion, Decision, Tratamiento, Traslado | Oxigeno, adrenalina, amiodarona, glucosa si hipoglucemia | GCS, Shock Index, ABCDE, SBAR, traslado, oxigenoterapia, fluidoterapia | ERC/AHA 2025, CIMA | Riesgo de conexion: el id `adrenaline-im` mostraba una ficha con pauta IM junto a dosificacion IV/IO de SVA. |
| Trauma grave | Sospecha, Valoracion, Decision, Tratamiento, Traslado | Oxigeno, cristaloide, morfina | GCS, Shock Index, ABCDE-check, ABCDE, SBAR, traslado, oxigenoterapia, fluidoterapia | INGESA 061, Galicia-061, CIMA | Error clinico: aparecia ABCDE traumatico simple y enlazaba herramienta ABCDE general; en trauma grave debe priorizar hemorragia catastrofica/exanguinante antes de A. |

## Matriz por protocolo

### SCA / dolor toracico critico

- Revisado contra ESC ACS 2023, Galicia-061 y CIMA/AEMPS.
- Hallazgos: el flujo ya diferencia sospecha, valoracion, decision, tratamiento y traslado en entorno 061. Incluye ECG precoz, no retrasar traslado por analitica, prealerta, centro coordinador, diseccion aortica antes de AAS/nitratos, oxigeno solo si hipoxemia/IR/shock, morfina titulada y ticagrelor como dependiente de circuito.
- Cambios hechos: fecha de revision a 2026-05-30 en metadatos.
- Cambios no hechos: no se anadieron criterios territoriales de hemodinamica ni antiagregacion universal porque dependen de codigo infarto local.

### Ictus agudo / codigo ictus

- Revisado contra AHA/ASA 2026 y CIMA/Galicia-061 para glucosa y midazolam.
- Hallazgos: mantiene ultima vez visto bien, glucemia obligatoria, mimetizadores, BEFAST/Cincinnati como cribado, no antiagregar/anticoagular antes de neuroimagen, anticoagulacion previa y destino segun red local.
- Cambios hechos: fecha de revision a 2026-05-30 en metadatos.
- Cambios no hechos: no se fijaron ventanas ni criterios de trombolisis/trombectomia porque la app no debe inventar bypass o red local.

### Insuficiencia respiratoria aguda / disnea grave

- Revisado contra GINA 2025, GOLD 2026, ESC HF 2021, Galicia-061 y CIMA/AEMPS.
- Hallazgos: el protocolo diferencia broncoespasmo, EAP, anafilaxia, EPOC/asma, TEP probable, neumonia/sepsis y causa no clara. Oxigeno tiene objetivos, broncodilatadores/corticoide quedan ligados a patron obstructivo, adrenalina IM a anafilaxia y nitratos/furosemida a EAP/congestion con seguridad hemodinamica.
- Cambios hechos: fecha de revision a 2026-05-30 en metadatos.
- Cambios no hechos: no se ampliaron algoritmos de TEP, neumotorax o cuerpo extrano para no anadir protocolos nuevos; se mantienen como diagnosticos alternativos que cambian conducta.

### Shock / sepsis / paciente inestable

- Revisado contra SSC 2021, SERGAS sepsis, Galicia-061 y CIMA/AEMPS.
- Hallazgos: clasifica shock distributivo/sepsis, hipovolemico/hemorragico, cardiogenico/EAP, obstructivo y anafilaxia. Evita cristaloide automatico en todo shock, exige reevaluacion, frena en cardiogenico/EAP/sobrecarga y deja vasopresor/antibiotico prehospitalario solo bajo protocolo operativo.
- Cambios hechos: fecha de revision a 2026-05-30 en metadatos.
- Cambios no hechos: no se activo antibiotico prehospitalario ni vasopresor porque faltan farmaco, concentracion, alergias, dotacion, competencia y protocolo local verificable.

### Parada cardiorrespiratoria / SVA adulto

- Revisado contra ERC 2025, AHA 2025 y CIMA/AEMPS.
- Hallazgos: reconocimiento de PCR, gasping, seguridad de escena, ritmos desfibrilables/no desfibrilables, desfibrilacion precoz, adrenalina 1 mg IV/IO cada 3-5 min, amiodarona tras descargas, 4H/4T, glucosa solo si hipoglucemia documentada, traslado en parada segun coordinacion y pos-ROSC con ECG/monitorizacion/prealerta.
- Cambios hechos: se separo la ficha `adrenaline-iv-io-sva` de `adrenaline-im`; SVA ya no enlaza una ficha nombrada como IM. Se reforzo que GCS y Shock Index son pos-ROSC/inestabilidad con pulso, no durante parada.
- Cambios no hechos: no se anadieron criterios de finalizar/no iniciar RCP, ECPR ni traslado en parada porque dependen de protocolo local/centro coordinador.

### Trauma grave / politrauma

- Revisado contra NICE NG39, INGESA/061 Ceuta, Galicia-061 y CIMA/AEMPS.
- Hallazgos: error clinico real en valoracion primaria y herramientas: uso de ABCDE simple en trauma grave. NICE NG39 documenta encuesta primaria con hemorragia catastrofica antes de A y prealerta estructurada.
- Cambios hechos: Trauma pasa a `XABCDE traumatico`; se crea herramienta y calculo/checklist especificos; se retira el enlace de Trauma al ABCDE general; se actualiza prealerta y reevaluacion; fluidoterapia se matiza como restrictiva si sangrado activo no controlado y con excepcion/objetivo local en TCE grave.
- Cambios no hechos: no se fijo mapa territorial, codigo trauma, hemoderivados ni torniquete como universal; quedan sujetos a red local, dotacion y centro coordinador.

## Correccion especifica Trauma

- Antes: `ABCDE traumatico` en texto y enlace a `ABCDE extrahospitalario` / `abcde-check`.
- Ahora: `XABCDE traumatico`.
- X: hemorragia catastrófica/exanguinante y control antes de A.
- A: via aerea con control cervical.
- B: ventilacion/torax.
- C: circulacion, shock y hemorragia no catastrofica.
- D: GCS, pupilas y neurologico.
- E: exposicion y prevencion de hipotermia.
- Fuente principal: NICE NG39 Major trauma, que usa `<C>ABCDE` y registra hemorragia catastrofica antes de airway.
- Impacto: nueva herramienta `xabcde-trauma`, nuevo checklist `xabcde-trauma-check`, bibliografia `nice-major-trauma-ng39`, Trauma enlaza XABCDE en lugar de ABCDE general.

## Medicamentos revisados

| Medicamento | Resultado |
| --- | --- |
| Oxigeno | Mantener. Indicacion condicionada por hipoxemia/IR/shock/situacion critica y objetivos de saturacion segun contexto. |
| Acido acetilsalicilico | Mantener en SCA si no hay contraindicaciones ni sospecha de diseccion. |
| Nitroglicerina | Mantener en SCA/EAP solo con seguridad hemodinamica; contraindicaciones relevantes presentes. |
| Morfina | Mantener titulada, no automatica, con monitorizacion y analgesia segura. |
| Ticagrelor | Mantener solo si circuito de codigo infarto/protocolo local lo contempla. |
| Glucosa hipertonica | Mantener solo con hipoglucemia documentada. |
| Midazolam | Mantener para convulsion con soporte ventilatorio preparado. |
| Salbutamol | Mantener solo en broncoespasmo dominante. |
| Bromuro de ipratropio | Mantener en patron obstructivo compatible. |
| Metilprednisolona | Mantener en asma/EPOC; no sustituye adrenalina en anafilaxia. |
| Adrenalina IM | Mantener solo en anafilaxia con compromiso respiratorio/circulatorio; retirada de SVA. |
| Adrenalina IV/IO en SVA | Nueva ficha separada para PCR adulta: 1 mg IV/IO cada 3-5 min segun algoritmo ERC/AHA. |
| Amiodarona | Mantener en FV/TV sin pulso persistente/recurrente tras descargas segun ERC/AHA. |
| Furosemida | Mantener solo en EAP/congestion dominante sin shock/hipovolemia. |
| Cristaloide isotonico | Mantener en sepsis/shock con reevaluacion; en trauma se matiza estrategia restrictiva si sangrado activo no controlado. |

## Herramientas revisadas

| Herramienta | Resultado |
| --- | --- |
| ABCDE extrahospitalario | Mantener para no trauma; retirada de Trauma grave. |
| XABCDE traumatico | Creada y enlazada solo a Trauma grave/politrauma. |
| SBAR / prealerta | Mantener; Trauma actualiza datos con XABCDE. |
| Checklist traslado critico | Mantener; no debe retrasar traslado critico. |
| Oxigenoterapia | Mantener; objetivos y escalada condicionados. |
| Fluidoterapia inicial | Mantener; se refuerza que no es indicacion automatica. |
| Glasgow Coma Scale | Mantener en ictus, trauma y pos-ROSC; no durante parada. |
| Shock Index | Mantener en inestabilidad con pulso/pos-ROSC; no durante parada. |
| Killip | Mantener solo en SCA como gravedad clinica. |
| BEFAST / Cincinnati | Mantener como cribado operativo, no diagnostico definitivo. |
| Bolo cristaloide por peso | Mantener en shock/sepsis como calculo aritmetico, no indicacion automatica. |

## Limitaciones

- Falta protocolo local 061 del territorio de uso final.
- Destino, hospital util, codigo infarto, codigo ictus, codigo trauma, UCI, hemodinamica, trombectomia y traslado en parada dependen de centro coordinador/red local.
- Dotacion, competencias, presentaciones exactas, torniquete, hemoderivados, vasopresores y antibiotico prehospitalario deben validarse localmente.
- INGESA/061 Ceuta es institucional y operativo, pero antiguo; en Trauma se usa como referencia complementaria y no como fuente principal para XABCDE.

## Recomendaciones V1.1

- Incorporar protocolo local 061 real si se obtiene fuente oficial trazable.
- Validar circuitos territoriales de codigo infarto, codigo ictus, codigo trauma, UCI y traslado en parada.
- Confirmar dotacion y presentaciones de farmacos en el recurso.
- Revisar torniquete, hemoderivados, acido tranexamico, vasopresores y antibiotico prehospitalario solo si existe protocolo operativo oficial con dosis y competencias.
- Probar en dispositivo movil real con profesionales del entorno 061.
