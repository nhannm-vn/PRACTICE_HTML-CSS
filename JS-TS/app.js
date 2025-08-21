// Class trong JavaScript
// Class giúp tạo ra các object có cùng thuộc tính và
//phương thức. Đồng thời tăng tính tái sử dụng code và dễ
//dàng quản lý code hơn

// Ôn tập:
// Thuộc tính (Property)
// Phương thức (Method)
// Kế thừa (Inheritance)

//ex:
class Engine {
  constructor(engineName) {
    this.engineName = engineName;
  }
}

class Car extends Engine {
  constructor(engineName, brandCar) {
    super(engineName), (this.brandCar = brandCar);
  }

  // Phương thức

  run() {
    console.log(`Car ${this.brandCar} is running...`);
  }
}

// Tạo ra instance từ class Car
const civic = new Car("Vitect 1.5 Turbo", "Honda Civic");
const camry = new Car("V6 3.5", "Toyota Camry");

console.log(civic);
console.log(camry);

// Tạo class máy cắt cỏ
class LawnMower extends Engine {
  //brandLawMower: khai báo đây mà không gán dưới giá trị sẽ là undefined
  constructor(engineName, brandLawMower) {
    super(engineName);
    //Vừa khai báo vừa gán
    this.brandLawMower = brandLawMower;
  }

  cutGrass() {
    console.log(`LawnMower ${this.brandLawMower} is
        cutting grass...`);
  }

  static hello() {
    console.log("hello");
  }
}
//nhờ static mà chúng ta có thể lấy class chấm được
LawnMower.hello();

const hondaLawnMower = new LawnMower("Honda 4-stroke", "Honda 4-stroke ");
