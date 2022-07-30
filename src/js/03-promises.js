import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  fieldDelay: document.querySelector('input[name="delay"]'),
  fieldStep: document.querySelector('input[name="step"]'),
  fieldAmount: document.querySelector('input[name="amount"]'),
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt){
  evt.preventDefault()
  const {delay, step, amount} = getFormValues()

  setTimeout(startPromises, delay, step, amount, delay)
}

function startPromises(step, amount, start){
  for(let i = 0; i < amount; i+=1){
    setTimeout(()=>{
      createPromise(i, step*i)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay + start}ms`);
          })
        .catch(({ position, delay }) => {
            Notify.failure(`❌ Rejected promise ${position + 1} in ${delay + start}ms`);
          })
        
    }, step)
  }
}

function getFormValues() {
  const values = {
    delay: Number(refs.fieldDelay.value),
    step: Number(refs.fieldStep.value),
    amount: Number(refs.fieldAmount.value),
  }

  return values;  
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=> {
      if (shouldResolve) {resolve({position, delay})} 

      reject({position, delay})
    }, delay)
  })
}
