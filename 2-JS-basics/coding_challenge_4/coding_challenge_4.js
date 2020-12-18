var mark = {
    height: 2.0,
    mass: 90,
}

var john = {
    height: 1.9,
    mass: 100
}

var calcBmi = function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
}
mark.calcBmi = calcBmi;
john.calcBmi = calcBmi;
console.log(mark);
console.log(john);

mark.calcBmi();
john.calcBmi();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI higher than Mark\'s');
}
