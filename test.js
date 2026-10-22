const waifu1 = "Ellen Joe";
const waifu2 = "Hoshimachi Suisei";
const waifu3 = "Yoimiya Nagohara";
const waifu4 = "Vestia Zeta";
const waifu5 = "Fubuki Shirakami";

const min = 1;
const max = 6;


for (let i = 0; i < 100; i++){
const randW = Math.ceil(Math.random() * (max - min - 1) + min);

let result;

if(randW === 1){
result = waifu1;
} else if (randW === 2){
result = waifu2;
}else if (randW === 3){
result = waifu3;
}else if (randW === 4){
result = waifu4;
}else if (randW === 5){
result = waifu5;
}
console.log(result);
}
