import axios from 'axios';
import { users } from '../stores/store'
let user = users
export async function get(){
    let response = await axios.get(`http://localhost:3000/api/query/userAggregate/getUserByName`)
    console.log(response.data.data)
    return {
      body: response.data.data
    }
  }