const email = document.querySelector('input[type="text"]');
const submitEmail = document.querySelector('#submit')
const error = document.querySelector('.error');
const error_message = document.querySelector('.error_message');

submitEmail.addEventListener('click',validateEmail);

function validateEmail(){
    const emailId = email.value;

    if(emailId.indexOf('@') < 0){
        error.style.visibility = 'visible';
        error_message.style.visibility = 'visible';
        email.style.border = '1px solid red';

        setTimeout(() => {
            error.style.visibility = 'hidden';
            error_message.style.visibility = 'hidden';
            email.style.border = '0px solid red';
            email.value = '';
        }, 1500);
    }
    return true;
}


//  switch tabs

const tabslink = document.querySelectorAll('.tabslink div');
const tabs = document.querySelectorAll('.tabs .tab')
// console.log(tabs)

tabslink.forEach(link=>{
    link.addEventListener('click',changeTabs)
})
function changeTabs(){
    // console.log(this)
    removeBorder();
    removeShow();
    console.log(this.querySelector('h5'))
    const tab = this.querySelector('h5');
    tab.classList.add('active');

    // display tabs
    const index = this.dataset.i;
    // console.log(index);
    tabs[index].classList.add('show');
}

function removeBorder(){
    tabslink.forEach(el=>{
        el.querySelector('h5').classList.remove('active')
    })
}
function removeShow(){
    tabs.forEach(tab=>{
        tab.classList.remove('show')
    })
}


//  FAQ 

const questions = document.querySelectorAll('.questions>div');
console.log(questions)
questions.forEach(question=>{
    question.addEventListener('click',handleClick);
})


function handleClick(){
    hideAllAnswers();
    handleAllArrows();
    const arrow = this.querySelector('.question').querySelector('.i img')
    arrow.style.transform= 'rotate(180deg)';
    
    //display answers
    const answer = this.querySelector('.answer')
    const list = answer.classList;
    if(list.show){
        answer.classList.remove('show')
    }else{
        answer.classList.add('show');
    }
}

function handleAllArrows(){
    questions.forEach(q=>{
        q.querySelector('.question').querySelector('.i img').style.transform= 'rotate(0deg)';
    })
}
function hideAllAnswers(){
    questions.forEach(q=>{
        q.querySelector('.answer').classList.remove('show');
    })
}