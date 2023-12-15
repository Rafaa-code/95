const firebaseConfig = {
    apiKey: "AIzaSyBUUzsRKTk31gQ9sdHHSJ4I9kdTNwnY5SA",
    authDomain: "twtter-falso.firebaseapp.com",
    databaseURL: "https://twtter-falso-default-rtdb.firebaseio.com",
    projectId: "twtter-falso",
    storageBucket: "twtter-falso.appspot.com",
    messagingSenderId: "596322863387",
    appId: "1:596322863387:web:c7716db1aa54cb44912bbe"
  };
  firebaseConfig.intializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "bem vindo"+user_name+"!";
function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebaseConfig.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });});}
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}