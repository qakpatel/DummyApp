import axios from 'axios';

const Service = {
     get:(endPath)=>{
        return new Promise((resolve,reject)=>{
           axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
             resolve(res.data);
           }).catch(err=>{
             reject(err)
           })
          }) 
        }, 
     post:(endPath,data)=>{
       return axios.post('https://jsonplaceholder.typicode.com/users')
     }
}

export default Service;