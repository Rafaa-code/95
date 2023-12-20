const firebaseConfig = {
    apiKey: "AIzaSyBUUzsRKTk31gQ9sdHHSJ4I9kdTNwnY5SA",
    authDomain: "twtter-falso.firebaseapp.com",
    databaseURL: "https://twtter-falso-default-rtdb.firebaseio.com",
    projectId: "twtter-falso",
    storageBucket: "twtter-falso.appspot.com",
    messagingSenderId: "596322863387",
    appId: "1:596322863387:web:c7716db1aa54cb44912bbe"
  };
  firebaseConfig.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value ="";
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
    console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span>👍 Like: "+ like +"</span></button><hr>";

   row = name_with_tag + message_with_tag +like_button + span_with_tag;       
   document.getElementById("output").innerHTML += row;
//End codeç
 } });  }); }
getData();
function updateLike(massage_id){
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) = 1;
    firebase.database().ref(room_name).child(message_id).update({
        like:updated_likes
    })
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}