var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {key: value} )
}

console.log(updateObjectWithKeyAndValue(recipes, 'test', 2))