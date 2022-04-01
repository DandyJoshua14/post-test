<script>
  import stringHash from 'string-hash';
  import Test from './test.svelte'
  import { goto } from "$app/navigation";
  import { v4 as uuid } from 'uuid';
  import { Container, Button, Input, Row, Card, CardHeader, CardText, CardTitle, CardSubtitle, CardBody, Col } from "sveltestrap";
  import { users, Email, usersStore, id, Password, isLoggedIn, Gender, usersStoreAll, EmailCount, nameCount, passwordCount} from './stores/store';
  import { onDestroy, onMount } from 'svelte';
  import { text } from 'svelte/internal';
let showAll = false;
let filteredUsers = [];

let username = ""
  let email = "";
  let password = "";
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
console.log($usersStore, $users, $Email, $id, $Password, $isLoggedIn, $Gender, $usersStoreAll);
onMount(() => {
  reload()
})
async function reload() {
    fetch(`api/es?email=${$Email}&&password=${$Password}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then((res) => {
        res.json().then((us) => {
          filteredUsers = us[0];
          $users = filteredUsers.name
          $Gender = filteredUsers.gender
          $nameCount = filteredUsers.nameStats
          $passwordCount = filteredUsers.passwordStats
          $EmailCount = filteredUsers.emailStats
          $usersStore = ""
        });
      });
}


        async function changeEmail() {
          if(email === $Email || !email) {
            alert('Please Input A Valid Email')
          } else {
            $Email = email
            $EmailCount++
            console.log($EmailCount)
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
                gender: $Gender,
                name: $users,
              email: $Email,
              emailStats: $EmailCount
            })
          })
          setTimeout(1000, reload())
          }
          
          async function changeUserName() {
            if(username === $users || !username) {
            alert('Please Input A Valid User name')
          } else {
            $users = username
            $nameCount++
            console.log($nameCount)
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
                gender: $Gender,
              name: $users,
              nameStats: $nameCount
            })
          })
          setTimeout(1000, reload())
          }
          async function changePassword() {
          if(password === $Password || !password) {
            alert('Please Input A Valid Password')
          } else {
            $Password = password
            $passwordCount++
            console.log($passwordCount)
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
              name: $users,
              gender: $Gender,
              password: $Password,
              passwordStats: $passwordCount
            })
          })
          setTimeout(1000, reload())
          }

  async function removeAccount() {
    let reason = prompt(`Why are you deleting this account??`)
    if(confirm(`Are You sure you want to do this. There's no turning back??`) === true) {
      await fetch('/api/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
              id: $id,
            email: $Email,
            name: $users,
            reason: reason 
          })
          
        })
        // $name = ""
        $Email = ""
        $users = ""
        $Password = ""
        $id = ""
        $isLoggedIn = false
        console.log($Email, $users, $Password, $id)
        email = ""
        if (!Email || $users || $Password || $id) {
          alert("User does not exist")
        } else {
        alert ("Account Deleted. Redirecting ....")
        await goto('/test')
      }
    } else {
      null
    }
  }
let idNum = {index: 1}
let searchTerm = "";
// let filteredUsers = $usersStoreAll;
// $: {
//     if (searchTerm) {
//       filteredUsers = $usersStoreAll.filter(array => array.name.toLowerCase().includes(searchTerm.toLowerCase()));
//       console.log(filteredUsers)
//     } else {
//       filteredUsers = $usersStoreAll;
//       // console.log(filteredUsers)
//     }
//   }
async function logout() {
        $isLoggedIn = false
        await fetch('/api/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
                id: $id,
                gender: $Gender,
              name: $users
            })
        })
        await goto('/login')
        $id = "";
        $Email = "";
        $users = "";
        $Password = "";     
        $usersStoreAll = "";
      }


    function myFunction() {
      var x = document.getElementById("myInput");
      if(x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password"
      }
    }
    </script>
        <svelte:head>
          {#if $id}
          <title>Home</title>
          {/if}
  </svelte:head>
  {#if $id}
  <main>
    <Container>
      <br/>
      <div id="logout">
        <Button color="danger" on:click={logout}>Logout</Button>
    </div>
<div class="form">
  <br>
  <br>
  <div>
    <form on:submit|preventDefault={changeUserName}>
      <label for="text">User name:</label>
      <Input type="text" bind:value={username} placeholder="Change User name..." />
      <br />
      <p>Current User name is: {$users}</p>
      <Button color="success" disabled={$nameCount === 6}>Change...</Button>
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
      <label for="email">Email:</label>
      <Input type="email" bind:value={email} placeholder="Change Your Email..." />
      <br />
      <p>Current Email is: {$Email}</p>
      <Button color="success" disabled={$EmailCount === 6}>Change...</Button>
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
      <label for="text">Password:</label>
      <Input type="password" id="myInput" bind:value={password} placeholder="Change Password..." />
      <input type="checkbox" on:click={myFunction}/> Show Password
      <br />
      <br />
      <p>Current Password is: {$Password}</p>
      <Button color="success" disabled={$passwordCount === 6}>Change...</Button>
      <br />
      <br />
    </form>
  </div>  
</div>
<hr>
<br>
<div id="button">
  <Button style="align-self: center" color="danger" on:click={removeAccount}>Delete Account</Button>
</div>
<br/>
<br/>
<br/>
<!-- <Input type="text" bind:value={searchTerm} placeholder="Search User By Name"/>
<br/> -->
<div id="profile">
  <img style="" width=80 height=80 src="../profile-avatar.png" alt="User_Image"/>
  <p><strong>Name:</strong> <i>{$users}</i></p>
  {#if filteredUsers.gender === 'his'}
  <p>Gender: Male</p>
  {:else}
  <p>Gender: Female</p>
  {/if}
  <p>Email Address: {filteredUsers.email}</p>
  <p>Password: {filteredUsers.password}</p>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
</div>
</Container>
</main>
{:else}
<Test/>
{/if}
<style>
    hr {
      border: solid;
      width:auto
    }
    img {
      border-right: 100px;
      border-radius: 100%;
      border-right: 500px;
    }
    #profile {
      text-align: center;
    }
    #button {
      text-align: center;
    }
    main {
      background-color: grey;
    }
    #logout {
        text-align: right;
      }
    /* table {
      border-collapse: collapse;
      width: 100%;
    }
    td, th {
      border: 1px solid #dddddd;
      text-align: center;
      padding: 8px;
    }
    tr:nth-child(even) {
      background-color: #dddddd;
    } */
  </style>