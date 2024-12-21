/*
  *  Author: Kong Jia Le';
  *  Theme: Restaurant Food Order;
  *  version: 1.0;
*/

/*
* JavaScripts For Dialog, Open button and Close Button starts here!
*/

//!Target dialog open and close buttons.
const openModalButton = document.getElementById('open-work-hour-button');
const openModalDropDownButton = document.getElementById('drop-down-button');
const dropDownIcon = document.getElementById('drop-down-icon');
const openHoursMenu = document.getElementById('open-hours-menu-dialog');
const closeModalButton = document.getElementById('close-modal-button');
const blurAndRemoveScrollBar = document.getElementById('body');

//!Run this when Open button is clicked.
openModalButton.addEventListener("click", () => {
  blurAndRemoveScrollBar.classList.add('blur-hide-scroll-bar');
  openHoursMenu.showModal();
});

//!Run this when Drop down button is clicked.
openModalDropDownButton.addEventListener("click", () => {
  blurAndRemoveScrollBar.classList.add('blur-hide-scroll-bar');
  openHoursMenu.showModal();
});

//!Run this when Close button is clicked.
closeModalButton.addEventListener("click", () => {
  blurAndRemoveScrollBar.classList.remove('blur-hide-scroll-bar');
  openHoursMenu.close();
});

//!Get current day
  let date = new Date();
  let dayNumber = date.getDay();
  const day = ['Sunday:', 'Monday:', 'Tuesday:', 'Wednesday:', 'Thursday:', 'Friday:', 'Saturday:'];
  const time = ['8am–4pm','8am–6pm'];

  //!Get current Time
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  //!Check current Time and Update the Open Button.
  switch(dayNumber) {

    //*TODAY IS SUNDAY, WEDNESDAY or SUNDAY.
    case 0: case 3: case 6:
      if(hours < 8 || (hours === 18 & minutes > 0) || hours > 18) {
        openModalButton.classList.add('before-open-time');
        openModalButton.textContent = 'Open At 8am';
        dropDownIcon.classList.add('close');
      } else if(hours >= 8 && hours <= 18) {
        openModalButton.classList.remove('before-open-time');
        openModalButton.textContent = 'Open';
        dropDownIcon.classList.remove('close');
      }
    break;
    
    //*TODAY IS MONDAY, TUESDAY, THURSDAY or FRIDAY.
    case 1: case 2: case 4: case 5:
      if(hours < 8 || (hours === 16 & minutes > 0) || hours > 16) {
        openModalButton.classList.add('before-open-time');
        openModalButton.textContent = 'Open At 8am';
        dropDownIcon.classList.add('close');
      } else if(hours >= 8 && hours <= 16) {
        openModalButton.classList.remove('before-open-time');
        openModalButton.textContent = 'Open';
        dropDownIcon.classList.remove('close');
      }
    break;
  }

//*Let all Days and Time be empty String.
let firstDay = '';
let firstTime = '';
let secondDay = '';
let secondTime = '';
let thirdDay = '';
let thirdTime = '';
let fourthDay = '';
let fourthTime = '';
let fifthDay = '';
let fifthTime = '';
let sixthDay = '';
let sixthTime = '';
let seventhDay = '';
let seventhTime = '';

//*Change the Days and Time
  switch(dayNumber) {
    //*TODAY IS SUNDAY!
    case 0:
      firstDay = 0;
      firstTime = 1;
      secondDay = 1;
      secondTime = 0;
      thirdDay = 2;
      thirdTime = 0;
      fourthDay = 3;
      fourthTime = 1;
      fifthDay = 4;
      fifthTime = 0;
      sixthDay = 5;
      sixthTime = 0;
      seventhDay = 6;
      seventhTime = 1;
      break;

      //*TODAY IS MONDAY!
      case 1:
      firstDay = 1;
      firstTime = 0;
      secondDay = 2;
      secondTime = 0;
      thirdDay = 3;
      thirdTime = 1;
      fourthDay = 4;
      fourthTime = 0;
      fifthDay = 5;
      fifthTime = 0;
      sixthDay = 6;
      sixthTime = 1;
      seventhDay = 0;
      seventhTime = 1;
      break;

      //*TODAY IS TUESDAY!
      case 2:
      firstDay = 2;
      firstTime = 0;
      secondDay = 3;
      secondTime = 1;
      thirdDay = 4;
      thirdTime = 0;
      fourthDay = 5;
      fourthTime = 0;
      fifthDay = 6;
      fifthTime = 1;
      sixthDay = 0;
      sixthTime = 1;
      seventhDay = 1;
      seventhTime = 0;
      break;

      //*TODAY IS WEDNESDAY!
      case 3:
      firstDay = 3;
      firstTime = 1;
      secondDay = 4;
      secondTime = 0;
      thirdDay = 5;
      thirdTime = 0;
      fourthDay = 6;
      fourthTime = 1;
      fifthDay = 0;
      fifthTime = 1;
      sixthDay = 1;
      sixthTime = 0;
      seventhDay = 2;
      seventhTime = 0;
      break;

      //*TODAY IS THURSDAY!
      case 4:
      firstDay = 4;
      firstTime = 0;
      secondDay = 5;
      secondTime = 0;
      thirdDay = 6;
      thirdTime = 1;
      fourthDay = 0;
      fourthTime = 1;
      fifthDay = 1;
      fifthTime = 0;
      sixthDay = 2;
      sixthTime = 0;
      seventhDay = 3;
      seventhTime = 1;
      break;

      //*TODAY IS FRIDAY!
      case 5:
      firstDay = 5;
      firstTime = 0;
      secondDay = 6;
      secondTime = 1;
      thirdDay = 0;
      thirdTime = 1;
      fourthDay = 1;
      fourthTime = 0;
      fifthDay = 2;
      fifthTime = 0;
      sixthDay = 3;
      sixthTime = 1;
      seventhDay = 4;
      seventhTime = 0;
      break;

      //*TODAY IS SATURDAY!
      case 6:
      firstDay = 6;
      firstTime = 1;
      secondDay = 0;
      secondTime = 1;
      thirdDay = 1;
      thirdTime = 0;
      fourthDay = 2;
      fourthTime = 0;
      fifthDay = 3;
      fifthTime = 1;
      sixthDay = 4;
      sixthTime = 0;
      seventhDay = 5;
      seventhTime = 0;
      break;
  }

//?Update the day and time
document.getElementById('1st-day').textContent = day[firstDay];
document.getElementById('1st-time').textContent = time[firstTime];
document.getElementById('2nd-day').textContent = day[secondDay];
document.getElementById('2nd-time').textContent = time[secondTime];
document.getElementById('3rd-day').textContent = day[thirdDay];
document.getElementById('3rd-time').textContent = time[thirdTime];
document.getElementById('4th-day').textContent = day[fourthDay];
document.getElementById('4th-time').textContent = time[fourthTime];
document.getElementById('5th-day').textContent = day[fifthDay];
document.getElementById('5th-time').textContent = time[fifthTime];
document.getElementById('6th-day').textContent = day[sixthDay];
document.getElementById('6th-time').textContent = time[sixthTime];
document.getElementById('7th-day').textContent = day[seventhDay];
document.getElementById('7th-time').textContent = time[seventhTime];

/*
* JavaScripts For Dialog, Open button and Close Button ends here!
*/

//* JS for actvie Nav Bar starts here!

  //?Get all sections and nav a
  const sections = document.querySelectorAll('section');
  const navA = document.querySelectorAll('nav ul li a');

  //?When the window is scrolled RUN THIS FUNCTION.
  window.addEventListener('scroll', ()=> {
    
    //? Default value
    let current = "SetMenuEksklusif";
    
    //?Loop through the all the sections
    sections.forEach(section => {
      //?Get the top of the section.
      const sectionTop = section.offsetTop;      
      
        //?Check the current section.
        //? IF THE SCROLL Y IS GREATER THAN THE TOP OF THE SECTION IT MEANS THAT SECTION IS VISIBLE.
        if(window.scrollY >= (sectionTop - 80)) {
          current = section.getAttribute('id');
          // console.log("window.addEventListener  current:", current); 
        }
    });

    //? a is the link in the nav bar.
    //? Loop through the nav a and add active class to the current section.
    //? IF THE NAV A HAS THE SAME CLASS AS THE CURRENT SECTION ADD ACTIVE CLASS TO IT.
    //? ELSE REMOVE THE ACTIVE CLASS.
    //? THIS WILL MAKE THE NAV A ACTIVE WHEN THE SECTION IS VISIBLE.
    //? THIS WILL ALSO REMOVE THE ACTIVE CLASS WHEN THE SECTION IS NOT VISIBLE.
    navA.forEach( a => {
      a.classList.remove('active');
      if (a.classList.contains(current)) {
        a.classList.add('active');
      }
    })
  });
//* JS for actvie Nav Bar ends here!