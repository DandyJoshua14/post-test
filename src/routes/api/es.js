// import stringHash from 'string-hash';
import axios from 'axios';
import { users, id } from '../stores/store'
// import { v4 as uuid } from 'uuid';
export async function post({ request }) {
  let body = await request.json()
  try {
    let response = await axios.post('http://localhost:3000/api/commands', {
    "aggregateName": "Users",
    "type": "create",
    "aggregateId": body.id,
    "payload": {
      "name": body.name,
      "email": body.email,
      "password": body.password,
      "gender": body.gender,
      "registrationDate": `${body.name} registered on: ${Date()}`
    }
  });
  return {
    status: 200,
    body:response.data
  }
}
catch(err){
  return {
    body: {
      code: 500,
      ok: false,
      error: err.message,
  }
}
  }
 }

 export async function get(){
  let response = await axios.get(`http://localhost:3000/api/query/userStats/getUserByName`)
  console.log(response.data.data)
  return {
    body: response.data.data
  }
}