const userList = [];

$(document).ready(function() {
  list();

  var settings = {
    async: true,
    crossDomain: true,
    url: "https://userlist-31ec.restdb.io/rest/userlist",
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-apikey": "5de26f654658275ac9dc20f4",
      "cache-control": "no-cache"
    }
  };
  $.ajax(settings).done(function(response) {
    let resp = [];
    for (let i in response) {
      resp.push(response[i]);
    }

    console.log(resp);
    $("#table_id").DataTable({
      data: resp
    });
  });
});

function arrayLoop() {
  for (let i in userList) {
    let container = document.createElement("tr");
    let name = document.createElement("td");
    let email = document.createElement("td");
    let password = document.createElement("td");
    let balance = document.createElement("td");
    let balance_loading_day = document.createElement("td");
    let date_of_birth = document.createElement("td");
    name.innerHTML = userList[i].getName();
    email.innerHTML = userList[i].getEmail();
    password.innerHTML = userList[i].getPassword();
    balance.innerHTML = userList[i].getBalance();
    balance_loading_day.innerHTML = userList[i].getBalanceLoadingDay();
    date_of_birth.innerHTML = userList[i].getDateOfBirth();

    container.appendChild(name);
    container.appendChild(email);
    container.appendChild(password);
    container.appendChild(balance);
    container.appendChild(balance_loading_day);
    container.appendChild(date_of_birth);
    console.log(container);
    document.getElementById("tbody").appendChild(container);
  }
}
function list() {
  // let xhr = new XMLHttpRequest();
  // xhr.onload = function() {
  // let data = JSON.parse(this.response);
  // if (xhr.status >= 200 && xhr.status < 400) {
  //   data.forEach(data => {
  //     console.log(userList);
  //     userList.push(data.email);
  //     //  userList.push(new User(data.email, data.balance, data.name, data.password, data.balance_loading_day, data.date_of_birth));
  //   });
  //   //arrayLoop();
  // } else {
  //   console.log(xhr.status);
  // }
}
// xhr.open("GET", "https://userlist-31ec.restdb.io/rest/userlist");
// xhr.setRequestHeader("content-type", "application/json");
// xhr.setRequestHeader("x-apikey", "5de26f654658275ac9dc20f4");
// xhr.setRequestHeader("cache-control", "no-cache");
// xhr.send();
// }

// function User(Email, Balance, Name, Password, BalanceLoadingDay, DateOfBirth) {
//   this.email = Email;
//   this.balance = Balance;
//   this.name = Name;
//   this.password = Password;
//   this.balanceLoadingDay = BalanceLoadingDay;
//   this.dateOfBirth = DateOfBirth;
//   this.matchUser = (email, password) => {
//     return this.email === email && this.password === password;
//   };
//   this.matchEmail = email => {
//     return this.email === email;
//   };
//   this.getEmail = () => {
//     return this.email;
//   };
//   this.getBalance = () => {
//     return this.balance;
//   };
//   this.getName = () => {
//     return this.name;
//   };
//   this.getPassword = () => {
//     return this.password;
//   };
//   this.getBalanceLoadingDay = () => {
//     return this.balanceLoadingDay;
//   };
//   this.getDateOfBirth = () => {
//     return this.dateOfBirth;
//   };
// }

// const response = await fetch("https://posts-0729.restdb.io/rest/userlist");
// const myJson = await response.json();
// console.log(JSON.stringify(myJson));
