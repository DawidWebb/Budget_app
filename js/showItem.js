import AddItem from "./addItem.js";

class ShowItem extends AddItem {
  constructor(props) {
    super(props);

    this.budget = document.querySelector(".show-data__budget-value");
    this.budgetUp = document.querySelector(".show-data__budget-up");
    this.budgetDown = document.querySelector(".show-data__budget-down");
    this.budgetListU = document.querySelector(".show-data__list--up");
    this.budgetListD = document.querySelector(".show-data__list--down");

    this.budgetDiv = document.createElement("div");
    this.budget.appendChild(this.budgetDiv);

    // this.edit = document.querySelector(".fa-pencil-alt");
    // this.del = document.querySelector(".fa-trash-alt");
  }
  showIncomes = () => {
    const edit = document.createElement("i");
    edit.className = "fas fa-pencil-alt";
    const del = document.createElement("i");
    del.className = "fas fa-trash-alt";

    const { name, value, id } = this.plusItem[0];
    const nameItem = document.createElement("li");
    nameItem.className = "item";
    nameItem.style.borderColor = "green";
    nameItem.textContent = `${this.plusItem.length}. ${name}, kwota: ${value} zł`;

    nameItem.appendChild(edit);
    nameItem.appendChild(del);

    this.budgetListU.appendChild(nameItem);

    // nameItem.addEventListener("click", (nameItem) => this.showTools(nameItem));
  };
  showWidrowth = () => {
    const edit = document.createElement("i");
    edit.className = "fas fa-pencil-alt";
    const del = document.createElement("i");
    del.className = "fas fa-trash-alt";

    const { name, value, id } = this.minusItem[0];
    const nameItem = document.createElement("li");
    nameItem.className = "item";
    nameItem.style.borderColor = "red";
    nameItem.textContent = `${this.minusItem.length}. ${name}, kwota: ${value} zł`;

    nameItem.appendChild(edit);
    nameItem.appendChild(del);

    this.budgetListD.appendChild(nameItem);

    // nameItem.addEventListener("click", (nameItem) => this.showTools(nameItem));
  };

  showTools = (item) => {
    const edit = document.createElement("i");
    edit.className = "fas fa-pencil-alt";
    const del = document.createElement("i");
    del.className = "fas fa-trash-alt";
    if (item.style.borderColor === "red") {
      this.budgetListD.appendChild(edit);
      this.budgetListD.appendChild(del);
    } else if (item.style.borderColor === "green") {
      this.budgetListU.appendChild(edit);
      this.budgetListU.appendChild(del);
    }
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
