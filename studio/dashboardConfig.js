export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6274d342f6eb6a3a5d981380',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cqaucr3s',
                  apiId: 'd5276e1d-44e6-4074-a31e-26fd62ac84c7'
                },
                {
                  buildHookId: '6274d34371a5d03fe3efd51e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zf3dm8e3',
                  apiId: '51a841ac-71ca-4f09-ae92-d9bc964cf5ea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Emerson1220/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zf3dm8e3.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
