const userList = [];

//DELETE method
function deleteuser(id) {
  var settings2 = {
    async: true,
    crossDomain: true,
    url: "https://userlist-31ec.restdb.io/rest/userlist/" + id,
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "x-apikey": "5de26f654658275ac9dc20f4",
      "cache-control": "no-cache"
    }
  };

  $.ajax(settings2).done(function(response2) {
    location.reload();
  });
}
//POST method
function createUser() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var balance = document.getElementById("balance").value;
  var balance_loading_day = document.getElementById("balance_loading_day").value;
  var date_of_birth = document.getElementById("date_of_birth").value;
  var jsondata = { name: name, email: email, password: password, balance: balance, balance_loading_day: balance_loading_day, date_of_birth: date_of_birth };
  var settings3 = {
    async: true,
    crossDomain: true,
    url: "https://userlist-31ec.restdb.io/rest/userlist",
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-apikey": "5de26f654658275ac9dc20f4",
      "cache-control": "no-cache"
    },
    processData: false,
    data: JSON.stringify(jsondata)
  };

  $.ajax(settings3).done(function(response3) {
    location.reload();
  });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//GET method
$(document).ready(function() {
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
    //DataTables function
    $("#table_id").DataTable({
      data: resp,
      dataSrc: "",
      mDataProp: "",
      pageLength: 0,
      lengthMenu: [10, 25, 50, 100],
      aoColumns: [
        { mData: "name" },
        { mData: "email" },
        { mData: "password" },
        { mData: "balance" },
        {
          mData: "balance_loading_day",
          render: function(data) {
            var date = new Date(data);
            var month = date.getMonth() + 1;
            return (month.toString().length > 1 ? month : "0" + month) + "/" + date.getDate() + "/" + date.getFullYear();
          }
        },
        {
          mData: "date_of_birth",
          render: function(data) {
            var date = new Date(data);
            var month = date.getMonth() + 1;
            return (month.toString().length > 1 ? month : "0" + month) + "/" + date.getDate() + "/" + date.getFullYear();
          }
        },
        {
          mData: null,
          mRender: function(data, type, row, meta) {
            if (type === "display") {
              data = "<a class='btn btn-danger' onClick=\"deleteuser('" + data._id + "')\">" + "Delete" + "</a>";
            }

            return data;
          }
        }
      ]
    });
  });
});
