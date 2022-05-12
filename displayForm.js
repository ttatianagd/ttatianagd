
  const firstName=$("#firstName");
  const lastName=$("#lastName");
  const email=$("#email");
  const phone=$("#phone");
  const city=$("#city");
  const profession=$("#profession");
  const social_links=$("#social_links");
  const edutitle=$("#edutitle");
  const date=$("#date");
  const edutype=$("#edutype");
  const job_name=$("#job_name");
  const start_date=$("#start_date");
  const end_date=$("#end_date");
  const city_job=$("#city_job");
  const company_name=$("#company_name");
  const present=$("#present");

  function ajaxGetRequest(){
    $.ajax({
      url: 'http://localhost:3000/form-data',
      method: 'GET',
      dataType: 'json',
      success: function(response) {
        console.log('ture');
        firstName.append(`${JSON.stringify(response.firstName)}`);
        lastName.append(`${JSON.stringify(response.lastName)}`);
        email.append(`${JSON.stringify(response.email)}`);
        phone.append(`${JSON.stringify(response.phone)}`);
        city.append(`${JSON.stringify(response.city)}`);
        profession.append(`${JSON.stringify(response.profession)}`);
        social_links.append(`${JSON.stringify(response.social_links)}`);
        edutitle.append(`${JSON.stringify(response.edutitle)}`);
        date.append(`${JSON.stringify(response.date)}`);
        edutype.append(`${JSON.stringify(response.edutype)}`);
        job_name.append(`${JSON.stringify(response.job_name)}`);
        start_date.append(`${JSON.stringify(response.start_date)}`);
        end_date.append(`${JSON.stringify(response.end_date)}`);
        city_job.append(`${JSON.stringify(response.city_job)}`);
        company_name.append(`${JSON.stringify(response.company_name)}`);
        present.append(`${JSON.stringify(response.present)}`);
      },
    });
  }

  $('#collect-button').on('click', () => {
    ajaxGetRequest()
  });