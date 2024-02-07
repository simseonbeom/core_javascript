const typeOf = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase()

const isObject = data => typeOf(data) === 'object'

