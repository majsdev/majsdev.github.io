import {
  About, Art, Home, Posts, Work,
} from './pages';

export const routes = [
  { path: '/gb/', name: 'Home', component: Home },
  { path: '/gb/about', name: 'About', component: About },
  { path: '/gb/art', name: 'Art', component: Art },
  // {path: '/gb/work', name: 'Work', component: Work},
  { path: '/gb/posts', name: 'Posts', component: Posts },
];

export const NUMBER_OF_ROUTES = routes.length;
