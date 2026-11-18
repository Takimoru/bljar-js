const lunches = ["pentol", "salome"];

function addLunchToEnd(lunches, item){
  lunches.push(item);
  const result = (`${item} added to the end of the lunch menu.`);
  return result;
}
 
function addLuncToStart(lunches, item){
  lunches.unshift(item);
  const result = (`${item} added to the end of the lunch menu.`);
  return result;
}

function removeLastLunch(lunches) {
  if (lunches.length === 0) {
    return "No lunches to remove.";
  }

  const removed = lunches.pop();

  return `${removed} removed from the end of the lunch menu.`;
}
console.log(removeLastLunch(lunches));
  