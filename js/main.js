const emailRegex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;

// let emailValue = document.getElementById("email").value;

$("#email").on('input', function(){
  let emailValue = $("#email").val();
  if(emailRegex.test(emailValue)){
       $("#email").css("color","green");
     
       $("#valid_email").removeClass("hide");
       $("#error_email").addClass("hide");
       $("#invalid_email").addClass("hide");
       enableSendBtn();
    }
    else if(!emailRegex.test(emailValue) && $(this).val() != ""){
       $("#email").css("color","red");
       $("#error_email").removeClass("hide");
       $("#invalid_email").removeClass("hide");
       $("#valid_email").addClass("hide");
       $("#send").prop("disabled", true);
    }
    else { 
      $("#email").css("color","#555");
      $("#error_email").addClass("hide");
      $("#valid_email, #invalid_email").addClass("hide");
      $("#send").prop("disabled", true);
    }
});

$("#uname").on('input', function(){
    let unameValue = $("#uname").val();
    if(unameValue.length > 3){
         $("#uname").css("color","green");
       
         $("#valid_uname").removeClass("hide");
         $("#error_name").addClass("hide");
         $("#invalid_uname").addClass("hide");
         enableSendBtn();
      }
      else if(unameValue.length <= 3 && unameValue != ""){
         $("#uname").css("color","red");
         $("#error_name").removeClass("hide");
         $("#invalid_uname").removeClass("hide");
         $("#valid_uname").addClass("hide");
         $("#send").prop("disabled", true);
      }
      else { 
        $("#uname").css("color","#555");
        $("#error_name").addClass("hide");
        $("#valid_uname, #invalid_uname").addClass("hide");
        $("#send").prop("disabled", true);
      }
  });

  function enableSendBtn() {
    if (emailRegex.test($('#email').val()) && $('#uname').val().length > 3) {
      $('#send').prop('disabled', false);
    }
  }
