
  var firebaseConfig = {
    apiKey: "AIzaSyB85FVM5oFJMCKwjPn3-4WggRyDPLbfayM",
    authDomain: "test-vgst.firebaseapp.com",
    databaseURL: "https://test-vgst.firebaseio.com",
    projectId: "test-vgst",
    storageBucket: "test-vgst.appspot.com",
    messagingSenderId: "182173305191",
    appId: "1:182173305191:web:8fe759c2f8fa967dea87c2",
    measurementId: "G-1YBD4TJXXW"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

  //   const auth = firebase.auth;
   //  auth.signInWithEmailAndPassword(email,pass);
   //  auth.createUserWithEmailAndPassword(email,pass);
   //  auth.onAuthStateChanged(firebaseuser => {});


    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');


  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));

});

btnSignUp.addEventListener('click', e =>{
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email,pass);
  promise.catch(e => console.log(e.message));
});

btnLogout.addEventListener('click', e =>{
  firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseuser =>{
  if(firebaseuser){
    console.log(firebaseuser);
    btnLogout.classList.remove('hide');
  }
  else{
    console.log('not logged in!');
    btnLogout.classList.add('hide');
  }
});
