import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    dateInputEl: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
}

const selectedDate = flatpickr(refs.dateInputEl, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      console.log(new Date(selectedDates[0]) - Date.now());
    },
  })

console.dir(refs.dateInputEl);

refs.startBtn.addEventListener('click', onStartBtnClick)


function onStartBtnClick(){
    console.log(selectedDate.currentMonth, selectedDate.currentYear);
    console.log(selectedDate);
    console.log(selectedDate.selectedDates[0]);
    // console.log(value.selectedDates.);
}
