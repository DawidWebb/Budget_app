import ShowItem from "./showItem.js";

class Tolls extends ShowItem {
  constructor(props) {
    super(props);
  }
  editTool = (e, id) => {
    this.editOn = !this.editOn;
    if (this.editOn === true) {
      e.path[1].style.backgroundColor = "white";
      this.ballance.classList.add("change-btn");
      this.addBtn.classList.add("change-btn");
      if (e.path[3].className === "show-data__budget-up") {
        this.info.value = this.plusItem[id].name;
        this.money.value = this.plusItem[id].value;
      } else if (e.path[3].className === "show-data__budget-down") {
        this.info.value = this.minusItem[id].name;
        this.money.value = this.minusItem[id].value;
      }
    } else if (this.editOn === false) {
      e.path[1].style.backgroundColor = "transparent";
      this.ballance.classList.remove("change-btn");
      this.addBtn.classList.remove("change-btn");
      if (e.path[3].className === "show-data__budget-up") {
        this.plusItem.splice(id, 1, {
          id: id,
          name: this.info.value,
          value: this.money.value,
        });
        const edit = document.createElement("i");
        edit.className = "fas fa-pencil-alt";
        const del = document.createElement("i");
        del.className = "fas fa-trash-alt";
        e.path[1].textContent = `${this.info.value}, kwota: ${this.money.value} zł`;
        e.path[1].appendChild(edit);
        e.path[1].appendChild(del);
        edit.addEventListener("click", (e) => this.editTool(e, id));
        del.addEventListener("click", (e) => this.delTool(e, id));
        this.showBudget();
      } else if (e.path[3].className === "show-data__budget-down") {
        this.minusItem.splice(id, 1, {
          id: id,
          name: this.info.value,
          value: this.money.value,
        });
        const edit = document.createElement("i");
        edit.className = "fas fa-pencil-alt";
        const del = document.createElement("i");
        del.className = "fas fa-trash-alt";
        e.path[1].textContent = `${this.info.value}, kwota: ${this.money.value} zł`;
        e.path[1].appendChild(edit);
        e.path[1].appendChild(del);
        edit.addEventListener("click", (e) => this.editTool(e, id));
        del.addEventListener("click", (e) => this.delTool(e, id));
        this.showBudget();
      }

      this.info.value = "";
      this.money.value = null;
    }
  };
  delTool = (e, id) => {
    if (e.path[3].className === "show-data__budget-up") {
      this.plusItem.splice(id, 1, { id: id, name: "", value: 0 });
      this.budgetListU.removeChild(e.path[1]);
      this.showBudget();
    } else if (e.path[3].className === "show-data__budget-down") {
      this.minusItem.splice(id, 1, { id: id, name: "", value: 0 });
      this.budgetListD.removeChild(e.path[1]);
      this.showBudget();
    }
  };
}
export default Tolls;
