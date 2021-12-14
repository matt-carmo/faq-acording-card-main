const questions = document.querySelectorAll(".question");
const remove = () => {
    questions.forEach(remove => {
        remove.classList.remove('active')
    })
}

questions.forEach(active => {
    active.addEventListener('click', ()=>{
        remove()
        active.classList.add('active')
    })
});

