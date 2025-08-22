// class Engine {
//   //Đối với ts phải khai báo thuộc tính trước rồi mới rán sau
//   engineName: string
//   constructor(engineName: string) {
//     this.engineName = engineName
//   }

//   startEngine() {
//     console.log(`Engine ${this.engineName} is starting...`)
//   }
// }

// const engine = new Engine('V11')
// engine.startEngine()

//***Bun và Deno nó tối ưu hơn trong việc code ts
//đối với nodejs cần phải cài thêm trình biên dịch các kiểu
//***tsx thì nó sẽ vẫn chạy khi sai syntax và đưa lỗi cho eslint hiển thị
//***ts-node sẽ check kiểu dữ liệu nhưng chậm hơn cả khía cạnh code và khía cạnh build

//***Class trong ts thì có hỗ trợ modifier: public, private, protected, readonly
//thứ mà js không hỗ trợ
//readonly: nghĩa là truy cập được nhưng không gán được

interface IEngine {
  engineName: string
  startEngine(): void
}

const engine2: IEngine = {
  engineName: 'V8',
  startEngine() {
    console.log(`Engine ${this.engineName} is starting...`)
  }
}

abstract class Engine {
  constructor(public readonly engineName: string) {}

  abstract startEngine(): void

  abstract stopEngine(): void
}

class Car extends Engine {
  startEngine(): void {
    console.log(`Engine ${this.engineName} is starting...`)
  }
  stopEngine(): void {
    console.log(`Engine ${this.engineName} is stopping...`)
  }
}

// const engine = new Engine('V12')
// engine.startEngine()

const car = new Car('V12')

//Ôn tập HOF
//Đề bài: xây dựng một hệ thống log mà khi log sẽ đính kèm thời điểm log
// const logWithTime = (message: string) => {
//   const now = new Date().toISOString()
//   console.log(`${now}: ${message}`)
// }

// const warnWithTime = (message: string) => {
//   const now = new Date().toISOString()
//   console.warn(`${now}: ${message}`)
// }
// logWithTime('Hello world')
// warnWithTime('Warning!')

//HOF
const createLogWithTime = (logFn: (message: string) => void) => (message: string) => {
  const now = new Date().toISOString()
  logFn(`${now}: ${message}`)
}

// const logWithTime = createLogWithTime(console.log)
// const warnWithTime = createLogWithTime(console.warn)
// const errorWithTime = createLogWithTime(console.error)

// logWithTime('Hello world')
// warnWithTime('Warning 2!')
// errorWithTime('Error 3!')

//HOF: được dùng trong lập trình hàm giúp tăng tính tái sử dụng code
//giảm trùng lập và dễ dàng testing

//Dependency Injection: là một design pattern trong lập trình hướng đối tượng

class TimeLogger {
  //logFn: được gọi là dependency
  constructor(private logFn: (message: string) => void) {}

  log(message: string) {
    const now = new Date().toISOString()
    this.logFn(`${now}: ${message}`)
  }
}
//Chúng ta inject console.log vào TimeLogger
// const logWithTime = new TimeLogger(console.log)
// const warnWithTime = new TimeLogger(console.warn)
// const errorWithTime = new TimeLogger(console.error)

// logWithTime.log('Hello world')
// warnWithTime.log('Warning 2!')
// errorWithTime.log('Error 3!')

//TypeScript Decorator

//function tính tổng từ 1 đến n
function sumToN(n) {
  console.log('hello')
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}

const n = 10
// console.log(`Tổng từ 1 đến ${n} là ${sumToN(n)}`)

// Khai báo decorator
function cachingDecorator(func) {
  let cache = new Map()
  return function (n) {
    if (cache.has(n)) {
      return cache.get(n)
    }
    let result = func(n)
    cache.set(n, result)
    return result
  }
}

const sumToNWithCache = cachingDecorator(sumToN)

// sumToN(n)
// sumToN(n)
// sumToNWithCache(n)
// sumToNWithCache(n)

// Decorator TypeScript
// Khai báo decorator logger
function Logger(value: any) {
  console.log('value', value)
  return function (target: any) {
    console.log('target', target)
  }
}

@Logger('Hello')
class Person {
  constructor(
    public name: string,
    public age: number
  ) {}
}

@Logger('hi')
class Car {
  constructor(
    public name: string,
    public engine: string
  ) {}
}

/**
 * Decorator là một hàm đặc biệt được dùng để thêm hoặc
 * thay đổi hành vi của một class, method, property, hoặc parameter mà không cần sửa trực tiếp code gốc.
 *
 * Hiểu đơn giản: nó giống như một “annotation” (chú thích) đi kèm class hay method,
 * có thể mở rộng chức năng cho đối tượng đó.
 */
