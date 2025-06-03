const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Hello Vue!',
      courseGoalB: 'Learn Vue!',
      //courseGoalB: '<h2>Learn Vue!</h2>',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
}});

app.mount('#user-goal');
