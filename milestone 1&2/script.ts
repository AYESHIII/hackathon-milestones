var togglebutton = document.getElementById('toggle-skills') as HTMLButtonElement
var skill = document.getElementById('skills') as HTMLElement

togglebutton.addEventListener('click',()=>{
    if(skill.style.display === 'none') {
        skill.style.display = 'block'
    } else{
        skill.style.display = 'none'
    }
});