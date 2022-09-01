var statecity={
    guj:["surat", "surat1","etcs"],
    mp:["bihar","bihar1","etscc"],
    mhara:["pune","mumbai"]
}


// var main = document.getElementById("state");
// var sub = document.getElementById("city");

// main.addEventListener('change', function(){
//    var selectoption = statecity[this.value];

//    while (sub.options.length > 0){
//        sub.options.remove(0);
//    }
  
//    Array.from(selectoption).forEach(function(e1){
//        let option = new Option(e1, e1);

//        sub.appendChild(option);

//    });

// });

var state=["guj","mp","mhara"];
   state.sort();
   var stateOption="";
           stateOption+= "<option disabled selected>select"+"</option>";
           for(stateId in state){
               stateOption+="<option>"+state[stateId]+"</option>";
            }
           document.getElementById("state").innerHTML=stateOption;
           
  var statecity={
            guj:["surat", "surat1","etcs"],
            mp:["bihar","bihar1","etscc"],
            mhara:["pune","mumbai"],
        }    

function fillCity(value){
    if(value.length==0){
        document.getElementById("city").innerHTML="<option></option>";
    }
    else{
        var cityOption="";
        cityOption+="<option disabled selected>select"+"</option>";
        for(cityId in statecity[value]){
            cityOption+="<option>"+statecity[value][cityId]+"</option>";
        }
        document.getElementById("city").innerHTML=cityOption;
        }
}

let formData1 =[{name:"sagar",email:"sagar@gmail.com",male:"male",check:"reading",age:"25",state:"guj",city:"surat",time:"10:21:21"},
{name:"mayur",email:"sagar1@gmail.com",male:"male",check:"reading",age:"25",state:"guj",city:"surat1",time:"02:49:21"}];
insertNewRecord(formData1)
//console.log(formData)


let table="";
for(var i in formData1){
    table+= `<tr><td>${formData1[i].name}</td><td>${formData1[i].email}</td>
    <td>${formData1[i].male}</td><td>${formData1[i].check}</td><td>${formData1[i].age}</td><td>${formData1[i].state}</td>
    <td>${formData1[i].city}</td>
    <td>
    <a href="javascript:void(0)" onclick="onDelete(this)" ">Delete</a></td>
    <td><a href="javascript:void(0)" onclick="onEdit(this)" ">Edit</a></td></tr>`;
}
document.getElementById("root").innerHTML= table;

var selectedRow = null
function onFormSubmit(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    var gender1 =document.getElementById("male");
     var gender2 =document.getElementById("female");
     let age = document.getElementById("age").value;
    let state = document.getElementById("state").value;
    let city = document.getElementById("city").value;

    if(name==""){
        document.getElementById('nname').innerHTML ="please enter name";
        
        return false;
    }
    var letters = /^[A-Za-z]+$/;
    if(!name.match(letters)){
        document.getElementById('nname').innerHTML ="Do not enter number in Name"; 
        return false;
    }
    // if(email==""){
    //     document.getElementById('nname').innerHTML ="plese enter email";
        
    //     return false;
    // }
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
        
        document.getElementById('nname').innerHTML ="plese enter valid email"; 
        return false;  
        }  
        
        
    if(gender1.checked == false && gender2.checked == false){
        document.getElementById('nname').innerHTML ="plese enter gender";
        
        return false 
    }else{
        document.getElementById('nname').innerHTML ="";
    }
    
    var check1 = false;
    var checkv =document.getElementsByName("langs");
    for(var i=checkv.length -1; i>=0; i--){
        if(checkv[i].checked){
            check1 = true;
        }
    }
    if(check1 == false){
        document.getElementById('nname').innerHTML ="select your hobby";
        return false
    }
    if(age==""){
        document.getElementById('nname').innerHTML ="plese enter age";
        
        return false;
    }
    if(state== "select"){
        document.getElementById('nname').innerHTML ="plese select state";
        
        return false;
    }

    

    var formData = readFormData();
     formData1.push(formData)
   //  console.log(formData1);
    if (selectedRow == null){
       insertNewRecord(formData);
       console.log(formData1);
    }
   else{
     updateRecord(formData);
      resetForm();
   }
 //  Short();
   resetForm();
}

function readFormData() {
    var d = new Date();
   var time = d.toLocaleTimeString();
//console.log(time);
    var formData = {};
 
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["male"] = document.querySelector('input[name = gender]:checked').value;

//     var length =document.myForm.langs.length;  
//     let check;
//    for(var i=0; i<length; i++){
//        var checkval = document.myForm.langs[i].checked;
//        if(checkval){
//            check += document.myForm.langs[i].value + ",";
//        }
//    }
    var check="";
    var reading = document.getElementById("check1");
    var travling = document.getElementById("check2");
    var sport = document.getElementById("check3");
    var other = document.getElementById("check4");
    if(reading.checked){
        check+="reading";
    }
    if(travling.checked){
        check+="travling";
    }
    if(sport.checked){
        check+="sport";
    }
    if(other.checked){
        check+="other";
    }

    formData["check"] = check;

    formData["age"] = document.getElementById("age").value;
    //formData["state"] = document.getElementById("state").value;
    formData["state"] = document.getElementById("state").value;
    formData["city"] = document.getElementById("city").value;
    formData["time"] = time;
    

    return formData;
}


function insertNewRecord(data) {
    
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    // console.log('table', table.le)
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.male;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.check;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.age;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.state;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.city;
    cell7 = newRow.insertCell(7);
    cell7.innerHTML = `<a href="javascript:void(0)" onClick="onDelete(this)">Delete</a>`;
    cell8 = newRow.insertCell(8);
    cell8.innerHTML = `<a href="javascript:void(0)" onClick="onEdit(this)">Edit</a>`;

    
    //formData1.push(time);

    
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("state").value = "select";
    document.getElementById("city").value = "select";
    document.getElementById("male").checked=false;
    document.getElementById("female").checked=false;
    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
    document.getElementById("check4").checked=false;



    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
   // document.getElementById("name").value = selectedRow.cells[2].innerHTML;
    var gender = selectedRow.cells[2].innerHTML;
    if(gender=="male"){
        document.getElementById("male").checked=true;
    }else{
        document.getElementById("female").checked=true;
    }

    //document.getElementById("name").value = selectedRow.cells[3].innerHTML;
    var check = selectedRow.cells[3].innerHTML;
    if(check=="reading"){
        document.getElementById("check1").checked=true; 
    }
    if(check=="travling"){
        document.getElementById("check2").checked=true; 
    }
    if(check=="sport"){
        document.getElementById("check3").checked=true; 
    }
    if(check=="other"){
        document.getElementById("check4").checked=true; 
    }
    if(check=="readingtravling"){
        document.getElementById("check1").checked=true; 
        document.getElementById("check2").checked=true; 
    }
    if(check=="readingsport"){
        document.getElementById("check1").checked=true; 
        //document.getElementById("check2").checked=true; 
        document.getElementById("check3").checked=true; 
    }
    if(check=="travlingsport"){
        document.getElementById("check2").checked=true; 
        document.getElementById("check3").checked=true; 
    }
    if(check=="travlingother"){
        document.getElementById("check2").checked=true; 
        document.getElementById("check4").checked=true; 
    }
    if(check=="readingother"){
        document.getElementById("check1").checked=true; 
        document.getElementById("check4").checked=true; 
    }
    if(check=="readingtravlingsport"){
        document.getElementById("check1").checked=true; 
        document.getElementById("check2").checked=true; 
        document.getElementById("check3").checked=true; 
    }
    if(check=="readingtravlingother"){
        document.getElementById("check1").checked=true; 
        document.getElementById("check2").checked=true; 
        document.getElementById("check4").checked=true; 
    }
    if(check=="readingsportother"){
        document.getElementById("check1").checked=true; 
        document.getElementById("check3").checked=true; 
        document.getElementById("check4").checked=true; 
    }
    if(check=="readingtravlingsportother"){
        document.getElementById("check1").checked=true; 
        document.getElementById("check2").checked=true; 
        document.getElementById("check3").checked=true; 
        document.getElementById("check4").checked=true; 
    }
    document.getElementById("age").value = selectedRow.cells[4].innerHTML;
    document.getElementById("state").value = selectedRow.cells[5].innerHTML;
     fillCity( selectedRow.cells[5].innerHTML);
    document.getElementById("city").value = selectedRow.cells[6].innerHTML;

    document.getElementById("btn").innerText ="Update";
    let cancle = document.getElementById("cancle");
    cancle.style.display="table-row";


    var b =formData1.rowIndex;
    formData1.splice(b, 1)
    //console.log(b);

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.male;
    selectedRow.cells[3].innerHTML = formData.check;
    selectedRow.cells[4].innerHTML = formData.age;
    selectedRow.cells[5].innerHTML = formData.state;
    selectedRow.cells[6].innerHTML = formData.city;

    document.getElementById("btn").innerText="Submit";
        let cancle = document.getElementById("cancle");
        cancle.style.display="none";
}

function onDelete(td) {
   
    //     row = td.parentElement.parentElement;
    //      var index =formData1.rowIndex;
    //      formData1.splice(index, 1);
    //      //formData1[row].remove();
    //     console.log("hiii")
    //     document.getElementById("list").deleteRow(row.rowIndex);
    //    // formData1.splice(b, 1)
       
    //     resetForm();

    row = td.parentElement.parentElement;
    var index =formData1.rowIndex;
    formData1.splice(index, 1);
    document.getElementById("list").deleteRow(row.rowIndex);
    resetForm();
      //  console.log(formData1);
    
}
function cancle1(){
    resetForm();
    document.getElementById("btn").innerText="Submit";
        let cancle = document.getElementById("cancle");
        cancle.style.display="none";

}

function searchfun() {
    let fillter = document.getElementById("myinput").value;
    if(fillter==""){
        document.getElementById("searc").innerHTML = " ";
    }

    let mytable = document.getElementById("root");
    let tr = mytable.getElementsByTagName("tr");
    let row =0;

    for(var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName("td")[0];

        if(td){
            let textvalue = td.textContent || td.innerHTML;

            if(textvalue.indexOf(fillter) > -1){
                tr[i].style.display="";
             //   console.log(" show")
                document.getElementById("searc").innerHTML = "";
            }else{
                tr[i].style.display="none";
                
                row++;
               
              
            }
            if( row > tr.length-1){
                document.getElementById("searc").innerHTML = "data not found";
            }     
        }   
    } 
}

function Short(){
    var select = document.getElementById("selectedee").value;
    
    if(select=="ascnding"){
        sortList();
        
    }
    else{
        sortList1(); 
    }
}

function sortList(){

    console.log("asending");
                var table, i, x, y;
                table = document.getElementById("list");
                var switching = true;
  
                // Run loop until no switching is needed
                while (switching) {
                    switching = false;
                    var rows = table.rows;
  
                    for (i = 1; i < (rows.length - 1); i++) {
                        var Switch = false;
  
                        // Fetch 2 elements that need to be compared
                        x = rows[i].getElementsByTagName("TD")[0];
                        y = rows[i + 1].getElementsByTagName("TD")[0];

                        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
                            {
                            Switch = true;
                            break;
                        }
                    }
                    if (Switch) {
                        // Function to switch rows and mark switch as completed
                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                        switching = true;
                    }
                }
}
function sortList1(){
    console.log("desending");
    var table, i, x, y;
                table = document.getElementById("list");
                var switching = true;
  
                // Run loop until no switching is needed
                while (switching) {
                    switching = false;
                    var rows = table.rows;
  
                    // Loop to go through all rows
                    for (i = 1; i < (rows.length - 1); i++) {
                        var Switch = false;
  
                        // Fetch 2 elements that need to be compared
                        x = rows[i].getElementsByTagName("TD")[0];
                        y = rows[i + 1].getElementsByTagName("TD")[0];
  
                        // Check if 2 rows need to be switched
                        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase())
                            {
  
                            // If yes, mark Switch as needed and break loop
                            Switch = true;
                            break;
                        }
                    }
                    if (Switch) {
                        // Function to switch rows and mark switch as completed
                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                        switching = true;
                    }
                }

}
