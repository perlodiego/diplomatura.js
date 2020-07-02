import fetch from 'node-fetch';
export async function getRemoteData(id) {
    try {
        const resultOne=await fetch('https://jsonplaceholder.typicode.com/users');
        const resultTwo=await resultOne.json()
        const resultThree= {
            name: resultTwo.find((x) => x.id === id).name,
            address: resultTwo.find((x) => x.id === id).address,
        }
        console.log(resultOne,resultTwo,resultThree)
    } catch (error) {
        console.log(error)
    }
}