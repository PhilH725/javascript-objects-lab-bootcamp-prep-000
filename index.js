var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {key: value} )
}

updateObjectWithKeyAndValue(recipes, 'test', 2)