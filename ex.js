var statecity={
    guj:["surat", "surat1","etcs"],
    mp:["bihar","bihar1","etscc"],
    mhara:["hiii","hiiriri"]
}
var main = document.getElementById("state");
var sub = document.getElementById("city");

main.addEventListener('change', function(){
   var selectoption = statecity[this.value];

   while (sub.options.length > 0){
       sub.options.remove(0);
   }
  
   Array.from(selectoption).forEach(function(e1){
       let option = new Option(e1, e1);

       sub.appendChild(option);

   });

});

let Books =[{mailto:"sagar", email:"sagar@gmail.com",male:"male",check:"reading",age:"25",state:"guj",city:"surat"},
{mailto:"sagar",email:"sagar1@gmail.com",male:"male",check:"reading",age:"25",state:"guj",city:"surat1"}];


function BindBook(books) {
    var row=``;
    books.forEach( function(book,i){
        row +=`<tr><td>${i+1}</td><td>${book.name}</td><td>${book.email}</td>
        <td>${book.male}</td><td>${book.check}</td><td>${book.age}</td><td>${book.state}</td>
        <td>${book.city}</td>
        <td>
        <a href="javascript:void(0)" onclick="edit(${i})" ">edit</a>
        <a href="javascript:void(0)" onclick="del(${i})" ">Delete</a></td></tr>`;
    })
    document.getElementById("root").innerHTML= row;
}


function AddBook(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    //let male = document.getElementById("male").value;
    // let gender = document.getElementsByName("gender");
    // let male;
    //     for(var i=0; i<gender.length; i++){
    //         if(gender[i].checked){
    //            male= gender[i].value;
    //         }
    //     }

    var male = document.querySelector('input[name = gender]:checked').value;
    //let check = document.getElementById("check").value;
    //let check = document.getElementsByName("langs");

     //let checkbox = document.getElementsByName("langs");
     var length =document.myForm.langs.length;  
     let check;
    for(var i=0; i<length; i++){
        var checkval = document.myForm.langs[i].checked;
        if(checkval){
            check += document.myForm.langs[i].value + ",";
        }
    }
    //let check = document.querySelector('input[name = langs]:checked').value;

    // for(check of checkbox){
    //     if(check.checked){
    //         check = check.value + " ";
    //     }
    // }

    let age = document.getElementById("age").value;
    let state = document.getElementById("state").value;
    let city = document.getElementById("city").value;

    if(name==""){
        document.getElementById('nname').innerHTML ="plese enter name";
        
        return false;
    }
    if(email==""){
        document.getElementById('nname').innerHTML ="plese enter email";
        
        return false;
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
    if(state== "SelectState"){
        document.getElementById('nname').innerHTML ="plese select state";
        
        return false;
    }
    

    var book={name,email,male,check,age,state,city};
    var index = document.getElementById("index").value;

    if(index=="" || index== undefined){
        Books.push(book);
    console.log(Books);
    }else{
        Books.splice(index,1,book);
       // document.getElementById("btn").innerText="Submit";
        document.getElementById("btn").style.display="table-row";
        document.getElementById("update").style.display="none";
        console.log(Books);
    }

    
    BindBook(Books);
    ClearForm();
    
    

}
//document.getElementById("btn").addEventListener("click",AddBook);
BindBook(Books);

function edit(i){
   // console.log(book)
    var book=Books[i];
    document.getElementById("name").value=book.name;
    document.getElementById("email").value=book.email;
    var gender=(document.getElementsByName("gender")[0].checked ||document.getElementsByName("gender")[1].checked).value;
    gender=book.male;
    document.getElementsByName('langs').value=book.check;
    document.getElementById("age").value=book.age;
    document.getElementById("state").value=book.state;
    document.getElementById("city").value=book.city;
    document.getElementById("index").value=i;


    //document.getElementById("btn").innerText="Update";
    document.getElementById("btn").style.display="none";
    document.getElementById("update").style.display="table-row";


}

function del(i){
    event.preventDefault();
    //console.log(i);
    Books.splice(i, 1);
    BindBook(Books);
}

function ClearForm(){
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("male").checked=false;
    document.getElementById("female").checked=false;
    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
    document.getElementById("check4").checked=false;
    document.getElementById("age").value="";
    document.getElementById("state").value="";
    document.getElementById("city").value="";
}

function Short(){
    var select = document.getElementById("selectedee").value;
    
    if(select=="desending"){
        sortList1();
    }
    else{
        sortList(); 
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
  
                    // Loop to go through all rows
                    for (i = 1; i < (rows.length - 1); i++) {
                        var Switch = false;
  
                        // Fetch 2 elements that need to be compared
                        x = rows[i].getElementsByTagName("TD")[1];
                        y = rows[i + 1].getElementsByTagName("TD")[1];
  
                        // Check if 2 rows need to be switched
                        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
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
                        x = rows[i].getElementsByTagName("TD")[1];
                        y = rows[i + 1].getElementsByTagName("TD")[1];
  
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