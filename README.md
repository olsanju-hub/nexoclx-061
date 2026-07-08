# NexoClx 061

NexoClx 061 es una app independiente de la familia NexoClx para emergencias extrahospitalarias y traslado crítico. Su función es convertir temas clínicos en herramientas rápidas para escena, ABCDE, estabilización, códigos, prealerta, traslado, hospital útil y transferencia.

La familia NexoClx está formada por AP, Urg, 061 y Ped. No se deben fusionar apps ni crear un selector común.

## Modelo de conducta

Cada tema debe responder: "estoy ante esta patología en este paciente, ¿qué hago ahora?". La secuencia de trabajo es patología -> escena/ABCDE -> gravedad -> soporte -> código/prealerta -> tratamiento prehospitalario si procede -> reevaluación -> traslado/hospital útil -> transferencia -> fuentes documentadas internamente.

La interfaz debe priorizar actuación, destino y transferencia. No debe mostrar capítulos, pasos de lectura ni bibliografía como parte del flujo clínico.

El patrón técnico base es `src/lib/clinicalToolEngine.js` + `ClinicalActionTool`: cada tema debe expresarse como `assessment.fields`, `assessment.calculations`, `assessment.interpretations` y `assessment.outcomes`.

## Identidad

- Contexto: emergencias extrahospitalarias y traslado crítico.
- Enfoque: escena, ABCDE, estabilización, soporte, códigos, coordinación, prealerta, traslado, hospital útil y transferencia.
- Mantener colores, iconos, rutas, home, bottom nav y estética aprobada.

## Pertinencia de temas

Añadir un tema solo si 061 puede tomar una decisión real:

- seguridad de escena;
- ABCDE;
- detección de patología tiempo-dependiente;
- soporte o tratamiento prehospitalario si procede;
- activación de código o prealerta;
- traslado y hospital útil;
- transferencia estructurada.

No añadir seguimiento crónico, escalada ambulatoria, manejo hospitalario completo ni temas pediátricos si no se enfocan a actuación extrahospitalaria.

## Cómo decidir si aplica

Antes de crear un tema, responder:

- ¿061 cambia actuación, destino o prealerta?
- ¿Qué datos de escena, constantes o hallazgos debe introducir el usuario?
- ¿Qué salida devuelve: estabilización, código, traslado u hospital útil?
- ¿Hay fuente para soporte, tratamiento, activación o transferencia?

Si no hay utilidad operativa, no se añade y se documenta en el reporte.

## Herramienta clínica

Cada tema debe ser una herramienta:

- datos de escena, constantes y hallazgos críticos;
- checklist ABCDE si procede;
- sospecha o nivel operativo;
- estabilización y soporte;
- código, prealerta, traslado u hospital útil;
- reevaluación y transferencia;
- resumen copiable de prealerta/transferencia;
- fuentes documentadas en reportes o README, no como bloque visible de la herramienta.

Si un bloque solo se lee, convertirlo en checklist operativo, selector de activación, panel de traslado o detalle secundario.

## Tratamiento

No copiar tratamiento crónico de AP ni manejo hospitalario completo de Urg. En 061 solo incluir tratamiento prehospitalario si está respaldado por guía, consenso, red asistencial oficial o dirección/protocolo publicado. Cada dosis debe tener fuente trazable.

Si depende de protocolo territorial no publicado, documentar omisión en `report.json`.

## Cálculos

No mencionar cálculos o scores si no se calculan realmente y si no son útiles en escena. Si un cálculo operativo es necesario y tiene fórmula validada, crear campos, resultado, interpretación y conducta.

## Fuentes internas

Fuentes aceptables: guías de sociedades científicas, organismos oficiales, consensos publicados, redes asistenciales oficiales y documentos referenciados.

Fuentes preferentes: AHA/ACC, ESC/ESH, AHA/ERC, SEMES, SEC, CHEST y documentos oficiales nacionales o autonómicos.

No usar blogs, webs comerciales, apuntes, contenido generado por IA, presentaciones sin respaldo, protocolos locales no publicados ni textos sin trazabilidad.

Las fuentes sostienen la herramienta por detrás. No añadir "Fuentes" o "Bibliografía" como card, paso o bloque visible dentro de cada herramienta clínica.

## Activación y traslado

Toda herramienta 061 debe indicar, si procede:

- estabilización inicial;
- código o prealerta;
- hospital útil;
- prioridad de traslado;
- información para transferencia.

## Estética

No rediseñar. Mantener patrón visual family-discovery-aesthetic, tipografía, cards, espaciados, bordes, sombras, navegación, home, bottom nav, rutas, iconos y colores.

## Reglas permanentes

- No poner temas por poner.
- No copiar contenido de AP, Urg o Ped sin adaptar al contexto 061.
- No mostrar textos internos, pendientes, mocks ni placeholders.
- No mostrar contenido clínico sin fuente.
- No mencionar cálculos si no se calculan.
- No mostrar bibliografía como ítem del flujo de la herramienta.
- No tocar Vercel.

## Validación antes de commit/push

- `npm run build` pasa.
- El tema aporta una decisión real en 061.
- No hay contenido clínico visible sin fuente.
- No hay cálculos mencionados sin cálculo real.
- Tratamiento/dosis/escalones tienen fuente trazable.
- No se modifican colores, iconos, navegación ni estética global.
- No se mezclan apps.
- `report.json` documenta fuentes, omisiones, cálculos, riesgos y pertinencia.
