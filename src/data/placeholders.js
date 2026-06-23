export const placeholderSources = [
  'ACC/AHA/ACEP/NAEMSP/SCAI. 2025 Guideline for the Management of Patients With Acute Coronary Syndromes. https://professional.heart.org/en/science-news/2025-guideline-for-the-management-of-patients-with-acute-coronary-syndromes',
  'AHA. Systems of Care for ST-Segment-Elevation Myocardial Infarction. Circulation 2021. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001025',
  'ESC. 2023 Guidelines for the management of acute coronary syndromes. https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/acute-coronary-syndromes/',
  'ACC/AHA/ASE/CHEST/SAEM/SCCT/SCMR. 2021 Guideline for the Evaluation and Diagnosis of Chest Pain. Circulation. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001029',
  'ESC/ERS. 2019 Guidelines for the diagnosis and management of acute pulmonary embolism. https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/acute-pulmonary-embolism/',
  'ACC/AHA. 2022 Guideline for the Diagnosis and Management of Aortic Disease. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106',
];

export const placeholderProtocols = [
  {
    id: 'dolor-toracico',
    title: 'Dolor torácico',
    description: 'Valoración extrahospitalaria, prealerta y traslado seguro.',
    status: 'Guía clínica',
    sections: [
      {
        step: '01',
        title: 'Escena y primera impresión',
        body: 'Asegura escena, identifica riesgo inmediato y evita demoras si el cuadro sugiere patología tiempo-dependiente.',
        items: [
          'Valora ABCDE, nivel de conciencia, constantes, saturación, perfusión, dolor persistente y síntomas acompañantes.',
          'Monitoriza si hay inestabilidad, sospecha de SCA, síncope, disnea, arritmia o dolor activo.',
          'Recoge hora de inicio, evolución, antecedentes cardiovasculares y medicación relevante para el hospital receptor.',
        ],
      },
      {
        step: '02',
        title: 'ECG prehospitalario',
        body: 'Obtén ECG de 12 derivaciones lo antes posible cuando exista sospecha de SCA y transmítelo si el sistema lo permite.',
        items: [
          'Un ECG no diagnóstico no descarta SCA si la clínica persiste; reevalúa y repite si hay cambios.',
          'ECG compatible con elevación del ST o equivalente debe activar el circuito de reperfusión definido por la red asistencial.',
          'La realización de ECG seriados no debe retrasar el traslado cuando el paciente requiere hospital.',
        ],
      },
      {
        step: '03',
        title: 'Código IAM y prealerta',
        body: 'La activación se basa en clínica compatible, ECG y circuito territorial de reperfusión.',
        items: [
          'Prealerta con hora de inicio, ECG, constantes, estabilidad, comorbilidad relevante y tratamiento administrado si lo hubo.',
          'Coordina destino con el centro útil para reperfusión cuando el ECG y la red local lo indiquen.',
          'Comunica evolución durante el traslado si aparecen inestabilidad, arritmia o cambio clínico relevante.',
        ],
      },
      {
        step: '04',
        title: 'Diferencial crítico en ruta',
        body: 'No cierres el episodio como coronario si hay datos que orientan a otra causa vital.',
        items: [
          'TEP: disnea, síncope, hipoxemia, taquicardia, hemoptisis o factores tromboembólicos.',
          'Síndrome aórtico agudo: dolor brusco intenso, irradiación dorsal, déficit neurológico o asimetría vascular.',
          'Neumotórax, pericarditis o miocarditis según auscultación, signos respiratorios, fiebre, contexto o ECG.',
        ],
      },
      {
        step: '05',
        title: 'Traslado y hospital útil',
        body: 'El destino debe priorizar el recurso capaz de resolver el proceso tiempo-dependiente probable.',
        items: [
          'Traslada monitorizado si hay sospecha de SCA, inestabilidad, dolor activo o necesidad de vigilancia estrecha.',
          'Selecciona centro con capacidad adecuada para reperfusión, imagen urgente o cuidados críticos según sospecha principal.',
          'Entrega información estructurada: inicio, evolución, constantes, ECG, sospecha, prealerta y cambios durante traslado.',
        ],
      },
    ],
    tools: [
      'ECG de 12 derivaciones prehospitalario con transmisión si está disponible.',
      'Prealerta estructurada al hospital receptor.',
      'Selección de hospital útil según estabilidad, ECG y sospecha tiempo-dependiente.',
    ],
    sources: placeholderSources,
  },
];
