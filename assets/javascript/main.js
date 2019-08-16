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
//On s
$('#submit').click(function(e) {
    e.preventDefault()
    let firstTVal = $('#first-train').val()
    let freqVal = $('#freq').val()
    let nameVal = $('#first-train').val()
    let destVal = $('#t-dest').val()
    database.ref().push({
        nameVal: nameVal,
        firstTVal: firstTVal,
        destVal: destVal,
        freqVal: freqVal,
    })
    freqVal = $('#freq').val('')
    firstTVal = $('#first-train').val('')
    nameVal = $('#train-name').val('')
    destVal = $('#t-dest').val('')
    monthsWorked = $('#months-worked').val('')
})
//Each time a new train value is added to the database, 
// database.ref().on("child_added", function(snapshot) {
//     // let totalBilled = monthlyRateVal * monthsWorked;
//     // let currentdate = new Date(year, month, day);
//     console.log(snapshot.val());
//     var r = $('<tr>')
//     var nameTd = $('<td>')
//     var roleTd = $('<td>')
//     var startDateTd = $('<td>')
//     var monthsWorkedTd = $('<td>')
//     var monthlyRateTd = $('<td>')
//         // var totalBilledTd = $('<td>')
//     nameTd.text(snapshot.val().nameVal);
//     roleTd.text(snapshot.val().destVal);
//     startDateTd.text(snapshot.val().freqVal);
//     monthsWorkedTd.text(snapshot.val().monthsWorked);
//     monthlyRateTd.text(snapshot.val().firstTVal);
//     // totallBilledTd.text(snapshot.val().totalBilled);
//     $(r).append(nameTd, roleTd, startDateTd, monthsWorkedTd, monthlyRateTd)
//     $('tbody').append(r)
// })