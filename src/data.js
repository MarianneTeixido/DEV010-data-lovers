// estas funciones son de ejemplo

export const filterCards = {

  allArcans: (data) => {
    let cardsHTML = '';
    data.cards.map(() => {
      cardsHTML += '<div class="flip-card">\
      <div class="flip-card-inner">\
        <div class="flip-card-front">\
          <img data-testid="img" width="100%;" height="100%" ></img>\
        </div>\
        <div class="flip-card-back">\
          <ul>\
            <li data-testid="type">Type: </li>\
            <br>\
            <li data-testid="short-name">Short name: </li>\
            <br>\
            <li data-testid="name">Name: </li>\
            <br>\
            <li data-testid="value">Value: </li>\
            <br>\
            <li data-testid="meaning-up">Meaning up: </li>\
            <br>\
            <li data-testid="meaning-rev">Meaning rev: </li>\
            <br>\
            <li data-testid="description"></li>\
          </ul>\
        </div>\
      </div>\
    </div>\
    <br>\
    '
    })
    return cardsHTML;
  },

  minors: (data) => {
    const minorArcans = data.cards.filter(obj => obj.type === "minor"); //bucle para opción 1, genera sólo las cards de arcanos menores
    let cardsHTML = '';
    minorArcans.map(() => {
      cardsHTML += '<div class="flip-card">\
      <div class="flip-card-inner">\
        <div class="flip-card-front">\
          <img data-testid="img" width="100%;" height="100%" ></img>\
        </div>\
        <div class="flip-card-back">\
          <ul>\
            <li data-testid="type">Type: </li>\
            <li data-testid="short-name">Short name: </li>\
            <li data-testid="name">Name: </li>\
            <li data-testid="value">Value: </li>\
            <li data-testid="meaning-up">Meaning up: </li>\
            <li data-testid="meaning-rev">Meaning rev: </li>\
            <li data-testid="description"></li>\
          </ul>\
        </div>\
      </div>\
    </div>\
    <br>\
    '
    })
    const arrayMinors = [minorArcans,cardsHTML]
    return arrayMinors;
  },

  majors: (data) => {
    const majorArcans = data.cards.filter(obj => obj.type === "major"); //bucle para opción 1, genera sólo las cards de arcanos menores
    let cardsHTML = '';
    majorArcans.map(() => {
      cardsHTML += '<div class="flip-card">\
      <div class="flip-card-inner">\
        <div class="flip-card-front">\
          <img data-testid="img" width="100%;" height="100%" ></img>\
        </div>\
        <div class="flip-card-back">\
          <ul>\
            <li data-testid="type">Type: </li>\
            <li data-testid="short-name">Short name: </li>\
            <li data-testid="name">Name: </li>\
            <li data-testid="value">Value: </li>\
            <li data-testid="meaning-up">Meaning up: </li>\
            <li data-testid="meaning-rev">Meaning rev: </li>\
            <li data-testid="description"></li>\
          </ul>\
        </div>\
      </div>\
    </div>\
    <br>\
    '
    })
    const arrayMajors = [majorArcans,cardsHTML]
    return arrayMajors;
  }
}

export const sortCards = (data, sortOrder) => {

  if(sortOrder){
    const sorted = data.cards.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
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

/*
export const luck = (userName) => {
  let asciiName = 0;
  userName = userName.split('');
  for (let i = 0 ; i < userName.length ; i++) {
    userName[i] = userName[i].charCodeAt() //sustituir cada miembro del array por su propio valor ASCII
    asciiName += parseInt(userName[i]);
  }
  return asciiName;
  //console.log(asciiName);

}
*/