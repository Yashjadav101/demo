const uData  = [
    {
        id : 'Wed july 26 2022 04:00:01 GMT-0500d ',
        uName : 'John',
        email:'john@example.com',
        gender : 'Male',
        hobbies : 'Reading',
        age : 23,
        states : "Gujarat",
        city : 'surat'

    },
    {
        id : 'Wed july 26 2022 04:00:02 GMT-0500d ',
        uName : 'mit',
        email:'mit@example.com',
        gender : 'Male',
        hobbies : 'Travelling',
        age : 20,
        states : "Gujarat",
        city : 'surat'
    }
];
const citiesByState = {
    chooseState: ["Choose City"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    Odisha: ["Bhubaneswar", "Puri", "Cuttack"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Kerala: ["kochi", "Kanpur"],
  };


function makeSubmenu(value) {
    if (value.length == 0)
      document.getElementById("City").innerHTML = "<option></option>";
    else {
      let citiesOptions = "";
      for (cityId in citiesByState[value]) {
        citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
      }
      document.getElementById("City").innerHTML = citiesOptions;
    }
  }

class Data{
    constructor(id, uName, email, gender, hobbies, age, states, city){
        this.id = id;
        this.uName = uName;
        this.email = email;
        this.gender = gender;
        this.hobbies = hobbies;
        this.age = age;
        this.states = states;
        this.city = city;
    }
}

const tableBody = document.getElementById("ListItem");

class Display {
    add(Data) {
      let uiString = `<tr id='${Data.id}'>
                              <td>${Data.uName}</td>  
                              <td>${Data.email}</td>
                              <td>${Data.gender}</td>
                              <td>${Data.hobbies}</td>
                              <td>${Data.age}</td>
                              <td>${Data.states}</td>
                              <td>${Data.city}</td>
                              <td><button id="edit" onclick="onEdit(this)" class="btn btn-warning">Edit</button></td>
                              <td><button id=" " onclick="onDelete(event,this.id)" class="btn btn-danger">Delete</button></td>
                          </tr>`;
      tableBody.innerHTML += uiString;
    }
}

const display = new Display();

for (const n of uData) {
    display.add(n);
  }

  const demoForm = document.getElementById("myform");

  function clear() {
    demoForm.reset();
    makeSubmenu(document.getElementById("State").value);
  }

  function formSubmit(e){
    if (add == true) {
        insert(e);
      } else {
        onUpdate(e);
      }
      e.preventDefault();
     }

  demoForm.addEventListener("submit", formSubmit);
  
  function insert(e) {
    const d = new Date();
    const id = d.getTime();
    const uName = document.getElementById("firstName").value;
    const email = document.getElementById("Email").value;
    let type;
    const age = document.getElementById("Age").value;
    const states = document.getElementById("State").value;
    const city = document.getElementById("City").value;
    if (M.checked) {
      type = M.value;
    } else if (F.checked) {
      type = F.value;
    }
    const hobbies = document.getElementsByName("hobbies");
    let selected = [];
    for (let i = 0; i < hobbies.length; i++) {
      if (hobbies[i].checked) {
        selected.push(hobbies[i].value);
      }
    }
    const data = new Data(id, uName, email, type, selected, age, states, city);
    console.log(data);
    display.add(data);
    clear();
  }

  let add = true;
  let record = null;

  function onEdit(td) {
    console.log( "1234",td);
    document.getElementById("submit").innerHTML = "Update";
    document.getElementById("cancel").style.display = "block";
    let row = td.parentNode.parentNode;
    record = row;
    document.getElementById("firstName").value = row.childNodes[1].innerText;
    document.getElementById("Email").value = row.childNodes[3].innerText;
    type = row.childNodes[5].innerText;
    document.getElementById("Age").value = row.childNodes[9].innerText;
    states = row.childNodes[11].innerText;
    city = row.childNodes[13].innerText;
    document.getElementById("State").value = row.childNodes[11].innerText;
    makeSubmenu(states);
    document.getElementById("City").value = row.childNodes[13].innerText;
    if (type == "M") {
      m.checked = true;
    } else {
      f.checked = true;
    }
    let hob = row.childNodes[7].innerText;
    let text = hob.split(",");
    let chekboxes = document.querySelectorAll('input[name="hobbies"]');
    for (let i = 0; i < text.length; i++) {
      for (const chekbox of chekboxes) {
        text[i] == chekbox.value ? (chekbox.checked = true) : false;
      }
    }
    add = false;
  }
  
  function onUpdate(e) {
    record.childNodes[1].innerText = document.getElementById("firstName").value;
    record.childNodes[3].innerText = document.getElementById("Email").value;
    record.childNodes[5].innerText = m.checked ? "M" : "F";
    record.childNodes[9].innerText = document.getElementById("Age").value;
    record.childNodes[11].innerText =
      document.getElementById("State").value;
    record.childNodes[13].innerText = document.getElementById("City").value;
    let hobbies = document.getElementsByName("hobbies");
    let selected = [];
    for (let i = 0; i < hobbies.length; i++) {
      if (hobbies[i].checked) {
        selected.push(hobbies[i].value);
      }
    }
    record.childNodes[7].innerText = selected.toString();
    // sortTable(document.getElementById("sorName"));
    add = true;
    delBtn();
    clear();
  }
  
  function onDelete(e) {
    tableBody.removeChild(e.target.parentNode.parentNode);
  }

  function delBtn() {
    document.getElementById("cancel").style.display = "none";
    clear();
    document.getElementById("submit").innerHTML = "Submit";
  }