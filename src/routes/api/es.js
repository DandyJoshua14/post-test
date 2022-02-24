// import stringHash from 'string-hash';
import axios from 'axios';
// import { v4 as uuid } from 'uuid';
export async function get({request}){
  return {
    body: {
      error: err.message
    }
  }
}
export async function post({ request }) {
  let body = await request.json()
  try {
    let response = await axios.post('http://localhost:3000/api/commands', 'localhost:3000/api/query/UserAggregate/all', {
    "aggregateName": "Users",
    "type": "create",
    "aggregateId": body.id,
    "payload": {
      "name": body.name,
      "email": body.email,
      "password": body.password,
      "registrationDate": `User registered on: ${Date()}`
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