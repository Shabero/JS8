// const arr = [1,2,3,4,5]
// const handleFilter = (arg) => {
//     return arg.reduce((acc,el) => acc += el, 0)
// }
//
// console.log(handleFilter(arr))

// const names = ['John', 'Nikolas', 'Evdokim', 'Aidin']
// const  handleFunction = (arg) => {
//     return arg.reduce(( acc,el,idx ) => {
//         return [...acc,{name: el,id: idx+1 }]
//     },[])
// }
//
// console.log(handleFunction(names))

function likes(names) {
    if (names.length < 1 ) {
        return 'no one likes this'
    } else if (names.length < 3 ) {
        return  `${names[0]} and ${names[1]} like this`
    } else if (names.length < 5) {
        return `${names[0]} and ${names[1]} and ${names[2]} like this`
    }
    return names
    // } else if (names.length < 7) {
    //      return `${names[0]} , ${names[1]} , ${names[2]} and ${names[3]} like this`
    // }
}

console.log(likes([])) // no one likes this
console.log(likes(['Jacob','Alex']))  //Jacob and Alex like this
console.log(likes('Peter', 'BEka', 'Shabdan')) // Jacob,Alex and Shabdan like this
console.log(likes('Maksat', 'FEra', 'Shaba', 'Farukh')) // Jacob, Alex, Shabdan and Farukh like this