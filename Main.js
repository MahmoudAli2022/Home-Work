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

    
switch (filter)
{

   case "All" :{
    if(valid==true && filter == "All"){

      
        inputs_info = new employee(programtypeDropDown,StudentName,UserName,conter);
        alert ("ssss");
        
       

        employers.push(inputs_info);
        
        
        }
        else{
            alert("cant add new user ");
        }
     

    let UserNumber   =  document.getElementById("UserNumber");
    let StudentsName =  document.getElementById("UserNumber");
    let programs     =  document.getElementById("Porgrams" );;
    if (UserNumber.checked == true  )
    {
        employers.sort(UserNum);
        function UserNum(a , b){
        return b.id - a.id;
         }
        console.log(employers);
       
    }
    else if (StudentsName.checked == true )
    {

        employers.sort(StudentN);
        function StudentN(a , b){
            if (a.Sname.toLowerCase() < b.Sname.toLowerCase()) {return -1 ;}
            if (a.Sname.toLowerCase() > b.Sname.toLowerCase()) {return  1 ;}
         return 0 ;
         }
        console.log(employers);
       
    }
    else  if ( programs.checked == true  )
    {
        employers.sort(Progrs);
        function Progrs(a , b){
                if (a.programT.toLowerCase() < b.programT.toLowerCase()) {return -1 ;}
                if (a.programT.toLowerCase() > b.programT.toLowerCase()) {return  1 ;}
             return 0 ;
             }
            console.log(employers);
           
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
            break;
   }
    case "Bait" :{  if(valid==true){
      
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
        
        
        if (programtypeDropDown=="Bait"){
            document.getElementById("show").innerHTML=$html+$end;}
            break ;
        }
    case "Bact" :{  if(valid==true){
      
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
        
        
        if (programtypeDropDown=="Bact"){
            document.getElementById("show").innerHTML=$html+$end;}
            break ;
        }
    case "Bit" :{  if(valid==true){
      
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
        
        
        if (programtypeDropDown=="Bit"){
            document.getElementById("show").innerHTML=$html+$end;}
            break ;
        }
    case "Bl" :{  if(valid==true){
      
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
        
        
        if (programtypeDropDown=="Bl"){
            document.getElementById("show").innerHTML=$html+$end;}
        }
        break ;
}
  
    
}

function ConvertToJson() {
    let My_Json = JSON.stringify(employers);
    document.getElementById('json').value = My_Json ;

}