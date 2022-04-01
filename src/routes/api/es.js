// import stringHash from 'string-hash';
import axios from 'axios';
import { users, id } from '../stores/store'
// import { v4 as uuid } from 'uuid';
export async function post({ request }, event) {
  // console.log(event, 'event log')
  let body = await request.json()
  try {
    let response = await axios.post('http://localhost:3000/api/commands', {
    "aggregateName": "Users",
    "type": "create",
    "aggregateId": body.id,
    "payload": {
      "passwordStats": body.passwordStats,
      "emailStats": body.emailStats,
      "nameStats": body.nameStats,
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


export async function get({ url: { searchParams }}){
  console.log(searchParams.get("email"),searchParams.get("password"),'params log')
 let response = await axios.get(`http://localhost:3000/api/query/userStats/getUserByPasswordAndEmail?email=${searchParams.get("email")}&password=${searchParams.get("password")}`)
 console.log(response.data.data)
 return {
   body: response.data.data
 }
}