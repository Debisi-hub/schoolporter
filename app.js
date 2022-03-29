var objStudent = [
    {
        firstName: "Adebisi",
        lastName: "Adebayo",
        middleName: "Zainab",
        grade: "90",
        previous_school_details: "Model College",
        previous_class: "SS1",
        position: "second",
        state_of_origin: "Lagos state",
        residential_address: "Ilupeju road, Palmgrove.",
    },
    {
        firstName: "Olayemi",
        lastName: "Adeyinka",
        middleName: "Bolanle",
        grade: "70",
        previous_school_details: "Yaba College",
        previous_class: "SS2",
        position: "fifth",
        state_of_origin: "Ogun state",
        residential_address: "Tolani road, Palmgrove.",
    },
    {
        firstName: "Chucks",
        lastName: "Bright",
        middleName: "Christ",
        grade: "40",
        previous_school_details: "Yemi College",
        previous_class: "SS1",
        position: "tenth",
        state_of_origin: "Imo state",
        residential_address: "Yemi Alade, Palmgrove.",
    },
];
// login as old student
function login() {
    var lastName = document.getElementById("lname").value;
    var grade = document.getElementById("grade").value;
    for (i = 0; i < objStudent.length; i++) {
        if (lastName === objStudent[i].lastName && grade == objStudent[i].grade) {
            // console.log(lastName + "is logged in");
            window.location.href="userpage.html"
            alert("Welcome back")
            return
            
        }
            
        }
        alert("invalid details")
    }

    

    // console.log("incorrect details");

// sign up as a new student
function regStudent() {
    var regName = document.getElementById("newlname").value;
    var regGrade = document.getElementById("newgrade").value;
    var firstName = document.getElementById("fname").value;
    var mName = document.getElementById("mname").value;
    var sName = document.getElementById("sname").value;
    var pClass = document.getElementById("pclass").value;
    var position = document.getElementById("position").value;
    var stateOfOrigin = document.getElementById("state").value;
    var address = document.getElementById("address").value;
    var newStudent = {
        lastName: regName,
        grade: regGrade,
        firstName: firstName,
        middleName: mName,
        previous_school_details: sName,
        previous_class: pClass,
        position: position,
        state_of_origin: stateOfOrigin,
        residential_address: address,
    };
    for(i=0; i<objStudent.length; i++){
     if(regName==objStudent[i].lastName){
      alert("name already in use")
      return
     
     }else if (regName.trim() == "" || grade.trim() == "") {
        alert("Kindly fill in correct Information");
        return
     }else{
        window.location.href = "newuser.html";
        alert("Registration sucessful")
     }
     return 
    }
    objStudent.push(newStudent);
    console.log(objStudent);
}

function oldStudent() {
    window.location.href = "login.html"
}
function newStudent() {
    window.location.href = "regstudent.html";
}
