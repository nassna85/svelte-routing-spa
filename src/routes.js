import Login from './views/public/Login.svelte'
import Posts from './views/private/Posts.svelte';
import Home from "./views/private/Home.svelte"
import PublicLayout from './views/public/Layout.svelte'
import PrivateLayout from './views/private/Layout.svelte'
import ShowPost from "./views/private/ShowPost.svelte";
import PostCreate from "./views/private/PostCreate.svelte";
import PostEdit from "./views/private/PostEdit.svelte";
import isAuthenticated from "./stores/auth"

let isLogged;

function userIsAdmin() {
    //check if user is admin and returns true or false
    isAuthenticated.subscribe(value => {
        isLogged = value;
    });
    return isLogged;
  }
   /*
  const routes = [
    {
      name: '/',
      component: Home,
      onlyIf: {guard:userIsAdmin, redirect:'/login'},
      layout:PrivateLayout
    },
    { name: 'login', component: Login, layout: PublicLayout },
    {
      name: 'posts',
      component: Posts,
      onlyIf: { guard: userIsAdmin, redirect: '/login' },
      layout:PrivateLayout
    },
  ]
  */
 const routes = [
  {
    name: '/',
    component: Home,
    onlyIf: {guard:userIsAdmin, redirect:'/login'},
    layout:PrivateLayout
  },
  { name: 'login', component: Login, layout: PublicLayout },
  {
    name: 'posts',
    component: '',
    onlyIf: { guard: userIsAdmin, redirect: '/login' },
    layout:PrivateLayout,
    nestedRoutes:[
      {
        name:'index',
        component:Posts
      },
      {
        name:'new',
        component: PostCreate
      },
      {
        name:'show/:id',
        component: ShowPost
      },
      {
        name:':id/edit',
        component: PostEdit
      }
    ]
  },
]
   
  export { routes }