<template>
  <div id="app">
        <compHeader/>
        <compIntro/>
        <compStat/>
        <compBoost/>
        <compFooter/>
      <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">Linas 23</a>.
        </div>
  </div>
</template>

<script>
import compHeader from './components/header';
import compIntro from './components/intro';
import compStat from './components/stat';
import compBoost from './components/boost';
import compFooter from './components/footer';
export default {
    components:{
        compHeader,
        compIntro,
        compStat,
        compBoost,
        compFooter
    }
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,700;1,500;1,700&display=swap');
    html{
        font-size: 62.5%;
    }
    *,
    *::before,
    *::after{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    body{
        font-family: 'Poppins', sans-serif;
    }
    :root{
        --Cyan: hsl(180, 66%, 49%);
        --DarkViolet: hsl(257, 27%, 26%);
        --Red: hsl(0, 87%, 67%);
        --Gray: hsl(0, 0%, 75%);
        --GrayishViolet: hsl(257, 7%, 63%);
        --VeryDarkBlue: hsl(255, 11%, 22%);
        --VeryDarkViolet: hsl(260, 8%, 14%);
    }
    /* @mixin MC{
        width:90%;
        margin: 0 auto;
    }
    @mixin DC{
        padding: 0px 200px;
    } */
    @mixin btn{
        background: var(--Cyan);
        border-radius: 25px;
        color: white;
        border: none;
        font-weight: 700;
        outline:none;
        cursor: pointer;
    }
    * > button{
        @include btn;
    }
    .heading{
        color:var(--VeryDarkViolet);
        font-weight: 700;
    }
    .subheading{
        color: var(--GrayishViolet);
        font-weight: 500;
    }
    /* @mixin respond($breakpoint){
        @if $breakpoint == desktop {
            @media (min-width:1440px) { @content    };
        }
        @if $breakpoint == phone {
            @media (min-width:375px) {  @content    };
        }
    } */
</style>