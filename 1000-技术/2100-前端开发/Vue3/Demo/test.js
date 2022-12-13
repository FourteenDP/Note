function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main(){
  await delay(1000);
  console.log('一秒后打印 Hello');
}
