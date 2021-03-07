function evenOrOdd(num){
if(num  % 2 === 0 ){
    console.log('This is an even number');
} else if (!Number.isInteger(num))  {
    // If number is an interger it will return true BUT the operand ! will flip it to false and you will then get the erro message.
        console.log('Error');
} else {
    console.log('This is an odd number');
}

}
evenOrOdd('hey');


