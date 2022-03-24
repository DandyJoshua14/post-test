import axios from 'axios';

export async function post({ request }) {
  // console.log(event, 'event log')
  let body = await request.json()
  try {
    let response = await axios.post('http://localhost:3000/api/commands', {
    "aggregateName": "Users",
    "type": "login",
    "aggregateId": body.id,
    "payload": {
      "name": body.name,
      "email": body.email,
      "password": body.password,
      "gender": body.gender,
      "loginState": true,
      "loginDate": `${body.name} last logged in on: ${Date()}`
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
 let response = await axios.get(`http://localhost:3000/api/query/userAggregate/getUserByPasswordAndEmail?email=${searchParams.get("email")}&password=${searchParams.get("password")}`)
 console.log(response.data.data)
 return {
   body: response.data.data
 }
}