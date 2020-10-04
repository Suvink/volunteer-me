<template>
  <div class="container login-container mt-1">
    <div class="has-text-centered">
      <h1 class="title is-2">Sign in</h1>
      <img class="login-image" src="../assets/login.png">
      
      <div class="container has-text-centered">
        <!-- <div class="has-text-centred">
          <img src="../assets/loading.gif" style="height: 50px">
          <p>Signing in...</p>
        </div> -->
        <div id="firebaseui-auth-container"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebaseui from 'firebaseui'
import firebase from 'firebase'
import { firebaseApp} from '../firebase'
import "firebaseui/dist/firebaseui.css";
export default {
    name: 'Login',
    mounted(){
        firebaseApp
        let uiConfig = {
            signInSuccessUrl: '#/add',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ]
        }
        let ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }
        ui.start('#firebaseui-auth-container', uiConfig);
    }
}
</script>

<style>
@import url('https://unpkg.com/bulma@0.8.0/css/bulma.min.css');
</style>