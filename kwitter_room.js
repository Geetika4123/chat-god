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

user_name = localStorage.getItem("name");
room_name = localStorage.getItem("room_name");
document.getElementById("username").innerHTML = "welcome " + user_name + ":)";



function addroom() {

    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        room_boom: "room"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";

}


function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML =
                "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                row = "<div class='room_name' id=" + Room_names + " onclick='redirecToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
                document.getElementById("output").innerHTML += row;
                //End code

            });
        });
}
getData();





function redirecToRoomName(name) {
    console.log(name);

    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    window.location = "index.html";
    localStorage.removeItem("name");
    localStorage.removeItem("room_name");
}