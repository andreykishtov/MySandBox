var greetingPromise = sayHello();
greetingPromise.then(function (greeting) {
    return addExclamation(greeting); // addExclamation returns a promise
}).then(function (greeting) {
    console.log(greeting);    // 'hello world!!!!’
});
