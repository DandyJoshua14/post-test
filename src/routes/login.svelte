<script>
    import stringHash from 'string-hash';
      import { goto } from "$app/navigation";
      import { v4 as uuid } from 'uuid'
      import { Container, Button } from "sveltestrap";
  import { users, Email, id, Password, isLoggedIn, Gender, usersStore, nameCount, EmailCount, passwordCount } from './stores/store';
  import { onMount } from 'svelte';
      // alert('Please refresh this Page if you know you had previously deleted your account')
        let gender = [
          {id: 1, text:'male'},
          {id: 2, text: 'female'}
        ]
        let password = "";
        let userName = "";
        let email = "";
        let userArray = [];
        let filteredUsers = [];
      async function signIn() {
        fetch(`/api/login?email=${email}&password=${password}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(async(res) => {
        res.json().then(async(us) => {
          console.log(us)
          userArray = us[0];
          filteredUsers = us[0]
          $id = userArray.id;
          $users = userArray.name;
          $Password = userArray.password;
          $Email = userArray.email;
          $Gender = userArray.gender
          $nameCount = filteredUsers.nameStats
          $passwordCount = filteredUsers.passwordStats
          $EmailCount = filteredUsers.emailStats
          console.log(userArray)
          if(userArray === "") {
            alert ('Incorrect Login Credentials')
          }
          if (email != $Email || password != $Password || !password || !email) {
            alert ('Incorrect Login Credentials')
            console.log(email, userArray, password)
          } else {
            alert(`${$users} your login was Succesful. Redirecting...`)
            fetch('api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: $users,
                id: $id,
                password: $Password,
                email: $Email

              })
            })
            await goto('/')
          }
        });
            })
    }
      </script>
      <svelte:head><title>Log In</title></svelte:head>
      <Container>
          <div class="form">
              <br>
              <h3 style="color: white;">Log In!</h3>
              <br>
              <div>
                <form on:submit|preventDefault={signIn}>
                  <input type="email" bind:value={email} />
                  <br />
                  <label for="email" style="color: white;">Email</label>
                  <br />
                  <br />
                  <input type="password" bind:value={password} />
                  <br />
                  <label for="password" style="color: white;">Password</label>
                  <br/>
                  <br/>
                  <p>Don't have an account? <a href="/test">Sign Up</a></p>
                  <Button color="success" disabled={!email || !password} >Log In</Button>
                  <br />
                  <br />
                </form>
              </div>  
            </div>
      </Container>
      
      <style>
          .form {
            padding: 10px;
            border-radius: 10px;
            max-width: 400px;
            margin: 10% auto;
            text-align: center;
            background: linear-gradient(blue, purple);
          }
          p {
            font-weight: 1000;
            color: white;
          }
          a {
            text-decoration: none;
          }
          input {
            border-radius: 5px;
            height: fit-content;
          }
        </style>
        