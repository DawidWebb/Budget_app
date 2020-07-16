class AddItem {
  constructor() {
    this.ballance = document.querySelector(".form__change-ballance");
    this.ballance.addEventListener("click", this.changeBallance);
    this.plus = document.querySelector(".fa-plus");
    this.minus = document.querySelector(".fa-minus");
    this.info = document.querySelector(".form__info");
    this.money = document.querySelector(".form__money");
    this.addBtn = document.querySelector(".add-btn");
    this.addBtn.addEventListener("click", this.addItem);
    this.plusItem = [];
    this.minusItem = [];
    this.ballancePlus = true;
    this.editOn = false;
  }
  changeBallance = () => {
    this.ballancePlus = !this.ballancePlus;
    if (this.ballancePlus === false) {
      this.minus.style.display = "inline-block";
      this.plus.style.display = "none";
      this.ballance.classList.toggle("rotate");
      this.ballance.style.backgroundColor = "red";
    } else if (this.ballancePlus) {
      this.minus.style.display = "none";
      this.plus.style.display = "inline-block";
      this.ballance.classList.toggle("rotate");
      this.ballance.style.backgroundColor = "green";
    }
  };

  addItem = (e) => {
    e.preventDefault();
    if (this.editOn === false) {
      if (this.ballancePlus === true) {
        this.plusItem.push({
          id: this.plusItem.length,
          name: this.info.value,
          value: this.money.value,
        });

        this.showIncomes();
        this.showBudget();
      } else if (this.ballancePlus === false) {
        this.minusItem.push({
          id: this.minusItem.length,
          name: this.info.value,
          value: this.money.value,
        });
        
        this.showWidrowth();
        this.showBudget();
      }
    } else if (this.editOn === true) {
      // this.addBtn.classList.remove("change-btn");
      this.editOn = false;
    }

    this.info.value = "";
    this.money.value = null;
  };
}
export default AddItem;
