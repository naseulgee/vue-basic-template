/** NOTE: Promise 객체, async-await, try-catch 개념 노트
 * [참고] https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */

function a(num) {
    return new Promise((resolve, reject) => {
        if (num > 4) {
            return reject('Err') // promise 객체가 실패적으로 종료됨을 알려주며, 안의 내용이 반환된다.
        }

        setTimeout(() => {
            console.log("A")
            return resolve() // promise 객체가 성공적으로 종료됨을 알려주며, 안의 내용이 반환된다.
        }, 1000)
    })
}

function b() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("B")
            resolve()
        }, 1000)
    })
}

function c() {
    console.log("C")
}

function test1() { // C -> Uncaugh Error -> B
    a(7)
    b()
    c()
}
test1()

async function test2() { // 'Err' -> B -> C
    try{
        await a(7)
    }catch(e) {
        console.log(e)
    }
    await b()
    c()
}
test2()

function test3() { // 'Err' -> B -> C
    a(7)
        .then(() => b())
        .catch(e => {
            console.log(e)
            return b()
        })
        .then(() => c())
        .catch((e) => console.log(e))
}
test3()