// get references to the form ad dispaly area 
var form = document.getElementById('resume-form') as HTMLFormElement
var resumeDisplayElement= document.getElementById ('resume-display') as HTMLDivElement
 
//handle form submission
form.addEventListener('submit',(event:Event)=>{
    event.preventDefault(); //prevent page load
    //collect input 
    const names = (document.getElementById ('name') as HTMLInputElement).value
    const email = (document.getElementById ('email') as HTMLInputElement).value
    const phonenumber = (document.getElementById ('number') as HTMLInputElement).value
    const education= (document.getElementById ('education') as HTMLInputElement).value
    const experience = (document.getElementById ('experience') as HTMLInputElement).value
    const skills = (document.getElementById ('skills') as HTMLInputElement).value

    // generate the resume content dynamically
    const resumeHTML= `
    <h2><b> Resume</b></h2>
    <h3>personal information</h3>
    <p><b>Name:</b> ${names}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone Number:</b> ${phonenumber}</p>

   <p><b>Education:</b> ${education}</p>
    <p><b>Skills:</b> ${skills}</p> `;
    

    // display generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;

    } else{
        console.log(`The resume display element is missing.`);
    }
    
    
    

});