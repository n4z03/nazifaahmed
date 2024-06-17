document.addEventListener("DOMContentLoaded", function(){
    const defaultMail = document.getElementById('button1');
    const hoverMail = document.getElementById('button2');
    const imgContainer = document.getElementById('imgContainer');

    imgContainer.addEventListener('mouseover', function(){
        defaultMail.style.display='none';
        hoverMail.style.display='block';
        hoverMail.style.transform = 'scale(1.1)';
;    });

    imgContainer.addEventListener('mouseout', function(){
        defaultMail.style.display = 'block';
        hoverMail.style.display = 'none';
        hoverMail.style.transform = 'scale(1)';
    });
});