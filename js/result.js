//creating a variable and storing my stringified data
var data = [];
function createLocalStorage() {
    var stringifiedallProductsArray = JSON.stringify(data);
    //passing stringified data into storage and giving it the key to access to my storage
    localStorage.setItem("dataArrayStorage", stringifiedData);
  }
  //function im calling when loading page
  function checkingLocalStorage() {
    //if local storage has something in it then it's true otherwise it will come as null and cont to else
    if (localStorage.dataStorage) {
      //declaring a new var to store my storage in and using my key
      var retrieveData = localStorage.getItem("dataArrayStorage");
      //declaring a new var and assigning it to parse my storage data
      var parsedData = JSON.parse(retrieveData);
      //im combining my all my storage into the variable that will hold my new data
      dataArray = parsedData;
      renderData();
    }
  }
  createLocalStorage();
  checkingLocalStorage();
