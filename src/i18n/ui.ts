export const defaultLang = 'en' as const;
export const locales = ['en', 'de'] as const;
export type Lang = (typeof locales)[number];

export const languages: Record<Lang, { label: string; short: string }> = {
  en: { label: 'English', short: 'EN' },
  de: { label: 'Deutsch', short: 'DE' },
};

export const ui = {
  en: {
    meta: {
      siteDescription:
        'BETOPLAST AG is a Swiss energy and infrastructure company with three decades in oil, gas and power — from project development and engineering to industrial construction and energy trading.',
      tagline: 'Energy & infrastructure since 1987',
    },
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      partners: 'Partners',
      contact: 'Contact',
    },
    common: {
      getInTouch: 'Get in touch',
      contactUs: 'Contact us',
      exploreServices: 'Explore services',
      viewServices: 'View all services',
      viewPartners: 'View partners',
      skipToContent: 'Skip to content',
    },
    footer: {
      desc: 'BETOPLAST AG — a Swiss energy and infrastructure company active in power projects, hydrocarbon resources, industrial construction and energy trading.',
      navigate: 'Navigate',
      office: 'Registered office',
      rights: 'All rights reserved.',
      note: 'Power · oil & gas · construction · trading',
      uid: 'UID',
    },
    legalEntity: 'BETOPLAST AG',
    address: {
      line1: 'Zentralstrasse 44',
      line2: '6003 Lucerne',
      country: 'Switzerland',
    },
    cta: {
      defaultHeading: 'Let’s discuss your energy project',
      defaultText: 'Tell us the scope — development, engineering, construction or supply — and we will come back with a way forward.',
    },
    related: {
      eyebrow: 'Related company',
      footerLabel: 'Sister company',
      text: 'Our sister company, Almalyk MMC – Betoplast, produces oxygen-free copper and electronics-grade materials — the conductors behind the power and electrification projects we build.',
      cta: 'Visit Almalyk MMC – Betoplast',
      servicesLink: 'Copper conductors by our sister company',
    },
    home: {
      heroEyebrow: 'Energy & infrastructure · Switzerland',
      heroH1: 'Energy infrastructure,<br />engineered to endure.',
      heroLead:
        'BETOPLAST AG has spent three decades building and operating energy infrastructure — from power plants and substations to oil, gas and petrochemical facilities, backed by an international trading desk.',
      stats: [
        { v: '1987', l: 'Founded in Switzerland' },
        { v: '30+ yrs', l: 'In oil, gas & power' },
        { v: '4', l: 'Core business areas' },
        { v: '9', l: 'International partners' },
      ],
      introEyebrow: 'What we do',
      introH2: 'From concept and design to operation and trading',
      introLead:
        'We work across the full lifecycle of energy assets — selecting technology, designing and building facilities, supervising construction and operations, and trading the resources that keep them running.',
      capabilities: [
        { title: 'Power industry projects', text: 'Development, design and construction of power plants, substations and grid infrastructure.' },
        { title: 'Hydrocarbon resources', text: 'Full-lifecycle management of oil and gas assets — from concept design through technology selection and operations.' },
        { title: 'Industrial construction', text: 'Heavy-industry builds including petrochemical complexes and oil & gas processing plants.' },
        { title: 'Energy trading', text: 'Trading operations across coal and natural gas markets, connecting producers and consumers.' },
      ],
      servicesEyebrow: 'Services',
      servicesH2: 'Four areas, one partner',
    },
    about: {
      heroEyebrow: 'About us',
      heroH1: 'A Swiss energy and infrastructure house',
      heroLead:
        'Founded in Lucerne in 1987, BETOPLAST AG combines engineering depth with commercial reach across the energy value chain.',
      whoEyebrow: 'Who we are',
      whoH2: 'Three decades in energy',
      whoP1:
        'BETOPLAST AG is a Swiss company with more than thirty years of experience in the oil and gas sector and in the wider energy industry. We develop, design and build energy and infrastructure facilities, and we operate them through their working life.',
      whoP2:
        'Our work spans electric power projects, hydrocarbon energy resources, industrial construction and the trading of energy commodities — a combination that lets us take a project from first concept all the way through to a producing, traded asset.',
      approachEyebrow: 'How we operate',
      approachH2: 'Two complementary tracks',
      approachLead:
        'A projects track that creates and runs assets, and a trading track that moves the commodities those assets depend on.',
      tracks: [
        { tag: 'Projects & engineering', title: 'Build and operate', text: 'Conceptual design, technology selection, engineering, construction and technical supervision for power, oil, gas and petrochemical facilities — from greenfield to commissioning and operation.' },
        { tag: 'Trading & supply', title: 'Move the resource', text: 'Trading operations in coal and natural gas markets, linking producers with industrial consumers and supporting the assets we help create.' },
      ],
      factLegal: 'Legal entity',
      factUid: 'UID',
      factFounded: 'Founded',
      factLocation: 'Location',
    },
    services: {
      heroEyebrow: 'Services',
      heroH1: 'Across the energy value chain',
      heroLead:
        'Four areas of work, delivered to international standards — and often combined on a single project, from development through to supply.',
      items: [
        {
          title: 'Electric power industry projects',
          summary: 'Development, design and construction of power generation and transmission infrastructure.',
          points: [
            'Power plants and generation facilities',
            'Substations and grid connections',
            'Energy infrastructure design and construction',
          ],
        },
        {
          title: 'Hydrocarbon energy resources',
          summary: 'Full-lifecycle management of oil and gas assets, from concept through to operations.',
          points: [
            'Conceptual and front-end design',
            'Technology selection and engineering',
            'Technical supervision and operations support',
          ],
        },
        {
          title: 'Industrial construction & infrastructure',
          summary: 'Heavy-industry construction for the energy and processing sectors.',
          points: [
            'Petrochemical complexes',
            'Oil and gas processing plants',
            'Supporting industrial and logistics infrastructure',
          ],
        },
        {
          title: 'Energy trading',
          summary: 'Commodity trading that connects producers with industrial demand.',
          points: [
            'Coal trading operations',
            'Natural gas trading operations',
            'Supply linked to our project portfolio',
          ],
        },
      ],
      ctaHeading: 'Have a project or supply requirement?',
      ctaText: 'Send us the scope and we will tell you how we can help — and who from our network we would bring in.',
    },
    partners: {
      heroEyebrow: 'Partners',
      heroH1: 'Working with industry leaders',
      heroLead:
        'Over three decades we have delivered projects and trading operations alongside major energy companies and engineering contractors.',
      introEyebrow: 'Our network',
      introH2: 'Trusted by majors and EPC contractors',
      introText:
        'From national oil companies and global majors to leading engineering, procurement and construction firms, our partners reflect the scale and standards we work to. These relationships let us assemble the right team for each project and trade with confidence in international markets.',
      note: 'Selected partners and clients across our project and trading history.',
    },
    contact: {
      heroEyebrow: 'Contact us',
      heroH1: 'Let’s talk',
      heroLead: 'Tell us about your project, supply requirement or partnership idea. We will come back to you shortly.',
      directTitle: 'Direct contact',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      officeTitle: 'Registered office',
      legalTitle: 'Legal entity',
      uidLabel: 'UID',
      includeTitle: 'What to include',
      includeList: [
        'Type of project or requirement',
        'Location and timeframe',
        'Scope — development, engineering, construction or supply',
      ],
      fName: 'Full name',
      fCompany: 'Company',
      fEmail: 'Email',
      fCountry: 'Country',
      fInquiry: 'Inquiry type',
      fInterest: 'Area of interest',
      fMessage: 'Message',
      msgPlaceholder: 'Project, scope, location, timeframe…',
      selectPlaceholder: '— Select —',
      inquiryTypes: ['Project development', 'Engineering & construction', 'Trading & supply', 'Partnership', 'General inquiry'],
      submit: 'Send message',
      statusSending: 'Sending…',
      statusOk: 'Thank you — your message has been sent. We will be in touch shortly.',
      statusErr: 'Something went wrong. Please try again or email us directly.',
      statusNet: 'Network error. Please try again.',
      statusNotConfigured: 'Form endpoint not configured yet (set your endpoint in src/data/site.ts).',
    },
  },

  de: {
    meta: {
      siteDescription:
        'Die BETOPLAST AG ist ein Schweizer Energie- und Infrastrukturunternehmen mit drei Jahrzehnten Erfahrung in Öl, Gas und Strom — von Projektentwicklung und Engineering bis zu Industriebau und Energiehandel.',
      tagline: 'Energie & Infrastruktur seit 1987',
    },
    nav: {
      home: 'Start',
      about: 'Über uns',
      services: 'Leistungen',
      partners: 'Partner',
      contact: 'Kontakt',
    },
    common: {
      getInTouch: 'Kontakt aufnehmen',
      contactUs: 'Kontaktieren Sie uns',
      exploreServices: 'Leistungen ansehen',
      viewServices: 'Alle Leistungen',
      viewPartners: 'Partner ansehen',
      skipToContent: 'Zum Inhalt springen',
    },
    footer: {
      desc: 'BETOPLAST AG — ein Schweizer Energie- und Infrastrukturunternehmen in den Bereichen Stromprojekte, Kohlenwasserstoffe, Industriebau und Energiehandel.',
      navigate: 'Navigation',
      office: 'Eingetragener Sitz',
      rights: 'Alle Rechte vorbehalten.',
      note: 'Strom · Öl & Gas · Bau · Handel',
      uid: 'UID',
    },
    legalEntity: 'BETOPLAST AG',
    address: {
      line1: 'Zentralstrasse 44',
      line2: '6003 Luzern',
      country: 'Schweiz',
    },
    cta: {
      defaultHeading: 'Sprechen wir über Ihr Energieprojekt',
      defaultText: 'Nennen Sie uns den Umfang — Entwicklung, Engineering, Bau oder Lieferung — und wir zeigen Ihnen den Weg nach vorn.',
    },
    related: {
      eyebrow: 'Verbundenes Unternehmen',
      footerLabel: 'Schwestergesellschaft',
      text: 'Unser Schwesterunternehmen Almalyk MMC – Betoplast produziert sauerstofffreies Kupfer und Materialien in Elektronikqualität — die Leiter hinter den Strom- und Elektrifizierungsprojekten, die wir bauen.',
      cta: 'Almalyk MMC – Betoplast besuchen',
      servicesLink: 'Kupferleiter von unserem Schwesterunternehmen',
    },
    home: {
      heroEyebrow: 'Energie & Infrastruktur · Schweiz',
      heroH1: 'Energieinfrastruktur,<br />gebaut für Jahrzehnte.',
      heroLead:
        'Die BETOPLAST AG baut und betreibt seit drei Jahrzehnten Energieinfrastruktur — von Kraftwerken und Umspannwerken bis zu Öl-, Gas- und Petrochemieanlagen, ergänzt durch einen internationalen Handelsbereich.',
      stats: [
        { v: '1987', l: 'In der Schweiz gegründet' },
        { v: '30+ J.', l: 'In Öl, Gas & Strom' },
        { v: '4', l: 'Kerngeschäftsfelder' },
        { v: '9', l: 'Internationale Partner' },
      ],
      introEyebrow: 'Was wir tun',
      introH2: 'Von Konzept und Planung bis Betrieb und Handel',
      introLead:
        'Wir arbeiten über den gesamten Lebenszyklus von Energieanlagen — Technologieauswahl, Planung und Bau, Bauüberwachung und Betrieb sowie der Handel mit den Ressourcen, die diese Anlagen versorgen.',
      capabilities: [
        { title: 'Stromprojekte', text: 'Entwicklung, Planung und Bau von Kraftwerken, Umspannwerken und Netzinfrastruktur.' },
        { title: 'Kohlenwasserstoffe', text: 'Lebenszyklus-Management von Öl- und Gasanlagen — von der Konzeptplanung über die Technologieauswahl bis zum Betrieb.' },
        { title: 'Industriebau', text: 'Schwerindustrieller Bau, darunter Petrochemiekomplexe sowie Öl- und Gasaufbereitungsanlagen.' },
        { title: 'Energiehandel', text: 'Handelsaktivitäten in den Kohle- und Erdgasmärkten, die Produzenten und Verbraucher verbinden.' },
      ],
      servicesEyebrow: 'Leistungen',
      servicesH2: 'Vier Felder, ein Partner',
    },
    about: {
      heroEyebrow: 'Über uns',
      heroH1: 'Ein Schweizer Energie- und Infrastrukturhaus',
      heroLead:
        '1987 in Luzern gegründet, verbindet die BETOPLAST AG technische Tiefe mit kommerzieller Reichweite entlang der gesamten Energie-Wertschöpfungskette.',
      whoEyebrow: 'Wer wir sind',
      whoH2: 'Drei Jahrzehnte in der Energie',
      whoP1:
        'Die BETOPLAST AG ist ein Schweizer Unternehmen mit über dreissig Jahren Erfahrung im Öl- und Gassektor und in der breiteren Energiewirtschaft. Wir entwickeln, planen und bauen Energie- und Infrastrukturanlagen und betreiben sie über ihre gesamte Lebensdauer.',
      whoP2:
        'Unsere Arbeit umfasst Stromprojekte, Kohlenwasserstoff-Ressourcen, Industriebau und den Handel mit Energierohstoffen — eine Kombination, mit der wir ein Projekt vom ersten Konzept bis zur produzierenden, gehandelten Anlage führen.',
      approachEyebrow: 'Wie wir arbeiten',
      approachH2: 'Zwei sich ergänzende Bereiche',
      approachLead:
        'Ein Projektbereich, der Anlagen schafft und betreibt, und ein Handelsbereich, der die Rohstoffe bewegt, von denen diese Anlagen abhängen.',
      tracks: [
        { tag: 'Projekte & Engineering', title: 'Bauen und betreiben', text: 'Konzeptplanung, Technologieauswahl, Engineering, Bau und technische Überwachung für Strom-, Öl-, Gas- und Petrochemieanlagen — von der grünen Wiese bis zur Inbetriebnahme und zum Betrieb.' },
        { tag: 'Handel & Lieferung', title: 'Die Ressource bewegen', text: 'Handelsaktivitäten in den Kohle- und Erdgasmärkten, die Produzenten mit industriellen Verbrauchern verbinden und die Anlagen unterstützen, die wir mitgestalten.' },
      ],
      factLegal: 'Rechtsträger',
      factUid: 'UID',
      factFounded: 'Gegründet',
      factLocation: 'Standort',
    },
    services: {
      heroEyebrow: 'Leistungen',
      heroH1: 'Entlang der Energie-Wertschöpfungskette',
      heroLead:
        'Vier Arbeitsfelder nach internationalen Standards — oft in einem einzigen Projekt verbunden, von der Entwicklung bis zur Lieferung.',
      items: [
        {
          title: 'Projekte der Elektrizitätswirtschaft',
          summary: 'Entwicklung, Planung und Bau von Strom­erzeugungs- und Übertragungsinfrastruktur.',
          points: [
            'Kraftwerke und Erzeugungsanlagen',
            'Umspannwerke und Netzanschlüsse',
            'Planung und Bau von Energieinfrastruktur',
          ],
        },
        {
          title: 'Kohlenwasserstoff-Ressourcen',
          summary: 'Lebenszyklus-Management von Öl- und Gasanlagen, vom Konzept bis zum Betrieb.',
          points: [
            'Konzept- und Front-End-Planung',
            'Technologieauswahl und Engineering',
            'Technische Überwachung und Betriebsunterstützung',
          ],
        },
        {
          title: 'Industriebau & Infrastruktur',
          summary: 'Schwerindustrieller Bau für den Energie- und Verarbeitungssektor.',
          points: [
            'Petrochemiekomplexe',
            'Öl- und Gasaufbereitungsanlagen',
            'Unterstützende Industrie- und Logistikinfrastruktur',
          ],
        },
        {
          title: 'Energiehandel',
          summary: 'Rohstoffhandel, der Produzenten mit industrieller Nachfrage verbindet.',
          points: [
            'Handel mit Kohle',
            'Handel mit Erdgas',
            'Lieferung verknüpft mit unserem Projektportfolio',
          ],
        },
      ],
      ctaHeading: 'Haben Sie ein Projekt oder einen Lieferbedarf?',
      ctaText: 'Senden Sie uns den Umfang und wir sagen Ihnen, wie wir helfen können — und wen wir aus unserem Netzwerk einbinden würden.',
    },
    partners: {
      heroEyebrow: 'Partner',
      heroH1: 'Zusammenarbeit mit Branchenführern',
      heroLead:
        'In über drei Jahrzehnten haben wir Projekte und Handelsaktivitäten gemeinsam mit grossen Energieunternehmen und Engineering-Kontraktoren umgesetzt.',
      introEyebrow: 'Unser Netzwerk',
      introH2: 'Vertraut von Konzernen und EPC-Kontraktoren',
      introText:
        'Von nationalen Ölgesellschaften und globalen Konzernen bis zu führenden Engineering-, Beschaffungs- und Baufirmen — unsere Partner spiegeln den Massstab und die Standards wider, nach denen wir arbeiten. Diese Beziehungen erlauben es uns, für jedes Projekt das richtige Team zusammenzustellen und auf internationalen Märkten sicher zu handeln.',
      note: 'Ausgewählte Partner und Kunden aus unserer Projekt- und Handelsgeschichte.',
    },
    contact: {
      heroEyebrow: 'Kontakt',
      heroH1: 'Sprechen wir',
      heroLead: 'Erzählen Sie uns von Ihrem Projekt, Ihrem Lieferbedarf oder Ihrer Partnerschaftsidee. Wir melden uns in Kürze.',
      directTitle: 'Direkter Kontakt',
      emailLabel: 'E-Mail',
      phoneLabel: 'Telefon',
      officeTitle: 'Eingetragener Sitz',
      legalTitle: 'Rechtsträger',
      uidLabel: 'UID',
      includeTitle: 'Was Sie angeben sollten',
      includeList: [
        'Art des Projekts oder Bedarfs',
        'Standort und Zeitrahmen',
        'Umfang — Entwicklung, Engineering, Bau oder Lieferung',
      ],
      fName: 'Vollständiger Name',
      fCompany: 'Unternehmen',
      fEmail: 'E-Mail',
      fCountry: 'Land',
      fInquiry: 'Art der Anfrage',
      fInterest: 'Interessensgebiet',
      fMessage: 'Nachricht',
      msgPlaceholder: 'Projekt, Umfang, Standort, Zeitrahmen…',
      selectPlaceholder: '— Auswählen —',
      inquiryTypes: ['Projektentwicklung', 'Engineering & Bau', 'Handel & Lieferung', 'Partnerschaft', 'Allgemeine Anfrage'],
      submit: 'Nachricht senden',
      statusSending: 'Wird gesendet…',
      statusOk: 'Vielen Dank — Ihre Nachricht wurde gesendet. Wir melden uns in Kürze.',
      statusErr: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt.',
      statusNet: 'Netzwerkfehler. Bitte versuchen Sie es erneut.',
      statusNotConfigured: 'Formular-Endpunkt noch nicht konfiguriert (Endpunkt in src/data/site.ts setzen).',
    },
  },
} as const;
