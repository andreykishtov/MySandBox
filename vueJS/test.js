const compose = (l,g,f,h) => (num = 0) => l(g(f(h(num))))

const createNumber = (z = 0) => Math.random(z)*100;

const makeAbs = z => Math.abs(z)

const checkIfMoreThan40 =(fn) => (z) => z > 40 ? fn(z + 1) : fn(z + 10)

const checkIfLessThanZero = (fn) => (z) => z < 0 ? fn(z + 1) : fn(z + 40)

const addTenAndRun = (z) => z+10




const val = compose(
  checkIfLessThanZero(addTenAndRun),
  checkIfLessThanZero(addTenAndRun),
  checkIfLessThanZero(addTenAndRun),
  checkIfMoreThan40(createNumber))(-7);


const funnel = compose(
  showGetId,
  getPermitions,
  checkForKey,
  checkIfAdmin(allusers),
  getId
)(user)







  console.log(val);



