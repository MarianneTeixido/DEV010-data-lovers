// estas funciones son de ejemplo

export const anotherExample = () => {
  return 'OMG';
};

export const sortCards = (data, sortOrder) => {
//data = data.cards; //Obj
//sortOrder = sortName.checked; //Boolean
//console.log(sortOrder);
if(sortOrder){
  const sorted = data.cards.sort(function (a, b) {
    if (a.name > b.name) {
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  for (let i=0; i < data.cards.length; i++) {
    document.querySelectorAll('[data-testid = "img"]')[i].src = sorted[i].img;
    document.querySelectorAll('[data-testid = "type"]')[i].textContent = "Type: " + sorted[i].type
    document.querySelectorAll('[data-testid = "short-name"]')[i].textContent = "Short name: " + sorted[i].name_short
    document.querySelectorAll('[data-testid = "name"]')[i].textContent = "Name: " + sorted[i].name
    document.querySelectorAll('[data-testid = "value"]')[i].textContent = "Value: " + sorted[i].value
    document.querySelectorAll('[data-testid = "meaning-up"]')[i].textContent = "Meaning up: " + sorted[i].meaning_up
    document.querySelectorAll('[data-testid = "meaning-rev"]')[i].textContent = "Meaning rev: " + sorted[i].meaning_rev

  } 
  //console.log(data.cards);
}
if(!sortOrder){
  const reversed = data.cards.reverse(function (a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  for (let i=0; i < data.cards.length; i++) {
    document.querySelectorAll('[data-testid = "img"]')[i].src = reversed[i].img
    document.querySelectorAll('[data-testid = "type"]')[i].textContent = "Type: " + reversed[i].type
    document.querySelectorAll('[data-testid = "short-name"]')[i].textContent = "Short name: " + reversed[i].name_short
    document.querySelectorAll('[data-testid = "name"]')[i].textContent = "Name: " + reversed[i].name
    document.querySelectorAll('[data-testid = "value"]')[i].textContent = "Value: " + reversed[i].value
    document.querySelectorAll('[data-testid = "meaning-up"]')[i].textContent = "Meaning up: " + reversed[i].meaning_up
    document.querySelectorAll('[data-testid = "meaning-rev"]')[i].textContent = "Meaning rev: " + reversed[i].meaning_rev
  } 
 }
}

