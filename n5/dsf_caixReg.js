function checkCashRegister(price, cash, cid) {
  let objt = {
    status: "", 
    change: []
  };

   const unid = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100,
  };

  
  let troco = cash - price;

  let total = 0;
  for (let i = 0; i < cid.length; i++) {
    total += cid[i][1];
  }

  let change = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    let moeda = cid[i][0];
    let valorcid = cid[i][1];
    let valorunid = unid[moeda];
    let x = 0;

    while (troco >= valorunid && valorcid > 0) {
      troco -= valorunid;
      valorcid -= valorunid;
      x += valorunid;

      troco = Math.round(troco * 100) / 100;
    }

    if (x > 0) {
      change.push([moeda, x]);
    }
  }

  let somafinal = 0;
  for (let i = 0; i < change.length; i++) {
    somafinal += change[i][1];
  }

  if (troco > 0) {
    objt.status = "INSUFFICIENT_FUNDS";
    objt.change = [];
  } else if (total === cash - price) {
    objt.status = "CLOSED";
    objt.change = cid.map(denom => [denom[0], denom[1]]);
  } else {
    objt.status = "OPEN";
    objt.change = change;
  }

  return objt;
}
