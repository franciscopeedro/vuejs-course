const app = Vue.createApp({
  data() {
    return {
      name: "Francisco Pedro",
      age: 23,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Fortaleza_EC_2018.png/800px-Fortaleza_EC_2018.png",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    randomNumber() {
    const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return 1;
      } else {
        return 2;
      }
    }
  }
});

app.mount('#assignment');
