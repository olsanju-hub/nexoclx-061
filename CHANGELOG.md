# Changelog

## [1.1.0] - 2026-05-30

### Añadido

- Sección “Códigos y circuitos 061”.
- Código infarto.
- Código ictus.
- Código trauma.
- Traslado en parada.
- Enlaces desde protocolos, procedimientos y cálculos relacionados hacia los circuitos operativos.
- Búsqueda ampliada para circuitos.
- Bibliografía V1.1.0 documentada antes del cierre de implementación: ESC ACS 2023, AHA/ASA 2019/2026, NICE NG39, ERC/AHA ALS 2025, IB-Salut/SAMU061, CAIB actividad SAMU061 2024, Estrategia balear de ictus, BOE Decreto-ley 1/2024, CAIB Código Politrauma y CIMA/AEMPS para medicación ya existente.
- Service worker actualizado a `nexoclx-061-shell-v8`.

### Sin cambios

- No se añadieron patologías nuevas.
- No se modificaron medicamentos.
- No se modificaron dosis.
- No se cambiaron colores.
- No se modificaron los 6 protocolos base salvo enlaces a circuitos.
- No se movieron tags V1.0.0, V1.0.1 ni V1.0.2.

### Limitaciones

- Los destinos concretos dependen del centro coordinador y red local.
- Cada circuito declara: “Destino y activación definitiva según centro coordinador, red local y protocolo vigente.”
- Los criterios territoriales de activación, hemodinámica, unidad de ictus, trombectomía, código trauma, ECPR/hemodinámica y traslado especializado quedan pendientes de protocolo local 061.
- Pendiente validación con protocolo local 061.

## [1.0.2] - 2026-05-30

### Tipo

Bugfix clínico y auditoría de seguridad.

### Corregido

- Valoración primaria traumática actualizada de ABCDE simple a XABCDE traumático según NICE NG39.
- Trauma grave / politrauma deja de enlazar la herramienta ABCDE general y enlaza una herramienta específica `XABCDE traumático`.
- Fluidoterapia en trauma matizada para no normalizar TA de forma agresiva si hay sangrado activo no controlado, con excepción/objetivo local en TCE grave.
- Adrenalina IM para anafilaxia separada de adrenalina IV/IO en SVA adulto para evitar confusión de vía y contexto.
- GCS y Shock Index reforzados como herramientas pos-ROSC/inestabilidad con pulso, no durante parada.
- Bibliografía de trauma actualizada con NICE Major Trauma NG39.
- Documento de auditoría clínica creado en `docs/clinical-audit-v1.0.2.md`.
- Service worker actualizado a `nexoclx-061-shell-v7`.

### Sin cambios

- No se añadieron protocolos.
- No se eliminaron protocolos.
- No se cambiaron colores.
- No se amplió la app con nuevas patologías.
- No se crearon criterios territoriales de activación/destino sin protocolo local.

## [1.0.1] - 2026-05-23

### Tipo

Bugfix de navegación y usabilidad móvil.

### Corregido

- Al abrir un protocolo, la app ya no muestra encima el listado completo de protocolos.
- Los protocolos se abren ahora en una vista de detalle dedicada.
- En móvil, al abrir un protocolo se muestra directamente la cabecera, las pestañas y el contenido operativo.
- La búsqueda se cierra correctamente al abrir un protocolo.
- El retorno desde herramientas al protocolo de origen sigue funcionando.
- Service worker actualizado a `nexoclx-061-shell-v5`.

### Verificado

- SCA desde lista: abre detalle sin listado encima.
- Ictus desde búsqueda: abre detalle limpio.
- Trauma desde categoría: abre detalle limpio.
- Glasgow Coma Scale desde Trauma: abre y vuelve correctamente.
- Móvil 390x844: correcto.
- Desktop 1280x900: correcto.
- GitHub Pages publicado correctamente.

### Sin cambios clínicos

- No se añadieron protocolos.
- No se modificaron dosis.
- No se modificaron medicamentos.
- No se modificaron fuentes clínicas.

## [1.0.0] - 2026-05-23

### Estado

Primera versión estable de NexoClx 061.

### Incluye

- 6 protocolos activos:
  - SCA / dolor torácico crítico
  - Ictus agudo / código ictus
  - Insuficiencia respiratoria aguda / disnea grave
  - Shock / sepsis / paciente inestable
  - Parada cardiorrespiratoria / SVA adulto
  - Trauma grave / politrauma

### Herramientas y procedimientos conectados

- ABCDE extrahospitalario
- SBAR / prealerta hospitalaria
- Checklist de traslado crítico
- Oxigenoterapia
- Fluidoterapia inicial
- Glasgow Coma Scale
- Shock Index
- Killip clínico
- BEFAST / Cincinnati
- Bolo de cristaloide por peso

### Medicamentos activos verificados

- Oxígeno
- Ácido acetilsalicílico
- Nitroglicerina
- Morfina
- Ticagrelor
- Glucosa hipertónica
- Midazolam
- Salbutamol
- Bromuro de ipratropio
- Metilprednisolona
- Adrenalina IM
- Adrenalina IV/IO en SVA
- Amiodarona
- Furosemida
- Cristaloide isotónico

### Correcciones incluidas antes del cierre

- Tarjetas farmacológicas compactadas para móvil.
- Protocolos RCP/SVA adulto y Trauma grave visibles.
- Enlaces internos desde protocolos a escalas, calculadoras y procedimientos corregidos.
- Búsqueda ampliada para encontrar herramientas por nombre, id y variables.
- Service worker actualizado hasta `nexoclx-061-shell-v4`.

### Fuentes principales

- CIMA/AEMPS
- Galicia-061
- ESC ACS
- AHA/ASA ictus
- GINA
- GOLD
- ESC Heart Failure
- Surviving Sepsis Campaign
- SERGAS sepsis
- ERC ALS
- AHA ALS
- INGESA/061 Ceuta trauma

### Límites clínicos

- Herramienta de apoyo, no sustituto del protocolo local.
- Las decisiones de destino, activación de códigos y traslado dependen del centro coordinador y de la red local.
- La medicación debe ajustarse a dotación, competencias y protocolos vigentes.
- No incluye pediatría, obstetricia, OVACE, intoxicaciones, quemados ni patología ampliada.

### Pendiente para V1.1/V1.2

- Validación con protocolo local 061.
- Mapa territorial de hospitales útiles.
- Circuitos locales de código infarto, código ictus, trauma y UCI.
- Revisión de dotación real.
- Prueba de uso en dispositivo móvil real.
- Eventual ampliación a pediatría, OVACE, intoxicaciones, quemados u obstetricia si se decide.
