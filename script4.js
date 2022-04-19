$(document).ready(function() {
    $("#education_btn").click(function() {
      $(".edu-form").toggle();
    });
    $("#job_btn").click(function() {
        $(".job-div").toggle();
      });
    $("#social_btn").click(function() {
        $(".social-form").toggle();
      });
});

$(document).ready(function() {
    var wrapper         = $(".input_fields_wrap"); 
    var add_button      = $(".add_field_button"); 
   
    var x = 1; 
    $(add_button).click(function(e){ 
        e.preventDefault();
        if(x < 10){ 
            x++; 
            $(wrapper).append('<div><input type="text" name="social-links"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });
    $(wrapper).on("click",".remove_field", function(e){ 
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});

$(function() {
    $("#fname_error_message").hide();
    $("#lname_error_message").hide();
    $("#email_error_message").hide();
    $("#number_error_message").hide();
    $("#adress_error_message").hide();
    $("#profession_error_message").hide();
    $("#etitle_error_message").hide();

    var error_fname = false;
    var error_lname = false;
    var error_email = false;
    var error_number = false;
    var error_adress = false;
    var error_profession = false;
    var error_etitle = false;

    $("#form_fname").focusout(function(){
        check_fname();
    });
    $("#form_lname").focusout(function(){
        check_lname();
    });
    $("#form_email").focusout(function(){
        check_email();
    });
    $("#form_number").focusout(function(){
        check_number();
    });
    $("#form_adress").focusout(function(){
        check_adress();
    });
    $("#form_profession").focusout(function(){
        check_profession();
    });
    $("#form_etitle").focusout(function(){
        check_etitle();
    });

    function check_fname(){
        var pattern = /^[a-zA-Z]*$/;
        var fname = $("#form_fname").val()
        if (pattern.test(fname) && fname!= '') {
            $("#fname_error_message").hide();
            $("#form_fname").css("border", "2px solid #000000");
        } else {
            $("#fname_error_message").html("This field is required");
            $("#fname_error_message").show();
            $("#form_fname").css("border", "2px solid #F90A0A");
            error_fname = true;
        }
    }
    function check_lname(){
        var pattern = /^[a-zA-Z]*$/;
        var lname = $("#form_lname").val()
        if (pattern.test(lname) && lname!= '') {
            $("#lname_error_message").hide();
            $("#form_lname").css("border", "2px solid #000000");
        } else {
            $("#lname_error_message").html("This field is required");
            $("#lname_error_message").show();
            $("#form_lname").css("border", "2px solid #F90A0A");
            error_lname = true;
        }
    }
    function check_email(){
        var pattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
        var email = $("#form_email").val()
        if (pattern.test(email) && email!= '') {
            $("#email_error_message").hide();
            $("#form_email").css("border", "2px solid #000000");
        } else {
            $("#email_error_message").html("Invalid email");
            $("#email_error_message").show();
            $("#form_email").css("border", "2px solid #F90A0A");
            error_email = true;
        }
    }
    function check_number(){
        var pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        var number = $("#form_number").val()
        if (pattern.test(number) && number!= '') {
            $("#number_error_message").hide();
            $("#form_number").css("border", "2px solid #000000");
        } else {
            $("#number_error_message").html("Invalid number");
            $("#number_error_message").show();
            $("#form_number").css("border", "2px solid #F90A0A");
            error_number = true;
        }
    }
    function check_adress(){
        var pattern = /^[a-zA-Z0-9]+$/;
        var adress = $("#form_adress").val()
        if (pattern.test(adress) && adress!= '') {
            $("#adress_error_message").hide();
            $("#form_adress").css("border", "2px solid #000000");
        } else {
            $("#adress_error_message").html("This field is required");
            $("#adress_error_message").show();
            $("#form_adress").css("border", "2px solid #F90A0A");
            error_adress = true;
        }
    }
    function check_profession(){
        var pattern = /^[a-zA-Z]*$/;
        var profession = $("#form_profession").val();
        if (pattern.test(profession) && profession!= '') {
            $("#profession_error_message").hide();
            $("#form_profession").css("border", "2px solid #000000");
        } else {
            $("#profession_error_message").html("This field is required");
            $("#profession_error_message").show();
            $("#form_profession").css("border", "2px solid #F90A0A");
            error_profession = true;
        }
    }
});

document.getElementById('form-etitle').addEventListener('focusout', function () {
    let educationHasValue = validateEducation("form-etitle" , "Education title is required")

    if (educationHasValue) {
        educationHasValue = validateEducation();
    }

        const allFieldsValid = educationHasValue;
        if(allFieldsValid) {
            showValues();
        } else {
            hideValues();
        }
});

function showValues(){
    ['form-etitle'].forEach(id =>{
        const valueElement = document.getElementById(`${id}Display`);
        valueElement.innerHTML = `${id}: ${emelent.value};`;
    });
}

function hideValues() {
    ['form-etitle'].forEach(id =>{
        const valueElement = document.getElementById(`${id}Display`);
        valueElement.innerHTML = null;
    });
}

 //send 
  $("#idForm").submit(function(e) {
   
    e.preventDefault();

    var form = $(this);
    var url = form.attr('action');
    var userInputs = {};
    form.serializeArray().forEach((input) => {userInputs[input.name] = input.value;})
    console.log(userInputs);
    $.ajax({
      url,
      method: 'POST',
      datatype: 'json',
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(userInputs),
      success: function(response) {
        console.log(response);
      }
    });
  });
