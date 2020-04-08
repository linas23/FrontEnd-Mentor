const ham = document.querySelector('.ham');
const close = document.querySelector('.close');
const navlinks = document.querySelector('.navlinks')

ham.addEventListener('click',toggleNav);
close.addEventListener('click',toggleNav);

function toggleNav(){
    navlinks.classList.toggle('open');
    console.log(this.classList.value)
    const className = this.classList.value;
    if(className == 'ham'){
        this.style.display='none';
        close.style.display='block';
    }else{
        this.style.display = 'none';
        ham.style.display = 'block';
    };
}