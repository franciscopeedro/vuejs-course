const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: 'pedro',
    };
  },
  methods: {
    setName(event){
      this.name = event.target.value;
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    reset() {
      this.counter = 0;
    },
    setName(event) {
      this.name = event.target.value;
    }
  },
});

app.mount('#events');
