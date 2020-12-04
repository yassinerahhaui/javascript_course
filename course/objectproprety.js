// this function for write data
function print(x) {
    document.write(x + "<br>");
}

//instence object
var cat = new Object();
// name is property
cat.name = "minou";
cat.age = 1;
cat.color = "grey";

print(cat.name);
print(cat.age);
print(cat.color);

// constructor object
function myEmployee(id,name,age,departement,salary) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.departement = departement;
    this.salary = salary;
}
var emp = new myEmployee(1,"yassine",28,"programmer",3000);

print(emp.id+" "+emp.name+" "+emp.age+" "+emp.departement+" "+emp.salary);