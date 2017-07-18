<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'ShowAuth',
    data () {
      return {
        menuUserIsOpen: false
      }
    },
    methods: {
      toggleMenuUser () {
        this.menuUserIsOpen = !this.menuUserIsOpen
      },
      closeMenuUser () {
        this.menuUserIsOpen = false
      }
    },
    computed: {
      ...mapGetters(['isLogged', 'currentUser'])
    }
  }
</script>

<template>
  <div class="container">
    <ul class="nav navbar-nav navbar-right" >

        <li class="dropdown" :class="{ open: menuUserIsOpen }">
          <a href="#" 
           @click="toggleMenuUser"
           style="margin:0;padding:0;border:0"
           class="dropdown-toggle oi-menu" 
           data-toggle="dropdown" 
           role="button" 
           aria-haspopup="true" 
           aria-expanded="false">
            <span class="glyphicon glyphicon-user"/>&nbsp;{{currentUser.name}}
            <span class="caret"/>&nbsp;
          </a>

          <ul class="dropdown-menu">
            <router-link :to="{ name: 'auth' }" tag="li" v-if="isLogged">
              <a class="oi-menu">Logoff</a>
            </router-link>

            <router-link :to="{ name: 'auth' }" tag="li" v-if="!isLogged">
                <a class="oi-menu">Logon</a>
            </router-link>
          </ul>
        </li>
    
            <a href="#" 
              class="dropdown-toggle oi-menu" 
              data-toggle="dropdown"
              style="margin-right:30px">
                <span class="glyphicon glyphicon-user"/>
                <span class="caret"></span>
            </a>

            <ul class="dropdown-menu" style="margin-right:30px">
              <router-link :to="{ name: 'auth' }" tag="li" style="margin-left:10px" >
                <a class="oi-menu">Logoff</a>
              </router-link>
            </ul>
        </li>
    </ul>
  </div>
</template>
