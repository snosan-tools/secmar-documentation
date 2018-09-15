module.exports = {
  title: 'SECMAR',
  description: 'Jeu de données des affaires maritimes sur l\'assistance et le sauvetage en mer',
  base: '/secmar-documentation/',
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
    sidebar: [
      ['/', 'Accueil'],
      '/preambule',
      '/cross',
      '/donnees',
      '/schema',
      '/tables',
    ],
    sidebarDepth: 1,
    lastUpdated: 'Last Updated'
  },
}
