export default {
  computed: {
    formatMoney() {
      const money = this.money.toString();

      if (money.length === 4) {
        return `
          ${money[0]} ${money[1] + money[2] + money[3]} 
        `;
      } else if (money.length === 5) {
        return `
          ${money[0] + money[1]} ${money[2] + money[3] + money[4]}
        `;
      } else if (money.length === 6) {
        return `
          ${money[0] + money[1] + money[2]} ${money[3] + money[4] + money[5]} 
        `;
      } else if (money.length === 7) {
        return `
          ${money[0]} ${money[1] + money[2] + money[3]} ${
          money[4] + money[5] + money[6]
        } 
        `;
      } else {
        return money;
      }
    }
  }
};
