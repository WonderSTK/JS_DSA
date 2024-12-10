function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let changeArr = [];
  let totalCid = 0;
  let changeObj = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }

  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }

  totalCid = totalCid.toFixed(2);

  if (change > totalCid) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (change == totalCid) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();

    for (let i = 0; i < cid.length; i++) {
      let coinName = cid[i][0];
      let coinTotal = cid[i][1];
      let coinValue = changeObj[coinName];
      let coinAmount = (coinTotal / coinValue).toFixed(0);
      let returnedCoins = 0;

      while (change >= coinValue && coinAmount > 0) {
        change -= coinValue;
        change = change.toFixed(2);
        coinAmount--;
        returnedCoins++;
      }

      if (returnedCoins > 0) {
        changeArr.push([coinName, returnedCoins * coinValue]);
      }
    }
  }

  if (change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArr };
}