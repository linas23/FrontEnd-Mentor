<template>
  <div id="boost">
    <div>
    <div class="head">
      Boost your links today
    </div>
    <button>
      Get Started
    </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@media (min-width:375px){
    #boost{
      display:flex;
      justify-content: center;
      align-items: center;
      padding: 8rem 0;
      text-align: center;
      background:var(--DarkViolet);
      background-image: url('../assets/images/bg-boost-mobile.svg');
      background-repeat:no-repeat;
      background-size: contain;
      background-position: right;
    }
    .head{
      color: white;
      font-size: 3.5rem;
    }
    button{
      width:50%;
      margin:2rem;
      height:40px;
    }

}
@media (min-width:1440px){
#boost{
      display:flex;
      justify-content: center;
      align-items: center;
      padding: 6.5rem 0;
      text-align: center;
      background:var(--DarkViolet);
      background-image: url('../assets/images/bg-boost-desktop.svg');
      background-repeat:no-repeat;
      background-size: contain;
      background-position: right;
    }
    
}
</style>