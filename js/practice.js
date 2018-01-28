let points = [60,60,61,60,60,60];

function judgement(points){

function get_achievement(points){

    let length = points.length;
    let max = 100*length;
    let sum = 0;

    for(let i=0; i < length; i++){
        sum += points[i];
    }

    if(sum >= max*0.8){
        return 'A';
    }else if(sum >= max*0.6){
        return 'B';
    }else if (sum >= max*0.4) {
        return 'C';
    }else {
        return 'D';
    }
};

function get_pass_or_failure(points){
    let length = points.length;
    let judge = '合格';
    for(let i=0; i < length; i++){
        if(points[i] < 60){
            judge = '不合格';
            break;
        }
    }
    return judge;
};

let achievement = get_achievement(points)
let pass_or_failure = get_pass_or_failure(points)

return `あなたの成績は${achievement}です。${pass_or_failure}です！`;

}

console.log(judgement(points));
