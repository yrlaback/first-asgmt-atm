// BANK ACCOUNT
const account = {
  accountName: "Sven Andersson",
  getAccountName: function () {
    alert(`Name of account holder: ${this.accountName}`);
    atm();
  },

  balance: 1000, 
  getBalance: function() {
    alert(`You have ${this.balance}$ on your account`);
    atm();
  },

  deposit: function() {//parseFloat gör att man tar emot nummer istället för en string
    let amount = parseFloat(
      prompt("How much would you like to deposit?")
      );
      if (amount <= -0){
        prompt("Write a higher number.")
      } else { 
        account.balance += amount;
      }
      this.getBalance();
  },

  withdrawal: function() {
    let amount = parseFloat(
      prompt("How much do you want to withdraw?")
      );      
      if (amount <= -0){
        prompt("Write a higher number.")
      } else {
        account.balance -= amount;
      };
      this.getBalance();
  }
};

function atm() {
  let message = parseFloat(
    //parseFloat message = behållaren av värdet 
    prompt("What would you like to do today? 1.) See account name 2.) See balance 3.) Deposit money 4.) Withdraw money")
    );

  switch (message) {
    case 1: 
      account.getAccountName();
      break;
    case 2: 
      account.getBalance();
      break;
    case 3:
      account.deposit();
      break;
    case 4: 
      account.withdrawal();
      break;
    default:
      alert("Choose between 1.) See account name 2.) See balance 3.) Deposit money 4.) Withdraw money");
      atm();
      break;
  }
}

atm();