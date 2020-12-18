var calculateTip = function(total) {
    if (total < 50) {
        return total * 0.2;
    } else if (total < 200) {
        return total * 0.15;
    } else {
        return total * 0.1;
    }
}

subtotals = [124, 48, 268];
tips = [calculateTip(subtotals[0]),calculateTip(subtotals[1]),calculateTip(subtotals[2])];
totals = [subtotals[0] + tips[0], subtotals[1] + tips[1], subtotals[2] + tips[2]];

console.log('subtotals=', subtotals);
console.log('tips=', tips);
console.log('totals=', totals);
