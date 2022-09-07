

const is_ok = true; 

let getData = (task, time) => {
    return new Promise((resolve, reject) => {
        if(is_ok){  
            setTimeout(
                () => {
                    resolve(task)
                }
            , time)
        }else{
            reject("error")
        }
    })
}


export default getData