import axios from 'axios';

export async function get(){
    let response = await axios.get(`http://localhost:3000/api/query/userStats/all`)
    console.log(response.data.data)
    return {
      body: response.data.data
    }
  }