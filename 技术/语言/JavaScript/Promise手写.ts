namespace Promise {
  export class Promise {
    // 状态
    private status: 'pending' | 'fulfilled' | 'rejected';
    // 值
    private value: any;
    // 回调
    private callbacks: Array<{
      onFulfilled: (value: any) => void;
      onRejected: (reason: any) => void;
    }>;
    constructor(executor: (resolve: (value: any) => void, reject: (reason: any) => void) => void) {
      // 初始化状态
      this.status = 'pending';
      // 初始化值
      this.value = undefined;
      // 初始化回调
      this.callbacks = [];
      // 定义resolve
      const resolve = (value: any) => {
        // 如果状态不是pending，直接返回
        if (this.status !== 'pending') {
          return;
        }
        // 将状态改为fulfilled
        this.status = 'fulfilled';
        // 保存值
        this.value = value;
        // 如果有待执行的回调函数，立即异步执行回调函数onFulfilled
        if (this.callbacks.length > 0) {
          setTimeout(() => {
            this.callbacks.forEach(callback => {
              callback.onFulfilled(value);
            });
          });
        }
      };
      // 定义reject
      const reject = (reason: any) => {
        // 如果状态不是pending，直接返回
        if (this.status !== 'pending') {
          return;
        }
        // 将状态改为rejected
        this.status = 'rejected';
        // 保存值
        this.value = reason;
        // 如果有待执行的回调函数，立即异步执行回调函数onRejected
        if (this.callbacks.length > 0) {
          setTimeout(() => {
            this.callbacks.forEach(callback => {
              callback.onRejected(reason);
            });
          });
        }
      };
      // 立即同步执行executor
      try {
        executor(resolve, reject);
      } catch (error) {
        // 如果执行器抛出异常，promise对象变为rejected状态
        reject(error);
      }
    }
    // then方法
    then(onFulfilled?: (value: any) => any, onRejected?: (reason: any) => any) {
      // 指定
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value: any) => value;
      // 指定默认的失败的回调
      onRejected = typeof onRejected === 'function' ? onRejected : (reason: any) => { throw reason };
      // 返回一个新的promise对象
      return new Promise((resolve, reject) => {
        // 调用指定的回调函数处理，根据执行结果，改变return的promise的状态
        const handle = (callback: (value: any) => any) => {
          try {
            const result = callback(this.value);
            if (result instanceof Promise) {
              // 3. 如果回调函数返回的是promise，return的promise的结果就是这个promise的结果
              result.then(
                value => resolve(value),
                reason => reject(reason)
              );
            } else {
              // 2. 如果回调函数返回的不是promise，return的promise就会成功，value就是返回的值
              resolve(result);
            }
          } catch (error) {
            // 1. 如果抛出异常，return的promise就会失败，reason就是error
            reject(error);
          }
        };
        if (this.status === 'pending') {
          // 当前状态还是pending状态，将回调函数保存起来
          this.callbacks.push({
            onFulfilled: () => handle(onFulfilled),
            onRejected: () => handle(onRejected)
          });
        }
        if (this.status === 'fulfilled') {
          // 如果当前是fulfilled状态，异步执行onFulfilled并改变return的promise的状态
          setTimeout(() => {
            handle(onFulfilled);
          });
        }
        if (this.status === 'rejected') {
          // 如果当前是rejected状态，异步执行onRejected并改变return的promise的状态
          setTimeout(() => {
            handle(onRejected);
          });
        }
      });
    }
