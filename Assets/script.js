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
