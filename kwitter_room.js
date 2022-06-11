const firebaseConfig = {
    apiKey: "AIzaSyCOuW7i-i5wX-y1Do48ZYvwIIJ_lvzKqiE",
    authDomain: "chat-god-b8f10.firebaseapp.com",
    projectId: "chat-god-b8f10",
    storageBucket: "chat-god-b8f10.appspot.com",
    messagingSenderId: "312971947207",
    appId: "1:312971947207:web:1bc05e2453e9682ed222e2",
    measurementId: "G-WWZ76SXM9H"
  };
  firebase.initializeApp(firebaseConfig);
   function logout(){
       window.location="index.html";
   }
   user_name= localStorage.getItem("name");
   room_name=localStorage.getItem("room_name");
document.getElementById("username").innerHTML= "welcome " + user_name +":)";