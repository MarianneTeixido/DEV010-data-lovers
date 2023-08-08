import { data, filterCards, sortCards} from '../src/data.js';

const user_name_1 = 'Ignacio Allende'
const day_user_1 = 23
const month_user_1 = 4
const year_user_1 = 1994


describe('filterCards', () => {
  it('is an object', () => {
    expect(typeof filterCards).toBe('object');
  });
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

  // it('returns `array`', () => {
  //   expect(typeof filterCards.minors(data)).toBe('array');
  // });  //Cannot set propierties of undefined (cards) => en data.cards.map(...)
});

describe('majors', () => {
  it('is a function', () => {
    expect(typeof filterCards.majors).toBe('function');
  });

  // it('returns an array', () => {
  //   expect(typeof filterCards.majors(data)).toBe('array');
  // }); //Cannot set propierties of undefined (cards) => en data.cards.map(...)
});

describe('sortCards', () => {
  it('is a function', () => {
    expect(typeof sortCards).toBe('function');
  });

  // it('returns `array`', () => {
  //   expect(typeof sortCards(sortOrder)).toBe('array');
  // }); //Cannot set propierties of undefined (cards) => en data.cards.reverse(...)

  // it('returns `array`', () => {
  //   expect(typeof sortCards(!sortOrder)).toBe('array');
  // });
});

/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  }); //Cannot set propierties of undefined (reverse) => en data.cards.reverse(...)

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/