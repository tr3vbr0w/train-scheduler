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
  
$('#submit').click(function(e) {
    e.preventDefault()
    let dateVal = $('#start-date').val()
    let monthlyRate = $('#monthly-rate').val()
    let employeeName = $('#employee-name').val()
    let roleVal = $('#role').val()
    let monthsWorked = $('#months-worked').val()
    database.ref().push({
        employeeName: employeeName,
        monthlyRate: monthlyRate,
        roleVal: roleVal,
        dateVal: dateVal,
    })
    dateVal = $('#start-date').val('')
    monthlyRate = $('#monthly-rate').val('')
    employeeName = $('#employee-name').val('')
    roleVal = $('#role').val('')
    monthsWorked = $('#months-worked').val('')
})
//Each time a new
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
//     nameTd.text(snapshot.val().employeeName);
//     roleTd.text(snapshot.val().roleVal);
//     startDateTd.text(snapshot.val().dateVal);
//     monthsWorkedTd.text(snapshot.val().monthsWorked);
//     monthlyRateTd.text(snapshot.val().monthlyRate);
//     // totallBilledTd.text(snapshot.val().totalBilled);
//     $(r).append(nameTd, roleTd, startDateTd, monthsWorkedTd, monthlyRateTd)
//     $('tbody').append(r)
// })