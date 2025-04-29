setInterval((): void => {
    let d = new Date();
    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds());
}, 1000);
