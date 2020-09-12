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
  
 // Reference messages collection
var messagesRef = firebase.database().ref('Aadhar/Annexure_3'); 


// Listen for form submit
document.getElementById('Proposals').addEventListener('submit', submitForm);

//Submit form
function submitForm(e)
{
    e.preventDefault(); 


// Get values

    var priName = getInputval('PrincipalInvestigatorName');
    var priGender = getInputval('PrincipalInvestigatorGender');
    var priDOB = getInputval('PrincipalInvestigatorDOB');
    var priQual = getInputval('PrincipalInvestigatorQualification');
    var priDesg = getInputval('PrincipalInvestigatorDesignation');
    var priDept = getInputval('PrincipalInvestigatorDepartment');
    var priExp = getInputval('PrincipalInvestigatorExperience');
    var priEmail = getInputval('PrincipalInvestigatorEmail');
    var priPhone = getInputval('PrincipalInvestigatorPhoneNo');
    var priAdd = getInputval('PrincipalInvestigatorResidentialAddress')
    //Save Principal Investigator
    savePrincipalInvestigator(priName,priGender,priDOB,priQual,priDesg,priDept,priExp,priEmail,priPhone,priAdd)

      // Show alert
  //document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  //setTimeout(function(){
    //document.querySelector('.alert').style.display = 'none';
 // },3000);

  // Clear form
  document.getElementById('Proposals').reset();
}

// Function to get from values
function getInputval(id)
{
    return document.getElementById(id).value;
}

// Save Principal Investigator
function savePrincipalInvestigator(priName,priGender,priDOB,priQual,priDesg,priDept,priExp,priEmail,priPhone,priAdd)
{
    var newPrincipalInvestigator = messagesRef.push();
    newPrincipalInvestigator.set(
        {
          PrincipalInvestigatorName: priName,
          PrincipalInvestigatorDOB: priDOB,
          PrincipalInvestigatorGender: priGender,
          PrincipalInvestigatorQualification: priQual,
          PrincipalInvestigatorDesignation: priDesg,
          PrincipalInvestigatorDepartment: priDept,
          PrincipalInvestigatorExperience: priExp,
          PrincipalInvestigatorEmail:priEmail,
          PrincipalInvestigatorPhoneNo: priPhone,
          PrincipalInvestigatorResidentialAddress: priAdd,

        }
    );
}