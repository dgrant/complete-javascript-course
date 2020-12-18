var johnAverage = (89 + 120 + 103) / 3;
var mikeAverage = (89 + 120 + 103) / 3;
var maryAverage = (1 + 134 + 105) / 3;

var winner;
if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    winner = 'john';
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
    winner = 'mike';
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
    winner = 'mary';
}

if (winner) {
    console.log(winner, 'is the winner');
} else {
    console.log('It was a tie for the best team.');
}
