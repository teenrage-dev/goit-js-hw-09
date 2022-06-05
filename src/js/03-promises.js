import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  form: document.querySelector(".form"),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ position, delay });
      }, delay);
    });
  }
  else {
    // Reject
      return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({ position, delay });
      }, delay);
    })
    }
};

refs.form.addEventListener("submit", onClick);

function onClick(e) {
    e.preventDefault();
    
    const delay = e.target.elements.delay.value;
    const step = e.target.elements.step.value;
    const amount = e.target.elements.amount.value;

    for(let i = 0; i < amount; i += 1) {

      let totalStep = Number(delay) + ( Number(step) * i );

      createPromise(step, delay)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${i + 1} in ${totalStep}}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${i + 1} in ${totalStep}ms`);
        });
    }
    // console.log(delay, step, amount);
};

// Зробити задачу я зробив, але чи логіка правилна, не знаю?