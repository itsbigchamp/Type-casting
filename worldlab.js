// Lab 3
// take a number from 100% to 0% with 100% being an A+
function assignGrade(gradeNumber) {
    let gradeLetter = "F"
    //100-90 A
    //89-80 B
    //79-70 C
    if (gradeNumber >= 90)
    {
        gradeLetter = "A"
    }
    else if (gradeNumber >= 80 && gradeNumber < 90) {
        gradeLetter = "B"
    }
    else if (gradeNumber >= 70 && gradeNumber < 80) {
        gradeLetter = "C"
    }
    return gradeLetter
}
console.log("89 => ",assignGrade(89))
console.log("99 => ",assignGrade(99))
console.log("79 =>",assignGrade(79))