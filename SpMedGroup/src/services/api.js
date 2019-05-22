    
export const api = (endpoint) =>{
    const baseURL = 'http://192.168.3.96:5001/api/'
    return {
        Listar(){
            return fetch(baseURL + endpoint,
                {
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json'
                    }
                }
            )
        },
        Listar(token){
            return fetch(baseURL + endpoint,
                {
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json',
                        "Authorization": "Bearer " + token
                    }
                }
            )
        },
        Post(corpo){
            return fetch(baseURL + endpoint,
                {
                    method:'POST',
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify(corpo)
                }
            )
        }
    }
}