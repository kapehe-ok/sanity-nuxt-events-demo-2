export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-demo-2-studio',
                  apiId: 'f38412d1-6512-4541-b61d-939de059e236'
                },
                {
                  buildHookId: '618ece58e2181a1f656c1f19',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-demo-2',
                  apiId: '2ae703bd-c4e2-49fd-b85e-fa0022a1036e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kapehe-ok/sanity-nuxt-events-demo-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-demo-2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
