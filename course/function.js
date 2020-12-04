function fname() {
    alert("Yassine Rahhaoui!"); // function
}

fname();

function myAge(age) {
    document.write("my age is: " + age); // function with argument
}

myAge(28);



function myInfo(firstname,lastname,age) {// function with multiple argument 
    document.write("<br>my firstname is: "+ firstname
    + "<br>my lastname is: "+lastname
    + "<br>my age is: "+age)
}

myInfo("yassine","rahhaoui",28);



function sumFunc() { // function with return
    x = 10;
    y = 30;
    z = x + y;
    return "the sum is: " + z;
}

document.write("<br>" + sumFunc());



