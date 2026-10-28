let count = 0;

const terminal = require('node:readline');
const read = terminal.createInterface({
    input:  process.stdin,
    output: process.stdout
});

/*function cardCounter(card){
  if(card >= 2 && card <= 6 ){
    count++;
  } else if(card == 7 || card == 8 || card == 9){
    count;
  } else{
    count--;
  }

  if(card <= 0){
    return `${count} Hold`;
  } else{
    return `${count} Bet`;
  }
}*/

function cardCounter(card) {
  if ( card >= 2 && card <= 6 ){
    card + count++;
  } else if ( card === 7 || card === 8 || card === 9){
    card + count;
  } else{
    card + count--;
  }

  if(count > 0){
    return `${count} Bet`;
  } else{
    return `${count} Hold`;
  }
}

read.question('Please enter card here: ', (card) => {
    console.log(`Your card : ${cardCounter(card)}`);

})