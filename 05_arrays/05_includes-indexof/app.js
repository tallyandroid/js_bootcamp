let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter'
]

ingredients.includes('fish')
ingredients.includes('shrimp')
ingredients.includes('chicken')
ingredients.includes('water')

if (ingredients.includes('flour')) {
    console.log("I AM GLUTEN FREE, I CANNOT EAT THAT")
}

ingredients.indexOf('eel')