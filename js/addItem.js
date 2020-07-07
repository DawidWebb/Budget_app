class addItem {
  constructor() {
    this.ballance = document.querySelector(".form__change-ballance");
    this.ballance.addEventListener("click", this.changeBallance);
    this.plus = document.querySelector(".fa-plus");
    this.minus = document.querySelector(".fa-minus");
    this.info = document.querySelector(".form__info");
    this.money = document.querySelector(".form__money");
    this.btn = document.querySelector(".form__btn");
    this.btn.addEventListener("click", this.addItem);
    this.plusItem = [];
    this.minusItem = [];
    this.ballancePlus = true;
  }
  changeBallance = () => {
    this.ballancePlus = !this.ballancePlus;
    if (this.ballancePlus === false) {
      this.minus.style.display = "inline-block";
      this.plus.style.display = "none";
    } else if (this.ballancePlus) {
      this.minus.style.display = "none";
      this.plus.style.display = "inline-block";
    }
  };

  addItem = (e) => {
    e.preventDefault();
    if (this.ballancePlus === true) {
      this.plusItem.push({
        name: this.info.value,
        value: this.money.value,
      });
      console.log("P:  ", this.plusItem);
    } else if (this.ballancePlus === false) {
      this.minusItem.push({
        name: this.info.value,
        value: this.money.value,
      });
      console.log("W:  ", this.minusItem);
    }
  };
}
const add = new addItem();
