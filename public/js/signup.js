$(document).ready(function () {

    getUser();
  
  
    const fNameInput = $("#fName");
    const lNameInput = $("#lName");
    const bNameInput = $("#city");
    const accountInput = $("#account");
    const usernameInput = $("#username");
    const passwordInput = $("#password");
    const newUserForm = $('#newUser');
  
    function getUser() {
      $.get("/api/user", function (data) {
        if (data) {
          fNameInput.val(data.fName);
          lNameInput.val(data.lName);
          bNameInput.val(data.bName);
          accountInput.val(data.account);
          usernameInput.val(data.username);
          passwordInput.val(data.password);
        }
      });
    }
  

    $(newUserForm).on("submit", function handleFormSubmit(event) {
      console.log("Submit clicked");
      event.preventDefault();
      

      var newUser = {
        fName: fNameInput.val(),
        lName: lNameInput.val(),
        bName: bNameInput.val(),
        accountType: accountInput.val(),
        username: usernameInput.val(),
        password: passwordInput.val()
      };
  
  

  
      updateUser(newUser);
    });
  
  });
  

  function updateUser(user) {
    $.ajax({
        method: "PUT",
        url: "/api/user",
        data: user
      })
      .then(function () {
        window.location.href = "/manager";
      });
  }