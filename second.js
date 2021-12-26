let first = [1,32,41,45 ];
let sec = [32,41,4,1];

let result=0;
function distinct(first,sec){
    for (let i = 0; i < first.length; i++) {
            let number =first[i];
        if (!sec.includes(number)){
            result+=number
    }   
}
    for (let i = 0; i < sec.length; i++) {
            let number = sec [i];
        if (!first.includes(number)) {
            result+=number;
    }
    
}
return result;
}

console.log(distinct(first,sec));


let similaire=0
for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < sec.length; j++) {
        if (first[i]==sec[j]) {
            similaire+=first[i]
        }
        
    }
    
}
console.log(similaire);