// // MVC设计模式
// // 1.创建模型
// class Model {
//   data: string;
//   constructor() {
//     this.data = "hello world";
//   }
// }
// // 2.创建视图
// class View {
//   el: HTMLElement;
//   constructor() {
//     this.el = document.createElement("div");
//   }
//   render(data: string) {
//     this.el.innerHTML = data;
//   }
// }
// // 3.创建控制器
// class Controller {
//   model: Model;
//   view: View;
//   constructor(model: Model, view: View) {
//     this.model = model;
//     this.view = view;
//   }
//   init() {
//     this.view.render(this.model.data);
//   }
// }

// // 4.创建实例
// const model = new Model();
// const view = new View();
// const controller = new Controller(model, view);
// controller.init();
// document.body.appendChild(view.el);
