# addressBook

### Project Description 

This exercise uses Angular to load JSON "address book" records from Firebase and output the data to the DOM. 
In addition, the user has the option to add new address records to the Firebase database. 

#### Address Book App on Launch 
![Address Book App on Launch](https://raw.githubusercontent.com/SMITHsharon/addressBook/addresses/screens/Address%20Book%20App%20on%20Launch.png)

#### Address Book App on Click to Add New
![Address Book App on Click to Add New]()

#### Address Book App After Add
![Address Book App After Add]()


### Project Specs
- Completed all the project setup: jQuery, Bootstrap, SASS, Angular, Grunt
- Created a JSON file of address records (seed file) and imported the file into Firebase 
- One controller is defined for the app, `AddressCtrl`. 
- The controller loads the JSON data from Firebase with an `XHR` call using the `$http` function that Angular provides.
- The app puts the JSON object into `$scope.addresses` and binds that variable to the controller.


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
