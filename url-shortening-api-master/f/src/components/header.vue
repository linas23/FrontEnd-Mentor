<template>
  <header>
      <div class="brand">
          <div class="logo">
              <img src="../assets/images/logo.svg" alt="">
          </div>
      </div>
        <nav>
            <div class="navlinks">
            <a href="#"> Features</a>
            <a href="#"> Pricing</a>
            <a href="#"> Resources   </a>
            </div>
            <div>
            <a href="#"> Login</a>
            <a href="#">
                <button>
                    Sign Up
                </button>
            </a>
            </div>
        </nav>
        <div class="ham">
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
        </div>
    
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" >

a{
    text-decoration: none;
    cursor: pointer;
}
a:hover{
    color: var(--Cyan);
}

@media (min-width:375px){
    header{
        width: 90%;
        margin:0 auto;
        padding: 20px 0px;
        display: flex;
        justify-content: space-between;
    }
    nav{
        display: none;
    }
    .ham{
        cursor: pointer;
        position: relative;
        height:20px;
        width:30px;
        .line{
            content:'';
            position: absolute;
            background: grey;
            height: 3px;
            width: 20px;
            left: 0px;
        }
        .line-1{
            top: 25%;
        }
        .line-2{
            top:50%;
        }
        .line-2{
            top:55%;
        }
    }
}

@media (min-width:1440px){
    .ham{
        display: none;
    }
    header{
        width: 100%;
        padding:2rem 15rem;
        height: 10vh;
    }
    nav{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .navlinks{
            flex-grow: 50%;
        }
            a{
                margin:  0 3rem;
                cursor: pointer;
                color: var(--GrayishViolet);
                font-size: 1.5rem;
            }
        button{
            width: 10rem;
            height: 4rem;
        }
    }
    
}
</style>