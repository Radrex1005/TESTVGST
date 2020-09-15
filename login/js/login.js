var provider = new firebase.auth.GoogleAuthProvider();
var user;

function print(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    user = result.user;
    console.log(user.displayName);
   
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

 function start(event){
  var text = (event.relatedTarget).text(); // Get the text of the element
  firebase.database().ref('Users/' + user.uid).set({
    name: user.displayName,
    email: user.email,
    profile_picture : imageUrl,
    favDog: text
  });
}
