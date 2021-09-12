<template>
  <div class="contact-form">
      <template v-if="showForm">
        <router-link to="/" class="go-back">⬅️ Voltar</router-link>
        <form id="contactForm" class="contact-form">
            <h2>Fique por dentro</h2>
            <p>Cadastre seu melhor email para ficar sabendo quando uma nova turma será aberta!</p>

            <input class="name" type="text" id="name" placeholder="Nome" v-model="newLead.name"/>
            <input class="email" type="email" id="email" placeholder="Email" v-model="newLead.email"/>

            <button type="submit" class="submit-button" @click="submitForm" :disabled="submitButtonDisabled">Submit</button>
        </form>
      </template>
      <template v-else>
        <div class="success-message">
            <i data-feather="check"></i>
            <p>Obrigada! Você receberá avisos em primeira mão sobre novas turmas do curso!</p>
        </div>
        <router-link to="/" class="go-back" style="text-align: center;">⬅️ Voltar</router-link>
      </template>
  </div>
</template>

<script>

import firebase from "firebase/app";
import "firebase/database";

export default {
  name: 'HelloWorld',
  data() {
    return {
      newLead: {
        name: "",
        email: ""
      },
      messagesRef: String,
      showForm: true
    }
  },
  props: {
    msg: String
  },
  created() {
    var firebaseConfig = {
      apiKey: process.env.VUE_APP_API_KEY,
      authDomain: 'bike4u-fee56.firebaseapp.com',
      databaseURL: 'https://bike4u-fee56.firebaseio.com',
      projectId: 'bike4u-fee56',
      storageBucket: 'bike4u-fee56.appspot.com',
      messagingSenderId: '411153754939',
      appId: '1:411153754939:web:44206cbcf5d7ee487a251e'
    };

    firebase.initializeApp(firebaseConfig);
    this.messagesRef = firebase.database().ref('contactformmessages');
  },
  computed: {
    submitButtonDisabled() {
      return !(this.validateEmail && this.isNameValid);
    },
    isNameValid() {
      return this.newLead.name.length > 0;
    },
    validateEmail() {
      var re = /\S+@\S+\.\S+/;
      return re.test(this.newLead.email);
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      this.messagesRef.push(this.newLead);
      this.showForm = false;
    },
   
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.contact-form {
  padding: 20px;
  color: white;
  display:flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;

  .go-back {
    text-decoration: none;
    color: white;
  }

}

form {
  margin-top: 30px;
    max-width: 400px;
    height: fit-content !important;
    background: #16102F;
    color: white;
    padding: 20px 30px;
    border-radius: 8px;

    p {
        color: #CDCDD6;
    }

    label {
        margin-top: 20px;
        margin-bottom: 5px;
        font-weight: bold;
    }

    input, button {
        font-family: 'Poppins', sans-serif;
        height: 65px;
        width: 100%;
        font-size: 18px;
        padding: 0 15px;
        color: #cdcddb;
        border: 0;
        border-radius: 8px;

        &:placeholder {
            color: #cdcddb;
        }
    }

    input {
        background: #1F1938;
        margin-top: 10px;
    }

    button {
        margin-top: 30px;
        background: #E562FE;
        color: white;
        font-weight: bold;
        margin-bottom: 30px;
        cursor: pointer;

        &:disabled {
            cursor: not-allowed;
            background: #e462fe88;
        }
    }
}

.success-message {
    color: white;
    display: flex;
    align-items: center;
    text-align: center;
    max-width: 450px;
    margin-bottom: 30px;

    svg { 
        margin-right: 10px;
    }
}
</style>
