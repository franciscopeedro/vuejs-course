const app = Vue.createApp({
    data() {
        return {
            inputClasse: "",
            paragraphVisible: true,
            inputBackgroundColor: ""
        };
    },
    computed: {
        paraClasses() {
            return {
                user1: this.inputClasse === 'user1',
                user2: this.inputClasse === 'user2',
                visible: this.paragraphVisible,
                hidden: !this.paragraphVisible
            };
        }
    },
    methods: {
        toggleParagraphVisibility() {
            this.paragraphVisible = !this.paragraphVisible;
        }
    }
});

app.mount('#assignment');
