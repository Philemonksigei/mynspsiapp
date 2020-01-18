// Your web app's Firebase configuration
var firebaseConfig = {
                         apiKey: "AIzaSyAo9a7RErgeWGzy_B0PEO8XVVyp_6VEnxo",
                         authDomain: "nspsi-2a6f0.firebaseapp.com",
                         databaseURL: "https://nspsi-2a6f0.firebaseio.com",
                         projectId: "nspsi-2a6f0",
                         storageBucket: "nspsi-2a6f0.appspot.com",
                         messagingSenderId: "300728165357",
                         appId: "1:300728165357:web:6f8c57bb7b113fecb93de4"
                      };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //check if user is logged in
    firebase.auth().onAuthStateChanged(function(user)
              {
                      if (user) {
                                  //if  User is signed in, loade the welcome page, AJAX
                                load_homepage();
                                }
                      else {
                        // User is signed out.
                        alert("Please login!");
                        document.write(index.html);
                        //document.getElementById('create_user_id').style.display="hide";
                           }
              });


      function load_homepage()
              {
                    var xhr2 = new XMLHttpRequest
                    xhr2.open("GET",'welcome.html',true);
                    xhr2.onload = function()
                               {
                                   if(this.status ==200)
                                   {
                                     document.getElementById('container_login').innerHTML = this.responseText;
                                     //load defaults on the page loaded(the welcome/homepage)
                                       show_defaults_welcomepage();

                                   }

                                }
                     xhr2.send();
               }

             function logoutx()
                     {
                           firebase.auth().signOut().then(function() {
                             // Sign-out successful.
                           }).catch(function(error) {
                             // An error happened.
                           });
                     }

      function addNewCourses()
       {
        var   CourseID = document.getElementById('course_id').value;
        var  CourseName = document.getElementById('course_name_id').value;

             //var CourseID = document.getElementById('course_id').value;
            var dabRef = firebase.database().ref("Courses/"+CourseID);
            dabRef.push(
                   {
                  CourseName
                   });

             //send to courses node, for mobile retrieval
                   var dabRef = firebase.database().ref("Courses_web_console/"+CourseID);
                   dabRef.push(
                          {
                         'CourseID':CourseID,
                         'CourseName':CourseName
                          });
                          dabRef.on("value", function(snapshot)
                          {
                             console.log(snapshot.val());
                          }, function (error)
                          {
                             console.log("Error: " + error.code);
                          });
       }

 function loadrefereespage()
                 {
                       var myrefs1 = document.getElementById('myrefs');
                       var xhr = new XMLHttpRequest
                       xhr.open("GET",'reports.html',true);
                       xhr.onload = function()
                                  {
                                    if(this.status ==200)
                                    {
                                      document.getElementById('container').innerHTML =this.responseText;
                                      show_defaults_reportspage();

                                    }

                                  }
                        xhr.send();
                      //  show_defaults_reportspage();
                        AllRefereesinfo();


                  }


function  userlogin()
          {
            var userEmail = document.getElementById('email_field').value;
            var userPassword = document.getElementById('password_field').value;
            firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
                 .catch(function(error)
                 {
                     // Handle Errors here.
                     var errorCode = error.code;
                     var errorMessage = error.message;
                     window.alert(errorCode +":"+errorMessage);
                     // ...
                 });
            //window.alert( userEmail +""+userPassword);
          }

///crea users
    function create_user()
        {
          var userEmail = document.getElementById('email_field_new').value;
          var userPassword = document.getElementById('password_field_new').value;
          firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
               .catch(function(error)
               {
                   // Handle Errors here.
                   var errorCode = error.code;
                   var errorMessage = error.message;
                   window.alert(errorCode +":"+errorMessage);
                   // ...
               });
        }

//retrieve firebase data here
//prinring data

function printUserList()
    {
       var divToPrint=document.getElementById("userListTable");
       newWin= window.open("");
      newWin.document.write(divToPrint.outerHTML);
      newWin.print(divToPrint);
       newWin.close();
    }
      $('button').on('click',function(){
      printData();
      })


//used in referalspage============================================================
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
                document.getElementById('myrefs').style.display="none";
                document.getElementById('container_ourstory').style.display="none"
                }
function show_addcourse() {
    document.getElementById('course_list').style.display="none";
    document.getElementById('addcourses').style.display="block";
    document.getElementById('deletecourses').style.display="none";
    document.getElementById('editcourses').style.display="none";
    document.getElementById('myrefs').style.display="none";
    document.getElementById('container_ourstory').style.display="none"
                        }
function show_delete_course() {
    document.getElementById('course_list').style.display="none";
    document.getElementById('deletecourses').style.display="block";
    document.getElementById('addcourses').style.display="none";
    document.getElementById('editcourses').style.display="none";
    document.getElementById('myrefs').style.display="none";
     document.getElementById('container_ourstory').style.display="none"
                            }
function show_edit_course(){
    document.getElementById('course_list').style.display="none";
    document.getElementById('editcourses').style.display="block";
    document.getElementById('addcourses').style.display="none";
    document.getElementById('deletecourses').style.display="none";
      document.getElementById('myrefs').style.display="none";
        document.getElementById('container_ourstory').style.display="none"
                           }
function show_course_list(){
document.getElementById('course_list').style.display="block";
document.getElementById('addcourses').style.display="none";
document.getElementById('deletecourses').style.display="none";
document.getElementById('editcourses').style.display="none";
      document.getElementById('myrefs').style.display="none";
        document.getElementById('container_ourstory').style.display="none"
                        }
  function myrefss(){
  //  var showing_referals = document.getElementById('container_refs');
      document.getElementById('myrefs').style.display="block";
    document.getElementById('course_list').style.display="none";
    document.getElementById('addcourses').style.display="none";
   document.getElementById('deletecourses').style.display="none";
    document.getElementById('editcourses').style.display="none";
document.getElementById('container_ourstory').style.display="none"
                        }
    function aboutnspsicole(){
    document.getElementById('container_ourstory').style.display="block";
    document.getElementById('addcourses').style.display="none";
    document.getElementById('myrefs').style.display="none";
    document.getElementById('deletecourses').style.display="none";
    document.getElementById('editcourses').style.display="none";
    document.getElementById('course_list').style.display="none";
      //document.getElementById('container_ourstory').style.display="block"
                          }
/////////////REPORTS PAGE HERE/////////////////////
function show_defaults_reportspage()
                {
                  document.getElementById('Allreferees_table').style.display="block";
                  document.getElementById('All_referals_table').style.display="none";
                  document.getElementById('Studentreferees_table').style.display="none";
                  document.getElementById('Staffreferees_table').style.display="none";
                  document.getElementById('Guestreferees_table').style.display="none";
                  document.getElementById('Indiv_referals_table').style.display="none";
                }

//showing referees list on a table
  function AllRefereesinfo(){
    show_defaults_reportspage();
      var userRef = firebase.database().ref().child("Users");
      var SerialNo = 1;
      userRef.on("child_added",snap=>{
                              var userIDno = snap.child("admno_staffno").val();
                              var name = snap.child("stdname").val();
                              var userNumber = snap.child("phoneno1").val();
                              var userType = snap.child("usertype").val();
                              var userEmail = snap.child("email").val();


                              $("#users_table_body").append("<tr><td>"+ SerialNo + "</td><td>"+ userIDno + "</td> <td>"+ name +"</td><td>" + userType +"</td><td>"+  userNumber +"</td><td>"+ userEmail +"</td></tr>");
                                      SerialNo ++;
                                    //  $("#users_table_body").empty();

                                    });


                        }

//show all referrals
  function ReferralsGeneral(){
    document.getElementById('Allreferees_table').style.display="none";
    document.getElementById('Studentreferees_table').style.display="none";
    document.getElementById('Staffreferees_table').style.display="none";
    document.getElementById('Guestreferees_table').style.display="none";
    document.getElementById('Indiv_referals_table').style.display="none";
    document.getElementById('All_referals_table').style.display="block";

  var userRef = firebase.database().ref().child("Refferrals_General");
  var SerialNo = 1;
  userRef.on("child_added",snap=>{
                                  var date = snap.child("myDate").val();
                                  var refID = snap.child("refereeid").val();
                                  var refname = snap.child("refereename").val();
                                  var course  = snap.child("rstdcourse").val();
                                  var email = snap.child("rstdemail").val();
                                  var gender = snap.child("rstdgender").val();
                                  var intake = snap.child("rstdintake").val();
                                  var course_level = snap.child("rstdlevels").val();
                                  var stdname  = snap.child("rstdname").val();
                                  var stdPhoneNox = snap.child("rstdphoneno1").val();
                                  var stdGrade = snap.child("stdgrade").val();
                                  //var referee_id = snap.child(" refereeid").val();
                                 $("#allrefs_table_body").append(
"<tr><td>"+ SerialNo + "</td> <td>"+ stdname +"</td><td>" + stdPhoneNox +"</td><td>"+ email +"</td><td>"+ gender +"</td><td>"+ course +"</td><td>"+ course_level +"</td><td>"+stdGrade +"</td><td>"+ intake +"</td><td>"+refname +"</td><td>"+ refID +"</td><td>"+ date +"</td></tr>");
                                       SerialNo ++;
                                });
                             }
