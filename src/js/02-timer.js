import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    dateInputEl: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
}

const dataRefs = {
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
}
let selectedDate = null;
let intervalId = null

const pickDate = flatpickr(refs.dateInputEl, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if(selectedDates[0] - Date.now() <= 0) Notify.failure("Please choose a date in the future",
      { timeout: 3000},);
      else {
        refs.startBtn.disabled = false
        selectedDate = selectedDates[0];}
    },
  })

refs.startBtn.disabled = true
refs.startBtn.addEventListener('click', onStartBtnClick)

function onStartBtnClick(){
  intervalId = setInterval(updateTimer, 1000)
  refs.startBtn.disabled = true
  refs.dateInputEl.disabled = true

}

function updateTimer(){
  const timeLeft = selectedDate - Date.now()
  const timeConverted = convertMs(selectedDate - Date.now())
  if (timeLeft < 1000) {
    clearInterval(intervalId)
    Notify.success("Congrats!!! Time`s up!!!")
  }

  showTime(timeConverted, dataRefs)
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function showTime({ days, hours, minutes, seconds }, { daysEl, hoursEl, minutesEl, secondsEl }){
  daysEl.textContent = addLeadingZero(days)
  hoursEl.textContent = addLeadingZero(hours)
  minutesEl.textContent = addLeadingZero(minutes)
  secondsEl.textContent = addLeadingZero(seconds)
}

function addLeadingZero(value){
  return String(value).padStart(2,'0')
}
