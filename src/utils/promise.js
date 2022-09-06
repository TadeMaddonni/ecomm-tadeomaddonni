

const is_ok = true; 

let getData = (task) => {
    return new Promise((resolve, reject) => {
        if(is_ok){  
            setTimeout(
                () => {
                    resolve(task)
                }
            , 300)
        }else{
            reject("error")
        }
    })
}


export default getData