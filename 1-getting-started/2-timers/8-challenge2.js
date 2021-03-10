// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

let count = 0;
let start = 1;
let stop = 5;
let interval = setInterval(() => {
    count++
    if( count >= start && count <= stop){
        console.log('Hello World');
    }
    if(count == stop + 1){
        console.log('Done');
    }
    if( count == stop + 2){
        clearInterval(interval);
    }
}, 1000);