const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted!');
    },
    setName(event, lastName) {
    this.name = event.target.value + ' ' + lastName;
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
  },
});

app.mount('#events');
