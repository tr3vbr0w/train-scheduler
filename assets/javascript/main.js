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
var firebaseConfig = {
    apiKey: "AIzaSyBSupGmm6XaufmciwJ1TEnqCC4fQmYfflU",
    authDomain: "employeedatabase-86c88.firebaseapp.com",
    databaseURL: "https://employeedatabase-86c88.firebaseio.com",
    projectId: "employeedatabase-86c88",
    storageBucket: "employeedatabase-86c88.appspot.com",
    messagingSenderId: "656950926794",
    appId: "1:656950926794:web:10f5145248d759b3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database()
//Each time a new
database.ref().on("child_added", function(snapshot) {
    // let totalBilled = monthlyRateVal * monthsWorked;
    // let currentdate = new Date(year, month, day);
    console.log(snapshot.val());
    var r = $('<tr>')
    var nameTd = $('<td>')
    var roleTd = $('<td>')
    var startDateTd = $('<td>')
    var monthsWorkedTd = $('<td>')
    var monthlyRateTd = $('<td>')
        // var totalBilledTd = $('<td>')
    nameTd.text(snapshot.val().employeeName);
    roleTd.text(snapshot.val().roleVal);
    startDateTd.text(snapshot.val().dateVal);
    monthsWorkedTd.text(snapshot.val().monthsWorked);
    monthlyRateTd.text(snapshot.val().monthlyRate);
    // totallBilledTd.text(snapshot.val().totalBilled);
    $(r).append(nameTd, roleTd, startDateTd, monthsWorkedTd, monthlyRateTd)
    $('tbody').append(r)
})