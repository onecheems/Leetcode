const fn = function () {
    console.log(1)
    const result = function () {
        console.log(2)
        return 1
    }
    return result()
}

// console.log(fn())
// fn()
// fn
const obj = {
    sing() {
        console.log(123)
    },
    fn
}
// obj.sing()
// obj.fn()
console.log(obj.fn())