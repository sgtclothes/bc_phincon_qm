const myPromise = new Promise((resolve, reject) => {
    //     let success = false;
    //     if (success) {
    //         resolve("Success");
    //     } else {
    //         reject("Failed");
    //     }

    setTimeout(() => {
        resolve("Success");
    }, 5000);
});

console.log(myPromise);

myPromise
    .then((result: unknown) => {
        console.log(result);
        console.log(myPromise);
    })
    .catch((error: unknown) => {
        console.log(error);
    });

// fetch("https://pokeapi.co/api/v2/pokemon/ditt", {
//     method: "GET",
// })
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("ERRORNYA INI", error);
//     });

async function fetchDitto(): Promise<any> {
    try {
        const responseDitto = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        return await responseDitto.json();
    } catch (error) {
        console.log(error);
    }
}
async function fetchPikachu(): Promise<any> {
    try {
        const responsePikachu = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        return await responsePikachu.json();
    } catch (error) {
        console.log(error);
    }
}

(async () => {
    fetchPikachu();
    fetchDitto();
})();
