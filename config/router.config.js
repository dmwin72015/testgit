module.exports = [{
  path: '/user',
  component: '../layouts/UserLayout',
  routes: [
    {
      name: 'login',
      path: '/user/login',
      component: './user/login',
    },
  ],
},
{
  path: '/',
  component: '../layouts/SecurityLayout',
  routes: [
    {
      path: '/',
      component: '../layouts/BasicLayout',
      authority: ['admin', 'user'],
      routes: [
        {
          path: '/',
          redirect: '/welcome',
        },
        {
          path: '/welcome',
          name: 'welcome',
          icon: 'smile',
          component: './Welcome',
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          icon: 'dashboard',
          component: './Dashboard.jsx',
        },
        {
          path: '/content',
          name: 'content-manage',
          icon: 'dashboard',
          routes: [
            {
              path: '/content/article',
              name: 'article',
              component: "./content/Article.jsx"
            }
          ]
        },
        {
          path: '/account/profile',
          icon: 'profile',
          name: 'personal',
          hideInMenu: true,
          component: "./account/Profile.jsx"
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
},
{
  component: './404',
}]