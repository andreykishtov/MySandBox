const adder = url => file => file(url);

const fiver = adder(5);

console.log(adder(2)(9));
