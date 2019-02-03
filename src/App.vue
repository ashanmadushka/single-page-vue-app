<template>
  <div class="main" id="app">
    <div class="left">
      <h1> Details Setting</h1>
        <ul>
          <li v-on:click.stop.prevent="render('user-list')">
            <a><span>Link User</span></a>
          </li>
        </ul>
        <ul>
          <li v-on:click.stop.prevent="render('link-equipment')">
            <a><span>Link Equipment</span></a>
          </li>
        </ul>
    </div>
    <div class="right" >
      <div class="back">
        <a @click="$router.go(-1)">< {{previousRoute}}</a>
      </div>
      <div class="routerView">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions} from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState([
      'previousRoute',
    ]),
  },
  created: function(){
    this.changePreviousRoute('');
  },
  methods: {
    ...mapActions([
      'changePreviousRoute',
    ]),
    render(routeName, params = {}) {
      //call to the state action for change state previous route
      this.changePreviousRoute('home');
      this.$router.push({name: routeName, params: params});
    },
  }
}
</script>

<style>
  html, #app, .home {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .main {
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: 1;
    grid-template-areas:
      "left right";
    height: 100%;
  }

  .left {
    padding: 20px;
    grid-area: left;
    background-color: #413645;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: #afafaf;
    margin-bottom: 8px;
    cursor:pointer;
  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }

  .back {
    padding: 0;
    background-color: #afafaf;
    padding: 10px;
    margin-bottom: 15px;
  }

  .routerView {
    padding: 30px;
    background-color: #E9E9E9; 
  }

</style>
