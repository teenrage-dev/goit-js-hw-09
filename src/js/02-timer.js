import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
    timerBox: document.querySelector('.timer'),
    fieldBoxes: document.querySelectorAll('.field'),
    input: document.querySelector('#datetime-picker'),
    buttonData: document.querySelector('button[data-start]'),
    timerDays: document.querySelector('span[data-days]'),
    timerHours: document.querySelector('span[data-hours]'),
    timerMinutes: document.querySelector('span[data-minutes]'),
    timerSeconds: document.querySelector('span[data-seconds]'),
    textValue: document.querySelectorAll('.value'),
    labelValue: document.querySelectorAll('.label'),
};

refs.buttonData.disabled = true;
const CURRENT_DATE = new Date();
let timeFinish;

const timer = {
    timerId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.timerId = setInterval(() => {
            const delta = new Date(timeFinish) - new Date();
            const timeComponents = convertMs(delta);
            viewTime(timeComponents);
        }, 1000);
        
        this.isActive = true;
    },
}


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: CURRENT_DATE,
    minuteIncrement: 1,
    onClose(selectedDates) {
        selectDate(selectedDates[0]);
        if(selectedDates[0] < CURRENT_DATE) {
            Notify.failure('Please choose a date in the future');
        } else {
            refs.buttonData.disabled = false;
            refs.buttonData.addEventListener('click', timer.start);
        };
    }, 
};

const fp = flatpickr(refs.input, options);
function start() {
    timeFinish = new Date(fp.selectedDates[0].getTime());
    console.log(timeFinish);
}

refs.buttonData.addEventListener('click', start);


function selectDate(selectTime) {
    Date.parse(selectTime); 
};


function convertMs(ms) { 
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
};


function viewTime(time) {
    refs.timerDays.textContent = time.days;
    refs.timerHours.textContent = time.hours;
    refs.timerMinutes.textContent = time.minutes;
    refs.timerSeconds.textContent = time.seconds;
    // console.log(time);
};





// STYLES
refs.timerBox.style.display = 'flex';
refs.textValue.forEach(el => {
    el.style.display = 'flex';
    el.style.textAlign = 'center';
    el.style.fontSize = '2rem';

});
refs.labelValue.forEach(el => {
    el.style.display = 'flex';
    el.style.marginRight = '10px';
});