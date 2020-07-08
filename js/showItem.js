class showItem extends addItem {
  constructor(props) {
    super(props);

    this.budget = document.querySelector(".show-data__budget-value");
    this.budgetUp = document.querySelector(".show-data__budget-up");
    this.budgetDown = document.querySelector(".show-data__budget-down");
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
}
const show = new showItem();
