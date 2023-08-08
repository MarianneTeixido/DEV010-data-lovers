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
    return sorted;
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
    return reversed
  }
}




export const luck = (data, userName,userDay,userMonth,userYear) => {


  let shortLuckyNumber = 0;
  let asciiName = 0;
  userName = userName.split('');
  for (let i = 0 ; i < userName.length ; i++) {
    userName[i] = userName[i].charCodeAt() //sustituir cada miembro del array por su propio valor ASCII
    asciiName += parseInt(userName[i]);
  }  

  const luckyNumber = parseInt(userDay) + parseInt(userMonth) + parseInt(userYear) + asciiName;
  const strLuckyNumber = luckyNumber.toString();
  let arrLuckyNumber = strLuckyNumber.split('');
  shortLuckyNumber = 79; //la inicializo en 79 para que el bucle inicie
  while (shortLuckyNumber > 78) {
    for (let i = 0; i < arrLuckyNumber.length; i++) {
      shortLuckyNumber = 0; //se inicializa en 0 con el bucle ya iniciado
      arrLuckyNumber[i] = parseInt(arrLuckyNumber[i])
    }
    shortLuckyNumber += arrLuckyNumber.reduce((acc, num) => acc + num, 0)
    arrLuckyNumber = shortLuckyNumber.toString().split('');
  }

  if (shortLuckyNumber < 20) {
    shortLuckyNumber += parseInt(Math.random() * 58);
  }
  
  return shortLuckyNumber;
  //window.location.assign(`/luck?shortLuckyNumber=${shortLuckyNumber}`)
}

