// Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday.
var day = "Thursday"
var result;
switch (day) {
    case "Sunday":
        result = "Sunday"
        break;
    case "Monday":
        result = "Monday";
        break
    case "Tuesday":
        result = "Tuesday";
        break
    case "Wednesday":
        result = "Wednesday";
        break
    case "Thursday":
        result = "Thursday";
        break
    case "Friday":
        result = "Friday";
        break
    case "Saturday":
        result = "Saturday";
        break
    default:
        result = "It Is Not Day";
        break;
}
document.write(result);