const refs = {
  form: document.querySelector('.form'),
  fieldDelay: document.querySelector('input[name="delay"]'),
  fieldStep: document.querySelector('input[name="step"]'),
  fieldAmount: document.querySelector('input[name="amount"]'),
}

// console.log(refs.fieldAmount);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
