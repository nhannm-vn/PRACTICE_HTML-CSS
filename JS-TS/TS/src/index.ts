class Engine {
  //Đối với ts phải khai báo thuộc tính trước rồi mới rán sau
  engineName: string
  constructor(engineName: string) {
    this.engineName = engineName
  }

  startEngine() {
    console.log(`Engine ${this.engineName} is starting...`)
  }
}

const engine = new Engine('V11')
engine.startEngine()

//***Bun và Deno nó tối ưu hơn trong việc code ts
//đối với nodejs cần phải cài thêm trình biên dịch các kiểu
//***tsx thì nó sẽ vẫn chạy khi sai syntax và đưa lỗi cho eslint hiển thị
//***ts-node sẽ check kiểu dữ liệu nhưng chậm hơn cả khía cạnh code và khía cạnh build
