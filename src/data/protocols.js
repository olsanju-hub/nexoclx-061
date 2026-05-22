export const protocols = [
  {
    id: 'sca-dolor-toracico',
    clinicalScope: 'Adulto con dolor torácico o equivalente isquémico de alto riesgo en entorno extrahospitalario.',
    reviewedAt: '2026-05-22',
    confidence: 'media-alta',
    internalNotes: 'Pautas farmacológicas trazadas con CIMA/AEMPS y Galicia-061 como referencia operativa externa; arritmias específicas quedan fuera del flujo activo.',
    bibliography: ['esc-acs-2023', 'galicia-061-farmacologica', 'cima-aas', 'cima-nitroglicerina', 'cima-morfina', 'cima-ticagrelor'],
    verificationStatus: 'Oxígeno, AAS, nitroglicerina, morfina y ticagrelor quedan como pautas verificadas; criterios de activación/destino se adaptan al código infarto local.',
  },
  {
    id: 'ictus-agudo',
    clinicalScope: 'Déficit neurológico focal brusco con sospecha prehospitalaria de ictus y necesidad de código/destino útil según protocolo local.',
    reviewedAt: '2026-05-22',
    confidence: 'alta para detección/traslado; media para criterios de destino hasta protocolo local',
    internalNotes: 'Actualizar cuando se cargue mapa territorial de unidades de ictus, TC, trombólisis y trombectomía; no fijar ventanas terapéuticas sin protocolo local.',
    bibliography: ['aha-asa-ais-2026', 'galicia-061-farmacologica', 'cima-glucose-33', 'cima-midazolam'],
    verificationStatus: 'Oxígeno, glucosa hipertónica para hipoglucemia y midazolam para convulsión quedan como pautas verificadas; activación/destino y PA se adaptan al protocolo local.',
  },
  {
    id: 'insuficiencia-respiratoria',
    clinicalScope: 'Disnea grave/insuficiencia respiratoria como síndrome prehospitalario, con patrón dominante para orientar soporte y destino.',
    reviewedAt: '2026-05-22',
    confidence: 'media-alta',
    internalNotes: 'Pautas farmacológicas trazadas con CIMA/AEMPS y Galicia-061; criterios VMNI y destino útil se adaptan al recurso local.',
    bibliography: ['gina-2025', 'gold-2026', 'esc-hf-2021', 'galicia-061-farmacologica', 'cima-salbutamol', 'cima-ipratropio', 'cima-methylprednisolone', 'cima-adrenalina', 'cima-nitroglicerina', 'cima-furosemide'],
    verificationStatus: 'Oxígeno, salbutamol, ipratropio, metilprednisolona, adrenalina IM, nitroglicerina y furosemida quedan como pautas verificadas.',
  },
  {
    id: 'shock-sepsis',
    clinicalScope: 'Paciente inestable/shock/hipoperfusión como síndrome prehospitalario, con patrón dominante para orientar soporte y destino.',
    reviewedAt: '2026-05-22',
    confidence: 'media',
    internalNotes: 'Cristaloides trazados con CIMA/AEMPS y protocolo SERGAS sepsis como referencia operativa externa; vasopresores y antibiótico prehospitalario quedan fuera del flujo activo.',
    bibliography: ['ssc-2021', 'sergas-sepsis', 'galicia-061-farmacologica', 'cima-sodium-chloride-09', 'cima-adrenalina'],
    verificationStatus: 'Oxígeno, cristaloide isotónico y adrenalina IM en anafilaxia quedan como pautas verificadas; destino, vasopresores y antibióticos requieren protocolo operativo específico.',
  },
  {
    id: 'trauma-grave-politrauma',
    clinicalScope: 'Paciente traumático grave o politraumatizado en entorno extrahospitalario 061, con amenaza vital real o potencial y necesidad de traslado crítico.',
    reviewedAt: '2026-05-22',
    confidence: 'media-alta',
    internalNotes: 'Basado en Manual de Emergencias 061 INGESA/Ceuta para evaluación inicial del politrauma y Galicia-061/CIMA para medicación; destino y activación dependen de red local.',
    bibliography: ['ingesa-061-trauma', 'galicia-061-farmacologica', 'cima-morfina', 'cima-sodium-chloride-09'],
    verificationStatus: 'ABCDE traumático, oxígeno, morfina y cristaloide isotónico quedan trazados; hospital útil, torniquete y criterios de código trauma se adaptan a protocolo local/centro coordinador.',
  },
]

export const protocolMetaById = Object.fromEntries(protocols.map((protocol) => [protocol.id, protocol]))
