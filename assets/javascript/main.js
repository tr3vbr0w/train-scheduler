//Firebase data connection configuration here, copied from my online firebase acct called train-scheduler
var firebaseConfig = {
    apiKey: "AIzaSyA80NV-qQdr8eYJrtqPtk_nhCDpDXOFP_A",
    authDomain: "train-scheduler-d0b05.firebaseapp.com",
    databaseURL: "https://train-scheduler-d0b05.firebaseio.com",
    projectId: "train-scheduler-d0b05",
    storageBucket: "train-scheduler-d0b05.appspot.com",
    messagingSenderId: "47581232379",
    appId: "1:47581232379:web:547a7408795f79b6"
  };
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();


//On submit button click, take the value from each form field id, 
//assign it to a corresponding variable within the database
$('#submit').click(function(e) {
    e.preventDefault();
    let firstTVal = $('#first-train').val();
    let freqVal = $('#freq').val();
    let nameVal = $('#train-name').val();
    let destVal = $('#t-dest').val();
    database.ref().push({
        nameVal: nameVal,
        firstTVal: firstTVal,
        destVal: destVal,
        freqVal: freqVal,
    })

    
//Once submit button is clicked, the form fields are cleared
    freqVal = $('#freq').val('');
    firstTVal = $('#first-train').val('');
    nameVal = $('#train-name').val('');
    destVal = $('#t-dest').val('');
    
})
//Each time a new train value is added to the database, create a new row with the trains information contained table data. Append each table data tag to the corresponding row, then append new row to the table
database.ref().on("child_added", function(snapshot) {
//Moment taking information from database in order to find the information required for nextTrainTime and timeUntilNextTrain 
    var firstTConverted = moment(snapshot.val().firstTVal, "HH:mm").subtract(1,"years");
// var currentTime = moment();
    var diffTime = moment().diff(moment(firstTConverted), "minutes");
    var tRemainder = diffTime % snapshot.val().freqVal;
    var tMinutesTillTrain = snapshot.val().freqVal - tRemainder;
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log(moment(nextTrain).format('hh:mm'));
//Create new row and table data for each item in the database
    var r = $('<tr>');
    var firstTVal = $('<td>');
    var freqVal= $('<td>');
    var nameVal = $('<td>');
    var destVal = $('<td>');
    var nxtTrainTime = $('<td>');
    var arrivalTime =$('<td>');

//Reach out to database and take the value of each variable, adding the text to the corresponding '<td>', append each td to the table row, and append each row to the table body
    firstTVal.text(snapshot.val().firstTVal);
    destVal.text(snapshot.val().destVal);
    nameVal.text(snapshot.val().nameVal);
    freqVal.text(snapshot.val().freqVal);
    nxtTrainTime.text(tMinutesTillTrain);
    arrivalTime.text(moment(nextTrain).format('hh:mm'));
    $(r).append(nameVal, destVal, firstTVal, freqVal, nxtTrainTime, arrivalTime);
    $('tbody').append(r);
})