export async function sleep(ms) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  await sleep(5000);
  console.log('done');
}

main();
