export const placeholderSources = [
  'ACC/AHA/ACEP/NAEMSP/SCAI. 2025 Guideline for the Management of Patients With Acute Coronary Syndromes. https://professional.heart.org/en/science-news/2025-guideline-for-the-management-of-patients-with-acute-coronary-syndromes',
  'AHA. Systems of Care for ST-Segment-Elevation Myocardial Infarction. Circulation 2021. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001025',
  'ESC. 2023 Guidelines for the management of acute coronary syndromes. https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/acute-coronary-syndromes/',
  'ACC/AHA/ASE/CHEST/SAEM/SCCT/SCMR. 2021 Guideline for the Evaluation and Diagnosis of Chest Pain. Circulation. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001029',
  'ESC/ERS. 2019 Guidelines for the diagnosis and management of acute pulmonary embolism. https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/acute-pulmonary-embolism/',
  'ACC/AHA. 2022 Guideline for the Diagnosis and Management of Aortic Disease. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106',
];

export const hypertensionSources = [
  'ESC. 2024 Guidelines for the management of elevated blood pressure and hypertension. https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/elevated-blood-pressure-and-hypertension/',
  'European Society of Hypertension. 2023 ESH Guidelines for the management of arterial hypertension. Journal of Hypertension. https://journals.lww.com/jhypertension/fulltext/2023/12000/2023_esh_guidelines_for_the_management_of_arterial.2.aspx',
  'NICE. Hypertension in adults: diagnosis and management, NG136. https://www.nice.org.uk/guidance/ng136/chapter/recommendations',
  'Peacock WF, et al. Treatment of hypertensive emergencies. Ann Transl Med. 2017. https://pmc.ncbi.nlm.nih.gov/articles/PMC5440310/',
  'AHA. Systems of Care for ST-Segment-Elevation Myocardial Infarction. Circulation 2021. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001025',
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
    interactive: {
      title: 'Decisión rápida 061',
      intro: 'Marca los datos presentes.',
      checks: [
        'Inestabilidad, síncope, disnea, arritmia, dolor activo o necesidad de vigilancia estrecha.',
        'ECG compatible con elevación del ST o equivalente según red asistencial.',
        'Sospecha de TEP, síndrome aórtico agudo, neumotórax, pericarditis o miocarditis.',
        'Necesidad de centro con reperfusión, imagen urgente o cuidados críticos.',
        'Cambio clínico relevante durante el traslado.',
      ],
      positiveTitle: 'Prealerta y traslado al hospital útil',
      positiveBody: 'Con cualquier dato marcado, coordina destino, transmite ECG si procede y entrega información estructurada al receptor.',
      negativeTitle: 'Reevaluar y documentar transferencia',
      negativeBody: 'Si no hay datos marcados, mantén reevaluación, registro de inicio/evolución, ECG si procede y transferencia estructurada.',
      copyPrefix: 'Dolor torácico 061',
    },
    assessment: {
      title: 'Herramienta de prealerta y destino',
      intro: 'Introduce datos de escena para decidir prealerta, código y hospital útil.',
      copyPrefix: 'Dolor torácico 061',
      fields: [
        { id: 'activePain', type: 'checkbox', label: 'Dolor activo, disnea, síncope o arritmia durante asistencia' },
        { id: 'unstable', type: 'checkbox', label: 'Inestabilidad, hipoxemia, mala perfusión o deterioro clínico' },
        {
          id: 'ecg',
          type: 'select',
          label: 'ECG prehospitalario',
          options: [
            { value: 'not-done', label: 'No realizado todavía' },
            { value: 'normal', label: 'Sin cambios agudos' },
            { value: 'ischemic', label: 'Cambios isquémicos o arritmia relevante' },
            { value: 'stemi', label: 'Elevación ST o equivalente' },
          ],
        },
        { id: 'criticalDifferential', type: 'checkbox', label: 'Sospecha de TEP, aorta, neumotórax o miopericarditis' },
        { id: 'needsUsefulHospital', type: 'checkbox', label: 'Necesita reperfusión, imagen urgente o cuidados críticos' },
        { id: 'worseningTransfer', type: 'checkbox', label: 'Cambio clínico relevante durante el traslado' },
      ],
      outcomes: [
        {
          any: ['unstable', { id: 'ecg', equals: 'stemi' }],
          status: 'Código',
          tone: 'alert',
          title: 'Prealerta inmediata y hospital útil',
          body: 'Los datos sugieren proceso tiempo-dependiente que requiere coordinación y destino con capacidad resolutiva.',
          actions: [
            'Transmitir ECG si el sistema lo permite.',
            'Activar circuito de reperfusión o críticos según red asistencial.',
            'Comunicar hora de inicio, constantes, estabilidad y evolución.',
          ],
        },
        {
          any: ['activePain', 'criticalDifferential', 'needsUsefulHospital', 'worseningTransfer', { id: 'ecg', equals: 'ischemic' }],
          status: 'Prealerta',
          tone: 'alert',
          title: 'Traslado monitorizado con prealerta',
          body: 'El paciente necesita hospital útil, vigilancia estrecha o prueba/imagen urgente.',
          actions: [
            'Coordinar destino por sospecha dominante.',
            'Reevaluar y repetir ECG si cambia la clínica.',
            'Entregar transferencia estructurada al receptor.',
          ],
        },
      ],
      defaultOutcome: {
        status: 'Reevaluar',
        title: 'Transferencia estructurada sin activación específica',
        body: 'Sin datos críticos marcados, mantener reevaluación y documentación de inicio, evolución y ECG si procede.',
        actions: [
          'Registrar constantes y cambios durante el traslado.',
          'Informar antecedentes y medicación relevante.',
          'Actualizar destino si aparece inestabilidad o sospecha tiempo-dependiente.',
        ],
      },
    },
    sources: placeholderSources,
  },
  {
    id: 'hta',
    title: 'HTA',
    description: 'Crisis hipertensiva extrahospitalaria, prealerta y traslado al hospital útil.',
    status: 'Guía clínica',
    sections: [
      {
        step: '01',
        title: 'Escena y ABCDE',
        body: 'La decisión prehospitalaria se basa en estabilidad, síntomas de daño agudo y tiempo hasta hospital útil.',
        items: [
          'Asegura escena, confirma constantes, nivel de conciencia, glucemia si alteración neurológica y saturación.',
          'Busca dolor torácico, disnea, edema pulmonar, focalidad neurológica, convulsión, confusión, dolor dorsal brusco o embarazo.',
          'Monitoriza y reevalúa si hay síntomas, cifras muy elevadas, deterioro clínico o necesidad de traslado prioritario.',
        ],
      },
      {
        step: '02',
        title: 'Selector de emergencia hipertensiva',
        body: 'Considera emergencia hipertensiva cuando la HTA se acompaña de daño agudo sospechado o establecido.',
        items: [
          'Sospecha SCA o edema agudo de pulmón ante dolor torácico, disnea, crepitantes, hipoxemia o cambios ECG.',
          'Sospecha ictus o encefalopatía ante focalidad, confusión, convulsiones, cefalea intensa o alteración visual.',
          'Sospecha disección aórtica ante dolor brusco torácico/dorsal, asimetría vascular, síncope o déficit neurológico.',
        ],
      },
      {
        step: '03',
        title: 'Prealerta y hospital útil',
        body: 'La prioridad es coordinar destino con capacidad para resolver la causa tiempo-dependiente probable.',
        items: [
          'Prealerta con cifras repetidas, síntomas, tiempo de inicio, ECG si existe, exploración neurológica, saturación y evolución.',
          'Selecciona centro útil para SCA, ictus, disección, edema pulmonar o cuidados críticos según sospecha principal.',
          'No retrases el traslado para normalizar cifras si hay daño agudo o necesidad de tratamiento hospitalario.',
        ],
      },
      {
        step: '04',
        title: 'Tratamiento durante asistencia y traslado',
        body: 'El tratamiento prehospitalario debe ser protocolizado, monitorizado y dependiente del órgano afectado.',
        items: [
          'Asegura soporte ABCDE, posición, oxígeno si hipoxemia, acceso venoso si procede y monitorización.',
          'Evita descensos bruscos no indicados cuando no hay daño agudo de órgano diana.',
          'Si existe protocolo médico para fármaco intravenoso, titula con monitorización y comunica respuesta al receptor.',
        ],
      },
    ],
    tools: [
      'Checklist ABCDE y daño agudo de órgano diana.',
      'Selector de hospital útil según SCA, ictus, disección, edema pulmonar o críticos.',
      'Resumen copiable de prealerta y transferencia.',
    ],
    treatment: [
      {
        title: 'Soporte y traslado',
        body: 'Primer escalón común en la crisis hipertensiva extrahospitalaria.',
        items: [
          'Monitorización, reevaluación seriada, ECG si hay dolor torácico/disnea o sospecha de SCA, y acceso venoso si se prevé tratamiento.',
          'Oxígeno si hipoxemia y soporte específico según ABCDE y patología dominante.',
          'Prealerta y traslado prioritario si hay sospecha de daño agudo de órgano diana.',
        ],
      },
      {
        title: 'Tratamiento intravenoso protocolizado',
        body: 'Solo cuando el recurso y la dirección médica lo contemplen para emergencia hipertensiva.',
        items: [
          'Labetalol intravenoso: bolo inicial 0,3-1 mg/kg con máximo inicial 20 mg, seguido de perfusión 0,4-1 mg/kg/h según respuesta y monitorización.',
          'Evitar tratamiento crónico ambulatorio durante el traslado salvo indicación médica específica.',
          'Documentar dosis, hora, respuesta tensional, frecuencia cardiaca, síntomas y eventos adversos.',
        ],
      },
      {
        title: 'Transferencia',
        body: 'La información transmitida debe permitir continuar el tratamiento sin reiniciar la valoración.',
        items: [
          'Comunica tiempo de inicio, cifras repetidas, síntomas, exploración, ECG, tratamientos administrados y respuesta.',
          'Indica motivo de hospital útil: SCA, ictus, disección, edema pulmonar, embarazo/eclampsia o necesidad de críticos.',
        ],
      },
    ],
    interactive: {
      title: 'Decisión rápida HTA 061',
      intro: 'Marca los datos presentes.',
      checks: [
        'Dolor torácico, disnea, edema pulmonar, focalidad neurológica, convulsión, confusión, alteración visual o dolor dorsal brusco.',
        'ECG, exploración o evolución sugieren SCA, ictus, disección aórtica, edema pulmonar o críticos.',
        'Necesidad de prealerta, coordinación médica o hospital útil específico.',
        'Tratamiento intravenoso protocolizado o monitorización avanzada durante el traslado.',
      ],
      positiveTitle: 'Prealerta y traslado prioritario',
      positiveBody: 'Coordina destino, transmite datos críticos, monitoriza y traslada al hospital útil sin retrasar por normalización tensional.',
      negativeTitle: 'Reevaluar y transferir de forma estructurada',
      negativeBody: 'Si no hay daño agudo, evita descenso brusco, reevalúa, documenta cifras repetidas y deriva según circuito asistencial.',
      copyPrefix: 'HTA 061',
    },
    assessment: {
      title: 'Herramienta HTA 061',
      intro: 'Introduce datos de escena para decidir emergencia hipertensiva, prealerta y traslado.',
      copyPrefix: 'HTA 061',
      fields: [
        { id: 'sbp', type: 'number', label: 'Presión sistólica', min: 70, max: 300, unit: 'mmHg' },
        { id: 'dbp', type: 'number', label: 'Presión diastólica', min: 40, max: 180, unit: 'mmHg' },
        { id: 'chestResp', type: 'checkbox', label: 'Dolor torácico, disnea, edema pulmonar o cambios ECG' },
        { id: 'neuro', type: 'checkbox', label: 'Focalidad, convulsión, confusión o alteración visual' },
        { id: 'aortic', type: 'checkbox', label: 'Dolor torácico/dorsal brusco, síncope o asimetría vascular' },
        { id: 'ivProtocol', type: 'checkbox', label: 'Existe indicación/protocolo de intravenoso monitorizado' },
      ],
      outcomes: [
        {
          any: ['chestResp', 'neuro', 'aortic'],
          status: 'Prealerta',
          tone: 'alert',
          title: 'Sospecha de emergencia hipertensiva',
          body: 'Los datos introducidos sugieren daño agudo y requieren hospital útil, coordinación y traslado monitorizado.',
          actions: [
            'Prealertar con cifras repetidas, síntomas, ECG si existe y evolución.',
            'Seleccionar hospital útil según SCA, ictus, disección, edema pulmonar o críticos.',
            'No retrasar traslado por normalizar cifras.',
          ],
        },
        {
          any: ['ivProtocol'],
          status: 'Tratar',
          tone: 'alert',
          title: 'Tratamiento intravenoso solo protocolizado',
          body: 'Si dirección médica lo contempla, titular con monitorización y comunicar respuesta al hospital receptor.',
          actions: [
            'Registrar dosis, hora, frecuencia cardiaca, presión arterial y respuesta.',
            'Mantener soporte ABCDE y reevaluación continua.',
            'Trasladar al centro útil definido por la sospecha principal.',
          ],
        },
        {
          any: [{ id: 'sbp', gte: 180 }, { id: 'dbp', gte: 120 }],
          status: 'Vigilar',
          tone: 'alert',
          title: 'Cifras muy elevadas: buscar daño agudo',
          body: 'Si no hay síntomas de daño agudo, no convierte por sí solo el episodio en emergencia, pero exige reevaluación.',
          actions: [
            'Repetir medida y revisar técnica.',
            'Explorar datos neurológicos, torácicos, respiratorios, aórticos y embarazo si aplica.',
            'Definir destino por estabilidad y circuito asistencial.',
          ],
        },
      ],
      defaultOutcome: {
        status: 'Traslado',
        title: 'Reevaluación y transferencia estructurada',
        body: 'Sin datos de daño agudo, mantener soporte, registro y derivación según circuito asistencial.',
        actions: [
          'Documentar cifras repetidas y síntomas ausentes/presentes.',
          'Evitar tratamiento crónico durante traslado salvo indicación médica.',
          'Actualizar prealerta si aparece deterioro o daño de órgano.',
        ],
      },
    },
    sources: hypertensionSources,
  },
];
