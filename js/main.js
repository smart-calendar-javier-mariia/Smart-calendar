let event1 = {
  date:{
    year: 2019,
    month: 02,
    day: 06
  },
  title: `Class Session`,
  class: `INTR2012 INTERFACE DEVELOPMENT II`,
  startTime: `12:00`,
  endTime: `15:00`,
  repeats: true,
  howOften: `Every Wednesday`,
  reminder: `1 hour`,
  completed: true,
  eventCategory: `School`,
  eventNotes: `Lab: Organization Interface`,
  eventCreated: {
    year: 2019,
    month: 02,
    day: 06
  },
  createdBy: `Javier`
}


let event2 = {
  date:{
    year: 2019,
    month: 02,
    day: 10
  },
  title: `Deliverable Due`,
  class: `INTR2012 INTERFACE DEVELOPMENT II`,
  startTime: `12:00`,
  endTime: null,
  repeats: false,
  howOften: null,
  reminder: `1 day`,
  completed: false,
  eventCategory: `School`,
  eventNotes: `Lab: Organization Interface`,
  eventCreated: {
    year: 2019,
    month: 02,
    day: 06
  },
  createdBy: `Javier`
}

let event3 = {
  date:{
    year: 2019,
    month: 02,
    day: 9
  },
  title: `Meeting`,
  class: `INTR2012 INTERFACE DEVELOPMENT II`,
  startTime: `13:30`,
  endTime: `15:00`,
  repeats: false,
  howOften: null,
  reminder: `1 hour`,
  completed: true,
  eventCategory: `School`,
  eventNotes: `Work on Lab: Organization Interface`,
  eventCreated: {
    year: 2019,
    month: 02,
    day: 09
  },
  createdBy: `Mariia`
}

let event4 = {
  date:{
    year: 2019,
    month: 02,
    day: 20
  },
  title: `In class lab`,
  class: `INTR2012 INTERFACE DEVELOPMENT II`,
  startTime: `13:00`,
  endTime: `14:00`,
  repeats: true,
  howOften: `Every Wednesday`,
  reminder: `1 hour`,
  completed: true,
  eventCategory: `School`,
  eventNotes: `Work on in class lab`,
  eventCreated: {
    year: 2019,
    month: 02,
    day: 20
  },
  createdBy: `Mariia`
}

let event5 = {
  date:{
    year: 2019,
    month: 02,
    day: 20
  },
  title: `After class meeting`,
  class: `INTR2012 INTERFACE DEVELOPMENT II`,
  startTime: `15:20`,
  endTime: `16:20`,
  repeats: false,
  howOften: null,
  reminder: `1 hour`,
  completed: false,
  eventCategory: `School`,
  eventNotes: `Work on group project`,
  eventCreated: {
    year: 2019,
    month: 02,
    day: 20
  },
  createdBy: `Javier`
}


// WORKING WITH DATES - Javier

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]


let focusDate = new Date();

drawMonthView();

document.getElementById("prevMonth").addEventListener("click", function(){
   focusDate = new Date(focusDate.getFullYear(), focusDate.getMonth() -1, 1);
   drawMonthView();
 });

 document.getElementById("nextMonth").addEventListener("click", function(){
    focusDate = new Date(focusDate.getFullYear(), focusDate.getMonth() +1, 1);
    drawMonthView();
  });

function drawMonthView() {

    let dayOneOffset = new Date(focusDate.getFullYear(), focusDate.getMonth(), 0);

    let daysInMonth = new Date(focusDate.getFullYear(), focusDate.getMonth() + 1, 0).getDate();

    console.log(focusDate);
    console.log(dayOneOffset);
    console.log(dayOneOffset.getDay());
    console.log(daysInMonth);

    let skipLeadingDays = dayOneOffset.getDay();

    let monthView = [];

    for (var i = 0; i < skipLeadingDays; i++) {
      monthView.push(" ");
    }

    console.log(monthView);

    for (var i = 0; i < daysInMonth; i++) {
      monthView.push(i+1);
    }

    let todayCheck = new Date();


    // display current day

    if (focusDate.getFullYear() == todayCheck.getFullYear() && focusDate.getMonth() == todayCheck.getMonth() ) {

      let todayActive = skipLeadingDays + (new Date()).getDate() -1;

      console.log(todayActive);

      monthView[todayActive] = `<span class="active">${monthView[todayActive]}</span>`;

      console.log(monthView);

    }

    // display data

    if (focusDate.getFullYear() == event1.date.year && focusDate.getMonth() == event1.date.month - 1){
      let eventDay  = skipLeadingDays + event1.date.day - 1;
      monthView[eventDay] = `<span class="event">${monthView[eventDay]}</span>`;

    }

    if (focusDate.getFullYear() == event2.date.year && focusDate.getMonth() == event2.date.month - 1){
      let eventDay  = skipLeadingDays + event2.date.day - 1;
      monthView[eventDay] = `<span class="event">${monthView[eventDay]}</span>`;
    }

    if (focusDate.getFullYear() == event3.date.year && focusDate.getMonth() == event3.date.month - 1){
      let eventDay  = skipLeadingDays + event3.date.day - 1;
      monthView[eventDay] = `<span class="event">${monthView[eventDay]}</span>`;
    }

    if (focusDate.getFullYear() == event4.date.year && focusDate.getMonth() == event4.date.month - 1){
      let eventDay  = skipLeadingDays + event4.date.day - 1;
      monthView[eventDay] = `<span class="event">${monthView[eventDay]}</span>`;
    }

    if (focusDate.getFullYear() == event5.date.year && focusDate.getMonth() == event5.date.month - 1){
      let eventDay  = skipLeadingDays + event5.date.day - 1;
      monthView[eventDay] = `<span class="event">${monthView[eventDay]}</span>`;
    }





    let monthViewOutput = monthView.map(currentDay => `<li>${currentDay}</li>`).join(" ");

    console.log(monthViewOutput);

    document.getElementById('monthViewDays').innerHTML = monthViewOutput;

    console.log(document.getElementsByClassName("event"));

    for (var i = 0; i < document.getElementsByClassName("event").length; i++) {
      document.getElementsByClassName("event")[i].addEventListener("click", function(){
         document.getElementById("eventViewer").classList.toggle("hidden");
       })
    }

    let focusMonthName = monthNames[focusDate.getMonth()];
    let focusYear = focusDate.getFullYear();

    console.log(focusMonthName);
    // document.getElementById('focusMonthLabel').innerHTML = focusMonthName;

    document.getElementById('focusMonthLabel').innerHTML = `${focusMonthName}<br><span style="font-size:18px">${focusYear}</span>`
}
