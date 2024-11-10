

function cube(n) {
    return n * n * n
}

function square(n) {
    return n * n
}

function sumofSquare(a,b) {
    let sq1 = cube(a)
    let sq2 = cube(b)
    return sq1 + sq2
}

function sumofCubes(a, b , c) {
    let cube1 = cube(a)
    let cube2 = cube(b)
    let cube3 = cube(c)

    return cube1 + cube2 + cube3
}

console.log(sumofCubes(2,2,3))


// callbacks

function SumofPowers(a,b , fn) {
    let sq1 = fn(a)
    let sq2 = fn(b)

    return sq1 + sq2
}

console.log(SumofPowers(2,3,square))
console.log(SumofPowers(2,3,cube))
