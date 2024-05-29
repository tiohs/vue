const vue = Vue.createApp({
  data() {
    return {
      name: 'Hamilton Silva',
      age: 23,
      statusShowAge: false,
      key: 'url',
      url: 'http://www.kikoloonline.com/'
    }
  },
  methods: {
    plusAge() {
      return age++;
    },
    showAge() {
      this.statusShowAge = !this.statusShowAge;
      return this.statusShowAge;
    }
  }
})

vue.mount("#app")