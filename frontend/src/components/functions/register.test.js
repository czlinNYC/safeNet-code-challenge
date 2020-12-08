import {calculateChange, 
    showDrawer, 
    resetBalance, 
    selectOperation, 
    processDivide} from './register.js';

const testStateOne = {
"1": 10,
"5": 10,
"10": 10,
"20": 10,
"50": 10,
"100": 10
}

const testStateTwo = {
"1": 7,
"5": 9,
"10": 10,
"20": 10,
"50": 10,
"100": 8
}

const testStateThree = {
"1": 3,
"5": 8,
"10": 10,
"20": 10,
"50": 10,
"100": 8
}
const testStateFour = {
"1": 3,
"5": 8,
"10": 10,
"20": 10,
"50": 10,
"100": 8
}




test('Processes full drawer subtracts $208', ()=> {
expect(calculateChange(testStateOne, 208)).toMatchObject({
    "1": 7,
    "5": 9,
    "10": 10,
    "20": 10,
    "50": 10,
    "100": 8
});
})

test('Processes mixed drawer draws $9', ()=> {
expect(calculateChange(testStateTwo, 9)).toMatchObject({
    "1": 3,
    "5": 8,
    "10": 10,
    "20": 10,
    "50": 10,
    "100": 8
});
})
test('Correctly displays insufficient funds when drawer draws $9', ()=> {
expect(calculateChange(testStateThree, 9)).toBe("insufficient funds");
})

test('Correctly displays drawer amounts of selected codes', ()=> {
expect(showDrawer(testStateFour, "$20$1$100")).toMatchObject({
    "1": 3,
    "20": 10,
    "100": 8
});
})
test('Correctly rejects ill formated codes codes', ()=> {
expect(showDrawer(testStateFour, "$20$1%$100")).toBe("Invalid Command");
})
test('Correctly rejects non denominations', ()=> {
    expect(showDrawer(testStateFour, "$20$1%$101")).toBe("Invalid Command");
    })

test('Correctly refills drawer', ()=> {
expect(resetBalance()).toMatchObject({
    "1": 10,
    "5": 10,
    "10": 10,
    "20": 10,
    "50": 10,
    "100": 10
});
})

test('Correctly rejects invalid commands', ()=> {
expect(selectOperation(testStateOne, "K")).toBe("Invalid Command");
})

test('process divide correction takes the correct amount of bills out', ()=>{
expect(processDivide(100, 506, 8)).toMatchObject([3, 6])
})