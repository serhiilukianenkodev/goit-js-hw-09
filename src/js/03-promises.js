const refs = {
  form: document.querySelector('.form'),
  fieldDelay: document.querySelector('input[name="delay"]'),
  fieldStep: document.querySelector('input[name="step"]'),
  fieldAmount: document.querySelector('input[name="amount"]'),
}

// console.log(refs.fieldAmount);

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=> {
      if (shouldResolve) {resolve({position, delay})} 

      reject({position, delay})
    }, delay)
    
   

  })
}
