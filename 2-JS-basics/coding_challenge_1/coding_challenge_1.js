var heightMark = 2.0;
var massMark = 90;

var heightJohn = 1.9;
var massJohn = 80;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

var higherMark = bmiMark > bmiJohn;

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s?');
} else {
    console.log('John\'s BMI higher than Mark\'s?');
}
