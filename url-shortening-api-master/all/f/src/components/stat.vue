<template>
  <div id="stat">
      <compApi class="guest"></compApi>
    <main>
    <div class="shortlinks">
      <compShortlink/>
    </div>
      <div class="heading">
        Advanced Statistics
      </div>
  <div class="subheading">
    Track how your links are performing across the web with our 
    advanced statistics dashboard.
  </div>
  <div class="boxes">
    <div class="box">
      <div class="image">
        <img src="../assets/images/icon-brand-recognition.svg" alt="">
      </div>
      <div class="heading">
        Brand Recognition
      </div>
      <div class="subheading">
        Boost your brand recognition with each click. Generic links don’t 
        mean a thing. Branded links help instil confidence in your content.
      </div>
    </div>
    <div class="box">
      <div class="image">
        <img src="../assets/images/icon-detailed-records.svg" alt="">
      </div>
      <div class="heading">
        Detailed Records
      </div>
      <div class="subheading">
        Gain insights into who is clicking your links. Knowing when and where 
        people engage with your content helps inform better decisions.
      </div>
    </div>
    <div class="box">
      <div class="image">
        <img src="../assets/images/icon-fully-customizable.svg" alt="">
      </div>
      <div class="heading">
        Fully Customizable
      </div>
      <div class="subheading">
        Improve brand awareness and content discoverability through customizable 
        links, supercharging audience engagement.
      </div>
    </div>
  </div>
    </main>

  </div>
</template>

<script>
import compShortlink from './shortlink';
import compApi from './api';

export default {
  components:{
        compApi,
    compShortlink
  }
}
</script>

<style lang="scss" scoped>
#stat{
  background:whitesmoke;
}

@media (min-width:375px){
    #stat{
      width:100%;
      margin-top:10rem;
      position: relative;
    }
    .guest{
      position: absolute;
      left:50%;
      transform: translate(-50%,-50%);
    }
    .shortlinks{
      margin-bottom:5rem;
    }
    main{
      padding-top:10rem;
      padding-bottom:5rem;
      width: 90%;
      margin: 0 auto;
      text-align: center;
      .heading{
        font-size: 3rem;
      }
      .subheading{
        font-size: 1.5rem;
      }
    }
    .box{
      position: relative;
      background:white;
      margin: 5rem 3rem;
      padding: 2.5rem 2rem 2.5rem 2rem;
      .heading{
        font-size: 1.85rem;
        margin:1rem;
      }
      .subheading{
        font-size: 1.25rem;
      }
      .image{
        position:absolute;
        height:7rem;
        width: 7rem;
        border-radius: 50%;
        background: var(--DarkViolet);
        top:-.25rem;
        left:50%;
        transform: translate(-50%,-50%);
        img{
          width: 50%;
          transform: translate(0%,50%);
        }
      }
    }
}
@media (min-width:1440px){
    #stat{
      width:100%;
      margin-top:10rem;
      position: relative;
      padding: 0 15rem;
    }
    .guest{
      position: absolute;
      left:50%;
      transform: translate(-50%,-50%);
    }
    .shortlinks{
      margin-bottom:10rem;
    }
    main{
      padding-top:10rem;
      padding-bottom:5rem;
      width: 90%;
      margin: 0 auto;
      text-align: center;
      .heading{
        font-size: 3.5rem;
      }
      .subheading{
        padding: 3rem 20rem ;
        font-size: 1.8rem;
      }
    }
    .boxes{
      display: flex;
      align-items: center;
    }
    .box{
      position: relative;
      background:white;
      margin: 5rem 3rem;
      padding: 2rem;
      .heading{
      text-align: left;
        font-size: 2.5rem;
        margin:2rem 0;
      }
      .subheading{
      text-align: left;
        padding: 0 ;
        font-size: 1.25rem;
      }
      .image{
        position:absolute;
        height:7rem;
        width: 7rem;
        border-radius: 50%;
        background: var(--DarkViolet);
        top:-.25rem;
        left:20%;
        transform: translate(-50%,-50%);
        img{
          width: 50%;
          transform: translate(0%,50%);
        }
      }
      &:nth-child(1)::after{
        position: absolute;
        content:'';
        width: 70px;
        height: 5px;
        background: var(--Cyan);
        right: -7rem;
        top: 50%;
      }
      &:nth-child(2)::after{
        position: absolute;
        content:'';
        width: 70px;
        height: 5px;
        background: var(--Cyan);
        right: -7rem;
        top: 35%;
      }
       &:nth-child(2){
         margin-top: 10rem;
       }
       &:nth-child(3){
         margin-top: 15rem;
       }
    }
}

</style>