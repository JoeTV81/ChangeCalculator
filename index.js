$(document).ready(function() {
  $("button").click(function() {
    // 1. get values input into the total sale and amount given inputs
    var totalAmount = $("#salesPrice").val();
    var customerAmount = $("#customerAmount").val();

    // 2. Figure what the change is in dollars, quarters, dimes, nickels and pennies
    var change = (customerAmount - totalAmount).toFixed(2);
    var dollars = Math.floor(customerAmount - totalAmount).toFixed(0);
    var leftover = ((change - dollars) * 100).toFixed(0);
    var quarters = Math.floor(leftover / 25).toFixed(0);
    leftover %= 25
    var dimes = Math.floor(leftover / 10).toFixed(0);
    leftover %= 10
    var nickels = Math.floor(leftover / 5).toFixed(0);
    leftover %= 5
    var pennies = leftover

    // 3. Bind the totals for the 5 outputs to elements in the html
    $("#totalChange").html("Your Total Change Amount $" + change);
    $("#dollars").html("Dollars: " + dollars);
    $("#quarters").html("Quarters: " + quarters);
    $("#dimes").html("Dimes: " + dimes);
    $("#nickels").html("Nickels: " + nickels);
    $("#pennies").html("Pennies: " + pennies);

  });

});
