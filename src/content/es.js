// Copy en español. Mantener la misma estructura que en.js — las plantillas leen ambos.
module.exports = {
  lang: 'es',
  locale: 'es_US',
  langName: 'Español',
  routes: {
    home: 'es/',
    services: 'es/servicios/',
    portfolio: 'es/portafolio/',
    about: 'es/nosotros/',
    contact: 'es/contacto/',
    thanks: 'es/gracias/',
  },

  nav: {
    home: 'Inicio',
    services: 'Servicios',
    portfolio: 'Portafolio',
    about: 'Nosotros',
    contact: 'Contacto',
  },

  common: {
    skip: 'Saltar al contenido',
    menu: 'Menú',
    close: 'Cerrar',
    estimate: 'Presupuesto Gratis',
    estimateLong: 'Pida su presupuesto gratis',
    call: 'Llamar',
    callUs: 'Llámenos',
    whatsapp: 'WhatsApp',
    whatsappMsg: '¡Hola Cubela Brothers! Me gustaría un presupuesto gratis para un proyecto.',
    email: 'Correo',
    hours: 'Horario',
    closed: 'Dom · Cerrado',
    serviceArea: 'Zona de servicio',
    langSwitch: 'Idioma',
    tagline: 'Remodelación · Carpintería a medida',
    days: { Mo: 'Lun', Tu: 'Mar', We: 'Mié', Th: 'Jue', Fr: 'Vie', Sa: 'Sáb', Su: 'Dom' },
    langBanner: {
      text: 'Would you prefer to view this site in English?',
      yes: 'View in English',
      no: 'No, gracias',
    },
  },

  meta: {
    home: {
      title: 'Cubela Brothers | Remodelación y Carpintería a Medida en Lakeland, FL',
      description:
        'Negocio familiar de remodelación y carpintería a medida en Lakeland, FL. Baños, duchas, losas, cocinas, gabinetes y muebles empotrados. Presupuestos gratis. We speak English.',
    },
    services: {
      title: 'Servicios de Remodelación, Losas y Gabinetes a Medida | Cubela Brothers',
      description:
        'Remodelación de baños y duchas, instalación de losas y pisos, cocinas, gabinetes a medida, tocadores, muebles empotrados y molduras en Lakeland y el condado de Polk.',
    },
    portfolio: {
      title: 'Portafolio: Duchas, Cocinas y Carpintería | Cubela Brothers',
      description:
        'Vea proyectos reales de remodelación y carpintería de Cubela Brothers en Lakeland, FL: duchas revestidas, gabinetes de cocina a medida, trabajos de losa y más.',
    },
    about: {
      title: 'Nosotros | Cubela Brothers — Constructores Familiares en Lakeland, FL',
      description:
        'Conozca a Cubela Brothers, un equipo familiar de remodelación y carpintería a medida que sirve a Lakeland y al condado de Polk con trabajo honesto y mano de obra experta.',
    },
    contact: {
      title: 'Contacto y Presupuestos Gratis | Cubela Brothers, Lakeland FL',
      description:
        'Pida un presupuesto gratis y sin compromiso para su proyecto de remodelación o carpintería a medida en Lakeland, FL. Llámenos, escríbanos por WhatsApp o envíe un mensaje.',
    },
    thanks: {
      title: 'Gracias | Cubela Brothers',
      description: 'Recibimos su solicitud y nos comunicaremos con usted pronto.',
    },
  },

  home: {
    hero: {
      eyebrow: 'Negocio familiar · Lakeland, Florida',
      title: 'Hecho por hermanos.<br><em>Construido para durar.</em>',
      lead:
        'Desde duchas de obra revestidas hasta gabinetes de cocina a medida, remodelamos hogares en Lakeland con el cuidado de un negocio familiar: un solo equipo para la albañilería y la carpintería fina, de principio a fin.',
      cta: 'Pida su presupuesto gratis',
      cta2: 'Vea nuestros trabajos',
      trust: ['Presupuestos gratis a domicilio', 'We speak English', 'Obras limpias y respetuosas'],
      badgeTitle: 'Dos oficios. Un equipo.',
      badgeText: 'Albañilería y carpintería',
    },
    strip: [
      { icon: 'layers', text: 'Dos oficios, un solo equipo' },
      { icon: 'users', text: 'Un hermano en cada obra' },
      { icon: 'file', text: 'Presupuestos detallados por escrito' },
      { icon: 'pin', text: 'Servimos todo el condado de Polk' },
    ],
    value: {
      eyebrow: 'Por qué Cubela Brothers',
      title: 'Dos oficios. Una familia. Cero complicaciones.',
      lead:
        'La mayoría de las remodelaciones se atrasan entre el que pone la losa y el que hace los gabinetes. Nosotros eliminamos ese problema: los mismos hermanos que instalan su losa construyen sus gabinetes, para que todo encaje, quede alineado y se termine a tiempo.',
      items: [
        {
          icon: 'layers',
          title: 'Albañilería y carpintería en un solo lugar',
          text: 'Sin coordinar subcontratistas. Paredes, losas, gabinetes y molduras se planifican juntos y los construye el mismo equipo.',
        },
        {
          icon: 'users',
          title: 'Los dueños están en su obra',
          text: 'Un hermano Cubela está en el sitio cada día de trabajo. Siempre sabrá quién está en su casa y a quién llamar.',
        },
        {
          icon: 'sun',
          title: 'Pensado para casas en Florida',
          text: 'Humedad, paredes de bloque, pisos sobre losa de concreto, stucco: elegimos materiales y métodos que resisten el clima de la Florida Central.',
        },
        {
          icon: 'file',
          title: 'Respuestas claras, por escrito',
          text: 'Presupuestos detallados y plazos honestos antes de empezar. Sin cargos sorpresa al final.',
        },
      ],
    },
    services: {
      eyebrow: 'Lo que hacemos',
      title: 'Dos oficios. Un mismo estándar de calidad.',
      remodel: {
        kicker: 'Albañilería y losas',
        title: 'Remodelación y Albañilería',
        text: 'Baños, duchas, cocinas y pisos: desde la demolición hasta la última junta. Buena preparación, instalación de losa precisa y acabados limpios que lucen igual de bien el primer día que diez años después.',
        list: [
          'Remodelación de baños y duchas',
          'Losas y porcelanato de gran formato',
          'Remodelación de cocinas',
          'Instalación de pisos',
          'Reparación de drywall, stucco y bloque',
          'Nichos, bancos y bordillos de ducha',
        ],
        link: 'Ver remodelación',
      },
      carpentry: {
        kicker: 'Carpintería fina',
        title: 'Muebles a Medida y Carpintería',
        text: 'Gabinetes, tocadores, muebles empotrados y piezas diseñadas según su forma de vivir, fabricados en nuestro propio taller e instalados por las mismas manos que los hicieron.',
        list: [
          'Gabinetes de cocina a medida',
          'Tocadores de baño',
          'Muebles empotrados y centros de entretenimiento',
          'Clósets y despensas',
          'Molduras, zócalos y acabados en madera',
          'Mesas y piezas únicas',
        ],
        link: 'Ver carpintería',
      },
    },
    work: {
      eyebrow: 'Proyectos recientes',
      title: 'Trabajos que firmamos con orgullo',
      lead: 'Proyectos reales en hogares de Lakeland y alrededores. Todas las fotos de este sitio son trabajos nuestros.',
      cta: 'Ver el portafolio completo',
    },
    stages: {
      eyebrow: 'Dentro de un proyecto',
      title: 'De la instalación a la cocina terminada',
      lead: 'Gabinetes a medida color salvia fabricados en nuestro taller y, después, un salpicadero de mosaico de vidrio para completar el espacio. La misma cocina, en dos etapas.',
      before: 'Etapa 1 · Gabinetes y encimera',
      after: 'Terminado · Salpicadero de mosaico',
    },
    process: {
      eyebrow: 'Cómo trabajamos',
      title: 'Un proceso simple y honesto',
      steps: [
        {
          title: 'Cuéntenos su proyecto',
          text: 'Llámenos, escríbanos por WhatsApp o envíe el formulario. Coordinamos una visita en el horario que le convenga.',
        },
        {
          title: 'Presupuesto gratis a domicilio',
          text: 'Medimos, escuchamos y le entregamos un presupuesto claro por escrito con materiales, opciones y plazos.',
        },
        {
          title: 'Manos a la obra',
          text: 'Demolición, albañilería, losas y carpintería a cargo de nuestro propio equipo, con limpieza diaria y avances constantes.',
        },
        {
          title: 'Revisión final',
          text: 'Recorremos juntos el trabajo terminado, y no lo damos por cerrado hasta que usted esté feliz con cada detalle.',
        },
      ],
    },
    reviews: {
      eyebrow: 'Opiniones de clientes',
      title: 'Lo que dicen las familias de Lakeland',
      more: 'Lea nuestras reseñas en Google',
      // PLANTILLAS — reemplazar por reseñas reales de clientes (con su permiso) antes de publicar.
      items: [
        {
          quote:
            'Convirtieron nuestro baño anticuado en algo que parece un spa. Cada línea de losa está recta, cada esquina limpia, y limpiaron todos los días.',
          name: 'Maria G.',
          place: 'South Lakeland',
          project: 'Remodelación de ducha',
        },
        {
          quote:
            'Tener un solo equipo para la losa y el tocador lo hizo todo más fácil. Quedó a la medida exacta. Ya los contratamos para la cocina.',
          name: 'Jason & Erin T.',
          place: 'Winter Haven',
          project: 'Baño y tocador',
        },
        {
          quote:
            'Muy profesionales y honestos. Nos explicaron todo en español, cumplieron con el presupuesto y la cocina quedó preciosa.',
          name: 'Rosa M.',
          place: 'Lakeland',
          project: 'Gabinetes de cocina a medida',
        },
      ],
    },
    area: {
      title: 'Orgullosos de servir al condado de Polk',
      text: 'Con base en Lakeland y trabajando en toda la Florida Central, incluyendo:',
    },
    cta: {
      title: '¿Listo para empezar su proyecto?',
      text: 'Cuéntenos lo que tiene en mente. Vamos a su casa, tomamos medidas y le damos un presupuesto gratis y sin presión.',
      btn: 'Pida su presupuesto gratis',
      or: 'o llame al',
    },
  },

  services: {
    hero: {
      eyebrow: 'Servicios',
      title: 'Remodelación y carpintería fina de un mismo equipo familiar',
      lead: 'Ya sea la remodelación completa de un baño, una cocina nueva o un solo mueble a medida, usted trata directamente con los hermanos que lo construyen.',
    },
    remodel: {
      id: 'remodelacion',
      kicker: 'Servicio 01',
      title: 'Remodelación y Albañilería',
      intro:
        'La estructura y las superficies de su hogar, bien hechas de adentro hacia afuera. Nos encargamos de la demolición, la preparación y la impermeabilización para que las losas y los acabados que usted ve se mantengan hermosos por años.',
      groups: [
        {
          icon: 'bath',
          title: 'Baños y duchas',
          text: 'Duchas de obra y sin bordillo, cambio de bañera a ducha, nichos y bancos, impermeabilización e instalación de grifería.',
        },
        {
          icon: 'grid',
          title: 'Losas y piedra',
          text: 'Porcelanato de gran formato, mosaicos, pisos hexagonales, azulejo tipo metro y salpicaderos, todo plano, nivelado y con juntas finas.',
        },
        {
          icon: 'home',
          title: 'Cocinas',
          text: 'Cambios de distribución, instalación de gabinetes, coordinación de encimeras y salpicaderos que unifican el espacio.',
        },
        {
          icon: 'layers',
          title: 'Pisos',
          text: 'Porcelanato y cerámica, vinilo de lujo (LVP) y transiciones limpias entre habitaciones.',
        },
        {
          icon: 'brick',
          title: 'Paredes y albañilería',
          text: 'Drywall, igualación de textura, parches de stucco, trabajos en bloque y los pequeños arreglos que hacen que una remodelación se sienta terminada.',
        },
      ],
    },
    carpentry: {
      id: 'carpinteria',
      kicker: 'Servicio 02',
      title: 'Muebles a Medida y Carpintería',
      intro:
        'Carpintería hecha para su espacio, no sacada de un catálogo. Todo se mide en su casa, se fabrica en nuestro taller de Lakeland y lo instalan las mismas personas que lo hicieron.',
      groups: [
        {
          icon: 'cabinet',
          title: 'Gabinetes de cocina',
          text: 'Puertas shaker, lisas o de panel, herrajes de cierre suave, pintados o teñidos, construidos a su medida exacta.',
        },
        {
          icon: 'cabinet',
          title: 'Tocadores y muebles de baño',
          text: 'Tocadores a la medida de su espacio y de su losa, gabinetes para toallas y repisas flotantes.',
        },
        {
          icon: 'shelves',
          title: 'Muebles empotrados',
          text: 'Centros de entretenimiento, libreros, bancos bajo ventana, bancos de entrada y oficinas en casa.',
        },
        {
          icon: 'shelves',
          title: 'Clósets y despensas',
          text: 'Repisas, gavetas y organizadores que aprovechan cada centímetro de almacenamiento.',
        },
        {
          icon: 'ruler',
          title: 'Molduras y acabados',
          text: 'Zócalos, molduras de techo, marcos de puertas y ventanas, revestimientos y paredes decorativas.',
        },
        {
          icon: 'hammer',
          title: 'Muebles a medida',
          text: 'Mesas, bancos y piezas únicas hechas a mano para su hogar.',
        },
      ],
    },
    together: {
      title: 'Mejor juntos',
      text: 'Cuando el mismo equipo construye la ducha y el tocador, las medidas coinciden, los plazos se alinean y hay un solo número al que llamar. Esa es la diferencia Cubela.',
      points: ['Un presupuesto', 'Un calendario', 'Un equipo responsable'],
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Preguntas comunes',
      items: [
        {
          q: '¿Ofrecen presupuestos gratis?',
          a: 'Sí. Visitamos su casa, tomamos medidas y le entregamos un presupuesto por escrito sin costo y sin compromiso.',
        },
        {
          q: '¿Hablan inglés y español?',
          a: 'Sí. Nuestra familia habla inglés y español, así que puede trabajar con nosotros en el idioma en que se sienta más cómodo.',
        },
        {
          q: '¿Cuánto tarda la remodelación de un baño?',
          a: 'La mayoría de las remodelaciones completas de baño toman de dos a cuatro semanas, según el tamaño, los materiales y lo que encontremos detrás de las paredes. Recibirá un plazo junto con su presupuesto.',
        },
        {
          q: '¿Pueden hacer muebles a medida aunque no esté remodelando?',
          a: 'Por supuesto. Muchos clientes nos buscan solo para gabinetes, un tocador, un mueble empotrado o una pieza única.',
        },
        {
          q: '¿Ayudan a elegir materiales y acabados?',
          a: 'Sí. Le recomendamos losas, maderas y herrajes que se ajusten a su estilo, a su presupuesto y al clima de la Florida, y podemos acompañarlo a escogerlos.',
        },
        {
          q: '¿En qué zonas trabajan?',
          a: 'Tenemos base en Lakeland y trabajamos en todo el condado de Polk y comunidades cercanas como Plant City y Brandon.',
        },
      ],
    },
  },

  portfolio: {
    hero: {
      eyebrow: 'Portafolio',
      title: 'Nuestro trabajo, de cerca',
      lead: 'Duchas, cocinas, losas y carpintería a medida en hogares de todo el condado de Polk. Toque cualquier foto para verla más grande.',
    },
    filters: {
      all: 'Todos',
      bath: 'Baños',
      kitchen: 'Cocinas',
      carpentry: 'Carpintería',
      tile: 'Losas',
      progress: 'En proceso',
    },
    filterLabel: 'Filtrar proyectos',
    open: 'Abrir foto',
    prev: 'Foto anterior',
    next: 'Foto siguiente',
    of: 'de',
    ctaTitle: '¿Le gusta lo que ve?',
    ctaText: 'Hablemos de lo que podemos construir en su hogar.',
  },

  about: {
    hero: {
      eyebrow: 'Nosotros',
      title: 'Primero hermanos. Siempre constructores.',
      lead: 'Cubela Brothers es un negocio familiar construido sobre una idea sencilla: tratar cada hogar como si fuera de nuestra propia familia.',
    },
    story: {
      eyebrow: 'Nuestra historia',
      title: 'Un oficio de familia, bien hecho',
      paras: [
        'Crecimos trabajando lado a lado: pasándonos herramientas, mezclando mortero y aprendiendo que los detalles que nadie nota son los que más importan. Hoy lo convertimos en Cubela Brothers, una empresa de Lakeland que hace dos cosas excepcionalmente bien: remodelación y carpintería a medida.',
        'Entre nosotros cubrimos los dos lados del oficio. Por un lado, la albañilería y la losa: nivelar el piso de una ducha hasta que cada línea quede perfecta. Por el otro, el taller: transformar madera en bruto en gabinetes y muebles. Juntos, llevamos una habitación desde las paredes desnudas hasta la carpintería terminada sin pasarlo a nadie más.',
        'Cuando nos contrata, no recibe a un equipo que nunca ha visto. Recibe a los dueños: en su obra, contestando sus llamadas y poniendo el apellido de la familia en cada proyecto.',
      ],
    },
    values: {
      eyebrow: 'Lo que nos define',
      title: 'Nuestra forma de trabajar',
      items: [
        {
          icon: 'shield',
          title: 'Respeto por su hogar',
          text: 'Pisos protegidos, polvo controlado y el área de trabajo limpia todos los días.',
        },
        {
          icon: 'check',
          title: 'Bien hecho desde la primera vez',
          text: 'Buena preparación e impermeabilización. Lo que no se ve es lo que hace que dure.',
        },
        {
          icon: 'file',
          title: 'Lo decimos y lo cumplimos',
          text: 'Presupuestos claros, plazos honestos y avances que nunca tendrá que perseguir.',
        },
        {
          icon: 'heart',
          title: 'El apellido en cada obra',
          text: 'Nuestra reputación en Lakeland lo es todo, y la ganamos hogar por hogar.',
        },
      ],
    },
    quote: {
      text: 'Nuestro apellido está en el presupuesto, en la camioneta y en cada trabajo que terminamos. Es una promesa que tomamos de forma personal.',
      by: '— Los hermanos Cubela',
    },
  },

  contact: {
    hero: {
      eyebrow: 'Contacto',
      title: 'Hablemos de su proyecto',
      lead: 'Cuéntenos un poco sobre lo que tiene en mente. Normalmente respondemos en menos de un día hábil.',
    },
    form: {
      title: 'Solicite su presupuesto gratis',
      subject: 'Nueva solicitud de presupuesto — sitio web cubelabros (ES)',
      name: 'Nombre completo',
      phone: 'Teléfono',
      email: 'Correo electrónico',
      city: 'Ciudad',
      cityPlaceholder: 'Lakeland',
      service: '¿Qué necesita?',
      servicePlaceholder: 'Elija una opción…',
      services: [
        'Remodelación de baño / ducha',
        'Remodelación de cocina',
        'Losas o pisos',
        'Gabinetes a medida',
        'Muebles empotrados o a medida',
        'Otro / aún no estoy seguro',
      ],
      message: 'Cuéntenos sobre su proyecto',
      messagePlaceholder: 'Tamaño del espacio, qué le gustaría cambiar, plazo ideal…',
      langPref: 'Idioma preferido',
      required: 'Obligatorio',
      submit: 'Enviar mi solicitud',
      sending: 'Enviando…',
      success: '¡Gracias! Su solicitud fue enviada. Nos comunicaremos con usted pronto.',
      error: 'Algo salió mal. Inténtelo de nuevo o llámenos directamente.',
      invalid: 'Por favor complete los campos obligatorios.',
      privacy: 'Solo usamos sus datos para responder a su solicitud. Nunca enviamos spam.',
    },
    info: {
      title: '¿Prefiere hablar?',
      text: 'Llámenos o escríbanos: le atenderá un hermano Cubela.',
      mapTitle: 'Mapa de Lakeland, Florida',
    },
  },

  thanks: {
    title: '¡Gracias!',
    text: 'Recibimos su solicitud y nos comunicaremos con usted pronto. Si es urgente, llámenos.',
    back: 'Volver al inicio',
  },

  footer: {
    about: 'Remodelación y carpintería a medida en Lakeland, Florida. Un negocio familiar: dos oficios, un equipo y el apellido en cada obra.',
    explore: 'Explorar',
    servicesTitle: 'Servicios',
    contactTitle: 'Contacto',
    rights: 'Todos los derechos reservados.',
    madeIn: 'Hecho con orgullo en Lakeland, FL.',
  },
};
