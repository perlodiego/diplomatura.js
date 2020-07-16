import Fetch from 'node-fetch';
const SOURCE_URL='https://jsonplaceholder.typicode.com/';

export const Helpers={
    fetch: async (...url)=>{
        const _slash='/';
        
        let info;
        try {
            info = await Fetch(SOURCE_URL+url.join(_slash)+_slash);
        } catch(err){
            console.log(err);
            return err;
        }
        return await info.json();
    }
}