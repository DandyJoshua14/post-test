import axios from 'axios';

export async function post({ request }) {
  // console.log(event, 'event log')
  let body = await request.json()
  try {
    let response = await axios.post('http://localhost:3000/api/commands', {
    "aggregateName": "Users",
    "type": "modifyEmail",
    "aggregateId": body.id,
    "emailStats": body.emailStats,
    "payload": {
      "email": body.email,
      "modificationDate": `${body.name} modified ${body.gender} email on: ${Date()}`
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