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
  }
  showIncomes = () => {
    const number = this.plusItem.length - 1;
    const { name, value, id } = this.plusItem[number];

    const edit = document.createElement("i");
    edit.className = "fas fa-pencil-alt";
    const del = document.createElement("i");
    del.className = "fas fa-trash-alt";

    const nameItem = document.createElement("li");
    nameItem.className = "item";
    nameItem.setAttribute("name", `${id}`);
    nameItem.style.borderColor = "green";
    nameItem.textContent = `${name}, kwota: ${value} zł`;

    nameItem.appendChild(edit);
    nameItem.appendChild(del);

    this.budgetListU.appendChild(nameItem);

    edit.addEventListener("click", (e) => this.editTool(e, id));
    del.addEventListener("click", (e) => this.delTool(e, id));
  };

  showWidrowth = () => {
    const number = this.minusItem.length - 1;
    const { name, value, id } = this.minusItem[number];

    const edit = document.createElement("i");
    edit.className = "fas fa-pencil-alt";
    const del = document.createElement("i");
    del.className = "fas fa-trash-alt";

    const nameItem = document.createElement("li");
    nameItem.className = "item";
    nameItem.setAttribute("name", `${id}`);
    nameItem.style.borderColor = "red";
    nameItem.textContent = `${name}, kwota: ${value} zł`;

    nameItem.appendChild(edit);
    nameItem.appendChild(del);

    this.budgetListD.appendChild(nameItem);

    edit.addEventListener("click", (e) => this.editTool(e, id));
    del.addEventListener("click", (e) => this.delTool(e, id));
  };

  showBudget = () => {
    let incomes = 0;

    this.plusItem.map((item) => {
      incomes += item.value * 1;
    });
    // for (let i = 0; i < this.plusItem.length; i++) {
    //   incomes += this.plusItem[i].value * 1;
    // }
    let withdraw = 0;
    for (let i = 0; i < this.minusItem.length; i++) {
      withdraw += this.minusItem[i].value * 1;
    }

    let bgt = incomes - withdraw;
    this.budgetDiv.textContent = `${bgt} zł`;
  };
}
export default ShowItem;
