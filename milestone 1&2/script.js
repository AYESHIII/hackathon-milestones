var togglebutton = document.getElementById('toggle-skills');
var skill = document.getElementById('skills');
togglebutton.addEventListener('click', function () {
    if (skill.style.display === 'none') {
        skill.style.display = 'block';
    }
    else {
        skill.style.display = 'none';
    }
});
