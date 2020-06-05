'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea(){
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {  // делаем наследование ColoredRectangleWithText от Rectangle
    constructor(height, width, text, bgColor) {
        super(height, width); // вызов конструктора родителя тоесть   this.height = height;  this.width = width; всегда идет первой строчкой
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }

}

const square = new Rectangle(10, 10),
      long = new Rectangle(20, 100),
      div = new ColoredRectangleWithText(25, 10, 'hello wordl', 'red');

console.log(div.showMyProps());
console.log(div.calcArea());

// console.log(square.calcArea());
// console.log(long.calcArea());