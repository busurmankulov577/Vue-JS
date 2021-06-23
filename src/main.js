import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import dateFilter from '@/filters/date.filter';
import currencyFilter from '@/filters/currency.filter';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';
import messageplugin from '@/utils/message.plugin';
import Loader from '@/components/app/Loader';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;
Vue.use(messageplugin)
Vue.use(Vuelidate);
Vue.filter('date',dateFilter);
Vue.filter('currency',currencyFilter);
Vue.component('Loader', Loader);




firebase.initializeApp({
  apiKey: "AIzaSyAKF9fpG0CipQj3jAMkre0CIPGyuLwHE_k",
  authDomain: "newvue-crm.firebaseapp.com",
  projectId: "newvue-crm",
  storageBucket: "newvue-crm.appspot.com",
  messagingSenderId: "399326877124",
  appId: "1:399326877124:web:6613de483b18ada22a0091",
  measurementId: "G-JTKCJTMNQZ"
});

let app ;

firebase.auth().onAuthStateChanged(() => {
  if (!app){
    app =new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
  
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
