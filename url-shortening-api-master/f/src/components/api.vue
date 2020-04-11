<template>
  <div id="api">
      <input type="text" placeholder="Shorten a link here..." v-model="link">
      <button @click="shortenIt">
          Shorten It!
      </button>
  </div>
</template>
<script>
// import axios from 'axios'
import bus from '../eventbus.js';
export default {
  data(){
    return{
      link:'www.facebook.com',
    }
  },
  methods:{
    shortenIt(){
      /* console.log(this.link)
      axios.post("https://rel.ink/api/links/",{
        url:this.link
      }).then(res=>{
        console.log(res);
      }) */
      let shortenLink = 'only if my Api request have worked.';
      var links = JSON.parse(localStorage.getItem('links'));
      let setThis = {
                          "yourlink":this.link,
                          "newlink":shortenLink
                    }
    if(!links){
        var linklist=[];
        linklist.push(setThis);
        localStorage.setItem('links',JSON.stringify(linklist))
    }else{
        links.push(setThis);
        localStorage.setItem('links',JSON.stringify(links));
    }

    bus.$emit('checkList',setThis);

    }
  }
}
</script>

<style lang="scss" scoped>
#api{
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: var(--DarkViolet);
}

@media (min-width:375px){
    #api{
      width:80%;
      margin:0 auto;
      background-image: url('../assets/images/bg-shorten-mobile.svg');
      background-repeat: no-repeat;
      background-position:right;
      border-radius: 15px;

      button,input{
        height: 4rem;
        width: 100%;
        margin:0.5rem;
      }
      input{
        width:100%;  
        border-radius: 25px;
        outline: none;
        border:none;
        padding: 0 1.5rem;
      }
    }
}

@media (min-width:1440px){
  #api{
      width:80%;
      margin:0 auto;
      background-image: url('../assets/images/bg-shorten-desktop.svg');
      background-repeat: no-repeat;
      background-position:right;
      border-radius: 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 3.5rem;  
      div{
        width: 100%;
      }
      button,input{
        height: 4rem;
        margin:0.5rem;
        border-radius: 10px;
      }
      input{
        outline: none;
        border:none;
        padding: 0 1.5rem;
        width: 100%;
      }
      button{
        width: 30%;
      }
    }
}

</style>