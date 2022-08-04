const timer = function (times) {
  for (let time of times) {
    const num = Number(time)
    if (time < 0) continue;
    if (isNaN(time)) continue;
    setTimeout(() => {
      console.log("BEEP at " + num + " seconds")
      process.stdout.write('\x07');
    }, num * 1000)
  }
}
const times = process.argv.slice(2)
timer(times)