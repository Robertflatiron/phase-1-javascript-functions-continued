// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun();

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
mondayWork();

function wrapAdjective(part1 = "*") {
    return function(abc = "special") {
        return `You are ${part1}${abc}${part1}!`
    }
}