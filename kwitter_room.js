

//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAGLlKL2Fy8cnjAow_Cjy1RRDX3A6Mrr1Q",
      authDomain: "kwitter2-23eeb.firebaseapp.com",
      databaseURL: "https://kwitter2-23eeb-default-rtdb.firebaseio.com",
      projectId: "kwitter2-23eeb",
      storageBucket: "kwitter2-23eeb.appspot.com",
      messagingSenderId: "730032067259",
      appId: "1:730032067259:web:91b5ca41fae3a5b3f70f9e"
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);




name_welcome=localStorage.getItem("user_name");
document.getElementById("names").innerHTML="WELCOME!"+"  "+ name_welcome +" "+ ":)";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name=" +Room_names);
       row="<div class='room_name1' id="+Room_names+"onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;

       
      });});}
getData();
function redirectToRoom(Rooms){
      console.log("selected_room="+ Rooms);
      localStorage.setItem("room_name", Rooms);

      window.location="kwitter_page.html";
}


function logout(){
      
      window.location="index.html";
}

function addRoom(){
     room=document.getElementById("room_name").value;
     localStorage.setItem("room_name" ,room);
     firebase.database().ref("/").child(room).update({purpose:"add room name"});

     window.location ="kwitter_page.html";
}

