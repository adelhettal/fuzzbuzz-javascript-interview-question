function fizzBuzz(input) {
    if(typeof(input)==='number'){
    if (input%3===0 && input%5===0) return 'fizzBuzz';
    else if(input%3===0) return 'Fizz';
    else if (input%5===0) return 'Buzz';
    else return input;
} else return NaN ;
}

const output = fizzBuzz ();
console. log (output);