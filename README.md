# angular-seed — the seed for AngularJS apps

This is an AngularJS application to search account numbers from hard-coded list of account details. Frontend of the angular app uses http-server to host the application on localhost. In order to run application, node must be installed on the machine.

Following are the steps that are need to be followed: 

  - Download the zip folder from github.
  - extract the project folder.
  - open a node terminal and set the working directory to where you extracted the project.
  - run the command "npm start".
  - open "http://localhost:8000" to run application on browser.

Following are valid input for the system:
  - 1001360593
  - 1001950587
  - 1001360589
  - 1001360591

Following are some invalid inputs against which the app validates and notifies the user:
  - empty text input field (Form will not get submitted if the field is empty)
  - Length of input less than or greater than 10 (Assumption: length of account number is strictly 10. Form will not get submitted in such case) eg:- 1223456, 87890
  - Invalid character i.e. if a user enters input which contains characters or special characters other than numbers, then the form will not get submitted
