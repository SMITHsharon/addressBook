# addressBook

### Project Description 

This exercise uses Angular to load JSON "address book" records from Firebase and output the data to the DOM. 
In addition, the user has the option to add new address records to the Firebase database. 

#### Address Book App (Part 1) on Launch 
![AddBook1 App on Launch](https://raw.githubusercontent.com/SMITHsharon/addressBook/addresses/screens/Address%20Book%20App%20on%20Launch.png)

#### Address Book App (Part 1) on Click to Add New
![AddBook1 App on Click to Add New](https://raw.githubusercontent.com/SMITHsharon/addressBook/addresses/screens/Address%20Book%20App%20%7C%20Add%20New%20Input%20Screen.png)

#### Address Book App (Part 1) After Add
![AddBook1 App After Add](https://raw.githubusercontent.com/SMITHsharon/addressBook/addresses/screens/Address%20Book%20App%20After%20Adding%20New%20Address.png)

#### Address Book App (Part 2) on Launch
![AddBook2 App on Launch](https://raw.githubusercontent.com/SMITHsharon/addressBook/routz/screens/AddBook2%20App%20on%20Launch.png)

#### Address Book App (Part 2) on Add New Contact
![AddBook2 App On Add](https://raw.githubusercontent.com/SMITHsharon/addressBook/routz/screens/AddBook2%20App%20on%20Add%20New%20Contact.png)

#### Address Book App (Part 2) on Edit Contact
![AddBook2 App On Edit]()


### Project Specs
#### Part 1
- Completed all the project setup: jQuery, Bootstrap, SASS, Angular, Grunt
- Created a JSON file of address records (seed file) and imported the file into Firebase 
- One controller is defined for the app, `AddressCtrl`. 
- The controller loads the JSON data from Firebase with an `XHR` call using the `$http` function that Angular provides.
- The app puts the JSON object into `$scope.addresses` and binds that variable to the controller.

#### Part 2
- Reworked the List, Add, Edit, and Delete functionality using Angular
- Added `angular-route` to project setup
- Injected `ngRoute` into the application
- Added `controllers`, `AddressFactory`, and `partials` to the implementation


### Technologies Used
- `html`
- `css`; `SASS`
- `JavaScript`
- `ES6`
- `jQuery`
- `Bootstrap`
- `Angular`
- `Grunt`


### How To View The Screen 
```
git clone https://github.com/SMITHsharon/addressBook.git
cd addressBook
cd lib
bower install
npm install
http-server -p 8080
This will show in your browser at: http://localhost:8080
```

### Contributor
[Sharon Smith](https://github.com/SMITHsharon)
