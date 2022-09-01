const sData = [
    {
      id: "Wed Feb 23 2022 04:00:01 GMT-0500",
      uName: "bhavik",
      email: "bsshah9879@gmail.com",
      gender: "M",
      hobbies: "writing",
      age: 23,
      states: "Gujrat",
      city: "Surat",
    },
    {
      id: "Wed Feb 23 2022 04:02:01 GMT-0500",
      uName: "vishal",
      email: "vishal9879@gmail.com",
      gender: "M",
      hobbies: "photography",
      age: 65,
      states: "Odisha",
      city: "Puri",
    },
  ];
  
  const citiesByState = {
    chooseState: ["Choose City"],
    Gujrat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    Odisha: ["Bhubaneswar", "Puri", "Cuttack"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Kerala: ["kochi", "Kanpur"],
  };
  function makeSubmenu(value) {
    if (value.length == 0)
      document.getElementById("citySelect").innerHTML = "<option></option>";
    else {
      let citiesOptions = "";
      for (cityId in citiesByState[value]) {
        citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
      }
      document.getElementById("citySelect").innerHTML = citiesOptions;
    }
  }
  
  class Data {
    constructor(id, uName, email, gender, hobbies, age, states, city) {
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
  
  const tableBody = document.getElementById("tableBody");
  
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
                              <td><button id="edit" onclick="onEdit(this)" class="btn btn-outline-secondary">Edit</button></td>
                              <td><button id=" " onclick="onDelete(event,this.id)" class="btn btn-outline-danger">Delete</button></td>
                          </tr>`;
      tableBody.innerHTML += uiString;
    }
  
    validate() {
      if (
        !validName ||
        !validEmail ||
        !validAge ||
        !validGender ||
        !validHobbies ||
        !validState
      ) {
        this.show("danger", "Enter Valid Data");
        return false;
      } else {
        this.show("success", "Your data has been Successfully added");
        return true;
      }
    }
    show(type, displayMessage) {
      let message = document.getElementById("message");
      let boldText;
      if (type === "success") {
        boldText = "Success";
      } else {
        boldText = "Error! ";
      }
      message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                  <strong>${boldText} </strong> ${displayMessage}
                              </div>`;
      setTimeout(function () {
        message.innerHTML = "";
      }, 2000);
    }
  }
  
  const display = new Display();
  
  for (const n of sData) {
    display.add(n);
  }
  
  const demoForm = document.getElementById("demoForm");
  
  function clear() {
    demoForm.reset();
    makeSubmenu(document.getElementById("statesSelect").value);
    validNmae = false;
    validEmail = false;
    validAge = false;
    validGender = false;
  }
  
  function demoFormSubmit(e) {
    if (add == true) {
      insert(e);
    } else {
      onUpdate(e);
    }
    e.preventDefault();
  }
  demoForm.addEventListener("submit", demoFormSubmit);
  
  let add = true;
  let record = null;
  
  function onEdit(td) {
    document.getElementById("submit").innerHTML = "Update";
    document.getElementById("cancel").style.display = "block";
    let row = td.parentNode.parentNode;
    record = row;
    document.getElementById("name").value = row.childNodes[1].innerText;
    document.getElementById("email").value = row.childNodes[3].innerText;
    type = row.childNodes[5].innerText;
    document.getElementById("age").value = row.childNodes[9].innerText;
    states = row.childNodes[11].innerText;
    city = row.childNodes[13].innerText;
    document.getElementById("statesSelect").value = row.childNodes[11].innerText;
    makeSubmenu(states);
    document.getElementById("citySelect").value = row.childNodes[13].innerText;
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
    record.childNodes[1].innerText = document.getElementById("name").value;
    record.childNodes[3].innerText = document.getElementById("email").value;
    record.childNodes[5].innerText = m.checked ? "M" : "F";
    record.childNodes[9].innerText = document.getElementById("age").value;
    record.childNodes[11].innerText =
      document.getElementById("statesSelect").value;
    record.childNodes[13].innerText = document.getElementById("citySelect").value;
    let hobbies = document.getElementsByName("hobbies");
    let selected = [];
    for (let i = 0; i < hobbies.length; i++) {
      if (hobbies[i].checked) {
        selected.push(hobbies[i].value);
      }
    }
    record.childNodes[7].innerText = selected.toString();
    sortTable(document.getElementById("sorName"));
    add = true;
    delBtn();
    clear();
  }
  
  function onDelete(e) {
    tableBody.removeChild(e.target.parentNode.parentNode);
  }
  
  const m = document.getElementById("m");
  const f = document.getElementById("f");
  
  function insert(e) {
    const d = new Date();
    const id = d.getTime();
    const uName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    let type;
    const age = document.getElementById("age").value;
    const states = document.getElementById("statesSelect").value;
    const city = document.getElementById("citySelect").value;
    if (m.checked) {
      type = m.value;
    } else if (f.checked) {
      type = f.value;
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
    if (display.validate(data)) {
      display.add(data);
      clear();
    } else {
      clear();
    }
    sortTable(document.getElementById("sorName"));
  }
  
  function delBtn() {
    document.getElementById("cancel").style.display = "none";
    clear();
    document.getElementById("submit").innerHTML = "Submit";
  }
  
  function searchName() {
    let input, filter, tr, td, i, txtValue;
    input = document.getElementById("sTxt");
    filter = input.value.toUpperCase();
    tr = tableBody.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  function sortTable(sort) {
    let rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    switching = true;
    dir = sort.value;
    while (switching) {
      switching = false;
      rows = tableBody.rows;
      for (i = 0; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[0];
        y = rows[i + 1].getElementsByTagName("td")[0];
        if (dir == "ascending") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "descending") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
  
  const vName = document.getElementById("name");
  let validNmae = false;
  vName.addEventListener("input", () => {
    let regex = /^[a-zA-Z]+$/;
    let str = vName.value;
    if (regex.test(str)) {
      validNmae = true;
    } else {
      display.show("danger", "Your Name is Not valid");
      validNmae = false;
    }
  });
  
  const vEmail = document.getElementById("email");
  let validEmail = false;
  vEmail.addEventListener("blur", () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = vEmail.value;
    if (regex.test(str)) {
      validEmail = true;
    } else {
      display.show("danger", "Your Email is not valid");
      validEmail = false;
    }
  });
  
  const vAge = document.getElementById("age");
  let validAge = false;
  vAge.addEventListener("input", () => {
    let regex = /^[1-9]?[0-9]{1}$|^100$/;
    let str = vAge.value;
    if (regex.test(str)) {
      validAge = true;
    } else {
      display.show("danger", "Your Age is not valid");
      validAge = false;
    }
  });
  
  const vGender = document.getElementsByName("g");
  let validGender = false;
  for (let i = 0; i < vGender.length; i++) {
    vGender[i].addEventListener("blur", () => {
      if (m.checked != true && f.checked != true) {
        display.show("danger", "Select Radio Button");
        validGender = false;
      } else {
        validGender = true;
      }
    });
  }
  
  const writing = document.getElementById("writing");
  const photography = document.getElementById("photography");
  const cooking = document.getElementById("cooking");
  const vHobbies = document.getElementsByName("hobbies");
  let validHobbies = false;
  for (let i = 0; i < vHobbies.length; i++) {
    vHobbies[i].addEventListener("blur", () => {
      if (
        writing.checked == true ||
        photography.checked == true ||
        cooking.checked == true
      ) {
        validHobbies = true;
      } else {
        display.show("danger", "Select Hobbies");
        validHobbies = false;
      }
    });
  }
  
  const vState = document.getElementById("statesSelect");
  let validState = false;
  vState.addEventListener("change", () => {
    if (vState.value == "chooseState") {
      validState = false;
      display.show("danger", "Select States");
    } else {
      validState = true;
    }
  });