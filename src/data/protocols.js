export const protocols = [
  {
    id: 'sca-dolor-toracico',
    clinicalScope: 'Adulto con dolor torácico o equivalente isquémico de alto riesgo en entorno extrahospitalario.',
    reviewedAt: '2026-05-22',
    confidence: 'media-alta',
    internalNotes: 'Criterios ECG/equivalentes, destino con hemodinámica, analgesia y doble antiagregación deben alinearse con código infarto local antes de ampliar dosis.',
    bibliography: ['esc-acs-2023', 'cima-aas', 'cima-nitroglicerina'],
    verificationStatus: 'Dosis de nitroglicerina trazada a ficha técnica; activación, repetición, antiagregación y analgesia quedan pendientes de protocolo local 061.',
  },
  {
    id: 'ictus-agudo',
    clinicalScope: 'Déficit neurológico focal brusco candidato a código ictus y traslado a centro útil.',
    reviewedAt: '2026-05-22',
    confidence: 'alta para detección/traslado; media para criterios de destino hasta protocolo local',
    internalNotes: 'Actualizar cuando se cargue mapa territorial de unidades de ictus y trombectomía.',
    bibliography: ['aha-asa-ais-2026'],
    verificationStatus: 'Sin fármacos específicos en V1 salvo oxígeno y corrección de hipoglucemia pendiente de protocolo local.',
  },
  {
    id: 'insuficiencia-respiratoria',
    clinicalScope: 'Disnea grave, hipoxemia, broncoespasmo, EPOC/asma, EAP y anafilaxia como diferencial crítico.',
    reviewedAt: '2026-05-22',
    confidence: 'media-alta',
    internalNotes: 'Corticoides, diuréticos e ipratropio requieren verificación de presentación/dosis locales.',
    bibliography: ['gina-2025', 'gold-2026', 'esc-hf-2021', 'cima-salbutamol', 'cima-adrenalina', 'cima-nitroglicerina'],
    verificationStatus: 'Salbutamol, adrenalina IM y nitroglicerina SL trazadas; otras pautas pendientes.',
  },
  {
    id: 'shock-sepsis',
    clinicalScope: 'Paciente inestable con hipoperfusión, shock indiferenciado o sospecha de sepsis grave.',
    reviewedAt: '2026-05-22',
    confidence: 'media',
    internalNotes: 'No activar antibiótico/vasopresor sin protocolo local; mantener fluidos con reevaluación.',
    bibliography: ['ssc-2021', 'cima-adrenalina'],
    verificationStatus: 'Fluidoterapia descrita de forma prudente; volumen y vasopresores pendientes de protocolo local.',
  },
]

export const protocolMetaById = Object.fromEntries(protocols.map((protocol) => [protocol.id, protocol]))
