# NexoClx 061

App web PWA de apoyo rápido para asistencia extrahospitalaria urgente, soporte vital avanzado y traslado de paciente crítico. La pregunta de producto es: **qué necesito decidir ahora antes o durante el traslado**.

## Estado del repositorio GitHub

Estado actual: repositorio local creado desde cero y publicado en GitHub como `olsanju-hub/nexoclx-061`.

## README vivo

Este README es el índice maestro del proyecto. Debe actualizarse cuando cambien protocolos, procedimientos, cálculos, tratamientos, bibliografía, navegación o estado de publicación.

## Descripción actual de la app

V1 funcional con cinco secciones: Inicio, Protocolos, Procedimientos, Cálculos y Bibliografía. Medicamentos no aparece como sección principal; se muestran solo conectados al punto clínico donde cambian conducta.

## Identidad, tono y estilo visual

Interfaz mobile-first, compacta y sobria. Usa fondo gris-azulado `#f2f2f7`, superficies blancas translúcidas y granate sanitario `#a8323a` como acento de marca. El rojo crítico queda reservado para amenaza vital.

## Estado actual

Implementado: Vite, React, JavaScript, CSS propio, PWA, manifest, service worker básico, iconos desde `public/assets/brand/nexoclx-061-icon-source.png`, búsqueda global, tabs de protocolos y build estático.

Implementado en revisión transversal V1: relaciones homogéneas entre protocolos, procedimientos, cálculos, medicamentos de soporte y bibliografía activa. Los elementos pendientes usan estados normalizados: `verified`, `pending-local-protocol`, `pending-cima`, `pending-source` e `inactive`.

Pendiente: validación clínica local, criterios territoriales de activación/destino, dotación real y dosis protocolizadas no verificadas.

Nota clínica: La adaptación a protocolo local 061 queda pendiente antes de uso asistencial.

## Estructura funcional

- Inicio: buscador, accesos rápidos, protocolos frecuentes.
- Protocolos: cuatro fichas con tabs fijas Sospecha, Valoración, Decisión, Tratamiento y Traslado.
- Procedimientos: ABCDE, SBAR/prealerta, traslado crítico, oxigenoterapia y fluidoterapia inicial.
- Cálculos: GCS, Shock Index, Killip, BEFAST, ABCDE, SBAR, traslado crítico y volumen de bolo.
- Bibliografía: fuentes estructuradas y trazables.

## Lógica de navegación entre módulos

La app no usa React Router. `src/App.jsx` mantiene el estado de vista actual, elemento seleccionado, tab activa y búsqueda global. Las relaciones se resuelven con ids declarados en `src/data`.

## Conexión clínica

Los protocolos de `protocolFlows.js` enlazan cálculos, procedimientos, medicamentos y referencias. `protocols.js` añade metadatos de revisión y confianza. `medications.js` conserva dosis, vía, precauciones, fuente, estado y protocolo relacionado. `bibliography.js` centraliza trazabilidad y vincula cada referencia activa a protocolos o procedimientos reales.

No hay sección principal de medicamentos. Los fármacos aparecen solo dentro del bloque de tratamientos conectados de cada protocolo.

## Criterio clínico global

Contenido orientado a conducta extrahospitalaria: ABCDE, amenaza vital, código tiempo-dependiente, hospital útil, prealerta, traslado y vigilancia de complicaciones. No contiene seguimiento crónico ni capítulos docentes largos.

## Integración de bibliografía

Fuentes base:

- ESC 2023 ACS.
- AHA/ASA 2026 Acute Ischemic Stroke.
- GINA 2025.
- GOLD 2026.
- ESC 2021 Heart Failure.
- Surviving Sepsis Campaign 2021.
- CIMA/AEMPS para ácido acetilsalicílico, nitroglicerina, salbutamol y adrenalina.

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
  styles.css
  data/bibliography.js
  data/calculators.js
  data/imageTemplates.js
  data/medications.js
  data/modules.js
  data/protocolFlows.js
  data/protocols.js
```

## Índice funcional del proyecto

`src/App.jsx` renderiza shell, navegación, búsqueda, home, protocolos, procedimientos, cálculos y bibliografía. No contiene base clínica larga duplicada. La fuente visual principal de protocolos es `src/data/protocolFlows.js`.

## Protocolos incluidos

1. SCA / dolor torácico crítico.
2. Ictus agudo / código ictus.
3. Insuficiencia respiratoria aguda / disnea grave.
4. Shock / sepsis / paciente inestable.

## Cálculos incluidos

- GCS: ictus agudo.
- Shock Index: shock/sepsis/paciente inestable.
- Killip clínico: SCA/dolor torácico crítico.
- BEFAST/Cincinnati operativo: ictus agudo.
- Checklist ABCDE: insuficiencia respiratoria y shock/sepsis.
- Checklist SBAR: SCA, ictus, insuficiencia respiratoria y shock/sepsis.
- Checklist traslado crítico: SCA, ictus, insuficiencia respiratoria y shock/sepsis.
- Bolo de cristaloide por peso: shock/sepsis, con indicación y volumen pendientes de protocolo local 061.

## Procedimientos incluidos

- ABCDE extrahospitalario: SCA, ictus, insuficiencia respiratoria y shock/sepsis.
- SBAR/prealerta hospitalaria: SCA, ictus, insuficiencia respiratoria y shock/sepsis.
- Checklist de traslado crítico: SCA, ictus, insuficiencia respiratoria y shock/sepsis.
- Oxigenoterapia y soporte respiratorio básico: SCA con hipoxemia, insuficiencia respiratoria y shock/sepsis.
- Fluidoterapia inicial en paciente inestable: shock/sepsis.

## Fichas farmacológicas activas

Medicamentos como soporte interno, sin sección principal visible:

- SCA: oxígeno (`verified`), ácido acetilsalicílico (`pending-local-protocol`), nitroglicerina (`pending-local-protocol`), analgesia en SCA (`pending-local-protocol`), antiagregación adicional (`pending-local-protocol`) y fármacos de arritmias (`pending-local-protocol`).
- Ictus: oxígeno (`verified`), corrección de hipoglucemia (`pending-local-protocol`) y benzodiacepina/anticonvulsivante (`pending-local-protocol`).
- Insuficiencia respiratoria: oxígeno (`verified`), salbutamol (`pending-local-protocol`), bromuro de ipratropio (`pending-cima`), corticoide sistémico (`pending-local-protocol`), adrenalina IM (`pending-local-protocol`), nitroglicerina (`pending-local-protocol`) y diurético en EAP (`pending-local-protocol`).
- Shock/sepsis: oxígeno (`verified`), cristaloide isotónico (`pending-local-protocol`), adrenalina IM (`pending-local-protocol`), vasopresor (`pending-local-protocol`) y antibiótico prehospitalario (`pending-local-protocol`).

## Bibliografía base usada

La bibliografía activa está en `src/data/bibliography.js`, con `referenceId`, título, año, institución, tipo, nota de uso, nivel de confianza, fecha de revisión interna y dudas pendientes.

Relación activa por protocolo:

- SCA: ESC ACS 2023, CIMA/AEMPS ácido acetilsalicílico, CIMA/AEMPS nitroglicerina.
- Ictus: AHA/ASA 2026 Acute Ischemic Stroke.
- Insuficiencia respiratoria: GINA 2025, GOLD 2026, ESC Heart Failure 2021, CIMA/AEMPS salbutamol, CIMA/AEMPS adrenalina, CIMA/AEMPS nitroglicerina.
- Shock/sepsis: Surviving Sepsis Campaign 2021, CIMA/AEMPS adrenalina.

Las fuentes de procedimientos transversales están enlazadas en `src/data/modules.js`; no se listan como bibliografía activa si no están conectadas a un protocolo o procedimiento real.

## Bitácora inicial

- 2026-05-22: creación desde cero con Vite + React.
- 2026-05-22: añadida PWA, manifest, service worker básico e iconos desde imagen fuente.
- 2026-05-22: añadidos cuatro protocolos piloto y relaciones con procedimientos, cálculos, medicamentos y bibliografía.
- 2026-05-22: auditados individualmente los cuatro protocolos.
- 2026-05-22: revisión transversal de conexiones clínicas, estados pendientes y bibliografía activa. Commit de revisión transversal: `chore: connect NexoClx 061 clinical data and tools`.

## Pendiente funcional

- Pruebas de usuario en ambulancia/móvil real.
- Persistencia local de checks marcados si se decide necesario.
- Mapa local de hospitales útiles y códigos.
- Seguimiento de despliegue GitHub Pages tras cada push a `main`.

## Pendiente clínico

- Validar criterios de activación con protocolo oficial del servicio 061 correspondiente.
- Adaptar la V1 a protocolo local 061 antes de uso asistencial.
- Confirmar dosis de antiagregación, corticoides, ipratropio, diuréticos, benzodiacepinas, vasopresores y antibióticos si entran en alcance.
- Confirmar competencias, dotación y presentación exacta de fármacos.
- Confirmar volumen/tamaño de bolo de cristaloide, repetición y límites en paciente inestable.
- Confirmar criterios territoriales de hospital útil: hemodinámica, unidad de ictus, trombectomía, UCI y recursos avanzados.

## Pendiente bibliográfico

- Añadir protocolos locales oficiales cuando estén disponibles.
- Revisar enlaces CIMA pendientes para ipratropio, analgesia, antiagregación adicional, fármacos de arritmias, glucosa, anticonvulsivantes, corticoides, diuréticos, vasopresores y antibióticos si se incorporan como pauta verificada.
- Mantener revisión clínica fechada por módulo.

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
