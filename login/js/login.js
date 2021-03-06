// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBGO2B6hQTK4K5OE5zrbJ02vjdi6f28Erk",
    authDomain: "vgstproposals.firebaseapp.com",
    databaseURL: "https://vgstproposals.firebaseio.com",
    projectId: "vgstproposals",
    storageBucket: "vgstproposals.appspot.com",
    messagingSenderId: "552421108644",
    appId: "1:552421108644:web:6e33c08cbc16366cdeef31",
    measurementId: "G-0QNPLQVH6Y"
  };
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

    
    const auth = firebase.auth();
	var provider = new firebase.auth.GoogleAuthProvider();
var user;
function google(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    user = result.user;
    console.log(user);
    var messagesRef = firebase.database().ref(user.uid+'/users'); 
    var newPrincipalInvestigator = messagesRef.push();
    newPrincipalInvestigator.set(
        {
        Name:user.name,
   
        }
    );
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
		const temail = document.getElementById('temail');
		const tpassword = document.getElementById('tpassword');
		const signUp = document.getElementById('signUp');
		const login = document.getElementById('login');

		signUp.addEventListener('click', e =>{
		

		const email = temail.value;
		const password = tpassword.value;
		const auth = firebase.auth();
	    auth.createUserWithEmailAndPassword(email, password);
		promise.catch(e =>  console.log(e.message));
		
		alert("Signed Up");
	});
	
	
	
	login.addEventListener('click', e =>{
		const email = temail.value;
		const password = tpassword.value;
        const auth = firebase.auth();
		auth.signInWithEmailAndPassword(email, password);
		promise.catch(e =>  console.log(e.message));
		
	});
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
	

	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			
			var email = firebaseUser.email;
			alert("Active User " + email);
			console.log(firebaseUser);
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
	});
		
		

	const signInWithGoogleButton = document.getElementById('signInWithGoogle');

	const signInWithGoogle = () => {
		const googleProvider = new firebase.auth.GoogleAuthProvider();
	  
		auth.signInWithPopup(googleProvider)
		.then(() => {
		  window.location.assign('./profile');
		})
		.catch(error => {
		  console.error(error);
		})
	  }
	  
	  signInWithGoogleButton.addEventListener('click', signInWithGoogle);

	

