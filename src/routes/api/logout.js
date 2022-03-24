import axios from 'axios';

export async function post({ request }) {
  let body = await request.json()
  try {
    let response = await axios.post('http://localhost:3000/api/commands', {
    "aggregateName": "Users",
    "type": "logout",
    "aggregateId": body.id,
    "payload": {
      "name": body.name,
      "logoutDate": `${body.name} logged out of ${body.gender} his account on: ${Date()}`
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