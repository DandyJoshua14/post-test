import axios from 'axios';
export async function get({ url: { searchParams }}){
    console.log(searchParams.get("name"),searchParams.get("password"),'params log')
   let response = await axios.get(`http://localhost:3000/api/query/userStats/getDuplicate?name=${searchParams.get("name")}`)
   console.log(response.data.data)
   return {
     body: response.data.data
   }
  }