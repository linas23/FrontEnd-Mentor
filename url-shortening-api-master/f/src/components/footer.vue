<template>
    <footer>
        <div class="logo"><img src="../assets/images/logo.svg" alt=""></div>
    <div>
        <div>
       <b>
            Features
        </b>
       <a href="#"> Link Shortening</a>
       <a href="#"> Branded Links</a>
       <a href="#"> Analytics</a>
    </div>
    <div>

        <b>
                Resources
            </b>
           <a href="#"> Blog</a>
           <a href="#"> Developers</a>
           <a href="#"> Support</a>
    </div>
    <div>
        <b>
                Company
            </b>
           <a href="#"> About</a>
           <a href="#"> Our Team</a>
           <a href="#"> Careers</a>
           <a href="#"> Contact</a>
    </div>
    </div>
    <div>
        <img src="../assets/images/icon-facebook.svg" alt="">
        <img src="../assets/images/icon-twitter.svg" alt="">
        <img src="../assets/images/icon-pinterest.svg" alt="">
        <img src="../assets/images/icon-instagram.svg" alt="">
    </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer{
    background:var(--VeryDarkViolet);
    color:white;
}

@media (min-width:375px){
    footer{
        display: flex;
        flex-direction: column;
        text-align: center;
        div{
            margin:2rem;
            b{
                font-size: 1.5rem;
            }
            a{
                display: block;
                color:white;
                margin:1.25rem 0px;
                font-size: 1.25rem;
            }
            img{
                margin:0 2rem;
            }
        }
    }
}
@media (min-width:1440px){
    footer{
            display: grid;
            grid-template-columns: repeat(3,1fr);
            align-items: flex-start;
            padding: 5rem;
            div{
                margin:  0px 5rem;
            }
            &>div:nth-child(2){
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                b{
                    font-size: 2rem;
                }   
                a{
                    display: block;
                    color:white;
                    margin:1.25rem 0px;
                    font-size: 1.25rem;
                }
                a:hover{
                    color: var(--Cyan);
                }
            }
        }
}
</style>