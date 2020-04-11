<template>
  <div id="intro" >
    <img src="../assets/images/illustration-working.svg" alt="">
    <div class="text">
      <div class="heading">
      More than just shorter links
      </div>
      <div class="subheading">
          Build your brand’s recognition and get detailed insights 
          on how your links are performing.
      </div>
      <div>
        <button>
            Get Started
        </button>
      </div>
    </div>
  </div >
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

#intro{
  text-align: center;

}

@media (min-width:375px){
    .heading{
      font-size: 4rem;
      margin-top:3rem;
    }
    .subheading{
      font-size:1.5rem;
    }
    img{
      width: 100%;
      margin-left:12.5%;
    }
    .text{
      width:80%;
      margin:0 auto;
      button{
        margin:2.5rem;
        height:40px;
        width:50%;
      }
    }
}
@media (min-width:1440px){
  #intro{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    height: 85vh;
  }
 img{
      width: 100%;
      margin-left:0;
    }
  .text{
    padding-left:15rem;
    text-align: left;
    width: 100%;
      button{
        margin:2.5rem 0;
        height:40px;
        width:50%;
      }
    .heading{
      font-size: 8rem;
      margin-top:0rem;
    }
    .subheading{
      width:80%;
      font-size:2rem;
    }
  }
}
</style>