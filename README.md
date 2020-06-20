# workday-scheduler
Coursework Assignment No. 5 for Coding Bootcamp

## Grid Layout
To begin with I set up a bootstrap grid system using rows and columns to set up the basic look of the webpage. I created a large column in the center where my input field can go and two smaller columns on either side, the right side being for the time and the left side being for the save button.

Within the left side column I changed the text content to "9AM" and in the right side column I created a button with the text content "SAVE" and the id "btn_1". 

In the middle column I created an input field in the css file and gave it an id of "txt_1" through which I can refer to it in the javascript file.

## Input Field
In the javascript file I created two functions one that saves the inputted value in local storage and one that retrieves the saved value from local storage.

At the very top of the javascript page I wrote code that will, when the page loads, retrieve and display the value most recently saved in local storage which creates the user experience that the value stays there even when the page is refreshed.

In the html file I wrote an onlick event for "btn_1" that runs "txt_1" through the function "saveValue" that saves the displayed value in local storage.

Then I repeated the process for 8 other columns giving them each unique ids for their text input sections and buttons.

At the top of the page I had nine lines of code that loaded the saved value for each column so I made it more concise by using a for loop.

