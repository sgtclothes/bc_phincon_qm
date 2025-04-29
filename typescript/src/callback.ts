type Callback = (number: number) => void;

function add(a: number, b: number, callback: Callback) {
    const result = a + b;
    callback(result);
}

add(100, 200, (result) => {
    console.log(result);
});
