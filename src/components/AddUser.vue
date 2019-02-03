<template>
  <div>
    <div class="row">
      <h1>Add User</h1>
    </div>
    <div class="row">
      <label class="formLeft">User Name</label>
      <input class="formRight" type="field" name="userName" v-model="userName">
    </div>
    <div class="row">
      <label class="formLeft">Last Name</label>
      <input class="formRight" type="field" name="LastName" v-model="lastName">
    </div>
    <div class="row">
      <button class="button buttonRight" v-on:click="save()">Save</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'HelloWorld',
    data() {                                   
      return {
        userName: "",
        lastName: "",
      }
    },
    computed: {
      ...mapState([
        'currentRoute',
      ]),
    },
    methods:{
      ...mapActions([
        'addUser',
      ]),
      save: function(link) {
        //TODO:-data should have to validate
        var user = {'userName': this.userName, 'id': '', 'lastName': this.lastName}
        this.addUser(user);
        var routeName = 'user-list';
        this.$router.push({name: routeName});
      },
    }
  }
</script>

<style>
  input {
    border: none;
    padding: 20px;
    width: 100%;
    box-shadow: 0 5px 5px lightgrey;
    margin-bottom: 30px;
    outline: none;
  }

  .formRight {
    width: 70%;
    height: 1%;
  }

  .formLeft {
    width: 30%;
    height: 1%;
    float: left;
  }

  .buttonRight {
      width: 10%; 
      height: 1%;
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
</style>