// get references to the form ad dispaly area 
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page load
    //collect input 
    var names = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phonenumber = document.getElementById('number').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate the resume content dynamically
    var resumeHTML = "\n    <h2><b> Resume</b></h2>\n    <h3>personal information</h3>\n    <p><b>Name:</b> ".concat(names, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone Number:</b> ").concat(phonenumber, "</p>\n\n   <p><b>Education:</b> ").concat(education, "</p>\n    <p><b>Skills:</b> ").concat(skills, "</p> ");
    // display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.log("The resume display element is missing.");
    }
});
