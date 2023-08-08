import { data, filterCards, allArcans, minors, majors, sortCards, cardsHTML, arrayMinors, arrayMajors, sortOrder, sorted, reversed } from '../src/data.js';


describe(filterCards, () => {
  it('is an object', () => {
    expect(typeof filterCards).toBe('object');
  });
});


describe(allArcans, () => {
  it('is a function', () => {
    expect(typeof allArcans).toBe('function');
  });

  it('returns `cardsHTML`', () => {
    expect((allArcans(data))).toBe(cardsHTML);
  });

  it('returns `array`', () => {
    expect(typeof cardsHTML).toBe('array');
  });
});

describe(minors, () => {
  it('is a function', () => {
    expect(typeof minors).toBe('function');
  });

  it('returns `array`', () => {
    expect((minors(data))).toBe(arrayMinors);
  });

  it('returns `array`', () => {
    expect(typeof arrayMinors).toBe('array');
  });  
});

describe(majors, () => {
  it('is a function', () => {
    expect(typeof majors).toBe('function');
  });

  it('returns `array`', () => {
    expect(majors(data)).toBe(arrayMajors);
  });

  it('returns an array', () => {
    expect(typeof cardsHTML).toBe('array');
  });
});

describe(sortCards, () => {
  it('is a function', () => {
    expect(typeof sortCards).toBe('function');
  });

  it('returns `array`', () => {
    expect(sortCards(sortOrder)).toBe(sorted);
  });

  it('returns `array`', () => {
    expect(sortCards(!sortOrder)).toBe(reversed);
  });
});

/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
