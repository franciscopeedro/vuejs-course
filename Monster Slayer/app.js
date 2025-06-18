function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            countRound: 0,
            winner: null
        };
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return { 
                    width: '0%' 
                };
            }
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.playerHealth + '%' };
        },
        mayUseSpecialAttack() {
            return this.countRound % 3 === 0;
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        }
    },
    methods: {
        resetGame() {
            this.playerHealth = 100,
            this.monsterHealth = 100,
            this.countRound = 0,
            this.winner = null;
        },  
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
        },
        healPlayer() {
            this.countRound++;
            const heal = getRandomInt(8, 20);
            this.playerHealth += heal;
            if (this.playerHealth > 100) {
                this.playerHealth = 100;
            }
            this.attackPlayer();
        },
        surrender(){
            this.winner = 'monster';
        }
    }
});

app.mount('#game');