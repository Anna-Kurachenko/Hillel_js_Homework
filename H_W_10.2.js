var str = "Wonderful Happiness Joyful Time Task Apple";
var re = /\b[^Aa\s]{6,}\b/g;
var result = str.match(re);
console.log(result);