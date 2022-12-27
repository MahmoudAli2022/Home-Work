var errorsNum = 0;
var UserNameErr = StudentNameErr = dateErr = programtypeerr = mobileErr = captchaErr = "error";
function Validtions() {
var UserName = document.getElementById('UserName');

UserName.onchange = function () {

    var validUserName = document.getElementById('validUserName');

    var invalidUserName = document.getElementById('invalidUserName');


    if (UserName.value != '') {

        if (/^[A-Z][a-z]+\_\d+$/.test(UserName.value)) {
            validUserName.classList.remove('d-none');
            invalidUserName.classList.add('d-none');


            var UserNameVal = UserName.value;
            UserNameErr = '';

        }
        else {
            validUserName.classList.add('d-none');
            invalidUserName.classList.remove('d-none');

            UserNameErr = 'error';


        }

    }
    else {
        validUserName.classList.add('d-none');
        invalidUserName.classList.remove('d-none');

        UserNameErr = 'error';
    }


    

};
var StudentName = document.getElementById('StudentName');

StudentName.onchange = function () {

    var validStudentName = document.getElementById('validStudentName');

    var invalidStudentName = document.getElementById('invalidStudentName');


    if (StudentName.value != '') {

        if (/^[ء-ي\s]*$/.test(StudentName.value)) {
            validStudentName.classList.remove('d-none');
            invalidStudentName.classList.add('d-none');


            var StudentNameVal = StudentName.value;
            StudentNameErr = '';

        }
        else {
            validStudentName.classList.add('d-none');
            invalidStudentName.classList.remove('d-none');

            StudentNameErr = 'error';


        }

    }
    else {
        validStudentName.classList.add('d-none');
        invalidStudentName.classList.remove('d-none');

        StudentNameErr = 'error';
    }


   

};

var date = document.getElementById('date');

date.onchange = function () {

    var invalidDate = document.getElementById('invalidDate');

    var validDate = document.getElementById('validDate');

    if (date.value != '') {
        invalidDate.classList.add('d-none');
        validDate.classList.remove('d-none');

        var dateVal = date.value;
        dateErr = '';


    }
    else {
        validDate.classList.remove('d-none');
        invalidDate.classList.add('d-none');

        dateErr = 'error';
    }


   
}


var programtypeDropDown = document.getElementById('programtype');


programtypeDropDown.onchange = function () {

    var programtype = programtypeDropDown.options[programtypeDropDown.selectedIndex].value;

    var validprogramtype = document.getElementById('validprogramtype');

    var invalidprogramtype = document.getElementById('invalidprogramtype');


    if (programtype != '') {
        validprogramtype.classList.remove('d-none');
        invalidprogramtype.classList.add('d-none');

        var programtypeVal = programtype;
        programtypeErr = '';

    }
    else {
        invalidprogramtype.classList.remove('d-none');
        validprogramtype.classList.add('d-none');

        programtypeErr = 'error';
    }


    
}



var mobileNum = document.getElementById('mobile');

mobileNum.onchange = function () {

    var invalidMobile = document.getElementById('mobileInvalid');

    var validMobile = document.getElementById('mobileValid');

    if (mobileNum.value == '') {

        validMobile.classList.add("d-none");
        invalidMobile.classList.remove("d-none");

        mobileErr = 'error';
    }
    else {
        if (mobileNum.value[0] == 0 && mobileNum.value[1] == 9) {

            if (mobileNum.value.length != 10 || mobileNum.value[2] == 1 || mobileNum.value[2] == 2 || mobileNum.value[2] == 7) {
                validMobile.classList.add('d-none');
                invalidMobile.classList.remove('d-none');

                mobileErr = "error";

            }
            else {
                validMobile.classList.remove('d-none');
                invalidMobile.classList.add('d-none');

                var mobileNumVal = mobileNum.value;
                mobileErr = '';

            }
        }
        else {

            validMobile.classList.add('d-none');
            invalidMobile.classList.remove('d-none');

            mobileErr = "error";

        }

    }

    
}
var captcha = document.getElementById('checkCap');


captcha.onchange = function () {
    var captchaCode = document.getElementById('capt');

    var validCaptch = document.getElementById('validCaptcha');

    var invalidCaptch = document.getElementById('invalidCaptch');


    if (captchaCode.value != captcha.value) {
        invalidCaptch.classList.remove('d-none');
        validCaptch.classList.add('d-none');
        cap();

        captchaErr = 'error';
    }
    else {
        validCaptch.classList.remove('d-none');
        invalidCaptch.classList.add('d-none');

        captchaErr = '';


    }

    

}
}
Validtions();


var employers= 
[
 //{"programT":"البرنامج","Sname":"اسم الطالب", "Uname":"اسم المستخدم","id":"متسلسل"},
  

];


class employee{
  constructor(programT,Sname,Uname,id) {
    this.Uname = Uname;
    this.Sname = Sname;
    this.id = id;
    this.programT=programT;
  }
}
conter=0;
function inputs () {
    inputs_info = [];
    last_inputs_info =[];
    inputs_info.push(UserName);
    inputs_info.push(StudentName);
    inputs_info.push(programtypeDropDown);
     /*  array = inputs_info ;
    console.log(inputs_info) ;
    localStorage.setItem("Array" , JSON.stringify(array));
    let pri = JSON.parse(localStorage.getItem("array"));
    if (pri=== null) {
        var array = [];
     }
     else {
        var array = pri ;
        
       
     }
console.log(pri);*/
    

}
  function myarray() {
    conter++ ;
    UserName = document.getElementById('UserName').value;
    StudentName = document.getElementById('StudentName').value;
    date = document.getElementById('date');
    programtypeDropDown = document.getElementById('programtype').value;
    mobileNum = document.getElementById('mobile').value;
    captcha = document.getElementById('checkCap');
    inputs () ;
   
valid=false;
if(UserName !== '' && StudentName !== '' && programtypeDropDown !== '' )
{
    valid=true;
}
else {
    alert ("Enter the Student name  \t  Ex : (Mahmoud_215038)\nEnter the User Name       \t  Ex : (محمود علي)\nEnter the Number Phone \t Ex : (+963 999 999 999)");
}

    if(valid==true){
      
    inputs_info = new employee(programtypeDropDown,StudentName,UserName,conter);
    alert ("ssss");
    // alert(doha.name);
    employers.push(inputs_info);
    }
    else{
        alert("cant add new user ");
    }
    
    // alert(employers.leangth);
    $html=` <table class="student">
                <tbody>
                    <tr>
                        <th> متسلسل </th>
                        <th>اسم مستخدم </th>
                        <th> اسم الطالب </th>
                        <th> البرنامج</th>
                        
    
                    </tr>`;
    
    
    $end=`</tbody>
    
    </table>`;
    
    
    employers.forEach(myFunction);
     
    function myFunction(employer) {
        $html +=` <tr>
            <td>`+employer.id+`</td>
            <td>`+employer.Uname+`</td>
                    <td>`+employer.Sname+`</td>
    
            <td>`+employer.programT+`</td>
    
    
            </tr>`
    }
    
    
    document.getElementById("show").innerHTML=$html+$end;
    
}


/*
let counter = 0;
// get data from localStorage if exists
var v = JSON.parse(localStorage.getItem("inputs_info"));
if (v === null) {
   var inputs_info = [];
}
else {
   var inputs_info = v;
   id = parseInt(localStorage.getItem("id"));
  
}
counter = counter + 1;
//init data into JSON object
var myObj = {
   "id": id,
   "user": UName,
   "name": SName,
   "major": programT,
};
//add object to the array
inputs_info.push(myObj);

//push array to localStorage
localStorage.setItem("inputs_info", JSON.stringify(inputs_info));
localStorage.setItem("counter", counter);
function ConvertToJSON() {
    //get data from localStorage
    inputs_info = JSON.parse(localStorage.getItem("inputs_info"));
 
    // get sort way
     let r = document.getElementsByName('1');
    let rValue =  "id";
    for (var i = 0; i < r.length; i++) {
        if (r[i].checked) {
            rValue = r[i].value;
        }
    }
    if (document.getElementById('r2').checked)
        rValue = "name"; 

    if (document.getElementById('r3').checked)
        rValue = "major";

    // sort
    inputs_info = s(rValue, inputs_info);
    //convert to JSON
    const myArr = JSON.stringify(inputs_info);
    //view JSON
    document.getElementById("json").innerHTML = myArr;
     

}
var s = function (prop, arr) {
    // add sub function for get value from obj (1/2)
    var _getVal = function (o, key) {
        var v = o;
        var k = key.split(".");
        for (var i in k) {
            v = v[k[i]];
        }
        return v;
    }
    return arr.sort(function (a, b) {
        // get value from obj a, b before sort (2/2)
        var aVal = _getVal(a, prop);
        var bVal = _getVal(b, prop);
        if (aVal < bVal) {
            return -1;
        } else if (aVal > bVal) {
            return 1;
        } else {
            return 0;
        }
    });
};*/