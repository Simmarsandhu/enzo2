

const firebaseConfig = {
  apiKey: "AIzaSyBZT5RX4Uq_TMGPkTaH3em4Pv1C-vrzMCk",
  authDomain: "neww-e2e8d.firebaseapp.com",
  databaseURL: "https://neww-e2e8d-default-rtdb.firebaseio.com",
  projectId: "neww-e2e8d",
  storageBucket: "neww-e2e8d.appspot.com",
  messagingSenderId: "31070980462",
  appId: "1:31070980462:web:36a807a35d2b811fa3997f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var form=document.getElementById('form')
form.addEventListener('submit',function(event){
  //preventdefalft prevents the form from autosubmitting 
  event.preventDefault()
   problem=document.getElementById("Problem").value;
  id=document.getElementById("Patientsinfo").value;
  console.log(problem,id);
  firebase.database().ref("/").child(id).update({
    Problem:problem,
    purpose:"patients problem"
  })

});
