import welcome from './components/welcome.vue';
import register from './components/register.vue';
import login from './components/login.vue';
const routes = [{
    path:'/',
    redirect:'/welcome?tag=welcome'
},{
    path:'/welcome',
    component:welcome
},{
  path:'/register',
  component:register
},{
  path:'/login',
  component:login
}];
export default routes;
