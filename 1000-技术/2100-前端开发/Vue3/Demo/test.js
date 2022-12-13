async function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main(){
  await delay(1000);
  console.log('Hello World!');
}

main();
