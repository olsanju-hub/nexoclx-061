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
    clinicalScope: 'Déficit neurológico focal brusco con sospecha prehospitalaria de ictus y necesidad de código/destino útil según protocolo local.',
    reviewedAt: '2026-05-22',
    confidence: 'alta para detección/traslado; media para criterios de destino hasta protocolo local',
    internalNotes: 'Actualizar cuando se cargue mapa territorial de unidades de ictus, TC, trombólisis y trombectomía; no fijar ventanas terapéuticas sin protocolo local.',
    bibliography: ['aha-asa-ais-2026'],
    verificationStatus: 'Detección, glucemia y prealerta trazadas; activación, destino, PA, hipoglucemia y convulsiones quedan pendientes de protocolo local 061.',
  },
  {
    id: 'insuficiencia-respiratoria',
    clinicalScope: 'Disnea grave/insuficiencia respiratoria como síndrome prehospitalario, con patrón dominante para orientar soporte y destino.',
    reviewedAt: '2026-05-22',
    confidence: 'media-alta',
    internalNotes: 'Corticoides, diuréticos, ipratropio, repetición de adrenalina, criterios VMNI y destino útil requieren verificación de protocolo local 061.',
    bibliography: ['gina-2025', 'gold-2026', 'esc-hf-2021', 'cima-salbutamol', 'cima-adrenalina', 'cima-nitroglicerina'],
    verificationStatus: 'Oxígeno, salbutamol, adrenalina IM y nitroglicerina SL trazadas; patrón, repetición, VMNI, diurético/corticoide/ipratropio y destino quedan pendientes de protocolo local 061.',
  },
  {
    id: 'shock-sepsis',
    clinicalScope: 'Paciente inestable/shock/hipoperfusión como síndrome prehospitalario, con patrón dominante para orientar soporte y destino.',
    reviewedAt: '2026-05-22',
    confidence: 'media',
    internalNotes: 'Criterios de destino/UCI, volumen de fluidos, vasopresores y antibiótico prehospitalario requieren protocolo local 061 verificable.',
    bibliography: ['ssc-2021', 'cima-adrenalina'],
    verificationStatus: 'Reconocimiento, ABCDE, oxígeno, control de hemorragia y fluidos con reevaluación trazados; volumen, destino, vasopresores y antibióticos quedan pendientes de protocolo local 061.',
  },
]

export const protocolMetaById = Object.fromEntries(protocols.map((protocol) => [protocol.id, protocol]))
