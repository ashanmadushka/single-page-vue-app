<template>
  <div>
    <div class="row">
      <h1 class="userLeft">User List</h1>
      <h2 class="userRight">
        <button class="button" v-on:click="render('add-user')">Add User</button>
      </h2>
    </div>
    <div class="row">
      <table id='users'>
        <tr>
          <th>User Name</th>
          <th>Last Name</th>
          <th>Delete</th>
        </tr>
        <tr v-for="(user, index) in userList">
          <td>{{user.userName}}</td>
          <td>{{user.lastName}}</td>
          <td><button class="button" v-on:click="removeUsers(index)" >Remove</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'UserList',
    computed: {
      ...mapState([
        'userList'
      ]),
    },
    created: function(){
      //call to the state action for change state previous route
      this.changePreviousRoute('home');
    },
    methods:{
      ...mapActions([                  // Add this
        'removeUser',
        'changePreviousRoute',
      ]),
      removeUsers: function(user) {
        this.removeUser(user)
      },
      render(routeName) {
        //call to the state action for change state previous route
        this.changePreviousRoute(this.$route.name);
        this.$router.push({name: routeName});
      },
    }
  }
</script>

<style>
  .row {
      width: 100%;
      height: 1%;
  }

  .userRight {
    float: right;
    width: 20%;
  }

  .userLeft {
    float: left;
    width: 80%;
  }

  .button {
    float: right;
    text-transform: uppercase;
    font-size: .8em;
    background: #413645;
    border: none;
    padding: 5px;
    color: white;
    cursor:pointer;
  }

  #users {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  #users td, #users th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  #users tr:nth-child(even){background-color: #f2f2f2;}

  #users tr:hover {background-color: #ddd;}

  #users th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #413645;
    color: white;
  }

</style>