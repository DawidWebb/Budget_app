import ShowItem from "./showItem.js";

class Tolls extends ShowItem {
  constructor(props) {
    super(props);
  }
  editTool = (e, id) => {
    this.info.value = this.plusItem[id].name;
    this.money.value = this.plusItem[id].value;
    console.log(e);
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
