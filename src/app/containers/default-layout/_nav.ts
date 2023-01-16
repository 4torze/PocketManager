import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Menu'
  },
  {
    name: 'Informations General',
    url: 'Information-general',
    iconComponent: { name: 'cil-layers' }
  },
  {
    name: "Flux Monnetaire",
    url: '/flux-entreprise',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Entrer',
        url: '/flux-entreprise/enter'
      },
      {
        name: 'Sortir',
        url: '/flux-entreprise/out'
      },
     
    ]
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
];
