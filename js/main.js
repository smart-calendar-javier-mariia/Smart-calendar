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

    console.log(monthView);

    let monthViewOutput = monthView.map(currentDay => `<li>${currentDay}</li>`).join(" ");

    console.log(monthViewOutput);

    document.getElementById('monthViewDays').innerHTML = monthViewOutput;

    let focusMonthName = monthNames[focusDate.getMonth()];
    let focusYear = focusDate.getFullYear();

    console.log(focusMonthName);
    // document.getElementById('focusMonthLabel').innerHTML = focusMonthName;

    document.getElementById('focusMonthLabel').innerHTML = `${focusMonthName}<br><span style="font-size:18px">${focusYear}</span>`
}
