<script>
  import stringHash from 'string-hash';
    import { goto } from "$app/navigation";
    import { v4 as uuid } from 'uuid'
    import { Container, Button } from "sveltestrap";
import { users, Email, id, Password, isLoggedIn, readOnly } from './stores/store';
  
      let password = "";
      let userName = "";
      let email = "";
    
    async function signUp() {
      $users = userName
        $Email = email
        $id = uuid()
      await fetch('/api/es', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            id: $id,
            name: $users,
            email: $Email,
            password: $Password
          })
        })
        if(!$id, !$Email, !$Password, !$users, !password, !userName, !email) {
          $isLoggedIn = false
          $Password = password
          $id = null
          await goto ('/test')
          alert("Please Fill In the neccessary info")
          console.log($isLoggedIn)
        } else{
          alert ("Request sent. Redirecting......")
          $isLoggedIn = true;
          $Password = stringHash(password)
          setTimeout(3000, await goto('/'))
          console.log($isLoggedIn)
        }
  }
    </script>
    <svelte:head><title>Log In Form</title></svelte:head>
    <Container>
        <div class="form">
            <br>
            <h3 style="color: white;">Log In!</h3>
            <br>
            <div>
              <form on:submit|preventDefault={signUp}>
                <input type="text" bind:value={userName} />
                <br />
                <label for="text" style="color: white;">Username</label>
                <br />
                <br />
                <input type="email" bind:value={email} />
                <br />
                <label for="email" style="color: white;">Email</label>
                <br />
                <br />
                <input type="password" bind:value={password} />
                <br />
                <label for="password" style="color: white;">Password</label>
                <br />
                <br />
                <p>Don't have an account? <a href="/Signup">Sign Up</a></p>
                <Button color="success">Log In</Button>
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
      