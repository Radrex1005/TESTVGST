


  const auth = firebase.auth;
  auth.signInWithEmailAndPassword(email,pass);
  auth.createUserWithEmailAndPassword(email,pass);
  auth.onAuthStateChanged(firebaseuser => {});
  



const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');


btnLogin.addEventListener('click',e =>{
  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email,pass);
  promise.catch(e => console.log(e.message));



})
