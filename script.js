
  
  const form = document.getElementById("feedbackForm");
  const message = document.getElementById("formMessage");

 
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();

    const birthYearInput = document.getElementById("birth-year").value.trim();

    
    if (username === "" || email === "") {
      message.textContent = "Please fill in both your name and email.";
      message.style.color = "red";
      return; 
    }
  const birthYear = parseInt(birthYearInput);   
  let discountMessage = "";

  if (!isNaN(birthYear) && birthYear > 1900 && birthYear <= 2026) {
    const age = 2026 - birthYear;

    if (age <= 25) {
      discountMessage = "  Student discount applied!";
    } else if (age >= 60) {
      discountMessage = "  Senior discount applied!";
    } else {
      discountMessage = " No discount available.";
    }
  } else {
    discountMessage = "  Please enter a valid birth year.";
  }
   
    message.textContent =
      "Thank you for visiting, " + username + "! We will contact you at " + email + "."+discountMessage;
    message.style.color = "green";

   
  });
//---------------------------------------------------------------------------------------

const rows = document.querySelectorAll("#movieTable tr");


rows.forEach(function (row) {


  row.addEventListener("mouseover", function () {
    row.style.backgroundColor = "#ffe6a7"; 
  });

  
  row.addEventListener("mouseout", function () {
    row.style.backgroundColor = ""; 
  });

});

//-------------------------------------------------------------------------------

const themeToggle = document.getElementById("themeToggle");

let isDark = false;

themeToggle.addEventListener("click", function () {

  isDark = !isDark;

  if (isDark) {
  
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#f5f5f5";
    themeToggle.textContent = "Switch to Light Mode";
  } else {
  
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
    themeToggle.textContent = "Switch to Dark Mode";
  }
});
//------------------------------------------------------------------------------

const tickets = document.querySelectorAll(".ticket-checkbox");
const totalDisplay = document.getElementById("total");

tickets.forEach(function (ticket) {

  ticket.addEventListener("change", function () {

    let total = 0;
    let chosen = [];

    tickets.forEach(function (t) {
      if (t.checked) {
        total = total + parseInt(t.value);
        chosen.push(t.dataset.name);
      }
    });


    if (chosen.length === 0) {
      totalDisplay.textContent = "Total: $0";
    } else {
      totalDisplay.textContent =
        "Total: $" + total + " (" + chosen.join(", ") + ")";
    }

  });

});
//-----------------------------------------------------------------------------------


const readMoreBtn = document.getElementById("readMoreBtn");
const extraText = document.getElementById("extraText");

readMoreBtn.addEventListener("click", function () {

  if (extraText.style.display === "none") {

    extraText.style.display = "block";
    readMoreBtn.textContent = "Read Less";
  } else {
  
    extraText.style.display = "none";
    readMoreBtn.textContent = "Read More";
  }

});
//--------------------------------------------------------------------------------


const filterButtons = document.querySelectorAll(".filter-btn");
const ticketRows = document.querySelectorAll(".ticket-row");


filterButtons.forEach(function (btn) {

  btn.addEventListener("click", function () {

    const filter = btn.dataset.filter;   

    
    ticketRows.forEach(function (row) {

      if (filter === "all" || row.dataset.category === filter) {
        row.style.display = "";          
      } else {
        row.style.display = "none";      
      }

    });

  });

});
//--------------------------------------------------------------------------------------

const currentHour = new Date().getHours();

const statusBanner = document.getElementById("statusBanner");

if (currentHour >= 8 && currentHour < 22) {
  statusBanner.textContent = " We are Open!";
  statusBanner.style.color = "green";
  statusBanner.style.fontWeight = "bold";
} else {
  statusBanner.textContent = " Closed - Open at 8 AM";
  statusBanner.style.color = "red";
  statusBanner.style.fontWeight = "bold";
}
//------------------------------------------------------------------------------------------

const notes = document.getElementById("special-notes");
const charCount = document.getElementById("charCount");


notes.addEventListener("input", function () {

  const maxLength = 100;
  const remaining = maxLength - notes.value.length;

  charCount.textContent = remaining + " characters remaining";


});
//----------------------------------------------------------------------