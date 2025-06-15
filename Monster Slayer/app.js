function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
            countRound: 0
        };
    },
    computed:{
        monsterBarStyles() {
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyles() {
            return { width: this.playerHealth + '%' };
        },
        mayUseSpecialAttack() {
            return this.countRound % 3 !== 0;
        }
    },
    methods:{
        attackMonster() {
            this.countRound++;
            const damage = getRandomInt(5, 12);
            this.monsterHealth -= damage;
            this.attackPlayer();
        },
        attackPlayer() {
            const damage = getRandomInt(8, 15);
            this.playerHealth -= damage;
        },
        specialAttack() {
            this.countRound++;
            const damage = getRandomInt(10, 25);
            this.monsterHealth -= damage;
            this.attackPlayer();
        }
    },
});

app.mount('#game');