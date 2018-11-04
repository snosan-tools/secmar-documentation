sidebar = [
  ['/', 'Accueil'],
  '/CHANGELOG',
  '/langage_sql',
  '/redash',
  '/schema',
  '/tables_codes',
  '/snosan',
]
openDataSidebar = [
  ['/', 'Accueil'],
  '/preambule',
  '/CHANGELOG',
  '/cross',
  '/donnees',
  '/schema',
  '/tables_codes',
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
  },
}
