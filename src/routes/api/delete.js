import axios from 'axios';

export async function post({ request }) {
  let body = await request.json()
  try {
    let response = await axios.post('http://localhost:3000/api/commands', {
    "aggregateName": "Users",
    "type": "delete",
    "aggregateId": body.id,
    "payload": {
      "email": body.email,
      "modificationDate": `${body.name} modified their email on: ${Date()}`,
      "reason": `${body.reason}`
    }
  });
  return {
    status: 200,
    body:response.data,
  }
}
catch(err){
  return {
    body: err 
  }
}
   
};