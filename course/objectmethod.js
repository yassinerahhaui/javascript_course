// this function for write data
function print(x) {
    document.write(x + "<br>");
}

function personInfo(id,name,age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.showMsgName = showMsg;
    this.show = showMsgWithParam;

    this.changePersonAge = function(param){
        this.age = param;
    }
    this.changePersonName = function(param){
        this.name = param;
    }
    this.changePersonId = function(param){
        this.id = param;
    }
    function showMsg() {
        print("this is msg name: "+ name);
    }
    
    function showMsgWithParam(id,name,age) {
        print(id+" "+name+" "+age);
    }
}

myPerson1 = new personInfo(1,"yassine",28);
myPerson2 = new personInfo(2,"nisrine",20);
myPerson3 = new personInfo(3,"sabrine",8);
print(myPerson1.age)
print(myPerson1.name)
print(myPerson1.id)

myPerson1.changePersonAge(29);
print(myPerson1.age)
myPerson1.changePersonName("ayoub");
myPerson1.changePersonId(4);
print(myPerson1.name)
print(myPerson1.id)
print("--------------")

myPerson1.showMsgName();
myPerson2.showMsgName();
myPerson3.showMsgName();
print('-------------')

myPerson1.show(12,"rahhaoui",70);
