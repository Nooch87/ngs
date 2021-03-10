const theOneFunc = (multiplier, after) => {
    console.log(`Hello after ${multiplier * 4} seconds`)

    if (after){
        setTimeout (theOneFunc, 4 * 1000 * after, 2);
    }
};

setTimeout(theOneFunc, 4 * 1000, 1, 2);

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
