module.exports.Generate16bit = function(length) {
    let result = ''
    const characters = '0123456789ABCDEF'
    for (let i = 0; i < length; i++) {
      result += characters[Math.floor(Math.random() * 16)]
    }
    return result
  }
  