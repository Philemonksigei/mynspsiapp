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
                    xhr2.open("GET",'home.html',true);
                    xhr2.onload = function()
                               {
                                   if(this.status ==200)
                                   {
                                     document.getElementById('body_login').innerHTML = this.responseText;
                                     //load defaults on the page loaded(the welcome/homepage)
                                       show_defaults_welcomepage();
                                       coursesAvaillable();
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
        var   CourseExamType = document.getElementById('select_examtype').value;
        var  CourseName = document.getElementById('course_name_id').value;
            firebase.database().ref("Courses/"+CourseID).set(CourseName);
             //send to courses node, for mobile retrieval
                   var dabRef = firebase.database().ref("Courses_web_console/"+CourseID);
                   dabRef.set(
                          {
                         'CourseID':CourseID,
                         'CourseName':CourseName,
                         'CourseExamType':CourseExamType
                          });
                          CourseID = "";
                          CourseName = "";
       }

 function loadrefereespage()
                 {
                     document.getElementById('main_content').style.display="block";
                       var xhr = new XMLHttpRequest
                       xhr.open("GET",'reportsd.html',true);
                       xhr.onload = function()
                                  {
                                    if(this.status ==200)
                                    {
                                      document.getElementById('main_content').innerHTML =this.responseText;
                                      show_defaults_reportspage();
                                      clearAllDivs();
                                    }
                                  }
                        xhr.send();
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
function clearAllDivs()
                {
                  //show no other divs
                document.getElementById('course_list').style.display="none";
                document.getElementById('deletecourses').style.display="none";
                document.getElementById('editcourses').style.display="none";
                document.getElementById('addcourses').style.display="none";
                document.getElementById('container_ourstory').style.display="none";

                }
function show_defaults_welcomepage()
                {
                document.getElementById('course_list').style.display="block";
                document.getElementById('deletecourses').style.display="none";
                document.getElementById('editcourses').style.display="none";
                document.getElementById('addcourses').style.display="none";
                document.getElementById('container_ourstory').style.display="none"
                    //
                }
function show_addcourse() {
    document.getElementById('course_list').style.display="none";
    document.getElementById('addcourses').style.display="block";
    document.getElementById('deletecourses').style.display="none";
    document.getElementById('editcourses').style.display="none";
    document.getElementById('container_ourstory').style.display="none"
    document.getElementById('main_content').style.display="none"
                        }
function show_delete_course() {
    document.getElementById('course_list').style.display="none";
    document.getElementById('deletecourses').style.display="block";
    document.getElementById('addcourses').style.display="none";
    document.getElementById('editcourses').style.display="none";
     document.getElementById('container_ourstory').style.display="none"
       document.getElementById('main_content').style.display="none"
                            }
function show_edit_course(){
    document.getElementById('course_list').style.display="none";
    document.getElementById('editcourses').style.display="block";
    document.getElementById('addcourses').style.display="none";
    document.getElementById('deletecourses').style.display="none";
        document.getElementById('container_ourstory').style.display="none"
          document.getElementById('main_content').style.display="none"
                           }
function show_course_list(){
document.getElementById('course_list').style.display="block";
document.getElementById('addcourses').style.display="none";
document.getElementById('deletecourses').style.display="none";
document.getElementById('editcourses').style.display="none";
        document.getElementById('container_ourstory').style.display="none"
          document.getElementById('main_content').style.display="none"
                        }
    function aboutnspsicole(){
    document.getElementById('container_ourstory').style.display="block";
    document.getElementById('addcourses').style.display="none";
    document.getElementById('deletecourses').style.display="none";
    document.getElementById('editcourses').style.display="none";
    document.getElementById('course_list').style.display="none";
      document.getElementById('main_content').style.display="none"
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

  function coursesAvaillable(){
                $('#table_courselist').html('');
                  var userRef = firebase.database().ref().child("Courses_web_console");
                  var SerialNo = 1;
                  userRef.on("child_added",snap=>{
                                          var courseID = snap.child("CourseID").val();
                                          var courseExam = snap.child("CourseExamType").val();
                                          var courseName = snap.child("CourseName").val();
                                          $("#table_courselist").append("<tr><td>"+ SerialNo + "</td><td>"+ courseID + "</td> <td>"+ courseName +"</td><td>" +courseExam +"</td></tr>");
                                                  SerialNo ++;
                                                //  $("#users_table_body").empty();

                                                });
                  }

//showing referees list on a table
  function AllRefereesinfo(){
    show_defaults_reportspage();
    $('#users_table_body').html('');
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
$('#allrefs_table_body').html('');
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
///show studenrefs only/////
function StudentRefs(){
  document.getElementById('Allreferees_table').style.display="none";
  document.getElementById('Studentreferees_table').style.display="block";
  document.getElementById('Staffreferees_table').style.display="none";
  document.getElementById('Guestreferees_table').style.display="none";
  document.getElementById('Indiv_referals_table').style.display="none";
  document.getElementById('All_referals_table').style.display="none";
$('#Student_users_table').html('');
var userRef = firebase.database().ref().child("Users_Student");
var SerialNo = 1;
userRef.on("child_added",snap=>{

                                var refID = snap.child("admno_staffno").val();
                                var refname = snap.child("stdname").val();
                                var studentemail = snap.child("email").val();
                                var studentPhoneno = snap.child("phoneno1").val();
                                //var referee_id = snap.child(" refereeid").val();
                               $("#Student_users_table").append(
"<tr><td>"+ SerialNo + "</td> <td>"+ refID +"</td><td>" + refname +"</td><td>"+studentemail +"</td><td>"+ studentPhoneno +"</td></tr>");
                                     SerialNo ++;
                              });
                       }

     ///show STAFFonly/////
     function staffRefs(){
                             document.getElementById('Allreferees_table').style.display="none";
                             document.getElementById('Studentreferees_table').style.display="none";
                             document.getElementById('Staffreferees_table').style.display="block";
                             document.getElementById('Guestreferees_table').style.display="none";
                             document.getElementById('Indiv_referals_table').style.display="none";
                             document.getElementById('All_referals_table').style.display="none";

                           var userRef = firebase.database().ref().child("Users_Staff");
                             $('#staff_table_body').html('');
                                 var SerialNo = 1;
                                 userRef.on("child_added",snap=>{

                                                                 var refID = snap.child("admno_staffno").val();
                                                                 var refname = snap.child("stdname").val();
                                                                 var studentemail = snap.child("email").val();
                                                                 var studentPhoneno = snap.child("phoneno1").val();
                                                                 //var referee_id = snap.child(" refereeid").val();
                                                                $("#staff_table_body").append(
                                 "<tr><td>"+ SerialNo + "</td> <td>"+ refID +"</td><td>" + refname +"</td><td>"+studentemail +"</td><td>"+ studentPhoneno +"</td></tr>");
                                                                      SerialNo ++;
                                                               });
                  }
  ///show STAFFonly/////
  function GuestRefs(){
            document.getElementById('Allreferees_table').style.display="none";
            document.getElementById('Studentreferees_table').style.display="none";
            document.getElementById('Staffreferees_table').style.display="none";
            document.getElementById('Guestreferees_table').style.display="block";
            document.getElementById('Indiv_referals_table').style.display="none";
            document.getElementById('All_referals_table').style.display="none";

          $('#Guest_table_body').html('');
          var userRef = firebase.database().ref().child("Users_Guest");
          var SerialNo = 1;
          userRef.on("child_added",snap=>{
                                          var refID = snap.child("admno_staffno").val();
                                          var refname = snap.child("stdname").val();
                                          var studentemail = snap.child("email").val();
                                          var studentPhoneno = snap.child("phoneno1").val();
                                          //var referee_id = snap.child(" refereeid").val();
                                         $("#Guest_table_body").append(
          "<tr><td>"+ SerialNo + "</td> <td>"+ refID +"</td><td>" + refname +"</td><td>"+studentemail +"</td><td>"+ studentPhoneno +"</td></tr>");
                                               SerialNo ++;
                                        });
                      }
 ///show Individual/////
 function IndivUsersRefs(){
               document.getElementById('Allreferees_table').style.display="none";
               document.getElementById('Studentreferees_table').style.display="none";
               document.getElementById('Staffreferees_table').style.display="none";
               document.getElementById('Guestreferees_table').style.display="none";
               document.getElementById('Indiv_referals_table').style.display="block";
               document.getElementById('All_referals_table').style.display="none";

             var UserIDs = document.getElementById('searchID').value;
             $('#IndivUsers_table_body').html('');
             var userRef_indiv = firebase.database().ref().child("Refferrals_General").orderByChild("refereeid").equalTo(UserIDs);
             var SerialNo = 1;

             userRef_indiv.on("child_added",snap=>
                                                {
                 //$('#IndivUsers_table_body').html('');
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
                                            $("#IndivUsers_table_body").append(
            "<tr><td>"+ SerialNo + "</td> <td>"+ stdname +"</td><td>" + stdPhoneNox +"</td><td>"+ email +"</td><td>"+ gender +"</td><td>"+ course +"</td><td>"+ course_level +"</td><td>"+stdGrade +"</td><td>"+ intake +"</td><td>"+refname +"</td><td>"+ date +"</td></tr>");
                                                  SerialNo ++;
                                                });
                            }
/////////////////GENERATE REPRTS FRO DROP DOWN////
function showReprts()
    {
            var report_main =document.getElementById('select_report').value;

          if(report_main == "All Referrals"){
          ReferralsGeneral();
          }
          else if (report_main == "All Referees"){
           AllRefereesinfo();
          }
          else if (report_main == "Staff Referees"){
          staffRefs();
          }
          else if (report_main == "Student Referees"){
          StudentRefs();
          }
          else if (report_main == "Guest Referees"){
          GuestRefs();
          }
    }


//#061F97
