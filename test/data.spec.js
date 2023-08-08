import { filterCards, sortCards, luck, sortOrder} from '../src/data.js';

const user_name_1 = 'Ignacio Allende'
const day_user_1 = 23
const month_user_1 = 4
const year_user_1 = 1994
const user_name_2 = 'José María Morelos y Pavón'
const day_user_2 = 2
const month_user_2 = 11
const year_user_2 = 2023
const user_name_3 = 'J'
const day_user_3 = 1
const month_user_3 = 1
const year_user_3 = 1921
const data = {"cards" : [
  {
    "type": "major",
    "name_short": "ar01",
    "name": "The Magician",
    "value": 1,
  },
  {
    "type": "major",
    "name_short": "ar02",
    "name": "The High Priestess",
    "value": 2,
  },
  {
    "type": "major",
    "name_short": "ar03",
    "name": "The Empress",
    "value": 3,
  },
  {
    "type": "major",
    "name_short": "ar04",
    "name": "The Emperor",
    "value": 4,
  }]}

describe('filterCards', () => {
  it('is an object', () => {
    expect(typeof filterCards).toBe('object');
  });

  it('must return a string',() => {
    expect(typeof filterCards.allArcans(data)).toBe('string')
  })
});


describe('allArcans', () => {
  it('is a function', () => {
    expect(typeof filterCards.allArcans).toBe('function');
  });
});

describe('minors', () => {
  it('is a function', () => {
    expect(typeof filterCards.minors).toBe('function');
  });

  it('must return an array',() => {
    expect(typeof filterCards.minors(data)).toBe('object')
  })

  // it('returns `array`', () => {
  //   expect(typeof filterCards.minors(data)).toBe('array');
  // });  //Cannot set propierties of undefined (cards) => en data.cards.map(...)
});

describe('majors', () => {
  it('is a function', () => {
    expect(typeof filterCards.majors).toBe('function');
  });

  it('must return an array',() => {
    expect(typeof filterCards.majors(data)).toBe('object')
  })
  // it('returns an array', () => {
  //   expect(typeof filterCards.majors(data)).toBe('array');
  // }); //Cannot set propierties of undefined (cards) => en data.cards.map(...)
});

describe('sortCards', () => {
  it('is a function', () => {
    expect(typeof sortCards).toBe('function');
  });

  it('must return sorted object',() => {
    expect(typeof sortCards(data,sortOrder)).toBe('object')
  })

  it('must return reversed object',() => {
    expect(typeof sortCards(data,!sortOrder)).toBe('object')
  })
  // it('returns `array`', () => {
  //   expect(typeof sortCards(sortOrder)).toBe('array');
  // }); //Cannot set propierties of undefined (cards) => en data.cards.reverse(...)

  // it('returns `array`', () => {
  //   expect(typeof sortCards(!sortOrder)).toBe('array');
  // });
});

describe('luck', () => {
  it ("debería retornar un número menor o igual a 78 para " + user_name_1 + ', ' + day_user_1 + '/' + month_user_1 + '/' + year_user_1, () => {
    expect(luck(user_name_1, day_user_1, month_user_1, year_user_1)).toBeLessThan(78);
  });

  it ("debería retornar un número menor o igual a 78 para " + user_name_2 + ', ' + day_user_2 + '/' + month_user_2 + '/' + year_user_2, () => {
    expect(luck(user_name_2, day_user_2, month_user_2, year_user_2)).toBeLessThan(78);
  });

  it ("debería retornar un número menor o igual a 78 para " + user_name_3 + ', ' + day_user_3 + '/' + month_user_3 + '/' + year_user_3, () => {
    expect(luck(user_name_3, day_user_3, month_user_3, year_user_3)).toBeLessThan(78);
  });

})

/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  }); //Cannot set propierties of undefined (reverse) => en data.cards.reverse(...)

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
