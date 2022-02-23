<script>
  import stringHash from 'string-hash';
  import Test from './test.svelte'
    import { goto } from "$app/navigation";
    import { v4 as uuid } from 'uuid';
    import { Container, Button, Input } from "sveltestrap";
import { users, Email, id, Password, isLoggedIn, readOnly} from './stores/store';
import { onDestroy, onMount } from 'svelte';
  let username = ""
  let email = "";
  let password = "";
 

console.log($id)
        async function changeEmail() {
          if(email === $Email) {
            alert('Email Address Duplicate')
          } else {
            $Email = email
          }
          email = "";
        await fetch('/api/modifyEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
                id: $id,
              email: $Email,
              name: $users
            })
          })
          }
          
          async function changeUserName() {
            if(username === $users) {
            alert('User name Duplicate')
          } else {
            $users = username
          }
          username = "";
        await fetch('/api/modifyUserName', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
                id: $id,
              email: $Email,
              name: $users
            })
          })
          
          }
          async function changePassword() {
            if(password === $Password) {
            alert('Please Use a password different from your Previous one')
          } else {
            $Password = password
             }
             password = "";
        await fetch('/api/modifyPassword', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
                id: $id,
              email: $Email,
              name: $users,
              password: $Password
            })
          })
          
          }
  async function removeAccount() {
      await fetch('/api/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
              id: $id,
            email: $Email,
            name: $users
          })
          
        })
        Email.set()
        users.set()
        Password.set()
        id.set()
        isLoggedIn.set(false)
        console.log($Email, $users, $Password, $id)
        email = ""
        if (!Email) {
          alert("User does not exist")
        } else {
        alert ("Account Deleting")
        await goto('/test')
      }
  }


    </script>
        <svelte:head>
          {#if $id}
          <title>Home</title>
          {/if}
  </svelte:head>
  <main>
    {#if $id}
    <Container>
<div class="form">
  <br>
  <br>
  <div>
    <form on:submit|preventDefault={changeUserName}>
      <Input type="text" bind:value={username} placeholder="Change User name..." />
      <br />
      <label for="text">User name</label>
      <br />
      <p>Current User name is: {$users}</p>
      <Button color="success">Change...</Button>
      <br />
      <br />
    </form>
  </div>  
</div>
<br>
<br>
<hr>
<br>
<br>
<div class="form">
  <br>
  <br>
  <div>
    <form on:submit|preventDefault={changeEmail}>
      <Input type="email" bind:value={email} placeholder="Change Your Email..." />
      <br />
      <label for="email">Email</label>
      <br />
      <p>Current Email is: {$Email}</p>
      <Button color="success">Change...</Button>
      <br />
      <br />
    </form>
  </div>  
</div>
<hr>
<br>
<div class="form">
  <br>
  <br>
  <div>
    <form on:submit|preventDefault={changePassword}>
      <Input type="password" bind:value={password} placeholder="Change Password..." />
      <br />
      <label for="text">Password</label>
      <br />
      <p>Current Password is: {$Password}</p>
      <Button color="success">Change...</Button>
      <br />
      <br />
    </form>
  </div>  
</div>
<hr>
<br>
<Button style="margin-left: 500px" color="danger" on:click={removeAccount}>Delte Account</Button>
</Container>
{:else if !$id}
<Test/>
{/if}
  </main>
  <style>
    hr {
      border: solid;
    }
  </style>