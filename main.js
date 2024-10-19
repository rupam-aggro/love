const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Miao Maw Mew Mow';

    let icon = document.getElementById("icon"); 
    
    if (icon.classList.contains("fa-circle-question")) {
        icon.classList.remove("fa-circle-question");
        icon.classList.add("fa-face-kiss"); 
    
    } else {
        icon.classList.remove("fa-face-kiss");
        icon.classList.add("fa-circle-question"); 
    }
    wrapper.style.backgroundImage = 'url("WhatsApp Image 2024-10-19 at 04.31.40_a820afe2.jpg")'; 
    wrapper.style.backgroundSize = 'cover';  
    wrapper.style.backgroundPosition = 'center';
    noBtn.remove();  


});
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
