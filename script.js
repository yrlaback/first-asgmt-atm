// BANK ACCOUNT

//the object is responsible for the logic in this assignment 
const account = {
  accountName: "Sven",
  getAccountName: function () {
    alert(`Name of account holder: ${this.accountName}`);
    atm();
  },

  balance: 1000, 
  getBalance: function() {
    alert(`You have ${this.balance} on your account`);
    atm();
  },

  deposit: function() {
    account.balance += deposit;
    atm();
  },

  withdrawal: function() {
    account.balance -= withdrawal;
  }
}

//this is responsible for the user interface:
function atm() {
  let message = parseFloat(
    //parseint message = behållaren av värdet 
    prompt("What would you like to do today? 1.) See account name 2.) See balance 3.) Deposit money")
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
    default:
      alert("Choose between...");
      break;
  }
}

atm();
// REQUIREMENTS
// Create an object called account that has the following properties:

// - deposit, also a function
// this function should be able to deposit money onto the balance of the account

// - withdrawal, also a function
// this function should be able do withdrawal money from the balance of the account


//select a chocie 1. see balance 2. account
//accountName 
