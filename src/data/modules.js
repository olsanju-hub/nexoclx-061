import { protocolFlows } from './protocolFlows.js'

export const circuits = [
  {
    id: 'codigo-infarto',
    title: 'Código infarto',
    category: 'Códigos y circuitos 061',
    summary: 'Activación y prealerta para SCA con elevación de ST o equivalente según circuito local.',
    keywords: ['código infarto', 'infarto', 'scacest', 'stemi', 'hemodinámica', 'ecg', 'prealerta', 'centro coordinador', 'hospital útil'],
    relatedProtocols: ['sca-dolor-toracico'],
    relatedProcedures: ['sbar-prealerta', 'traslado-critico'],
    relatedCalculators: ['killip'],
    source: ['esc-acs-2023', 'ibsalut-samu061', 'caib-samu061-actividad-2024', 'caib-carta-servicios-samu061-2025', 'boe-balears-transporte-sanitario-2024'],
    sections: {
      cuandoActivarlo: [
        'Sospecha de SCA con elevación de ST o situación equivalente definida por protocolo local/código infarto.',
        'Dolor o equivalente isquémico con inestabilidad, arritmia, shock, edema pulmonar o complicación relevante.',
      ],
      datosMinimos: [
        'ECG 12 derivaciones si disponible, hora de inicio de síntomas, constantes, estabilidad clínica y Killip si aporta gravedad.',
        'Alertas que cambian manejo: sospecha de disección, sangrado activo, alergias, anticoagulación, PDE5 reciente y tratamiento ya administrado.',
      ],
      comunicar: [
        'Centro coordinador: sospecha, ECG/hallazgos, hora de inicio, constantes, complicaciones, tratamientos, respuesta y ETA.',
        'Prealertar al hospital útil cuando coordinación active circuito o indique destino.',
      ],
      noRetrasar: [
        'No retrasar traslado por analítica, repetición innecesaria de ECG o completar tratamientos no esenciales.',
        'No decidir destino concreto sin centro coordinador/protocolo local.',
      ],
      destino: [
        'Hospital útil con hemodinámica/red de reperfusión según centro coordinador y circuito territorial.',
      ],
      limitaciones: [
        'Destino y activación definitiva según centro coordinador, red local y protocolo vigente.',
        'No fija criterios territoriales, estrategia de reperfusión, hospital concreto ni antiagregación adicional fuera del protocolo local.',
      ],
    },
  },
  {
    id: 'codigo-ictus',
    title: 'Código ictus',
    category: 'Códigos y circuitos 061',
    summary: 'Activación y prealerta para déficit focal brusco con destino útil según red local.',
    keywords: ['código ictus', 'ictus', 'befast', 'cincinnati', 'trombectomía', 'trombólisis', 'última vez visto bien', 'glucemia', 'unidad de ictus', 'tc'],
    relatedProtocols: ['ictus-agudo'],
    relatedProcedures: ['sbar-prealerta', 'traslado-critico'],
    relatedCalculators: ['befast', 'gcs'],
    source: ['aha-asa-ais-2019', 'aha-asa-ais-2026', 'ibsalut-samu061', 'caib-samu061-actividad-2024', 'caib-estrategia-ictus-ib', 'caib-carta-servicios-samu061-2025', 'boe-balears-transporte-sanitario-2024'],
    sections: {
      cuandoActivarlo: [
        'Sospecha clínica de ictus por déficit focal brusco con BEFAST/Cincinnati positivo o clínica compatible.',
        'Activación siempre según protocolo local 061 o indicación del centro coordinador.',
      ],
      datosMinimos: [
        'Hora de inicio o última vez visto bien, glucemia, déficit observado, TA/FC/SatO2 y GCS si conciencia alterada.',
        'Anticoagulación/antiagregación, hora de última dosis si se conoce, situación basal y teléfono/testigo si está disponible.',
      ],
      comunicar: [
        'Centro coordinador: hora, escala de sospecha, glucemia, constantes, GCS, anticoagulación, basal, crisis si existió y ETA.',
        'Prealertar al destino indicado por coordinación con cambios neurológicos o deterioro en ruta.',
      ],
      noRetrasar: [
        'No retrasar traslado por exploración extensa si la sospecha es clara y la glucemia está comprobada.',
        'No administrar antiagregación/anticoagulación preimagen salvo protocolo oficial específico.',
      ],
      destino: [
        'Unidad de ictus, TC disponible y/o centro con trombectomía solo según red local y centro coordinador.',
      ],
      limitaciones: [
        'Destino y activación definitiva según centro coordinador, red local y protocolo vigente.',
        'No fija ventanas, criterios de trombólisis, trombectomía ni bypass de centros sin protocolo territorial.',
      ],
    },
  },
  {
    id: 'codigo-trauma',
    title: 'Código trauma',
    category: 'Códigos y circuitos 061',
    summary: 'Activación y prealerta para trauma grave con XABCDE y hospital útil según red local.',
    keywords: ['código trauma', 'trauma grave', 'politrauma', 'xabcde', 'hemorragia catastrófica', 'alta energía', 'gcs', 'shock index', 'anticoagulación', 'hospital útil'],
    relatedProtocols: ['trauma-grave-politrauma'],
    relatedProcedures: ['xabcde-trauma', 'sbar-prealerta', 'traslado-critico'],
    relatedCalculators: ['gcs', 'shock-index', 'xabcde-trauma-check'],
    source: ['nice-major-trauma-ng39', 'ibsalut-samu061', 'caib-samu061-actividad-2024', 'caib-codigo-politrauma-2024', 'caib-carta-servicios-samu061-2025', 'boe-balears-transporte-sanitario-2024'],
    sections: {
      cuandoActivarlo: [
        'Trauma grave por mecanismo de alta energía, trauma penetrante mayor, shock/hipoperfusión, TCE grave, hemorragia masiva o sospecha de lesiones mayores.',
        'Activación de código trauma solo si existe circuito local o lo indica el centro coordinador.',
      ],
      datosMinimos: [
        'Mecanismo, hora, XABCDE, constantes, GCS, Shock Index si ayuda, sangrado, anticoagulación y lesiones sospechadas.',
        'Tratamientos realizados: control de hemorragia, oxígeno, inmovilización selectiva, analgesia, fluidos y respuesta.',
      ],
      comunicar: [
        'Prealerta estructurada con mecanismo, constantes iniciales/actuales, GCS, sospecha lesional, tratamiento, respuesta, anticoagulación y ETA.',
        'Actualizar de inmediato si empeoran vía aérea, ventilación, perfusión, GCS o sangrado.',
      ],
      noRetrasar: [
        'No retrasar traslado por exploraciones repetidas, inmovilización no esencial o procedimientos que no cambian amenaza vital inmediata.',
        'Controlar hemorragia catastrófica y prevenir hipotermia sin perder destino/tiempo crítico.',
      ],
      destino: [
        'Hospital útil según red local, disponibilidad de trauma/cirugía/UCI/TC/neurocirugía y decisión del centro coordinador.',
      ],
      limitaciones: [
        'Destino y activación definitiva según centro coordinador, red local y protocolo vigente.',
        'No inventa mapa territorial, centro trauma específico, hemoderivados, torniquete universal ni criterios locales de activación.',
      ],
    },
  },
  {
    id: 'traslado-en-parada',
    title: 'Traslado en parada',
    category: 'Códigos y circuitos 061',
    summary: 'Decisión operativa de traslado durante RCP o tras ROSC, siempre dependiente de coordinación.',
    keywords: ['traslado en parada', 'parada', 'rcp', 'sva', 'rosc', 'pos-rosc', 'ecmo', 'hemodinámica', 'desfibrilador', 'monitor', 'compresiones'],
    relatedProtocols: ['parada-cardiorrespiratoria-sva-adulto'],
    relatedProcedures: ['sbar-prealerta', 'traslado-critico', 'oxigenoterapia'],
    relatedCalculators: ['gcs', 'shock-index'],
    source: ['erc-als-2025', 'aha-als-2025', 'ibsalut-samu061', 'caib-samu061-actividad-2024', 'caib-carta-servicios-samu061-2025', 'boe-balears-transporte-sanitario-2024'],
    sections: {
      cuandoActivarlo: [
        'No asumir traslado automático durante RCP; trasladar en parada solo si centro coordinador/protocolo local lo indica.',
        'Diferenciar parada en curso de fase pos-ROSC antes de decidir destino y prioridad.',
      ],
      datosMinimos: [
        'Parada en curso: ritmo inicial/actual, tiempos sin flujo y bajo flujo si se conocen, descargas, fármacos, vía aérea, ventilación y causas reversibles.',
        'Pos-ROSC: ECG si posible, TA/ritmo/SatO2, ventilación, GCS, temperatura si disponible, sospecha etiológica y estabilidad hemodinámica.',
      ],
      comunicar: [
        'Centro coordinador y destino: estado RCP o pos-ROSC, soporte disponible, tratamientos, respuesta, limitaciones operativas y ETA.',
        'Si se traslada en parada: confirmar destino avisado y capacidad de mantener RCP segura y continua.',
      ],
      noRetrasar: [
        'No abandonar RCP de calidad por iniciar traslado sin indicación coordinada.',
        'No retrasar traslado pos-ROSC por medidas no esenciales si el destino útil ya está indicado.',
      ],
      destino: [
        'Hospital útil según sospecha, estabilidad, red local y centro coordinador; hemodinámica, ECMO/ECPR o recurso especializado solo si protocolo local lo contempla.',
      ],
      limitaciones: [
        'Destino y activación definitiva según centro coordinador, red local y protocolo vigente.',
        'No fija criterios de ECPR, hemodinámica, finalización/no inicio de RCP ni traslado especializado sin protocolo local.',
      ],
      condicionesMinimas: [
        'RCP de alta calidad mantenible, desfibrilador/monitor, vía aérea/ventilación según dotación, seguridad del equipo, continuidad de compresiones y destino avisado.',
      ],
    },
  },
]

export const procedures = [
  {
    id: 'abcde',
    title: 'ABCDE extrahospitalario',
    category: 'Transversal',
    summary: 'Secuencia de seguridad con intervención inmediata ante amenaza vital.',
    keywords: ['abcde', 'vía aérea', 'breathing', 'circulation', 'glucemia', 'evaluación'],
    relatedProtocols: ['sca-dolor-toracico', 'ictus-agudo', 'insuficiencia-respiratoria', 'shock-sepsis', 'parada-cardiorrespiratoria-sva-adulto'],
    source: ['ssc-2021', 'erc-als-2025', 'nice-major-trauma-ng39'],
    sections: {
      indicacion: ['Todo paciente crítico, inestable, tiempo-dependiente o con riesgo de deterioro durante traslado.'],
      preparacion: ['Monitor/DEA, oxígeno, aspiración, vía aérea, acceso vascular, glucómetro, material de hemorragia y comunicación con coordinación.'],
      pasos: ['A: vía aérea permeable/protegible; aspirar y preparar rescate si falla.', 'B: SatO2, FR, auscultación, trabajo respiratorio y soporte si hipoxemia/agotamiento.', 'C: pulso, TA, perfusión, hemorragia, ECG y acceso si no retrasa traslado.', 'D: conciencia/GCS, pupilas, déficit focal, glucemia y crisis.', 'E: exposición dirigida, temperatura, foco infeccioso/lesión y prevención de hipotermia.'],
      erroresCriticos: ['Saltar glucemia en déficit neurológico.', 'No controlar hemorragia antes de mover.', 'Mover sin monitorización, oxígeno disponible o plan si empeora.', 'No reevaluar tras una intervención.'],
      reevaluacion: ['Repetir ABCDE tras cada intervención, antes de mover y si cambian constantes o clínica.'],
      escalar: ['Vía aérea no protegible, agotamiento respiratorio, shock persistente, arritmia grave, convulsión, deterioro neurológico o necesidad de destino/recurso avanzado.'],
    },
  },
  {
    id: 'xabcde-trauma',
    title: 'XABCDE traumático',
    category: 'Trauma',
    summary: 'Hemorragia catastrófica antes de vía aérea en trauma grave.',
    keywords: ['xabcde', 'cabcde', 'hemorragia catastrófica', 'exanguinante', 'trauma', 'politrauma', 'torniquete', 'hipotermia'],
    relatedProtocols: ['trauma-grave-politrauma'],
    source: ['nice-major-trauma-ng39'],
    sections: {
      indicacion: ['Trauma grave o politrauma con amenaza vital real o potencial.'],
      preparacion: ['EPI, seguridad de escena, material de control de hemorragia, oxígeno, aspiración, inmovilización selectiva, abrigo y comunicación con coordinación.'],
      pasos: ['X: controlar hemorragia catastrófica/exanguinante antes de A.', 'A: vía aérea con control cervical si mecanismo/lesión lo justifica.', 'B: ventilación, tórax y amenazas como neumotórax a tensión.', 'C: pulso, TA, perfusión, pelvis, shock y hemorragia no catastrófica.', 'D: GCS, pupilas, déficit y glucemia si conciencia alterada.', 'E: exposición dirigida con prevención activa de hipotermia.'],
      erroresCriticos: ['Usar ABCDE simple e iniciar A antes de controlar exanguinación visible.', 'Normalizar TA de forma agresiva con sangrado activo no controlado.', 'Retirar objetos penetrantes.', 'Retrasar traslado por medidas no esenciales.'],
      reevaluacion: ['Repetir XABCDE tras cada intervención, antes de mover y cada pocos minutos si crítico.'],
      escalar: ['Hemorragia masiva, shock, TCE grave, compromiso respiratorio, trauma penetrante o necesidad de hospital útil/código trauma según centro coordinador.'],
    },
  },
  {
    id: 'sbar-prealerta',
    title: 'SBAR / prealerta hospitalaria',
    category: 'Comunicación',
    summary: 'Mensaje operativo para centro coordinador y hospital receptor.',
    keywords: ['sbar', 'prealerta', 'comunicación', 'centro coordinador', 'eta', 'traslado'],
    relatedProtocols: ['sca-dolor-toracico', 'ictus-agudo', 'insuficiencia-respiratoria', 'shock-sepsis', 'trauma-grave-politrauma', 'parada-cardiorrespiratoria-sva-adulto'],
    source: ['esc-acs-2023', 'aha-asa-ais-2026', 'erc-als-2025'],
    sections: {
      indicacion: ['Código tiempo-dependiente, paciente inestable o necesidad de recurso/destino específico.'],
      preparacion: ['Preparar motivo, tiempo de evolución, constantes, ABCDE resumido, tratamientos administrados, respuesta, destino solicitado y ETA.'],
      pasos: ['S: situación actual y amenaza vital principal.', 'B: inicio/última vez bien, antecedentes clave, basal, alergias/anticoagulación si importan.', 'A: constantes, hallazgos, ECG/escala/glucemia/lactato si existen y evolución.', 'R: código o destino solicitado, recurso necesario, ETA y qué decisión se necesita ahora.'],
      erroresCriticos: ['Omitir hora de inicio en ictus/SCA.', 'No comunicar tratamientos administrados y respuesta.', 'No actualizar empeoramiento o cambio de ETA.', 'Enviar datos largos sin petición clara.'],
      reevaluacion: ['Actualizar SBAR si cambian constantes, tratamiento, respuesta, destino, complicaciones o ETA.'],
      escalar: ['Shock, parada inminente, vía aérea en riesgo, arritmia grave, convulsión, necesidad de UCI, hemodinámica, unidad de ictus/trombectomía o recurso avanzado.'],
    },
  },
  {
    id: 'traslado-critico',
    title: 'Checklist de traslado crítico',
    category: 'Traslado',
    summary: 'Antes de mover: monitor, vía aérea, acceso, medicación, prealerta y plan de deterioro.',
    keywords: ['traslado', 'crítico', 'ambulancia', 'monitor', 'prealerta', 'uci'],
    relatedProtocols: ['sca-dolor-toracico', 'ictus-agudo', 'insuficiencia-respiratoria', 'shock-sepsis', 'trauma-grave-politrauma', 'parada-cardiorrespiratoria-sva-adulto'],
    source: ['ssc-2021', 'erc-als-2025', 'nice-major-trauma-ng39'],
    sections: {
      indicacion: ['Paciente inestable, tiempo-dependiente, primario o interhospitalario crítico con riesgo de deterioro durante transporte.'],
      preparacion: ['Monitor/DEA con batería, oxígeno suficiente, aspiración, vía aérea, acceso IV/IO, medicación verificada, documentación, prealerta y destino confirmados.'],
      pasos: ['Verificar ABCDE antes de mover.', 'Fijar vías, tubos, drenajes, monitor y oxígeno.', 'Dejar material de rescate accesible durante el trayecto.', 'Comunicar destino, ETA, riesgo y tratamientos administrados.', 'Si empeora: detener estímulos no esenciales, reevaluar ABCDE, tratar amenaza inmediata y actualizar coordinación.'],
      erroresCriticos: ['Material crítico inaccesible.', 'Oxígeno insuficiente para trayecto y margen.', 'No confirmar destino/prealerta.', 'No tener plan si empeora en carretera.'],
      reevaluacion: ['TA, FC, SatO2, FR, conciencia, dolor/perfusión y ABCDE seriados; registrar cambios relevantes.'],
      escalar: ['Empeoramiento respiratorio, shock persistente, arritmia, convulsión, pérdida de vía aérea, parada inminente o necesidad de cambiar destino/recurso.'],
    },
  },
  {
    id: 'oxigenoterapia',
    title: 'Oxigenoterapia y soporte respiratorio básico',
    category: 'Respiratorio',
    summary: 'Oxígeno titulado, dispositivos y escalada si fracaso respiratorio.',
    keywords: ['oxígeno', 'saturación', 'vmni', 'ventilación', 'epoc', 'hipoxemia'],
    relatedProtocols: ['sca-dolor-toracico', 'insuficiencia-respiratoria', 'shock-sepsis', 'trauma-grave-politrauma', 'parada-cardiorrespiratoria-sva-adulto'],
    source: ['gina-2025', 'gold-2026', 'erc-als-2025'],
    sections: {
      indicacion: ['Hipoxemia, insuficiencia respiratoria, shock, anafilaxia, situación crítica o trabajo respiratorio elevado.'],
      preparacion: ['SatO2 continua, fuente de oxígeno, cánula/mascarilla/reservorio, nebulización si broncoespasmo y bolsa-válvula accesible.'],
      pasos: ['Administrar oxígeno si hay hipoxemia o situación crítica.', 'Titular a la mínima FiO2 eficaz y reevaluar.', 'En EPOC/riesgo de hipercapnia, evitar oxígeno indiscriminado si el paciente permite objetivo controlado.', 'Nebulizar broncodilatadores solo si broncoespasmo dominante.', 'Escalar a VMNI o ventilación asistida solo si indicada, disponible, monitorizada y sin contraindicaciones.'],
      erroresCriticos: ['Dejar hipoxemia por miedo a CO2.', 'Mantener hiperoxia innecesaria sin reevaluar.', 'Nebulizar sin broncoespasmo dominante.', 'VMNI sin monitorización, con vómito, shock o vía aérea no protegible.'],
      reevaluacion: ['SatO2, FR, trabajo respiratorio, auscultación, conciencia, TA/FC y tolerancia cada pocos minutos.'],
      escalar: ['Agotamiento, silencio auscultatorio, conciencia baja, shock, SatO2 refractaria, mala tolerancia a soporte o necesidad de vía aérea avanzada.'],
    },
  },
  {
    id: 'fluidoterapia-inicial',
    title: 'Fluidoterapia inicial en paciente inestable',
    category: 'Hemodinámico',
    summary: 'Cristaloides con reevaluación y freno si perfil cardiogénico o sobrecarga.',
    keywords: ['fluidoterapia', 'cristaloide', 'bolo', 'shock', 'hipotensión', 'sepsis'],
    relatedProtocols: ['shock-sepsis', 'trauma-grave-politrauma', 'parada-cardiorrespiratoria-sva-adulto'],
    source: ['ssc-2021', 'erc-als-2025'],
    sections: {
      indicacion: ['Hipoperfusión compatible con shock distributivo/hipovolémico y sin datos de shock cardiogénico, EAP o sobrecarga. En trauma con sangrado activo, usar enfoque restrictivo según protocolo local.'],
      preparacion: ['Acceso IV/IO si no retrasa traslado, TA seriada, SatO2, auscultación, control de hemorragia y plan de destino/UCI.'],
      pasos: ['Confirmar patrón clínico antes de administrar volumen.', 'En sepsis/shock séptico usar 30 ml/kg inicial; si precisa, cargas de 500 ml en 30 min con reevaluación.', 'En trauma con sangrado activo no controlado, evitar normalizar TA de forma agresiva y seguir objetivo local; TCE grave requiere objetivo propio.', 'Usar el cálculo de bolo como ayuda aritmética, no como sustituto de la valoración clínica.', 'Reevaluar perfusión, TA, respiración y crepitantes tras cada carga.', 'Frenar si sospecha cardiogénica, EAP, ingurgitación yugular, crepitantes o empeora la disnea.'],
      erroresCriticos: ['Bolos grandes sin reevaluación.', 'Usar el cálculo por peso como indicación automática.', 'No controlar hemorragia.', 'Retrasar traslado por fluidos no esenciales.'],
      reevaluacion: ['Tras cada intervención: TA, FC, relleno, piel, conciencia, SatO2, FR, auscultación, diuresis referida si existe y respuesta clínica.'],
      escalar: ['Shock persistente, necesidad de vasopresor, lactato alto si disponible, deterioro respiratorio, sospecha cardiogénica/obstructiva o necesidad de UCI/recurso avanzado.'],
    },
  },
]

export const modules = [
  {
    id: 'home-abcde',
    title: 'ABCDE extrahospitalario',
    category: 'Transversal',
    summary: 'Acceso rápido a la secuencia de seguridad.',
    keywords: ['inicio', 'abcde', 'crítico'],
    status: 'implementado',
    type: 'procedimiento',
    related: ['abcde'],
  },
  ...protocolFlows.map((protocol) => ({
    id: protocol.id,
    title: protocol.title,
    category: protocol.category,
    summary: protocol.summary,
    keywords: protocol.keywords,
    status: 'implementado',
    type: 'protocolo',
    related: [...(protocol.circuits || []), ...protocol.procedures, ...protocol.calculators, ...protocol.medications],
  })),
  ...circuits.map((circuit) => ({
    id: circuit.id,
    title: circuit.title,
    category: circuit.category,
    summary: circuit.summary,
    keywords: circuit.keywords,
    status: 'implementado',
    type: 'circuito',
    related: [...circuit.relatedProtocols, ...circuit.relatedProcedures, ...circuit.relatedCalculators],
  })),
  ...procedures.map((procedure) => ({
    id: procedure.id,
    title: procedure.title,
    category: procedure.category,
    summary: procedure.summary,
    keywords: procedure.keywords,
    status: 'implementado',
    type: 'procedimiento',
    related: procedure.relatedProtocols,
  })),
]

export const procedureById = Object.fromEntries(procedures.map((procedure) => [procedure.id, procedure]))
export const circuitById = Object.fromEntries(circuits.map((circuit) => [circuit.id, circuit]))
