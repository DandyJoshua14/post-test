<script>
  import stringHash from 'string-hash';
    import { goto } from "$app/navigation";
    import { v4 as uuid } from 'uuid'
    import { Container, Button } from "sveltestrap";
import { users, Email, id, Password, isLoggedIn, Gender, usersStoreAll, EmailCount, passwordCount, nameCount } from './stores/store';
import { onMount } from 'svelte';
    // alert('Please refresh this Page if you know you had previously deleted your account')
      let gender = [
        {id: 1, text:'male'},
        {id: 2, text: 'female'}
      ]
      let count1 = 0;
      let count2 = 0;
      let count3 = 0;
      let userDetails = [];
      let password = "";
      let userName = "";
      let email = "";
      let selected;
      let selectedGender = "";
      let answer = "";
    async function signUp() {
      $users = userName;
        $Email = email;
        $Password = password;
        if(answer.id === 1) {
          selectedGender = 'his'
        } else {
          selectedGender = 'her'
        };
        $Gender = selectedGender
        if(!password || !userName || !email || !gender) {
          $id = null;
          $isLoggedIn = false;
          alert("Please Fill In the neccessary info")
          console.log($isLoggedIn)
        } else{
          alert ("Request sent. Redirecting......")
          $isLoggedIn = true;
          $Password = password;
          $id = uuid();
          $passwordCount = 0
          $nameCount = 0
          $EmailCount = 0
          console.log($isLoggedIn)
        }
        await fetch(`api/verification?name=${userName}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        }).then((res) => {
          res.json().then((us) => {
            userDetails = us[0]
          });
        });
        if(userDetails.name === userName){
          alert('User With The same name already exists. Please use a different name')
          throw new Error('User Already Exists')
        } else {
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
                gender: $Gender,
                passwordStats: count1,
                emailStats: count2,
                nameStats: count3,
              })
            })

            setTimeout(3000, await goto('/'))
        }
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
                <p>Don't have an account? <a href="/login">Log In</a></p>
                <Button color="success" disabled={!userName || !email || !password || !answer}>Sign Up</Button>
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
      