// Set displayed values as the saved values upon refresh
for (i = 1; i < 10; i++) {
    document.getElementById("txt_" + i).value = getSavedValue("txt_" + i);
}

// Save the inputted value in local storage
function saveValue(e) {
    var id = e.id;
    var val = e.value;
    localStorage.setItem(id, val);
}

// Retrieve the saved value from local storage
function getSavedValue(v) {
    if (!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v);
}

timerFunction();

var myVar = setInterval(timerFunction, 60000); // Runs function every minute

// Function that checks the current hour
function timerFunction() {
    console.log(moment().format('LTS'));
    var timerVariable = (moment().format('LTS'))
    
    // Changes colour of columns according to time
    if ((timerVariable > "5:00:00") && (timerVariable < "6:00:00")) {
        $("#9AM").addClass("past");
        $("#10AM").addClass("past");
        $("#11AM").addClass("past");
        $("#12PM").addClass("past");
        $("#1PM").addClass("past");
        $("#2PM").addClass("past");
        $("#3PM").addClass("past");
        $("#4PM").addClass("past");
        $("#5PM").addClass("present");
    }
    else if ((timerVariable > "4:00:00") && (timerVariable < "5:00:00")) {
        $("#9AM").addClass("past");
        $("#10AM").addClass("past");
        $("#11AM").addClass("past");
        $("#12PM").addClass("past");
        $("#1PM").addClass("past");
        $("#2PM").addClass("past");
        $("#3PM").addClass("past");
        $("#4PM").addClass("present");
        $("#5PM").addClass("future");
    }
    else if ((timerVariable > "3:00:00") && (timerVariable < "4:00:00")) {
        $("#9AM").addClass("past");
        $("#10AM").addClass("past");
        $("#11AM").addClass("past");
        $("#12PM").addClass("past");
        $("#1PM").addClass("past");
        $("#2PM").addClass("past");
        $("#3PM").addClass("present");
        $("#4PM").addClass("future");
        $("#5PM").addClass("future");
    }
    else if ((timerVariable > "2:00:00") && (timerVariable < "3:00:00")) {
        $("#9AM").addClass("past");
        $("#10AM").addClass("past");
        $("#11AM").addClass("past");
        $("#12PM").addClass("past");
        $("#1PM").addClass("past");
        $("#2PM").addClass("present");
        $("#3PM").addClass("future");
        $("#4PM").addClass("future");
        $("#5PM").addClass("future");
    }
    else if ((timerVariable > "1:00:00") && (timerVariable < "2:00:00")) {
        $("#9AM").addClass("past");
        $("#10AM").addClass("past");
        $("#11AM").addClass("past");
        $("#12PM").addClass("past");
        $("#1PM").addClass("present");
        $("#2PM").addClass("future");
        $("#3PM").addClass("future");
        $("#4PM").addClass("future");
        $("#5PM").addClass("future");
    }
    else if ((timerVariable > "12:00:00") && (timerVariable < "1:00:00")) {
        $("#9AM").addClass("past");
        $("#10AM").addClass("past");
        $("#11AM").addClass("past");
        $("#12PM").addClass("present");
        $("#1PM").addClass("future");
        $("#2PM").addClass("future");
        $("#3PM").addClass("future");
        $("#4PM").addClass("future");
        $("#5PM").addClass("future");
    }
    else if ((timerVariable > "11:00:00") && (timerVariable < "12:00:00")) {
        $("#9AM").addClass("past");
        $("#10AM").addClass("past");
        $("#11AM").addClass("present");
        $("#12PM").addClass("future");
        $("#1PM").addClass("future");
        $("#2PM").addClass("future");
        $("#3PM").addClass("future");
        $("#4PM").addClass("future");
        $("#5PM").addClass("future");
    }
    else if ((timerVariable > "10:00:00") && (timerVariable < "11:00:00")) {
        $("#9AM").addClass("past");
        $("#10AM").addClass("present");
        $("#11AM").addClass("future");
        $("#12PM").addClass("future");
        $("#1PM").addClass("future");
        $("#2PM").addClass("future");
        $("#3PM").addClass("future");
        $("#4PM").addClass("future");
        $("#5PM").addClass("future");
    }
    else if ((timerVariable > "9:00:00") && (timerVariable < "10:00:00")) {
        $("#9AM").addClass("present");
        $("#10AM").addClass("future");
        $("#11AM").addClass("future");
        $("#12PM").addClass("future");
        $("#1PM").addClass("future");
        $("#2PM").addClass("future");
        $("#3PM").addClass("future");
        $("#4PM").addClass("future");
        $("#5PM").addClass("future");
    }
    else {
        $("#9AM").addClass("future");
        $("#10AM").addClass("future");
        $("#11AM").addClass("future");
        $("#12PM").addClass("future");
        $("#1PM").addClass("future");
        $("#2PM").addClass("future");
        $("#3PM").addClass("future");
        $("#4PM").addClass("future");
        $("#5PM").addClass("future");
    }
}