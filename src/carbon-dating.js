const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(n) {
    let nu = Number(n)
    let result
    if (nu === NaN || nu <= 0 || n >= 15 || n === undefined || n === true || n === false || typeof n == 'object'||typeof n == 'number'){
      return false
    } else {
      result = Math.log(15/nu)
      result = Math.ceil(result/(0.693/5730))
    }
    if (result < 0 || !result){
      return false
    }
    
    return result

}

module.exports = {
  dateSample
};
