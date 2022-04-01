import axios from 'axios';

export async function post({ request }) {
  let body = await request.json()
  try {
    let response = await axios.post('http://localhost:3000/api/commands', {
    "aggregateName": "Users",
    "type": "modifyPassword",
    "aggregateId": body.id,
    "payload": {
      "passwordStats": body.passwordStats,
      "password": body.password,
      "modificationDate": `${body.name} modified ${body.gender} Password on: ${Date()}`
    }
  });
  return {
    status: 200,
    body:response.data
  }
}
catch(err){
  return {
    body: err 
  }
}
   
};