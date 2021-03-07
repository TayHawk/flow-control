/*Write a function that logs whether a number is between 0 and 50 (inclusive), 
between 51 and 100 (inclusive), 
greater than 100, or less than 0.
*/

function number(num) {
        if (num >= 0 && num <= 50) {
            console.log('Number between 0 and 50');
    }else if (num >= 51 && num <= 100) {
            console.log('Number between 51 and 100');
    }else if  (num > 100) {
            console.log('Number is above 100 ');
    } else {
        console.log('Your number is less than 0')
    }
    
}
 number(-10);

