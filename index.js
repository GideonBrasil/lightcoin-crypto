class Account {

  constructor(username) {
    this.username = username;
    // this.balance = 0;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    for (let t of this.transactions) {
      balance += t.value;
    }
    return balance;
  }

  addTransaction(transactions) {
    this.transactions.push(transactions);
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.time = new Date();
    this.account.addTransaction(this);
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('Poor Labber');

console.log(`${myAccount.username}'s account has a balance of ${myAccount.balance} dollars.`);

t1 = new Deposit(500.00, myAccount);
t1.commit();
console.log('Salary deposit: +', t1.amount, 'dollars.');

t2 = new Withdrawal(50.25, myAccount);
t2.commit();
console.log('Pay phone bill: -', t2.amount, 'dollars.');

t3 = new Withdrawal(9.99, myAccount);
t3.commit();
console.log('Pay for lunch at DQ: -', t3.amount, 'dollars.');

t4 = new Deposit(120.00, myAccount)
t4.commit();
console.log('Side job deposit: +', t4.amount, 'dollars.');

console.log(`${myAccount.username}'s account has a balance of ${myAccount.balance} dollars.`);

console.log(`${myAccount.username}'s transaction history: `, myAccount.transactions)