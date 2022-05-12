document.getElementById("submitButton").addEventListener("click", function () {
    const nameValid = validateField("firstName", "First name is required");
    const lastNameValid = validateField("lastName", "Last name is required");

    let cityHasValue = validateField("city", "City is required");
    let emailHasValue = validateField("email", "Email is required");
    let professionHasValue = validateField(
        "profession",
        "Profession is required"
    );
    let phoneHasValue = validatePhone("phone", "Phone is required");
    let educationHasValue = validateEducation(
        "form-etitle",
        "Education title is required"
    );
    let jobHasValue = validateJobName("job_name", "Job name is required");

    if (emailHasValue) {
        emailHasValue = validateEmail();
    }

    if (cityHasValue) {
        cityHasValue = validateCity();
    }
    if (professionHasValue) {
        professionHasValue = validateProfession();
    }
    if (phoneHasValue) {
        phoneHasValue = validatePhone();
    }
    if (educationHasValue) {
        educationHasValue = validateEducation();
    }
    if (jobHasValue) {
        jobHasValue = validateJobName();
    }
});


function validateField(id, errorMessage) {
    const fieldInput = document.getElementById(id);
    const label = fieldInput.parentElement.children.item(0);
    const error = document.getElementById(`${id}Error`);
    const value = fieldInput.value;

    if (value === null || value === "" || value.trim() === "") {
        error.innerHTML = errorMessage;
        error.style.display = "block";
        label.classList.add("error");

        return false;
    } else {
        error.innerHTML = "";
        error.style.display = "none";
        label.classList.remove("error");
    }

    return true;
}

function validateEmail() {
    const emailInput = document.getElementById("email");
    const label = emailInput.parentElement.children.item(0);
    const error = document.getElementById(`emailError`);
    const value = emailInput.value;

    if (
        !value.includes("@") ||
        !value.includes(".") ||
        value.lastIndexOf(".") < value.lastIndexOf("@")
    ) {
        error.innerHTML = "Email is invalid";
        error.style.display = "block";
        label.classList.add("error");
        return false;
    } else {
        error.innerHTML = "";
        error.style.display = "none";
        label.classList.remove("error");
    }

    return true;
}
function validateCity() {
    const cityInput = document.getElementById("city");
    const label = cityInput.parentElement.children.item(0);
    const error = document.getElementById(`cityError`);
    const value = cityInput.value;

    if (value.length < 4) {
        error.innerHTML = "City length must be greater then 3";
        error.style.display = "block";
        label.classList.add("error");
        return false;
    } else {
        error.innerHTML = "";
        error.style.display = "none";
        label.classList.remove("error");
    }

    return true;
}


function validateProfession() {
    const professionInput = document.getElementById("profession");
    const label = professionInput.parentElement.children.item(0);
    const error = document.getElementById(`professionError`);
    const value = professionInput.value;

    if (value.length < 1) {
        error.innerHTML = "Profession length must be greater then 1";
        error.style.display = "block";
        label.classList.add("error");
        return false;
    } else {
        error.innerHTML = "";
        error.style.display = "none";
        label.classList.remove("error");
    }

    return true;
}

function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const label = phoneInput.parentElement.children.item(0);
    const error = document.getElementById(`phoneError`);
    const value = phoneInput.value;

    if (!value.includes("+373") || value.length < 8) {
        error.innerHTML = "Phone is invalid";
        error.style.display = "block";
        label.classList.add("error");
        return false;
    } else {
        error.innerHTML = "";
        error.style.display = "none";
        label.classList.remove("error");
    }

    return true;
}

function validateEducation() {
    const educInput = document.getElementById("form-etitle");
    const label = educInput.parentElement.children.item(0);
    const error = document.getElementById(`educError`);
    const value = educInput.value;

    if (value.length < 1) {
        error.innerHTML = "Education ttle must be greater then 1";
        error.style.display = "block";
        label.classList.add("error");
        return false;
    } else {
        error.innerHTML = "";
        error.style.display = "none";
        label.classList.remove("error");
    }

    return true;
}
function validateJobName() {
    const job_nInput = document.getElementById("job_name");
    const label = job_nInput.parentElement.children.item(0);
    const error = document.getElementById(`job_nError`);
    const value = job_nInput.value;

    if (value.length < 1) {
        error.innerHTML = "Job name must be greater then 1";
        error.style.display = "block";
        label.classList.add("error");
        return false;
    } else {
        error.innerHTML = "";
        error.style.display = "none";
        label.classList.remove("error");
    }

    return true;
}

$(document).ready(function() {
    $("#education_btn").click(function() {
      $(".edu-form").toggle();
      $(".job-div").hide();
      $(".social-form").hide();
    });
    $("#job_btn").click(function() {
        $(".job-div").toggle();
        $(".edu-form").hide();
        $(".social-form").hide();
      });
    $("#social_btn").click(function() {
        $(".social-form").toggle();
        $(".edu-form").hide();
        $(".job-div").hide();
      });
      $("#present").click(function() {
        $("#endDate").hide();
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
            $(wrapper).append('<div><input type="text" name="social-links" id="input_field"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });
    $(wrapper).on("click",".remove_field", function(e){ 
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});


$(document).ready(function() {
    var wrapper         = $(".edu-form"); 
    var add_button      = $(".add_education_button"); 
   
    var x = 1; 
    $(add_button).click(function(e){ 
        e.preventDefault();
        if(x < 10){ 
            x++; 
            $(wrapper).append('<div><div class="education"> <div class="education-form"> <span class="edu-title"></span> <input type="text" id="form-etitle" name="edutitle" placeholder="Education title" required> <div class="error" id="educError"></div> </div> <div class="education-form"> <label class="edu-date">Graduation date</label> <input type="date" name="date"> </div> </div> <select name="edutype" id="education-type"> <option value="type">Education type</option> <option value="Bachelor">Bachelor</option> <option value="Superior">Superior</option> <option value="Lyceum">Lyceum</option> </select><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });
    $(wrapper).on("click",".remove_field", function(e){ 
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});

$(document).ready(function() {
    var wrapper         = $(".job-div"); 
    var add_button      = $(".add_job_button"); 
   
    var x = 1; 
    $(add_button).click(function(e){ 
        e.preventDefault();
        if(x < 10){ 
            x++; 
            $(wrapper).append('<div><div class="form"> <select name="job_name" id="job_name" class="job"> <option value="type">Job</option> <option value="Computer programmer">Computer programmer</option> <option value="Data scientist">Data scientist</option> <option value="Database administrator">Database administrator</option> <option value="Network engineer">Network engineer</option> <option value="Systems analyst">Systems analyst</option> <option value="Software engineer">Software engineer</option> <option value="Support specialist">Support specialist</option> <option value="Web developer">Web developer</option> </select> <div class="error" id="job_nError"></div> </div> <div class="job"> <label>Start Date<br> <input type="date" name="start_date"> </label> <br> <label>End Date<br> <input type="date" name="end_date" id="endDate"> </label> <input type="checkbox" id="present" name="Present"> <label for="in-present">In present</label> </div> <div class="job-details"> <select name="city_job" class="job"> <option value="type">City</option> <option value="Chișinău">Chișinău</option> <option value="Orhei">Orhei</option> <option value="Bălți">Bălți</option> <option value="București">București</option> <option value="Iași">Iași</option> <option value="Timișoara">Timișoara</option> <option value="Brașov">Brașov</option> <option value="Galați">Galați</option> <option value="Cluj-Napoca">Cluj-Napoca</option> </select> <select name="company_name" class="job"> <option value="type">Company</option> <option value="AC Technologies">AC Technologies</option> <option value="Amdaris">Amdaris</option> <option value="BLUELINE">BLUELINE</option> <option value="Code Factory">Code Factory</option> <option value="DevelopmentAid">DevelopmentAid</option> <option value="Enterprise Business Solutions">Enterprise Business Solutions</option> <option value="Endava">Endava</option> <option value="Inther Software Development">Inther Software Development</option> <option value="Pentalog CHI">Pentalog CHI</option> </select><div class="error" id="compError"></div> </div><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });
    $(wrapper).on("click",".remove_field", function(e){ 
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});

//send
$("#submitButton").on('click', function(e) {
   
    e.preventDefault();

    var form = $("#idForm");
    var url = 'http://localhost:3000/form-data';
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