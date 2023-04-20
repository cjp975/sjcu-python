/*
function run() {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
  }
  run();
  console.log('Done !!!')
 */

/*
function run() {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
    

  }, 1000);
}


run()
console.log('Done !!!')
*/

/*
function run(consoel) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
    consoel();
  }, 1000);
}

run(() => {
  console.log('Done !!!');
});
*/


/*
function run() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const start = Date.now();
          for (let i = 0; i < 1000000000; i++) {}
          const end = Date.now();
          console.log(end - start + 'ms');
          resolve("성공!!");
      }, 1000);
  });
}


//run().then((a) => {console.log('Done !!!', a);});
run().then(() => {return run()}).then((a) => {console.log('Done !!!', a);});
*/


//resolve는 return 정도만 생각 하면 편하다.
function run() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const start = Date.now();
          for (let i = 0; i < 1000000000; i++) {}
          const end = Date.now();
          console.log(end - start + 'ms');
          resolve("hi!");
      }, 1000);
  });
}

let a=async ()=> {
  await run();
  let text= await run();
  console.log('Done !!!', text);
  console.log(e)
}

a()