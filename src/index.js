module.exports = function reverse (n) {
    rez = n.toString()
    if (rez[0]==='-'){
      rez = rez.slice(1,rez.length)
    }
    console.log(rez)
    arr = rez.split('')
    arr = arr.reverse()
    rez1 = arr.join('')
    rez1 = Number(rez1)
    return(rez1)
}
