var errorsNum = 0;
var UserNameErr = StudentNameErr = dateErr = programtypeerr = mobileErr = captchaErr = "error";
// فانكشين خاص للتحقق من المدخلات الخاصة بالمستخدم
function Validtions() {
var UserName = document.getElementById('UserName');

UserName.onchange = function () {

    var validUserName = document.getElementById('validUserName');

    var invalidUserName = document.getElementById('invalidUserName');

// التحقق من اسم المستخدم
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
// التحقق من اسم الطالب

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
// التحقق من تاريخ حسب الصيغة 
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

// التحقق من اختيار برنامج دراسي
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
// التحقق من رقم الجوال ان كان يوافق رقم السوري ام لا
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

// التحقق من رمز الكباتشا
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

// مصفوفة لتخزين معلومات الطلاب
var employers= 
[

];

// كلاس مساعد للتخزين في المصفوفة
class employee{
  constructor(programT,Sname,Uname,id) {
    this.Uname = Uname;
    this.Sname = Sname;
    this.id = id;
    this.programT=programT;
  }
}
conter=0;
// فانكشين المصفوفة التي تتفعل لاظهار الطالب في الجدول بعد الضغط على زر البوتوم
  function myarray() {
    UserName = document.getElementById('UserName').value;
    StudentName = document.getElementById('StudentName').value;
    date = document.getElementById('date');
    programtypeDropDown = document.getElementById('programtype').value;
    mobileNum = document.getElementById('mobile').value;
    captcha = document.getElementById('checkCap');
    filter = document.getElementById('filter').value;
     
valid=false;
if(UserName !== '' && StudentName !== '' && programtypeDropDown !== '' && mobileNum !== '')
{
    valid=true;
    conter++ ;
}
else {
    alert ("Enter the Student name  \t  Ex : (Mahmoud_215038)\nEnter the User Name       \t  Ex : (محمود علي)\nEnter the Number Phone \t Ex : (+963 999 999 999)");
}
if(valid==true ){

      
    inputs_info = new employee(programtypeDropDown,StudentName,UserName,conter);
    alert("Add User in table secscful");
    
   

    employers.push(inputs_info);
    
    
    }
    else{
        alert("cant add new user ");
    }


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
            clearForm();
}

   
    

function rad1io (){
   
    if(valid==true ){

      
        inputs_info = new employee(programtypeDropDown,StudentName,UserName,conter);
        alert("Add User in table secscful");
        
       

        employers.push(inputs_info);
        
        
        }
        else{
            alert("cant add new user ");
        }
     

    let UserNumber   =  document.getElementById("UserNumber");
    let StudentsName =  document.getElementById("UserNumber");
    let programs     =  document.getElementById("Porgrams" );;
  
        employers.sort(UserNum);
        function UserNum(a , b){
        return b.id - a.id ;
         }
      
       
   
        
            document.getElementById("show").innerHTML=$html+$end;
    
}
function rad2io (){
   
    if(valid==true ){

      
        inputs_info = new employee(programtypeDropDown,StudentName,UserName,conter);
        alert("Add User in table secscful");
        
       

        employers.push(inputs_info);
        
        
        }
        else{
            alert("cant add new user ");
        }
     


        employers.sort(StudentN);
        function StudentN(a , b){
            if (a.Sname < b.Sname) {return -1 ;}
            if (a.Sname > b.Sname) {return  1 ;}
         return 0 ;
         }
        
       
   
           
        }
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
    

function rad3io (){
    
    if(valid==true ){

      
        inputs_info = new employee(programtypeDropDown,StudentName,UserName,conter);
        alert("Add User in table secscful");
        
       

        employers.push(inputs_info);
        
        
        }
        else{
            alert("cant add new user ");
        }
     

    
        employers.sort(Progrs);
        function Progrs(a , b){
                if (a.programT.toUpperCase() < b.programT.toUpperCase()) {return -1 ;}
                if (a.programT.toUpperCase() > b.programT.toUpperCase()) {return  1 ;}
             return 0 ;
             }
          
           
        
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
// فانكشين خاصة بالتحويل الى صيغة الجسون
function ConvertToJson() {
    let My_Json = JSON.stringify(employers);
    document.getElementById('json').value = My_Json ;

}
function clearForm(){
     document.getElementById('form').reset();
}