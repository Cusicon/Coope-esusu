import Vue from 'vue';
import Router from 'vue-router';
import Signup from './components/Signup.vue';
import Signin from './components/Signin.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', name: 'Signup', component: Signup },
        { path: '/signin', name: 'Signin', component: Signin }
    ]
});