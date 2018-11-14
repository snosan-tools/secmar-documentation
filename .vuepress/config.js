sidebar = [
  ['/', 'Accueil'],
  '/CHANGELOG',
  {
    title: 'Formations',
    collapsable: true,
    children: [
      '/langage_sql',
      '/redash',
    ]
  },
  {
    title: 'Modèle de données',
    collapsable: false,
    children: [
      '/schema',
      '/tables_codes',
    ]
  },
  {
    title: 'SNOSAN',
    collapsable: true,
    children: [
      '/snosan',
      '/site_web_snosan',
    ]
  }
]
nav = [
  { text: 'Redash', link: 'https://redash.snosan.fr' },
  { text: 'Cartographie', link: 'https://carte.snosan.fr' },
  { text: 'Contact', link: '/snosan.html#contact' },
]

openDataSidebar = [
  ['/', 'Accueil'],
  '/preambule',
  '/CHANGELOG',
  {
    title: 'Concepts métier',
    collapsable: true,
    children: [
      '/cross',
      '/donnees',
    ]
  },
  {
    title: 'Modèle de données',
    collapsable: false,
    children: [
      '/schema',
      '/tables_codes',
    ]
  }
]
opendataNav = [
  { text: 'Données brutes', link: 'https://www.data.gouv.fr/fr/datasets/operations-coordonnees-par-les-cross/' },
  { text: 'Cartographie', link: 'https://carte.snosan.fr' },
]
base = '/'

if (process.env.MODE === 'opendata') {
  sidebar = openDataSidebar
  nav = opendataNav
  base = '/secmar-documentation/'
}

module.exports = {
  title: 'SECMAR',
  description: 'Jeu de données des affaires maritimes sur l\'assistance et le sauvetage en mer',
  base: base,
  locales: {
    '/': {
      lang: 'fr',
      toggle: {
        hideText: 'Cacher le menu',
        showText: 'Afficher le menu'
      }
    }
  },
  head: [
    ['link', { rel: 'icon', href: 'https://www.snosan.fr/themes/rainlab-vanilla/assets/images/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#0d3f94' }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    sidebar: sidebar,
    sidebarDepth: 1,
    nav: nav
  }
}
