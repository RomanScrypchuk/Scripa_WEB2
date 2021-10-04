module.exports.PutStringInto = function (str1, str2, pos) {
    if (pos > str2.length) return 'Incorrect data!'
    let result = ''
    for (let i = 0; i < pos; i++) {
      result += str2[i]
    }
    for (let i = 0; i < str1.length; i++) {
      result += str1[i]
    }
    for (let i = pos; i < str2.length; i++) {
      result += str2[i]
    }
    return result
  }
  