changePossibilities(amount,amount): Your quirky boss collects rare, old coins.
They found out you're a programmer and asked you to solve something they've been wondering for a long time.

Write a function that, given an amount of money and an array of coin denominations,
computes the number of ways to make the amount of money with coins of the available denominations.

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would
output 4—the number of ways to make 4¢ with those denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢

function changePossibilities(amount, denominations, partial) {
    var s, n, remaining;

    partial = partial || [];

    s = partial.reduce(function (a, b) {
      return a + b;
    }, 0);

    if (s === amount) {
      console.log("%s", partial.join(","))
    }

    if (s >= amount) {
      return;
    }

    for (var i = 0; i < denominations.length; i++) {
      n = denominations[i];
      remaining = denominations.slice(i + 1);
      changePossibilities(remaining, amount, partial.concat([n]));
    }
};
