<template>
  <div id="api">
    <input type="text" placeholder="Shorten a link here..." v-model="link" @keyup.enter="shortenIt" />
    <button @click="shortenIt">Shorten It!</button>
  </div>
</template>
<script>
// import axios from 'axios'
// import bus from "../eventbus.js";
export default {
  data() {
    return {
      link: "www.facebook.com"
    };
  },
  methods: {
    async shortenIt() {
      let link = this.link.startsWith("https://")
        ? this.link
        : "https://" + this.link;
      await this.$store.dispatch("get_short_link", link);
      this.link = "";
    }
  }
};
</script>

<style lang="scss" scoped>
#api {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: var(--DarkViolet);
}

@media (min-width: 375px) {
  #api {
    width: 80%;
    margin: 0 auto;
    background-image: url("../assets/images/bg-shorten-mobile.svg");
    background-repeat: no-repeat;
    background-position: right;
    border-radius: 15px;

    button,
    input {
      height: 4rem;
      width: 100%;
      margin: 0.5rem;
    }
    input {
      width: 100%;
      border-radius: 25px;
      outline: none;
      border: none;
      padding: 0 1.5rem;
    }
  }
}

@media (min-width: 1440px) {
  #api {
    width: 80%;
    margin: 0 auto;
    background-image: url("../assets/images/bg-shorten-desktop.svg");
    background-repeat: no-repeat;
    background-position: right;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3.5rem;
    div {
      width: 100%;
    }
    button,
    input {
      height: 4rem;
      margin: 0.5rem;
      border-radius: 10px;
    }
    input {
      outline: none;
      border: none;
      padding: 0 1.5rem;
      width: 100%;
    }
    button {
      width: 30%;
    }
  }
}
</style>