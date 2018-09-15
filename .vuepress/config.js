sidebar = [
  ['/', 'Accueil'],
  '/CHANGELOG',
  '/schema',
]
openDataSidebar = [
  ['/', 'Accueil'],
  '/preambule',
  '/CHANGELOG',
  '/cross',
  '/donnees',
  '/schema',
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
    ['link', { rel: 'icon', href: 'https://www.snosan.fr/themes/rainlab-vanilla/assets/images/favicon.png' }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    sidebar: sidebar,
    sidebarDepth: 1,
    lastUpdated: 'Last Updated'
  },
}
