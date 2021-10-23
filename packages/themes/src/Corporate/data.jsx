import textToMultiline from '@pagerland/common/src/utils/textToMultiline';
import background2x from './assets/header-photo@2x.jpg';
import background from './assets/header-photo.jpg';
import Goals from './assets/our-goals.png';
import Goals2x from './assets/our-goals@2x.png';
import Mission from './assets/our-mission.png';
import Mission2x from './assets/our-mission@2x.png';
import Tech1 from './assets/tech-1.png';
import Tech2 from './assets/tech-2.jpg';
import Tech3 from './assets/tech-3.png';
import Tech4 from './assets/tech-4.jpg';
import Bio from './assets/bio-1.png';


import Consulting from './assets/consulting.svg';
import Auditing from './assets/auditing.svg';
import Strategy from './assets/strategy.svg';

export default {
  title: 'Almadental',
  navbar: {
    links: [
      {
        to: 'offer',
        label: 'Servizi',
      },
      {
        to: 'goals',
        label: 'Chi siamo',
      },
      {
        to: 'mission',
        label: 'Tecnologie',
      },
      // {
      //   to: 'team',
      //   label: 'Team',
      // },
      // {
      //   to: 'testimonials',
      //   label: 'Recensioni',
      // },
      // {
      //   to: 'pricing',
      //   label: 'Pricing',
      // },
      {
        to: 'contact',
        label: 'Contatti',
      },
    ],
    actions: [
      {
        href:
          'tel:3498229508',
        label: 'Chiama',
      },
    ],
  },
  welcome: {
    background: {
      src: background,
      srcSet: `${background} 1x, ${background2x} 2x`,
      alt: 'background',
    },
    title: 'Almadental',
    subtitle: 'Laboratorio',
    description:
      'Classiche lavorazioni e tecnologie innovative',
    actions: [
      {
        as: 'a',
        href:
          'tel:3498229508',
        children: 'Chiama',
      },
      {
        to: 'offer',
        children: 'Su di noi',
        variant: 'outline',
      },
    ],
  },
  offer: {
    subtitle: 'I nostri',
    title: 'Servizi',
    services: [
      {
        icon: Consulting,
        title: 'Toronto base',
        text:
          'Barra fresata in titanio su cui si montano denti commerciali e resina rosa',
      },
      {
        icon: Auditing,
        title: 'Toronto Elite ',
        text:
          'Barra anatomica in titanio con rivestimento in PMMA rinforzato multilayer.',
      },
      {
        icon: Strategy,
        title: 'Protesi su barra',
        text:
          'Barra in titanio con equator avvitati direttamente, contro barra in titanio, denti 4 strati montati',
      },
      {
        icon: Consulting,
        title: 'Abutment individuale',
        text:
          'Fresato dal pieno in titanio medicale grado 5',
      },
      {
        icon: Auditing,
        title: 'Zirconia monolitica',
        text:
          'Zirconia multilayer di alta qualità molto estetica e resistente da 1200Mpa',
      },
      {
        icon: Strategy,
        title: 'Protesi Totale',
        text:
          'Realizzata a denti in quattro strati e resina rosa',
      },

    ],
  },
  goals: {
    img: {
      src: Goals,
      srcSet: `${Goals} 1x, ${Goals2x} 2x`,
    },
    subtitle: 'Laboratorio odontotecnico',
    title: 'Chi siamo',
    text:
      'Il laboratorio almadental offre una vasta gamma di tecnologia e materiali clicamente convalidati che ci consentono di sfruttare avanzati flussi di lavoro digitali. Capaci di fornire ai clienti indicazioni precise con velocità ed efficienza, mantenendo al suo interno anche le classiche lavorazioni del laboratorio odontotecnico',
    cta: {
      children: 'Scopri di più',
      href:
        '/bio',
      // target: '_blank',
      as: 'a',
    },
  },
  mission: {
    img: {
      src: Mission,
      srcSet: `${Mission} 1x, ${Mission2x} 2x`,
    },
    subtitle: 'Le nostre',
    title: 'Tecnologie',
    text:"L'odontoriatria digitale sta cambiando negli ultimi tempi e con essi le metodologie, ci teniamo a tenerci sempre aggiornati con l'introduzione di scanner, software, stampa 3D e materiali innovativi.",
    cta: {
      children: 'Vedi tutte le tecnologie',
      href:
        '/tech',
      // target: '_blank',
      as: 'a',
    },
  },
  supportCta: {
    subtitle: 'Sei un dentista?',
    title: 'Contattaci subito!',
    text:
      'Almadental collabora con molti studi dentistici, piccole e grandi realtà si rivolgono a noi per le tecnologie, la velocità e la professionalità che disponiamo. Unisciti a noi.',
    buttons: [
      {
        label: 'Manda una Mail!',
        href: 'to:almadentale@katamail.com',
        target: '_blank',
      },
      {
        label: 'WhatsApp',
        href: 'http://wa.me/393498229508',
        target: '_blank',
      },
    ],
  },
  team: {
    techArray: [
    {
      img: {
        src: Tech1,
        srcSet: `${Tech1} 1x`,
      },
      // subtitle: 'Our biggest value are people',
      title: 'Fresatore VHF S1',
      text:
        'Fresatore da tavolo a controllo numerico a cinque assi interpolati in continuo, in grado di fresare sia protesi cementate che avvitate (corone, ponti, intarsi, faccette) nei seguenti materiali: zirconia, PMMA, composito, cromo edisilicato. Fresa sia a secco che a umido a seconda della durezza del materiale utilizzato',
    },
    {
      img: {
        src: Tech2,
        srcSet: `${Tech2} 1x`,
      },
      // subtitle: 'Our biggest value are people',
      title: 'Fresatore DentalPlus per titanio',
      text:
        'Fresatore a controllo numerico a cinque assi interpolati in continuo per realizzare fori inclinati. Può fresare qualsiasi tipo di protesi, sia cementate che avvitate (corone, aubutments, ponti, ponti avvitati, attacchi, intarsi, faccette) nei seguenti materiali: cera, PMMA, altre resine, composito, ossido di zirconio, disilicato di litio, cromo-cobalto, titanio. Fresa sia a secco che a umido a seconda della durezza del materiale utilizzato',
    },
    {
      img: {
        src: Tech3,
        srcSet: `${Tech3} 1x`,
      },
      // subtitle: 'Our biggest value are people',
      title: '3Shape Scanner',
      text:
        'Scanner intraorale utilizzato per rilevare le impronte dentali digitali sostituendo i tradizionali materiali da impronta come alginato e silicone.',
    },
    {
      img: {
        src: Tech4,
        srcSet: `${Tech4} 1x`,
      },
      subtitle: 'Stampante dentale 3D ',
      title: 'Form3',
      text:
        "Dall' impronta rilevata dallo scanner intraorale questa stampante prototipa modelli 3D provvisori, bite e mascherine di ogni genere.",
    }
  ],
    // people: [
    //   {
    //     avatar: {
    //       src: Avatar1,
    //       srcSet: `${Avatar1} 1x, ${Avatar12x} 2x`,
    //     },
    //     name: 'Timothy Wilson',
    //     position: 'Co-Founder, CEO',
    //   },
    //   {
    //     avatar: {
    //       src: Avatar2,
    //       srcSet: `${Avatar2} 1x, ${Avatar22x} 2x`,
    //     },
    //     name: 'Bernard Nguyen',
    //     position: 'Co-Founder, CEO',
    //   },
    //   {
    //     avatar: {
    //       src: Avatar3,
    //       srcSet: `${Avatar3} 1x, ${Avatar32x} 2x`,
    //     },
    //     name: 'Bessie Richards',
    //     position: 'Co-Founder, CEO',
    //   },
    //   {
    //     avatar: {
    //       src: Avatar4,
    //       srcSet: `${Avatar4} 1x, ${Avatar42x} 2x`,
    //     },
    //     name: 'Judith Black',
    //     position: 'Co-Founder, CEO',
    //   },
    //   {
    //     avatar: {
    //       src: Avatar5,
    //       srcSet: `${Avatar5} 1x, ${Avatar52x} 2x`,
    //     },
    //     name: 'Robert Edwards',
    //     position: 'Co-Founder, CEO',
    //   },
    //   {
    //     avatar: {
    //       src: Avatar6,
    //       srcSet: `${Avatar6} 1x, ${Avatar62x} 2x`,
    //     },
    //     name: 'Dianne Robertson',
    //     position: 'Co-Founder, CEO',
    //   },
    //   {
    //     avatar: {
    //       src: Avatar7,
    //       srcSet: `${Avatar7} 1x, ${Avatar72x} 2x`,
    //     },
    //     name: 'Shane Black',
    //     position: 'Co-Founder, CEO',
    //   },
    //   {
    //     avatar: {
    //       src: Avatar8,
    //       srcSet: `${Avatar8} 1x, ${Avatar82x} 2x`,
    //     },
    //     name: 'Nathan Fox',
    //     position: 'Co-Founder, CEO',
    //   },
    // ],
  },
  bio: {
    img: {
      src: Bio,
      srcSet: `${Bio} 1x`,
    },
    subtitle: 'Laboratorio odontotecnico',
    title: 'Almadental',
    text:textToMultiline`Almadental laboratorio odontotecnico nasce nel Gennaio del 2015, venne fondato dal professionista odontotecnico Macaluso Alessandro;\n\nDopo più di vent’anni di esperienza nel settore decise di unire le capacità manuali tradizionali di un laboratorio odontotecnico con le tecnologie di un vero e proprio centro fresaggio. Assicurando alla clientela un prodotto finale di ottima qualità e curato in ogni dettaglio`,
    },
  testimonials: {
    subtitle: 'Our customer reviews',
    title: 'Testimonials',
    comments: [
      {
        author: 'Pat Cooper, Big Company SEO',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a tellus turpis. Suspendisse posuere quam consequat magna bibendum pretium. Vivamus in porta mauris. Vestibulum ut euismod purus. Sed eu malesuada elit. Curabitur posuere consequat gravida. Donec laoreet volutpat sapien, sed malesuada nisi pellentesque et. Etiam imperdiet nunc enim, sit amet tempor sapien molestie id.`,
      },
      {
        author: 'Orsola Jeroch, Bigger Company CTO',
        text: `Praesent nec commodo arcu. Vivamus convallis pretium malesuada. Aenean feugiat maximus suscipit. Fusce maximus aliquam ipsum, at hendrerit augue aliquet ac. Maecenas scelerisque, massa a fringilla imperdiet, velit purus gravida dolor, et blandit lorem nulla non eros.`,
      },
    ],
  },
  contactCta: {
    subtitle: 'Interested in our services?',
    title: 'Get a free quote!',
    text:
      'Ut at cursus justo, non luctus lacus. Proin cursus felis at dolor auctor molestie. Aenean fringilla dolor quis felis laoreet.',
    buttons: [
      {
        label: 'Get a quote',
        href:
          'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
      },
      {
        label: 'Contact us',
        href: 'https://coffeecream.freshdesk.com/',
        variant: 'outline',
      },
    ],
  },
  pricing: {
    title: 'Pricing',
    prices: {
      currency: 'USD',
      types: {
        a: 'Monthly',
        b: 'Annually',
      },
      sections: [
        {
          title: 'Beginner',
          price: {
            a: '$0',
            b: '$0',
          },
          features: [
            {
              text: 'Ut commodo suscipit',
              check: true,
            },
            {
              text: 'Mauris congue viverra',
              check: true,
            },
            {
              text: 'Nunc non orci ut mi',
              check: false,
            },
            {
              text: 'Nullam vitae tortor',
              check: false,
            },
            {
              text: 'Lorem ipsum dolor sit',
              check: false,
            },
            {
              text: 'Fusce quis vestibulum',
              check: false,
            },
          ],
          button: {
            text: 'Get a quote',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          title: 'Advanced',
          price: {
            a: '$12',
            b: '$120',
          },
          features: [
            {
              text: 'Ut commodo suscipit',
              check: true,
            },
            {
              text: 'Mauris congue viverra',
              check: true,
            },
            {
              text: 'Nunc non orci ut mi',
              check: true,
            },
            {
              text: 'Nullam vitae tortor',
              check: true,
            },
            {
              text: 'Lorem ipsum dolor sit',
              check: false,
            },
            {
              text: 'Fusce quis vestibulum',
              check: false,
            },
          ],
          button: {
            text: 'Get a quote',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          title: 'Expert',
          price: {
            a: '$24',
            b: '$240',
          },
          features: [
            {
              text: 'Ut commodo suscipit',
              check: true,
            },
            {
              text: 'Mauris congue viverra',
              check: true,
            },
            {
              text: 'Nunc non orci ut mi',
              check: true,
            },
            {
              text: 'Nullam vitae tortor',
              check: true,
            },
            {
              text: 'Lorem ipsum dolor sit',
              check: true,
            },
            {
              text: 'Fusce quis vestibulum',
              check: true,
            },
          ],
          button: {
            text: 'Get a quote',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
      ],
    },
  },
  contact: {
    subtitle: 'Contattaci per ulteriori informazione',
    title: 'Contatti',
    addresses: [
      {
        title: 'Almadental',
        address: textToMultiline`Via Cecilio 26\nComo, CO 22100\nItalia`,
        email: 'almadentale@katamail.com',
        phone: '+39 349 822 9508',
      },
    ],
  },
  newsletter: {
    subtitle: 'Stay up to date',
    title: 'Sign up to newsletter',
    buttonText: 'Get a quote',
    inputPlaceholder: 'Your email address',
  },
  copyright: '© 2020 brtsml',
};
