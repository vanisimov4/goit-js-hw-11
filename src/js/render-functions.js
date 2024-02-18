



// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';


// const timerForm = {
//   spanDays: document.querySelector('.value[data-days]'),
//   spanHours: document.querySelector('.value[data-hours]'),
//   spanMinutes: document.querySelector('.value[data-minutes]'),
//   spanSeconds: document.querySelector('.value[data-seconds]'),
//   buttonStart: document.querySelector('button[data-start]'),
//   inputTimer: document.querySelector('input#datetime-picker'),
// };

// let userSelectedDate;
// timerForm.buttonStart.disabled = true;
// timerForm.buttonStart.addEventListener('click', hundleBtnClick);
// let diff;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//     if (selectedDates[0] < new Date()) {
//       iziToast.error({
//         messageColor: 'white',
//         color: '#EF4040', // blue, red,
//         displayMode: 'once', // once, replace
//         position: 'topRight', // bottomRight, bottomLeft, topRight,
//         message: 'Please choose a date in the future',
//       });
//       timerForm.buttonStart.disabled = true;
//     } else {
//       timerForm.buttonStart.disabled = false;
//       userSelectedDate = selectedDates[0];
//     }
//   },
// };

// flatpickr(timerForm.inputTimer, options);

// function hundleBtnClick() {
//   diff = userSelectedDate - Date.now();
//   timerForm.buttonStart.disabled = true;
//   timerForm.inputTimer.disabled = true;
  
//   const intervalId = setInterval(() => {
//     diff -= 1000;
//     if (diff <= 0) {
//       clearInterval(intervalId);
//     } else {
//       const { days, hours, minutes, seconds } = convertMs(diff);
//       timerForm.spanDays.innerHTML = addLeadingZero(days);
//       timerForm.spanHours.innerHTML = addLeadingZero(hours);
//       timerForm.spanMinutes.innerHTML = addLeadingZero(minutes);
//       timerForm.spanSeconds.innerHTML = addLeadingZero(seconds);
//     }
//   }, 1000);
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }
