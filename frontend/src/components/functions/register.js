export const calculateChange = (drawer, amount) => {
    let newDrawer = drawer
    let bills = ["100", "50","20", "10","5","1"];
  const recursiveBillCount = (denominations, remainder) => {  
        if (denominations.length > 0) {
        let item = processDivide(denominations[0],remainder,drawer[denominations[0]+""])
        if(item === "insufficient funds") {
            newDrawer = "insufficient funds";
            return
        }
        if(item.length > 1) {
            newDrawer[denominations[0]+""] = item[0]
        } 
        denominations.shift();
        return recursiveBillCount(denominations, item[1]);
    } 
  } 
  recursiveBillCount(bills, amount)

    return newDrawer;
}

export const processDivide = (denomination, amount, previousBillCount)=> {
    if (amount >= denomination) {
        var total = Math.floor(amount / denomination)
    } else {
        return [previousBillCount, amount]
    }
    if (total > previousBillCount) {
        return "insufficient funds";
    } else  {
        var remainderBills = previousBillCount - total;
        var remainderAmount = amount - (total * denomination)
    }
    return [ remainderBills , remainderAmount]
}


export const showDrawer = (drawerState, code) => {
    let keys = code.split("$");
    let allowedBills = RegExp('^1$|^5$|^10$|^20$|^50$|^100$')
    let returnDrawer = {}
    let allowed = RegExp('^[0-9]+$')
    let fail = false;
    keys.shift();
    
    keys.forEach((key)=> {
        if(allowed.test(key) === false || allowedBills.test(key) === false) {
            fail = true;
        }
        returnDrawer[key] = drawerState[key]
    })
    if (fail) {
        return "Invalid Command";
    }
    return returnDrawer;
}

export const resetBalance = () => {
    return {
        "1": 10,
        "5": 10,
        "10": 10,
        "20": 10,
        "50": 10,
        "100": 10
    };
}

export const selectOperation = (drawerState, code) => {
    let allowedCodes =  RegExp('W|I|Q|R');
    let pass = allowedCodes.test(code)
    if(pass === false ) {
        return "Invalid Command";
    }

    if (code[0] === "W") {
        let amount = code.slice(2);
        return calculateChange(drawerState, amount)
    } else if (code[0]=== "R") {
        return resetBalance();
    } else if (code[0]=== "I") {
        return showDrawer(drawerState, code)
    } else if (code[0] ==="Q") {
  
    }
}