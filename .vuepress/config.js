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
base = '/'

if (process.env.MODE === 'opendata') {
  sidebar = openDataSidebar
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
  }
}
