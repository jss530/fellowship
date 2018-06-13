
function changePossibilities(denominations, amount) {
    var results = [];

    if(denominations == null || denominations.length == 0) return results;

    var current = [];
    denominations.sort();

    combinationSum(denominations, amount, 0, current, results);

    return results;
}

function combinationSum(denominations, amount, j, c, results){
   if(amount == 0){
       var temp = c.slice();
       results.push(temp);
       return;
   }

   for(var i=j; i<denominations.length; i++){
       if(amount < denominations[i])
            return;
       c.push(denominations[i]);
       combinationSum(denominations, amount - denominations[i], i, c, results);
       c.pop();
   }
}

changePossibilities(4, [1,2,3]);
