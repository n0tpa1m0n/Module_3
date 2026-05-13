function promiseHelloWorld() {
  return Promise.resolve('Hello World!');
}

//or
const promiseHelloWorld = () => Promise.resolve('Hello World!')

//or
function promiseHelloWorld(){
  return new Promise((resolve)=>{
     resolve('Hello World!')
  });
}
