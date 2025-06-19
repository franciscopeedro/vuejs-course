function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      countRound: 0,
      winner: null,
      logMessages: []
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: (this.monsterHealth < 0 ? 0 : this.monsterHealth) + '%' };
    },
    playerBarStyles() {
      return { width: (this.playerHealth < 0 ? 0 : this.playerHealth) + '%' };
    },
    mayUseSpecialAttack() {
      return this.countRound % 3 === 0 && this.countRound !== 0;
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
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.countRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    attackMonster() {
      this.countRound++;
      const damage = getRandomInt(5, 12);
      this.monsterHealth -= damage;
      this.addLogMessage('player', 'attack', damage);
      this.attackPlayer();
    },
    attackPlayer() {
      const damage = getRandomInt(8, 15);
      this.playerHealth -= damage;
      this.addLogMessage('monster', 'attack', damage);
    },
    specialAttack() {
      this.countRound++;
      const damage = getRandomInt(10, 25);
      this.monsterHealth -= damage;
      this.addLogMessage('player', 'special-attack', damage);
      this.attackPlayer();
    },
    healPlayer() {
      this.countRound++;
      const heal = getRandomInt(8, 20);
      this.playerHealth = Math.min(this.playerHealth + heal, 100);
      this.addLogMessage('player', 'heal', heal);
      this.attackPlayer();
    },
    surrender() {
      this.winner = 'monster';
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      });
    }
  }
});

app.mount('#game');
// Commit
// "Fix battle log rendering, improve health bar behavior, and correct game over messages."
