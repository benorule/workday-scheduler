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

## Color Change by Hour
In the javascript file I set up an interval that runs a function every minute. This function will check the hour and change the css styling accordingly.

In the function I logged the current time from Moment in the console and then created an if statement. Each if condition is a time period of one hour between two on the hour times. In the if statements I add a class to each column depending on whether it if future, current or past. These classes change the background colors of the columns so one can easily see which hours have passed which hour interval the current time is within and which hours are yet to come.



