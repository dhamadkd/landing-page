//JavaScript Document
var mylocation = window.location;
var sitename='#';
var siteURL='#';
function form_awda(){
document.write('<form name="generalfrm" action="#" class="j-forms" id="j-forms" enctype="multipart/form-data" > <input type="hidden" name="referer" value="'+window.location+'"><input type="hidden" name="sitename" value="'+sitename+'"><input type="hidden" name="frm_name" value="tour"><input type="hidden" name="siteURL" value="'+siteURL+'"><input type="hidden" name="branch" value="delhi"><input type="hidden" name="hdfLink" id="hdfLink" value=""><input type="hidden" name="referer" id="referer" value=""> <input type="hidden" name="sitename" value="#"> <input type="hidden" name="frm_name" value="tour"> <input type="hidden" name="siteURL" value=""> <input type="hidden" name="tour_name" id="tour_name" value=""> <input type="hidden" name="txiDuration" id="txiDuration" value=""> <div class="form-group"> <input type="text" class="form-control" name="txiName" id="txiName" placeholder="Full Name"> </div> <div class="form-group"> <input type="email" class="form-control" name="txiEmail" id="txiEmail" placeholder="Email Id." > </div> <div class="form-group"> <input type="text" name="txiPhone" id="txiPhone" class="form-control" placeholder="Contact No." required> </div> <div class="form-group"> <fieldset class="input-append date" id="dp1" data-date="" data-date-format=""> <input class="span2" size="16" type="text" id="check_date" placeholder="Travel Date" name="check_date" /> <span class="add-on add-on-a"><i class="fa fa-calendar"></i></span> </fieldset> </div> <div class="row mr-9-9"> <div class=" col-sm-6 col-xs-6 pd-right-0px"> <div class="form-group"> <select name="txiAdults" id="txiAdults" class="form-control"> <option selected="selected" value="">Adults</option> <option>01</option> <option>02</option> <option>03</option> <option>04</option> <option>05</option> <option>06</option> <option>07</option> <option>08</option> <option>09</option> <option>10</option> <option>11</option> <option>12</option> <option>13</option> <option>14</option> <option>15+</option> </select> </div> </div> <div class=" col-sm-6 col-xs-6 pd-left-0px"> <div class="form-group"> <select name="txiChildren" id="txiChildren" class="form-control"> <option selected="selected" value="">Childs</option> <option>0</option> <option>01</option> <option>02</option> <option>03</option> <option>04</option> <option>05</option> <option>06</option> <option>07</option> <option>08</option> <option>09</option> <option>10</option> <option>11</option> <option>12</option> <option>13</option> <option>14</option> <option>15+</option> </select> </div> </div> </div> <div class="form-group"> <textarea name="txaQuery" id="txaQuery" class="form-control" placeholder="Your Message" name="message"></textarea> </div> <div class="form-group"> <label style="color:red;" id="check-captcha" class="hidden">Please Check Recaptcha</label> </div><button type="submit" class="btn btn-success">Send Enquiry</button> </form>')
;}

function addEmailService(){

  document.getElementById('submitForm').addEventListener('click', function () {
   
    // Get the form element
    const form = document.getElementById('myForm');
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
    
    // Create a FormData object to serialize the form fields
    const formData = new FormData(form);
    
    // Convert the FormData to a JSON object
    const formDataJSON = {};
    formData.forEach((value, key) => {
        formDataJSON[key] = value;
    });

    // Define the URL where you want to send the POST request
    // const url = 'http://localhost:3000/email/send';

    const url = 'https://api.hookatrip.com/email/send';

    // Create the request headers
    const headers = {
        'Content-Type': 'application/json',
    };

    // Make the POST request with the JSON data
    fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(formDataJSON),
    })
    .then(response => response.json()) // Parse the response as JSON
    .then(responseData => {
        // Handle the response data here
        console.log('Response:', responseData);
        alert('Thank you for the details. We will call you soon!');
    })
    .catch(error => {
        // Handle errors here
        console.error('Error:', error);
    });
});

}









