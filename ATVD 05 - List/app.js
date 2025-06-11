const app = Vue.createApp({
    data(){
        return {
            tasks: [],
            enteredValue: '',
            tasksListVisible: true
        }
    },
    computed:{
        buttonCaption() {
            return this.tasksListVisible ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredValue);
            this.enteredValue = '';
        },
        removeTask(index) {
            this.tasks.splice( index,  1);
        },
        toggleTaskList() {
            this.tasksListVisible = !this.tasksListVisible;
        }
    }
});

app.mount('#assignment');