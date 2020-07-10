import AddItem from "./addItem.js";

class ShowItem extends AddItem {
  constructor(props) {
    super(props);

    this.budget = document.querySelector(".show-data__budget-value");
    this.budgetUp = document.querySelector(".show-data__budget-up");
    this.budgetDown = document.querySelector(".show-data__budget-down");

    this.budgetDiv = document.createElement("div");
    this.budget.appendChild(this.budgetDiv);
  }
  showIncomes = () => {
    const { name, value, id } = this.plusItem[0];
    const nameItem = document.createElement("li");
    nameItem.className = "item";
    nameItem.style.borderColor = "green";
    nameItem.textContent = `${this.plusItem.length}. ${name}, kwota: ${value} zł`;
    this.budgetUp.appendChild(nameItem);
  };
  showWidrowth = () => {
    const { name, value, id } = this.minusItem[0];
    const nameItem = document.createElement("li");
    nameItem.className = "item";
    nameItem.style.borderColor = "red";
    nameItem.textContent = `${this.minusItem.length}. ${name}, kwota: ${value} zł`;
    this.budgetDown.appendChild(nameItem);
  };
  showBudget = () => {
    let incomes = 0;
    for (let i = 0; i < this.plusItem.length; i++) {
      incomes += this.plusItem[i].value * 1;
    }
    let withdraw = 0;
    for (let i = 0; i < this.minusItem.length; i++) {
      withdraw += this.minusItem[i].value * 1;
    }

    let bgt = incomes - withdraw;
    this.budgetDiv.textContent = `${bgt} zł`;
  };
}
export default ShowItem;
