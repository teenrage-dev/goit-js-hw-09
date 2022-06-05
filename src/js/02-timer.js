import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const refs = {
    timerBox: document.querySelector('.timer'),
    fieldBoxes: document.querySelectorAll('.field'),
    input: document.querySelector('#datetime-picker'),
    buttonData: document.querySelector('button[data-start]'),
    timerDays: document.querySelector('span[data-days]'),
    timerHours: document.querySelector('span[data-hours]'),
    timerMinutes: document.querySelector('span[data-minutes]'),
    timerSeconds: document.querySelector('span[data-seconds]'),
};

refs.buttonData.disabled = true;
const CURRENT_DATE = new Date();




const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: CURRENT_DATE,
    minuteIncrement: 1,
    onClose(selectedDates) {
        selectDate(selectedDates[0]);
        if(selectedDates[0] < CURRENT_DATE) {
            window.alert('Please choose a date in the future');
        } else {
            refs.buttonData.disabled = false;
            refs.buttonData.addEventListener('click', timer.start());
            console.log(convertMs(timeFinish));
        };
    }, 
};
const fp = flatpickr(refs.input, options);

let timeFinish = fp.selectedDates[0].getTime();

console.log(convertMs(timeFinish));


const timer = {
    timerId: null,
    isActive: false,
    start(startTime) {
        if (this.isActive) {
            return;
        }
        this.timerId = setInterval(() => {
            const delta = new Date(timeFinish) - new Date();
            const timeComponents = convertMs(delta);
            viewTime(timeComponents);
            console.log(new Date(timeFinish).getTime());
        }, 1000);
        
        this.isActive = true;
    },
}



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