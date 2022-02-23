import axios from 'axios';

export async function post({ request }) {
  let body = await request.json()
  try {
    let response = await axios.post('http://localhost:3000/api/commands', {
    "aggregateName": "Users",
    "type": "changeName",
    "aggregateId": body.id,
    "payload": {
      "name": body.name,
      "modificationDate": `${body.name} modified their name on: ${Date()}`
    }
  });
  return {
    status: 200,
    body:response.data
  }
}
catch(err){
  if (err) {
    response.status(500).send(err)
  }
  return {
    body: err 
  }
}
   
};