const email = document.querySelector('#email');
const btn = document.querySelector('#btn');
const error = document.querySelector('#error');


btn.addEventListener('click',validateEmail);

function validateEmail(){
  console.log(email.value);

  if(!email.value){
    error.textContent = 'Please enter the email address';
    email.style.border='1px solid red';
    if(error.textContent){
    setTimeout(() => {
      error.textContent ='';
      email.style.border='0px solid red'
      email.value = ''
    }, 2000);
  }
    return;
  }

  const emailAd = email.value;

  if(emailAd.indexOf('@') < 0){
    email.style.border='1px solid red'

    error.textContent = 'Please enter the valid email id.'
  }

  if(error.textContent){
    setTimeout(() => {
      error.textContent ='';
      email.style.border='0px solid red'
      email.value = ''
    }, 2000);
  }

}

const ham=document.querySelector(".ham");
const close=document.querySelector(".close");
const navlinks = document.querySelector(".navlinks");
ham.addEventListener('click',()=>{
  navlinks.classList.toggle('open')
  ham.style.display="none";
  close.style.display = 'block';
})
close.addEventListener('click',()=>{
  navlinks.classList.toggle('open')
  close.style.display="none";
  ham.style.display = 'block';
})


// carousel

const peopleList = document.querySelectorAll(".people");
const pageNum = document.querySelectorAll('.page')

pageNum.forEach((page)=>{
  page.addEventListener('click',showThis);
})

function removeall(){
  peopleList.forEach(people=>{
    people.classList.remove('show');
  })
  pageNum.forEach(p=>p.style.backgroundColor = '')
}

function showThis(){
  const index = this.dataset.i;
  removeall();
  this.style.backgroundColor='red';
  peopleList[index].classList.add('show');
}