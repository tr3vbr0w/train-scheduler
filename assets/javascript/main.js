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
  var database = firebase.database()
//On submit button click, take the value from each form field id, assign it to a corresponding variable within the database
$('#submit').click(function(e) {
    e.preventDefault()
    let firstTVal = $('#first-train').val()
    let freqVal = $('#freq').val()
    let nameVal = $('#train-name').val()
    let destVal = $('#t-dest').val()
    database.ref().push({
        nameVal: nameVal,
        firstTVal: firstTVal,
        destVal: destVal,
        freqVal: freqVal,
    })
    //Once submit button is clicked, the form fields are cleared
    freqVal = $('#freq').val('')
    firstTVal = $('#first-train').val('')
    nameVal = $('#train-name').val('')
    destVal = $('#t-dest').val('')

})
//Each time a new train value is added to the database, create a new row with the trains information contained table data. Append each table data tag to the corresponding row, then 
database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val());
    var r = $('<tr>')
    var firstTVal = $('<td>')
    var freqVal= $('<td>')
    var nameVal = $('<td>')
    var destVal = $('<td>')
    firstTVal.text(snapshot.val().firstTVal);
    destVal.text(snapshot.val().destVal);
    nameVal.text(snapshot.val().nameVal);
    freqVal.text(snapshot.val().freqVal);
    $(r).append(nameVal, destVal, firstTVal, freqVal)
    $('tbody').append(r)
})