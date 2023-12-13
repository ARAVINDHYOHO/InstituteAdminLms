// assets
import { IconKey } from '@tabler/icons';



const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Authentication',
  // caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'dropDown',
      title: 'Authentication',
      type: 'collapse',
      icon:icons.IconKey,
      children: [
        {
          id: 'login3',
          title: 'Login',
          type: 'item',
          url: '/LoginPage', 
          target: false
        },

        // {
        //   id: 'register3',
        //   title: 'Register',
        //   type: 'item',
        //   url: '/pages/register/register3',
        //   target: true
        // },
      ]
      
    }
  ]
};

export default pages;
