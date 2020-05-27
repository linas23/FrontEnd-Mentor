<template>
  <div id="shortlinks">
    <div class="link" v-for="(link,index) in links" :key="index">
      <div class="ori">{{link.yourLink}}</div>
      <hr />
      <a class="short" :href="link.newLink" target="_blank">{{link.newLink}}</a>
    </div>
  </div>
</template>

<script>
// import bus from '../eventbus.js';

export default {
  data() {
    return {
      copied: false
    };
  },
  computed: {
    links() {
      return this.$store.getters.links;
    }
  },
  methods: {
    copyToClipBoard(link) {
      this.copied = !this.copied;
      console.log(link);
    }
  }
};
</script>

<style lang="scss" scoped>
@media (min-width: 375px) {
  #shortlinks {
    width: 90%;
    margin: 0 auto;
    & > .link:nth-child(odd) {
      button {
        background: var(--Cyan);
      }
    }
    & > .link:nth-child(even) {
      button {
        background: var(--DarkViolet);
      }
    }
  }
  .link {
    text-align: left;
    padding: 1.5rem;
    background: white;
    margin: 1.5rem 0;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .ori {
      color: var(--DarkViolet);
      font-size: 2rem;
    }
    .short {
      color: var(--Cyan);
      font-size: 1.75rem;
    }
    .copy {
      text-align: center;
    }
    button {
      height: 3rem;
      width: 80%;
    }
  }
}
@media (min-width: 1440px) {
  .link {
    text-align: left;
    padding: 1.5rem;
    background: white;
    margin: 1.5rem 0;
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    hr {
      display: none;
    }
    .ori {
      color: var(--DarkViolet);
      font-size: 2rem;
      text-align: left;
    }
    .short {
      text-align: right;
      color: var(--Cyan);
      font-size: 1.75rem;
    }
    .copy {
      flex-grow: 0.25;
      text-align: center;
    }
    button {
      height: 3rem;
      width: 100%;
    }
  }
}
#shortlinks {
  width: 100%;
  margin: 0 auto;
  & > .link:nth-child(odd) {
    button {
      background: var(--Cyan);
    }
  }
  & > .link:nth-child(even) {
    button {
      background: var(--DarkViolet);
    }
  }
}
</style>