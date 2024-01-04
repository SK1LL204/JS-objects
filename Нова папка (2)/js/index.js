//калькулятор
let calculator = {
    a: 0,
    b: 0,
    read: function() {
        this.a = parseFloat(prompt('Введите значение для "number1":'));
        this.b = parseFloat(prompt('Введите значение для "number2":'));
    },
    sum: function(){
        return this.a + this.b;
    },
    mul: function(){
        return this.a * this.b;
    },
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );



//возвращение обьекта в функции
let ladder = {
    step: 0,
    up: function() {
      this.step++;
      return this
    },
    down: function() {
      this.step--;
      return this
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this
    }
  };
  ladder.up().up().down().showStep().down().showStep();