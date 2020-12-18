var johnTipCalculator = function(total) {
    if (total < 50) {
        return total * 0.2;
    } else if (total < 200) {
        return total * 0.15;
    } else {
        return total * 0.1;
    }
}

var markTipCalculator = function(total) {
    if (total < 100) {
        return total * 0.2;
    } else if (total < 300) {
        return total * 0.10;
    } else {
        return total * 0.25;
    }
}

var average = function(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

johnData = {
    fullName: 'John Smith',
    billValues: [124, 48, 268, 180, 42],
    calculateTips: function() {
        this.tips = [];
        this.totals = [];
        for (var i = 0; i < this.billValues.length; i++) {
            this.tips[i] = johnTipCalculator(this.billValues[i]);
            this.totals[i] = this.tips[i] + this.billValues[i];
        }
        this.averageTip = average(this.tips);
    }
};

markData = {
    billValues: [77, 375, 110, 45],
    tips: [],
    totals: [],
    calculateTips: function() {
        this.tips = []
        for (var i = 0; i < this.billValues.length; i++) {
            this.tips[i] = johnTipCalculator(this.billValues[i]);
            this.totals[i] = this.tips[i] + this.billValues[i];
        }
        this.averageTip = average(this.tips);
    }
};

johnData.calculateTips();
console.log('John data=', johnData);

markData.calculateTips();
console.log('Mark data=', markData);

if (johnData.averageTip > markData.averageTip) {
    console.log("John paid the higher average tip", johnData.averageTip);
} else if (johnData.averageTip > markData.averageTip) {
    console.log("They have the same average tip");
} else {
    console.log("Mark paid the higher average tip", markData.averageTip);
}
