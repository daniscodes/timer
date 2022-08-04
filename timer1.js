const timer = function (times) {

  if (!times.length) return;
 
    for (let time of times){
      const num = Number(time)
      setTimeout(() => {
        console.log("BEEP at " + num + " seconds")
        process.stdout.write('\x07');
      }, num * 1000)
    }
  }
 
  const times = process.argv.slice(2)
  timer(times)