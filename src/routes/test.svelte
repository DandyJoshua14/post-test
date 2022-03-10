<script>
  import stringHash from 'string-hash';
    import { goto } from "$app/navigation";
    import { v4 as uuid } from 'uuid'
    import { Container, Button } from "sveltestrap";
import { users, Email, id, Password, isLoggedIn, Gender } from './stores/store';
import { onMount } from 'svelte';
    // alert('Please refresh this Page if you know you had previously deleted your account')
      let gender = [
        {id: 1, text:'male'},
        {id: 2, text: 'female'}
      ]
      let password = "";
      let userName = "";
      let email = "";
      let selected;
      let selectedGender;
      let answer = ""
    async function signUp() {
      $users = userName
        $Email = email
        $id = uuid()
        $Password = password
        if(answer.id === 1) {
          selectedGender = 'his'
        } else {
          selectedGender = 'her'
        }
        $Gender = selectedGender
        if(!$id || !$Email || !$Password || !$users || !password || !userName || !email || !gender) {
          $id = null
          $isLoggedIn = false
          await goto ('/test')
          alert("Please Fill In the neccessary info")
          console.log($isLoggedIn)
        } else{
          alert ("Request sent. Redirecting......")
          $isLoggedIn = true;
          $Password = password
          setTimeout(3000, await goto('/'))
          console.log($isLoggedIn)
        }
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
            password: $Password,
            gender: $Gender
          })
        })
  }
    </script>
    <svelte:head><title>Sign Up Form</title></svelte:head>
    <Container>
        <div class="form">
            <br>
            <h3 style="color: white;">Sign Up!</h3>
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
                <br/>
                <br/>
                <input type="password" bind:value={password} />
                <br />
                <label for="password" style="color: white;">Password</label>
                <br />
                <br />
                <select bind:value={answer}>
                  {#each gender as question}
                    <option value={question}>
                      {question.text}
                    </option>
                  {/each}
                </select>
                <br/>
                <br/>
                <p>Don't have an account? <a href="/Signup">Sign Up</a></p>
                <Button color="success" disabled={!answer} >Log In</Button>
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
      