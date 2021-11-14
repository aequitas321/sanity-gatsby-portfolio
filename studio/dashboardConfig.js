export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '619174befcfd5d5787e8da7a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-e2ywj9u3',
                  apiId: 'ec0de54e-50f6-494b-bbca-fc3ee3c4d936'
                },
                {
                  buildHookId: '619174be35b527056aa6d278',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-g532r9ce',
                  apiId: '8d460ec1-5230-4834-a387-15198477e353'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aequitas321/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-g532r9ce.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
