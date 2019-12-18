// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAo9a7RErgeWGzy_B0PEO8XVVyp_6VEnxo",
  authDomain: "nspsi-2a6f0.firebaseapp.com",
  databaseURL: "https://nspsi-2a6f0.firebaseio.com",
  projectId: "nspsi-2a6f0",
  storageBucket: "nspsi-2a6f0.appspot.com",
  messagingSenderId: "300728165357",
  appId: "1:300728165357:web:72d0aa241fdeefaab93de4"
                   };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
///////////////////////////////////////////////

firebase.auth().onAuthStateChanged(function(user)
      {
        if (user) {
          // User is signed in.
                    function loadref()
                              {
                                     var xhr = new XMLHttpRequest();
                                     xhr.open('GET','welcome.html',true);
                                       xhr.onload =function(){
                                         if(this.status==200){
                                         (this.responseText);
                                                             }
                                                             }
                                          xhr.send();
                               }
                           loadref();
            } else {

              alert("My day is good");
                  // No user is signed in.
                  document.getElementById('signup_div').style.display="none";
                  document.getElementById('login_div').style.display="block";
             }
      });
//used in login section --implements JQUERY
  /*  $("#loginbutton").click(function()
            {
                    var userEmail = $("#email_field").val();
                    var userPassword =$("#password_field").val();
                    if(userEmail !=""||userPassword!= "")
                    {
                       var result = firebase.auth().signInWithEmailAndPassword(userEmail, userPassword);

                       result.catch(function(error)
                                 {
                                   var errorCode = error.code;
                                   var errorMessage = error.message;
                                   window.alert("Error in Loging in! \n Please check credentials.");
                                   //console.log(errorMessage);
                                 })
                    }
                        else{
                              alert("Empty Email or Password Fields");
                            }
              });
//
*/
function  userlogin()
{
  var userEmail = document.getElementById('email_field').value;
  var userPassword = document.getElementById('password_field').value;
 window.alert( userEmail +""+userPassword);


}
/*
firebase.auth().onAuthStateChanged(function(user)
         {
                 if (user)
                       {
                         alert("Logded in!");
                          // document.write("welcome.html");
                      // User is signed in.
                        /*                          function loadref(){
                                                   var xhr = new XMLHttpRequest();
                                                   xhr.open('GET','welcome.html',true);
                                                     xhr.onload =function(){
                                                       if(this.status==200){
                                                       (this.responseText);
                                                                           }
                                                                           }
                                                        xhr.send();
                                                 }
                                             loadref();

                                         //window.location.href = "referral.html";
                        }
                         else
                       {
                         alert("Could not login");
                       }
         });
*/


//indexpage
function show_defaults_indexpage()
        {
        document.getElementById('signup_div').style.display="none";
        document.getElementById('login_div').style.display="block";
        }
//to be used in registry for encryption purposes
function userinfo(){
var fullnameuser = document.getElementById('fullnameid').value;
var emailuser = document.getElementById('emailid').value;
var pwduser = document.getElementById('passwordid').value;
var confirmpwduser = document.getElementById('confirmpwdid').value;

var identifier = "web1";
//encrypt
var ffullnameuser
var femailuser= emailuser+identifier;
var fpwduser= pwduser+identifier;
var fconfirmpwduser= confirmpwduser+identifier;
//now submit unique emails and passwors, customized for web use only!
alert(fpwduser +""+fconfirmpwduser);
                  }
function show_signup_indexpage()
        {
      document.getElementById('signup_div').style.display="block";
      document.getElementById('login_div').style.display="none";
        }

//used in referalspage
function referalsec(){
        var mrefID = document.getElementById("refID").value;
        var mreferral_year = document.getElementById("referral_year").value;
        var mreferral_classification = document.getElementById("referral_classification").value;
        alert( mrefID + mreferral_year+mreferral_classification );
//send to firebase database now


                    }

//in welcome page
function show_defaults_welcomepage()
                {
                document.getElementById('course_list').style.display="block";
                document.getElementById('deletecourses').style.display="none";
                document.getElementById('editcourses').style.display="none";
                document.getElementById('addcourses').style.display="none";
                document.getElementById('container_refs').style.display="none";
                  document.getElementById('container_ourstory').style.display="none"
                }

          function unhide_forgot(){
document.getElementById('container_signups').style.display="none";
                                  }
function show_addcourse() {
    document.getElementById('course_list').style.display="none";
    document.getElementById('addcourses').style.display="block";
    document.getElementById('deletecourses').style.display="none";
    document.getElementById('editcourses').style.display="none";
    document.getElementById('container_refs').style.display="none";
      document.getElementById('container_ourstory').style.display="none"
                        }
function show_delete_course() {
    document.getElementById('course_list').style.display="none";
    document.getElementById('deletecourses').style.display="block";
    document.getElementById('addcourses').style.display="none";
    document.getElementById('editcourses').style.display="none";
    document.getElementById('container_refs').style.display="none";
      document.getElementById('container_ourstory').style.display="none"
                            }
function show_edit_course(){
    document.getElementById('course_list').style.display="none";
    document.getElementById('editcourses').style.display="block";
    document.getElementById('addcourses').style.display="none";
    document.getElementById('deletecourses').style.display="none";
      document.getElementById('container_refs').style.display="none";
        document.getElementById('container_ourstory').style.display="none"
                           }
function show_course_list(){
document.getElementById('course_list').style.display="block";
document.getElementById('addcourses').style.display="none";
document.getElementById('deletecourses').style.display="none";
document.getElementById('editcourses').style.display="none";
      document.getElementById('container_refs').style.display="none";
        document.getElementById('container_ourstory').style.display="none"
                        }
  function managerefs(){
  //  var showing_referals = document.getElementById('container_refs');
    document.getElementById('container').style.display="none";
    document.getElementById('addcourses').style.display="none";
   document.getElementById('deletecourses').style.display="none";
    document.getElementById('editcourses').style.display="none";
    document.getElementById('container_refs').style.display="block";
          document.getElementById('container_ourstory').style.display="none"

                        }
    function aboutnspsicole(){
        document.getElementById('container').style.display="none";
  document.getElementById('addcourses').style.display="none";
    document.getElementById('deletecourses').style.display="none";
   document.getElementById('editcourses').style.display="none";
    document.getElementById('container_refs').style.display="none";
      document.getElementById('container_ourstory').style.display="block"
                          }
