let container
let birthdateEl = document.getElementById("dob")
birthdateEl.onchange = function(){
    getAge(this.value)
    displayAge(this.value)
 }
function getAge(birthdate){
    var today = new Date();
    var birthDate = new Date(birthdate);
    let age = calcAge(today , birthDate);
    let desc = document.querySelector('.desc')
    desc.innerHTML = `Your Age is : ${age}`

}

function calcAge(today , birthDate){ 
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
         age--;
     }
     return age; 
}

function displayAge(birthdate){
    let today = new Date();
    let birthDate = new Date(birthdate);
    let age = calcAge(today , birthDate);
    let currentMonth = today.getMonth();
    let birthMonth = birthDate.getMonth();
    let currentDate = today.getDay();
    let dobDate = birthDate.getDay();
    //getMonth
    if(currentMonth >= birthMonth){
       var monthAge = currentMonth - birthMonth
    }else{
        var monthAge = 12 + currentMonth - birthMonth
    }
    //getDays
    if(currentDate >= dobDate){
    var dateAge = currentDate - dobDate
    }
    else{
    monthAge--;
    var dateAge = 31 + currentDate - dobDate
    }
    if(monthAge < 0){
        monthAge = 11
        age--
    }
    document.getElementById("years").innerText = age
    document.getElementById("months").innerHTML = monthAge
    document.getElementById("days").innerHTML = dateAge
}
