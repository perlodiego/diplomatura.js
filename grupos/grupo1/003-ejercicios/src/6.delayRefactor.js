export const delay=(time)=>{
    setTimeout(async () =>  {
        try {
            await run(time,`Termino ${time}`)   
        } catch (error) {
            console.log(error)
        }
    }, time*1000);
}
export async function run(time,value){
    console.log(time)
    console.log(value)
}