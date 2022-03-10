<script>
  import stringHash from 'string-hash';
  import Test from './test.svelte'
    import { goto } from "$app/navigation";
    import { v4 as uuid } from 'uuid';
    import { Container, Button, Input, Row, Card, CardHeader, CardText, CardTitle, CardSubtitle, CardBody, Col } from "sveltestrap";
import { users, Email, usersStore, id, Password, isLoggedIn, Gender} from './stores/store';
import { onDestroy, onMount } from 'svelte';
import { text } from 'svelte/internal';

let userArray = [{}]
onMount(() => {
		console.log('Mounting...)');
		fetch(`http://localhost:9000/api/es`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => {
			res.json().then((us) => {
				userArray = us;
        $usersStore = userArray;
        console.log(userArray)
			});
		});
	});
  let username = ""
  let email = "";
  let password = "";
  async function welcmsg() {
    let person = prompt("What Is your name")
    alert(`Hi ${person} and welcome to this site`)
    return person
  }
welcmsg();
console.log($id)
        async function changeEmail() {
          if(email === $Email || !email) {
            alert('Please Input A Valid Email')
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
                gender: $Gender,
                name: $users,
              email: $Email
            })
          })
          }
          
          async function changeUserName() {
            if(username === $users || !username) {
            alert('Please Input A Valid User name')
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
                gender: $Gender,
              name: $users
            })
          })
          
          }
          async function changePassword() {
          if(password === $Password || !password) {
            alert('Please Input A Valid Password')
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
              name: $users,
              gender: $Gender,
              password: $Password,
            })
          })
          
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
let filteredUsers;
$: {
    if (searchTerm) {
      filteredUsers = userArray.filter(array => array.name.toLowerCase().includes(searchTerm.toLowerCase()));
      console.log(filteredUsers)
    } else {
      filteredUsers = userArray;
      console.log(filteredUsers)
    }
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
  <main>
    {#if $id && $users && $Email && $Password && $isLoggedIn}
    <Container>
<div class="form">
  <br>
  <br>
  <div>
    <form on:submit|preventDefault={changeUserName}>
      <label for="text">User name:</label>
      <Input type="text" bind:value={username} placeholder="Change User name..." />
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
      <label for="email">Email:</label>
      <Input type="email" bind:value={email} placeholder="Change Your Email..." />
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
      <label for="text">Password:</label>
      <Input type="password" id="myInput" bind:value={password} placeholder="Change Password..." />
      <input type="checkbox" on:click={myFunction}/> Show Password
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
<Button style="margin-left: 500px" color="danger" on:click={removeAccount}>Delete Account</Button>
<br/>
<br/>
<br/>
<Input type="text" bind:value={searchTerm} placeholder="Search User By Name"/>
<br/>
<table>
  <tr>
    <th>NO. </th>    
    <th>| User Name | </th>   
    <th>| Email | </th>  
    <th>| Password |</th> 
    <th>|  Num Of Changes Made On Name | </th>
    <th>|  Num Of Changes Made On Email | </th>
    <th>| Gender |</th>
    <th>| ID | </th>  
  </tr>
  {#each filteredUsers as owner}
  <tr>
    <td>{idNum.index++}.</td>
    <td><b>{owner.name}</b></td>
    <td><strong>{owner.email}</strong></td>
    <td><strong><i>{owner.password}</i></strong></td>
    <td><strong>{owner.nameStats}</strong></td>
    <td><strong>{owner.emailStats}</strong></td>
    <td><strong>{owner.gender}</strong></td>
    <td>{owner.id}</td>
    <br/>
    <br/>
  </tr>
  {/each}
</table>
</Container>
{:else if !$id}
<Test/>
{/if}
  </main>
  <style>
    hr {
      border: solid;
      width:auto
    }
    table {
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
    }
  </style>