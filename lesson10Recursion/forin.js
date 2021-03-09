/* eslint-disable */
/* get the sum of salaries from department object */
let company = { // the same object, compressed for brevity
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };
  
  // The function to do the job
  function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
        let personSalaries = 0;
        for (const person of department){
            personSalaries += person.salary;
        }
      return deptSalaries; // sum the array
    } else { // case (2)
      let sum = 0;
      /* now have an dept that is an object, need to find the properties
        which will be arrays or objects of more departments and make recursive call on them */
        /* extra credit assignment:  refactor the loop below to use for..in over the properties */
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
      }
      return sum;
    }
  }
  
  console.log(sumSalaries(company));