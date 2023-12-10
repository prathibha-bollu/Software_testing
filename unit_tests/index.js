import { expect } from 'chai';
import add from '../components/add.js';
import isDate from '../components/isDate.js';
import isEmpty from '../components/isEmpty.js';
import toInteger from '../components/toInteger.js';
import toNumber from '../components/toNumber.js';
import toString from '../components/toString.js';
import toFinite from '../components/toFinite.js'
import eq from '../components/eq.js'
import filter from '../components/filter.js'
import countBy from '../components/countBy.js'

describe('Add', () => {
  it('must return sum of two numbers', () => {
    expect(10).to.be.deep.equal(add(4, 6));
  });

  it('must return sum of one positive and one negative number', () => {
    expect(0).to.be.deep.equal(add(-6, 6));
  });

  it('must return sum of two negative numbers', () => {
    expect(-44.4).to.be.deep.equal(add(-22.2, -22.2));
  });

  it('must return sum of undefined and positive numbers', () => {
    expect(1).to.be.deep.equal(add(undefined, 1));
  });

  it('must return sum of null and positive numbers', () => {
    expect(1).to.be.deep.equal(add(null, 1));
  });
});
describe('isEmpty', () => {
    it('must return true if null', () => {
      expect(true).to.be.equal(isEmpty(null));
    });

    it('must return true if value is number', () => {
      expect(true).to.be.equal(isEmpty(7));
    });

    it('must return false if not null', () => {
      expect(false).to.be.equal(isEmpty('abc'));
    });

    it('must return false if value is object', () => {
      expect(false).to.be.equal(isEmpty({'key': 12}));
    });

    it('must return false if value is an array', () => {
      expect(false).to.be.equal(isEmpty([1,2,3]));
    });

    it('must return true if value is boolean', () => {
      expect(true).to.be.equal(isEmpty(true));
    });

});

describe('countBy', () => {
  describe('Check if empty for null', function () {
    it('must return true if null', () => {
      expect(true).to.be.equal(isEmpty(null));
    });
  });
  describe('Check results when counting using active-value as iteratee', function () {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    it('true must return 2', () => {
      const result = countBy(users, value => value.active);
      expect(result).to.have.property('true').which.equals(2);
    });
    it('false must return 1', () => {
      const result = countBy(users, value => value.active);
      expect(result).to.have.property('false').which.equals(1);
    });
  });
});

describe('isDate', () => {
  describe('Check Date', function () {
    it('must return true if date object', () => {
      expect(true).to.be.equal(isDate(new Date()));
    });
  });

  describe('Check Invalid Date', function () {
    it('must return false if not date object', () => {
      expect(false).to.be.equal(isDate('Mon June 23 2022'));
    });
  });
});

describe('toInteger', () => {
  describe('Convert to integer', function () {
    it('must return integer', () => {
      expect(0).to.be.deep.equal(toInteger(0.3));
    });
  });
  describe('Convert to integer', function () {
    it('must return integer', () => {
      expect(2).to.be.deep.equal(toInteger('2.4'));
    });
  });
  describe('Convert to integer', function () {
    it('must return integer', () => {
      expect(4).to.be.deep.equal(toInteger(4.2));
    });
  });
  describe('Convert to integer', function () {
    it('must return integer', () => {
      expect(4).to.be.deep.equal(toInteger(4.7));
    });
  });
  describe('Convert to integer', function () {
    it('must return integer', () => {
      expect(0).to.be.deep.equal(toInteger(false));
    });
  });
  describe('Convert to integer', function () {
    it('must return integer', () => {
      expect(0).to.be.deep.equal(toInteger(null));
    });
  });
});

describe('toString', () => {
  describe('Convert to string', function () {
    it('must return string', () => {
      expect('3').to.be.deep.equal(toString(3));
    });
  });
  describe('Convert to string', function () {
    it('must return string', () => {
      expect('4.2').to.be.deep.equal(toString(4.2));
    });
  });
  describe('Convert to string', function () {
    it('must return string', () => {
      expect('null').to.be.deep.equal(toString(null));
    });
  });
  describe('Convert to string', function () {
    it('must return string', () => {
      expect('2.4').to.be.deep.equal(toString('2.4'));
    });
  });
  describe('Convert to string', function () {
    it('must return string', () => {
      expect('false').to.be.deep.equal(toString(false));
    });
  });
});


describe('toNumber', () => {
  describe('Convert to number', function () {
    it('must return number', () => {
      expect(1).to.be.deep.equal(toNumber(1));
    });
  });
  describe('Convert to number', function () {
    it('must return number', () => {
      expect(4.1).to.be.deep.equal(toNumber('4.1'));
    });
  });
  describe('Convert to number', function () {
    it('must return number', () => {
      expect(1).to.be.deep.equal(toNumber(true));
    });
  });
  describe('Convert to number', function () {
    it('must return number', () => {
      expect(3.2).to.be.deep.equal(toNumber(3.2));
    });
  });
  describe('Convert to number', function () {
    it('must return number', () => {
      expect(0).to.be.deep.equal(toNumber(0));
    });
  });
  describe('Convert to number', function () {
    it('must return number', () => {
      expect(NaN).to.be.deep.equal(toNumber(undefined));
    });
  });
});

describe('toFinite', () => { 
  describe('Convert to finite number', function () { 
    it('must return finite number', () => { 
      expect(0).to.be.deep.equal(toFinite(0)); 
    }); 
  }); 
  describe('Convert to finite number', function () { 
    it('must return finite number', () => { 
      expect(5.2).to.be.deep.equal(toFinite(5.2)); 
    }); 
  }); 
  describe('Convert to finite number', function () { 
    it('must return finite number', () => { 
      expect(1).to.be.deep.equal(toFinite(true)); 
    }); 
  }); 
  describe('Convert to finite number', function () { 
    it('must return finite number', () => { 
      expect(0).to.be.deep.equal(toFinite(undefined)); 
    }); 
  }); 
  describe('Convert to finite number', function () { 
    it('must return finite number', () => { 
      expect(2.4).to.be.deep.equal(toFinite('2.4')); 
    }); 
  }); 
}); 
 
describe('eq', () => {
  describe('Checks eq with object comparison', function () { 
    it('must return false', () => { 
      expect(false).to.be.deep.equal(eq({'a': 1}, {'a': 1})); 
    }); 
  });
  describe('Checks eq with object comparison', function () { 
    it('must return true', () => {
      const obj = {'a': 1};
      expect(true).to.be.deep.equal(eq(obj, obj)); 
    }); 
  });
  describe('Checks if both values are equal', function () { 
    it('must return true', () => { 
      expect(true).to.be.deep.equal(eq(5, 5)); 
    }); 
  }); 
  describe('Checks if both values are equal', function () { 
    it('must return false', () => { 
      expect(false).to.be.deep.equal(eq(3.1, 3)); 
    }); 
  }); 
   
  describe('Checks if both values are equal', function () { 
    it('must return true', () => { 
      expect(true).to.be.deep.equal(eq(4, '4')); 
    }); 
  }); 
  describe('Checks if both values are equal', function () { 
    it('must return false', () => { 
      expect(false).to.be.deep.equal(eq(1, null)); 
    }); 
  }); 
  describe('Checks if both values are equal', function () { 
    it('must return false', () => { 
      expect(false).to.be.deep.equal(eq(null, NaN)); 
    }); 
  }); 
  describe('Checks if both values are equal', function () { 
    it('must return false', () => { 
      expect(false).to.be.deep.equal(eq(undefined, 2)); 
    }); 
  }); 
  describe('Checks if both values are equal', function () { 
    it('must return false', () => { 
      expect(false).to.be.deep.equal(eq(-6, 6)); 
    }); 
  }); 
 
  describe('Checks if both values are equal', function () { 
    it('must return true', () => { 
      expect(true).to.be.deep.equal(eq(undefined, undefined)); 
    }); 
  }); 
}); 

describe('filter', () => {
  describe('Checks filter', function () {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ]
    it('Should return 2 objects', () => {
      const result = filter(users, ({ active }) => active);
      expect(2).to.be.equal(result.length);
    });
  });

});