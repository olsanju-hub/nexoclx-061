# NexoClx 061

NexoClx 061 es una app independiente de la familia NexoClx para emergencias extrahospitalarias y traslado crítico. Su función es convertir temas clínicos en herramientas rápidas para escena, ABCDE, estabilización, códigos, prealerta, traslado, hospital útil y transferencia.

## Qué temas pertenecen a 061

Incluye un tema solo si 061 puede tomar una decisión real:

- valorar escena y seguridad;
- aplicar ABCDE;
- detectar patología tiempo-dependiente;
- iniciar soporte o tratamiento prehospitalario si procede;
- activar código o prealerta;
- decidir traslado y hospital útil;
- transferir información de forma estructurada.

No añadir temas de seguimiento crónico, escalada ambulatoria o manejo hospitalario completo si no cambian la actuación extrahospitalaria.

## Cómo construir una herramienta clínica

Cada tema debe ser una herramienta:

- pedir datos de escena, constantes y hallazgos críticos;
- devolver sospecha o nivel operativo;
- indicar estabilización y soporte;
- orientar prealerta, código, traslado u hospital útil;
- incluir tratamiento prehospitalario solo si está respaldado;
- permitir copiar resumen de prealerta/transferencia;
- dejar fuentes trazables al final.

Si un bloque solo se lee, convertirlo en checklist operativo, selector de activación, panel de traslado o detalle secundario.

## Tratamiento, dosis y escalada

No copiar tratamiento crónico de AP ni manejo hospitalario de Urg. En 061 solo incluir tratamiento prehospitalario si está respaldado por guías, consenso o dirección/protocolo publicado. Cada dosis debe tener fuente trazable. Si depende de protocolo territorial no publicado, documentar omisión en `report.json`.

## Cálculos

No mencionar cálculos o scores si no se calculan realmente y si no son útiles en escena. Si un cálculo operativo es necesario y tiene fórmula validada, crear campos, resultado, interpretación y conducta.

## Fuentes aceptables

Usar guías de sociedades científicas, organismos oficiales, consensos publicados, redes asistenciales oficiales y documentos referenciados. Fuentes preferentes: AHA/ACC, ESC/ESH, AHA/ERC, SEMES, SEC, CHEST y documentos oficiales nacionales o autonómicos.

No usar blogs, webs comerciales, apuntes, contenido generado por IA, presentaciones sin respaldo, protocolos locales no publicados ni textos sin trazabilidad.

## Estética y navegación

No rediseñar. Mantener colores, iconos, home, rutas, bottom nav, tipografía, cards, espaciado y patrón visual actual. Las interacciones deben usar los componentes existentes.

## Validación antes de commit/push

- `npm run build` pasa.
- Cada tema aporta una decisión real en 061.
- No hay contenido clínico visible sin fuente.
- No hay cálculos mencionados sin cálculo real.
- No hay textos internos, pendientes, mocks ni placeholders visibles.
- No se modifican colores, iconos, navegación ni Vercel.
- `report.json` documenta fuentes, omisiones, cálculos, riesgos y pertinencia.
