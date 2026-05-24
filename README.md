# NexoClx 061

App web PWA de apoyo rápido para asistencia extrahospitalaria urgente, soporte vital avanzado y traslado de paciente crítico. La pregunta de producto es: **qué necesito decidir ahora antes o durante el traslado**.

**Versión publicada actual:** V1.0.1.

V1.0.0 se mantiene como release estable inicial.

Historial de cambios: [CHANGELOG.md](./CHANGELOG.md).

## Estado del repositorio GitHub

Estado actual: repositorio local creado desde cero y publicado en GitHub como `olsanju-hub/nexoclx-061`.

## README vivo

Este README es el índice maestro del proyecto. Debe actualizarse cuando cambien protocolos, procedimientos, cálculos, tratamientos, bibliografía, navegación o estado de publicación.

## Descripción actual de la app

V1.0.1 publicada con cinco secciones: Inicio, Protocolos, Procedimientos, Cálculos y Bibliografía. Medicamentos no aparece como sección principal; se muestran solo conectados al punto clínico donde cambian conducta. V1.0.1 corrige la apertura de protocolos en vista de detalle dedicada sin cambios clínicos.

## Identidad, tono y estilo visual

Interfaz mobile-first, compacta y sobria. Usa fondo gris-azulado `#f2f2f7`, superficies blancas translúcidas y granate sanitario `#a8323a` como acento de marca. El rojo crítico queda reservado para amenaza vital.

## Estado actual

Implementado: React, Vite, Tailwind, JavaScript, CSS propio, PWA, manifest, service worker básico, iconos desde `public/assets/brand/nexoclx-061-icon-source.png`, búsqueda global, tabs de protocolos y build estático.

Implementado en cierre estable V1.0.0: seis protocolos activos con estructura homogénea, relaciones consistentes entre protocolos, procedimientos, cálculos, medicamentos de soporte y bibliografía activa. Los medicamentos usan estados internos normalizados: `verified`, `verified-external-protocol`, `inactive` y `removed-from-active-flow`.

Pendiente: validación clínica local, criterios territoriales de activación/destino y confirmación de dotación real. Las pautas activas de medicamentos de V1 tienen ficha completa y fuente trazable.

Nota clínica: La adaptación a protocolo local 061 queda pendiente antes de uso asistencial.

## Estructura funcional

- Inicio: buscador, accesos rápidos, protocolos frecuentes.
- Protocolos: seis fichas con tabs fijas Sospecha, Valoración, Decisión, Tratamiento y Traslado.
- Procedimientos: ABCDE, SBAR/prealerta, traslado crítico, oxigenoterapia y fluidoterapia inicial.
- Cálculos: GCS, Shock Index, Killip, BEFAST, ABCDE, SBAR, traslado crítico y volumen de bolo.
- Bibliografía: fuentes estructuradas y trazables.

## Lógica de navegación entre módulos

La app no usa React Router. `src/App.jsx` mantiene el estado de vista actual, elemento seleccionado, tab activa y búsqueda global. Las relaciones se resuelven con ids declarados en `src/data`.

## Conexión clínica

Los protocolos de `protocolFlows.js` enlazan cálculos, procedimientos, medicamentos y referencias. `protocols.js` añade metadatos de revisión y confianza. `medications.js` conserva dosis, vía, precauciones, fuente, estado y protocolo relacionado. `bibliography.js` centraliza trazabilidad y vincula cada referencia activa a protocolos o procedimientos reales.

No hay sección principal de medicamentos. En la pantalla principal de cada protocolo solo aparecen como tarjetas farmacológicas los medicamentos `verified` o `verified-external-protocol`. Los tratamientos `inactive` o `removed-from-active-flow` no se muestran como pauta activa.

## Criterio clínico global

Contenido orientado a conducta extrahospitalaria: ABCDE, amenaza vital, código tiempo-dependiente, hospital útil, prealerta, traslado y vigilancia de complicaciones. No contiene seguimiento crónico ni capítulos docentes largos.

## Integración de bibliografía

Jerarquía de verificación farmacológica:

1. CIMA/AEMPS como fuente principal obligatoria para ficha técnica.
2. Protocolo local 061/SAMU/SUMMA/servicio autonómico si está disponible para uso operativo en ambulancia.
3. Guía farmacoterapéutica oficial del servicio de salud, hospital o comisión de farmacia.
4. BOT PLUS/Consejo General de Colegios Farmacéuticos como apoyo de presentación, disponibilidad, interacciones y verificación farmacológica.
5. Guías oficiales nacionales/internacionales solo como marco clínico.

Fuentes base:

- ESC 2023 ACS.
- AHA/ASA 2026 Acute Ischemic Stroke.
- ERC 2025 Adult Advanced Life Support.
- AHA 2025 Adult Advanced Life Support.
- GINA 2025.
- GOLD 2026.
- ESC 2021 Heart Failure.
- Surviving Sepsis Campaign 2021.
- CIMA/AEMPS para ácido acetilsalicílico, nitroglicerina, morfina, ticagrelor, glucosa hipertónica, midazolam, salbutamol, ipratropio, metilprednisolona, adrenalina, amiodarona, furosemida y cloruro sódico 0,9%.
- Guía farmacológica de Urxencias Sanitarias de Galicia-061 como referencia operativa externa para uso extrahospitalario.
- Protocolo SERGAS de sepsis como referencia operativa externa para cristaloides en sepsis/shock séptico.

La carpeta `.local-biblio/` está ignorada por Git para bibliografía privada o no publicable.

La bibliografía institucional incluida no convierte automáticamente la V1 en protocolo asistencial: La adaptación a protocolo local 061 queda pendiente antes de uso asistencial.

## Estructura técnica

```text
public/
  manifest.webmanifest
  sw.js
  favicon.png
  assets/brand/nexoclx-061-icon-source.png
  assets/icons/icon-192.png
  assets/icons/icon-512.png
  assets/icons/apple-touch-icon.png
src/
  App.jsx
  main.jsx
  components/protocols/ProtocolCard.jsx
  components/protocols/ProtocolList.jsx
  components/protocols/ProtocolHeader.jsx
  components/protocols/ProtocolSection.jsx
  styles/index.css
  data/bibliography.js
  data/calculators.js
  data/imageTemplates.js
  data/medications.js
  data/modules.js
  data/protocolFlows.js
  data/protocols.js
tailwind.config.js
postcss.config.js
```

La paleta granate y los colores semánticos actuales se conservan como tokens CSS y extensión Tailwind. Esta app actúa como referencia estructural para la presentación compacta de protocolos en la familia NexoClx.

## Índice funcional del proyecto

`src/App.jsx` renderiza shell, navegación, búsqueda, home, protocolos, procedimientos, cálculos y bibliografía. No contiene base clínica larga duplicada. La fuente visual principal de protocolos es `src/data/protocolFlows.js`.

## Protocolos incluidos

1. SCA / dolor torácico crítico.
2. Ictus agudo / código ictus.
3. Insuficiencia respiratoria aguda / disnea grave.
4. Shock / sepsis / paciente inestable.
5. Parada cardiorrespiratoria / SVA adulto.
6. Trauma grave / politrauma.

Estado V1.0.0: los seis protocolos están activos, visibles en la app publicada, abren con las cinco pestañas obligatorias y quedan cerrados como versión estable. Nuevas ampliaciones clínicas se trabajarán en V1.1/V1.2 o posterior.

## Cálculos incluidos

- GCS: ictus agudo, trauma grave/politrauma y pos-ROSC.
- Shock Index: shock/sepsis/paciente inestable, trauma grave/politrauma y pos-ROSC inestable; no se usa durante parada.
- Killip clínico: SCA/dolor torácico crítico.
- BEFAST/Cincinnati operativo: ictus agudo.
- Checklist ABCDE: insuficiencia respiratoria, shock/sepsis, trauma grave/politrauma y SVA adulto.
- Checklist SBAR: SCA, ictus, insuficiencia respiratoria, shock/sepsis, trauma grave/politrauma y SVA adulto.
- Checklist traslado crítico: SCA, ictus, insuficiencia respiratoria, shock/sepsis, trauma grave/politrauma y SVA adulto.
- Bolo de cristaloide por peso: shock/sepsis, como ayuda aritmética para pauta de cristaloide verificada con referencia externa.

## Procedimientos incluidos

- ABCDE extrahospitalario: SCA, ictus, insuficiencia respiratoria, shock/sepsis, trauma grave/politrauma y SVA adulto.
- SBAR/prealerta hospitalaria: SCA, ictus, insuficiencia respiratoria, shock/sepsis, trauma grave/politrauma y SVA adulto.
- Checklist de traslado crítico: SCA, ictus, insuficiencia respiratoria, shock/sepsis, trauma grave/politrauma y SVA adulto.
- Oxigenoterapia y soporte respiratorio básico: SCA con hipoxemia, insuficiencia respiratoria, shock/sepsis, trauma grave/politrauma y SVA adulto.
- Fluidoterapia inicial en paciente inestable: shock/sepsis, trauma grave/politrauma y SVA adulto solo si hipovolemia/sospecha específica.

Estado de procedimientos: revisados en V1 como herramientas breves, operativas y transversales. Fluidoterapia mantiene el cálculo por peso como ayuda aritmética y exige reevaluación tras cada carga.

## Fichas farmacológicas activas

Medicamentos como soporte interno, sin sección principal visible:

Pautas visibles como tratamiento activo, todas con ficha completa y fuente CIMA/AEMPS cuando aplica:

- SCA: oxígeno, ácido acetilsalicílico, nitroglicerina, morfina y ticagrelor.
- Ictus: oxígeno, glucosa hipertónica y midazolam.
- Insuficiencia respiratoria: oxígeno, salbutamol, bromuro de ipratropio, metilprednisolona, adrenalina IM si anafilaxia, nitroglicerina si EAP/congestión y furosemida si EAP congestivo.
- Shock/sepsis: oxígeno, cristaloide isotónico y adrenalina IM solo si anafilaxia.
- Trauma grave/politrauma: oxígeno, cristaloide isotónico y morfina si analgesia segura.
- Parada cardiorrespiratoria/SVA adulto: oxígeno, adrenalina IV/IO, amiodarona y glucosa hipertónica solo si hipoglucemia documentada.

Tratamientos retirados del flujo activo en V1:

- Fármacos específicos de arritmias en SCA: requieren algoritmo concreto por arritmia y estabilidad.
- Vasopresores: requieren concentración, monitorización, competencia del equipo y protocolo operativo específico.
- Antibiótico prehospitalario: requiere antimicrobiano, dosis, vía, alergias y protocolo oficial verificable.

## Bibliografía base usada

La bibliografía activa está en `src/data/bibliography.js`, con `referenceId`, título, año, institución, tipo, nota de uso, nivel de confianza, fecha de revisión interna y dudas pendientes.

Relación activa por protocolo:

- SCA: ESC ACS 2023, Galicia-061, CIMA/AEMPS AAS, nitroglicerina, morfina y ticagrelor.
- Ictus: AHA/ASA 2026, Galicia-061, CIMA/AEMPS glucosa hipertónica y midazolam.
- Insuficiencia respiratoria: GINA 2025, GOLD 2026, ESC Heart Failure 2021, Galicia-061, CIMA/AEMPS salbutamol, ipratropio, metilprednisolona, adrenalina, nitroglicerina y furosemida.
- Shock/sepsis: Surviving Sepsis Campaign 2021, SERGAS sepsis, Galicia-061, CIMA/AEMPS cloruro sódico 0,9% y adrenalina.
- Trauma grave/politrauma: Manual Emergencias 061 INGESA/Ceuta, Galicia-061, CIMA/AEMPS morfina y cloruro sódico 0,9%.
- Parada cardiorrespiratoria/SVA adulto: ERC ALS 2025, AHA ALS 2025, CIMA/AEMPS adrenalina, amiodarona y glucosa hipertónica.

Las fuentes de procedimientos transversales están enlazadas en `src/data/modules.js`; no se listan como bibliografía activa si no están conectadas a un protocolo o procedimiento real.

## Bitácora inicial

- 2026-05-22: creación desde cero con Vite + React.
- 2026-05-22: añadida PWA, manifest, service worker básico e iconos desde imagen fuente.
- 2026-05-22: añadidos cuatro protocolos piloto y relaciones con procedimientos, cálculos, medicamentos y bibliografía.
- 2026-05-22: auditados individualmente los cuatro protocolos.
- 2026-05-22: revisión transversal de conexiones clínicas, estados pendientes y bibliografía activa. Commit de revisión transversal: `chore: connect NexoClx 061 clinical data and tools`.
- 2026-05-22: fase de medicamentos: las tarjetas activas muestran solo fármacos `verified` o `verified-external-protocol`.
- 2026-05-22: fase de procedimientos: ABCDE, SBAR, traslado crítico, oxigenoterapia y fluidoterapia revisados como procedimientos transversales compactos.
- 2026-05-22: completadas pautas farmacológicas con CIMA/AEMPS y referencias operativas oficiales externas; se retiran del flujo activo arritmias específicas, vasopresores y antibiótico prehospitalario.
- 2026-05-22: añadida V1.1 con protocolo Trauma grave / politrauma, enlazado a ABCDE, SBAR, traslado crítico, GCS, Shock Index, oxigenoterapia, fluidoterapia, oxígeno, cristaloide y morfina.
- 2026-05-22: añadida V1.1 con protocolo Parada cardiorrespiratoria / SVA adulto, enlazado a ERC/AHA 2025, CIMA/AEMPS adrenalina/amiodarona/glucosa, ABCDE, SBAR, traslado crítico, oxigenoterapia, GCS y Shock Index pos-ROSC.
- 2026-05-23: cierre transversal V1 estable: auditada visibilidad, estructura de cinco pestañas, conexiones clínicas, búsqueda, PWA/cache y render móvil/desktop de los seis protocolos.
- 2026-05-23: release V1.0.0 estable con README y CHANGELOG de versión.

## Pendiente funcional para V1.1/V1.2 o posterior

- Pruebas de usuario en ambulancia/móvil real.
- Persistencia local de checks marcados si se decide necesario.
- Mapa local de hospitales útiles y códigos.
- Seguimiento de despliegue GitHub Pages tras cada push a `main`.

## Pendiente clínico para V1.1/V1.2 o posterior

- Validar criterios de activación con protocolo oficial del servicio 061 correspondiente.
- Adaptar la V1 a protocolo local 061 antes de uso asistencial.
- Confirmar competencias, dotación y presentación exacta de fármacos.
- Confirmar criterios territoriales de hospital útil: hemodinámica, unidad de ictus, trombectomía, UCI y recursos avanzados.
- Confirmar criterios territoriales de código trauma, hospital útil, torniquete y red de trauma con el centro coordinador/local.
- Confirmar criterios territoriales de traslado en parada, finalización/no inicio de RCP, ECPR/hemodinámica pos-ROSC y destino útil con centro coordinador/local.
- Añadir vasopresores, antibiótico prehospitalario o antiarrítmicos específicos solo si se incorpora protocolo operativo oficial completo.

## Pendiente bibliográfico para V1.1/V1.2 o posterior

- Añadir protocolos locales oficiales cuando estén disponibles.
- Añadir CIMA/AEMPS y protocolo operativo para antiarrítmicos, vasopresores y antibióticos solo si se incorporan como pauta verificada.
- Mantener revisión clínica fechada por módulo.

## Política de versiones

- V1.0.x: solo bugs, correcciones de navegación, caché, enlaces internos o errores tipográficos menores. No incorpora protocolos, fármacos, dosis ni fuentes nuevas.
- V1.1.x: adaptación local 061, circuitos territoriales, dotación real, competencias del equipo y hospitales útiles, sin ampliar el alcance clínico salvo que se documente explícitamente.
- V1.2.x: ampliación clínica si se decide, siempre con fuente oficial, trazabilidad, revisión de medicamentos y actualización de relaciones entre protocolos, herramientas y bibliografía.

## Requisitos

- Node.js 20+
- npm 10+

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

La salida de producción queda en `dist/`.

## Publicación

Estado actual:

- Repositorio creado en GitHub si `gh` está autenticado y el comando de publicación se ejecuta correctamente.
- Repositorio GitHub creado: `https://github.com/olsanju-hub/nexoclx-061`.
- Despliegue público GitHub Pages activo: `https://olsanju-hub.github.io/nexoclx-061/`.
- Vercel no está configurado.

No hay configuración de Vercel en esta V1.

## Cierre V1.0.0

La V1.0.0 queda cerrada como herramienta operativa de apoyo rápido con seis protocolos activos, PWA publicada en GitHub Pages y navegación/búsqueda verificadas. Esta versión no sustituye protocolos oficiales ni coordinación médica; los criterios territoriales de activación, destino y competencias del equipo siguen dependiendo del servicio 061 correspondiente.
