var firebaseConfig = {
  apiKey: "AIzaSyC24ZcX6aBe0cyCeu-XQ2svpVGRclfSnS8",
  authDomain: "kwitter-b9ebe.firebaseapp.com",
  databaseURL: "https://kwitter-b9ebe-default-rtdb.firebaseio.com",
  projectId: "kwitter-b9ebe",
  storageBucket: "kwitter-b9ebe.appspot.com",
  messagingSenderId: "14204201561",
  appId: "1:14204201561:web:c276768765b27eee2e1f48"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id="+Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;

                //End code
          });
    });
}
getData();

function addRoom() {
    room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
          });
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}


