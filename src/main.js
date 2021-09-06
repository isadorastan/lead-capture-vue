import Vue from 'vue'
import App from './App.vue'
// import { initializeApp } from 'firebase/app';

Vue.config.productionTip = false

// var firebaseConfig = {
//   apiKey: 'AIzaSyCIheCC5wAgdFXyRTCyTldwZG6DHMUyh_o',
//   authDomain: 'bike4u-fee56.firebaseapp.com',
//   databaseURL: 'https://bike4u-fee56.firebaseio.com',
//   projectId: 'bike4u-fee56',
//   storageBucket: 'bike4u-fee56.appspot.com',
//   messagingSenderId: '411153754939',
//   appId: '1:411153754939:web:44206cbcf5d7ee487a251e'
// };

// initializeApp(firebaseConfig);


new Vue({
  render: h => h(App),
}).$mount('#app')
