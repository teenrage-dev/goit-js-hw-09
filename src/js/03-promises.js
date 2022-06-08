import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  form: document.querySelector(".form"),
  inputStep: document.querySelector("input[name=step]"),
};


let waitStep = Number(refs.inputStep.value);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  let promice = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(position, delay);
      } else {
        reject(position, delay);
      }
    }, delay);
  });

  return promice;
};

refs.form.addEventListener("submit", onClick);

function onClick(e) {
    e.preventDefault();
    
    const delay = e.target.elements.delay.value;
    const step = e.target.elements.step.value;
    const amount = e.target.elements.amount.value;

    for(let i = 0; i < amount; i += 1) {
      const position = i;
      let totalStep = Number(delay) + ( Number(step) * i );
      createPromise(position, totalStep)
        .then(() => {
          Notify.success(`✅ Fulfilled promise ${i + 1} in ${totalStep}}ms`);
        })
        .catch(() => {
          Notify.failure(`❌ Rejected promise ${i + 1} in ${totalStep}ms`);
        });
    }
    // console.log(delay, step, amount);
};

