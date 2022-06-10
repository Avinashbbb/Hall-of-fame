const variablesReferenceTest = () => {
    let x = { attribute1: 1, attribute2: 2 };
    let y = JSON.parse(JSON.stringify(x))
    
    x.attribute1 = 3;
    console.log(x)
    console.log(y)
    //Modify the code above so we reach the "throw 'False'" statement
    if (x.attribute1 == y.attribute1) {
        throw 'True';
    } else {
        throw 'False';
    }
};

try {
    variablesReferenceTest();
} catch (error) {
    console.log(error)
}