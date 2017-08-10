<script>
  import { mapGetters, mapActions } from 'vuex'
  import oiSelectionLogonLogoff from '@/module/auth/comp/SelectionLogonLogoff.vue'
  
  export default {
    name: 'MenuHeader',

    components: { oiSelectionLogonLogoff },

    data () {
      return {
      }
    },
    methods: {
      ...mapActions(['logOff']),

      localLogoff () {
        this.logOff()
        this.$emit('collapseMenuMobile')
        this.$router.push('/')
      }
    },
    computed: {
      ...mapGetters(['isLogged', 'currentUser'])
    }
  }
</script>

<template>
    <ul id="menu" class="nav navbar-nav navbar-right">
        <router-link :to="{ name: 'home' }" tag="li" @click.native="$emit('collapseMenuMobile')">
          <a class="oi-menu">Home</a>
        </router-link>

        <li class="dropdown">
            <a href="#" 
                class="dropdown-toggle oi-menu" data-toggle="dropdown" 
                role="button" aria-haspopup="true" aria-expanded="false">Consultas<span class="caret"/>&nbsp;
            </a>
            <ul class="dropdown-menu">
                <router-link :to="{ name: 'projectConsult' }" tag="li" @click.native="$emit('collapseMenuMobile')">
                    <a class="oi-menu">Projetos</a>
                </router-link>

                <router-link :to="{ name: 'searchGrouperConsult' }" tag="li" @click.native="$emit('collapseMenuMobile')">
                    <a class="oi-menu">Agrupadores</a>
                </router-link>
                <!--
                'fullscreen=yes, titlebar=no, toolbar=no, location=no, channelmode=0no, status=no, menubar=no, scrollbars=yes, resizable=yes'
                -->

                <li>
                    <a class="oi-menu" @click="$emit('collapseMenuMobile')"
                        href="#"
                        onclick="window.open('http://sgq.intranet/Mobile_Status_TRG_Menu.aspx', 
                            'newwindow', ''
                        ); 
                        return false;">TRGs
                    </a>
                </li>
                <li>
                    <a class="oi-menu" @click="$emit('collapseMenuMobile')" style="height:20px;margin:0;padding-top:0px;" 
                        href="#"
                        onclick="window.open('http://sgq.intranet/Mobile_Status_Release_Menu.aspx', 
                            'newwindow', ''
                        );
                        return false">Releases
                    </a>
                </li>
                <li>
                    <a class="oi-menu" @click="$emit('collapseMenuMobile')"
                        href="#"
                        onclick="window.open('http://sgq.intranet/Mobile_Painel_Menu.aspx', 
                            'newwindow', ''
                        ); 
                        return false;">Painel
                    </a>            
                </li>
            </ul>
        </li>

        <router-link :to="{ name: 'pulledChain' }" tag="li" @click.native="$emit('collapseMenuMobile')">
            <a class="oi-menu">Cadeia Puxada</a>
        </router-link>

        <li class="dropdown">
            <a class="oi-menu" @click="$emit('collapseMenuMobile')"
                href="#"
                onclick="window.open('http://sgq.intranet/Mobile_Monitor_Defeitos_Menu.aspx', 
                    'newwindow', ''
                ); 
                return false;">Monit.Def.
            </a>            
        </li>

        <li class="dropdown">
            <a href="#" 
                class="dropdown-toggle oi-menu" data-toggle="dropdown" 
                role="button" aria-haspopup="true" aria-expanded="false">Indicadores<span class="caret"/>&nbsp;
            </a>
            <ul class="dropdown-menu">
                <router-link :to="{ name: 'indicatorOfDevelopment' }" tag="li">
                    <a class="oi-menu">Desenvolvimento</a>
                </router-link>

                <router-link :to="{ name: 'indicatorOfDevelopment2' }" tag="li">
                    <a class="oi-menu">Desenvolvimento.2</a>
                </router-link>

                <router-link :to="{ name: 'indicatorTest' }" tag="li">
                    <a class="oi-menu">Teste</a>
                </router-link>
            </ul>
        </li>
    
<!--
        <li class="dropdown">
            <a href="#" 
                class="dropdown-toggle oi-menu" data-toggle="dropdown" 
                role="button" aria-haspopup="true" aria-expanded="false">Teste<span class="caret"/>&nbsp;
            </a>
            <ul class="dropdown-menu">
                <router-link :to="{ name: 'cep' }" tag="li">
                    <a class="oi-menu">CEP</a>
                </router-link>
                <router-link :to="{ name: 'count' }" tag="li">
                    <a class="oi-menu">Contador</a>
                </router-link>
                <router-link :to="{ name: 'task' }" tag="li">
                    <a class="oi-menu">Tarefa</a>
                </router-link>
                <router-link :to="{ name: 'brewery' }" tag="li">
                    <a class="oi-menu">Cervejaria</a>
                </router-link>
            </ul>
        </li>
-->
        <li class="dropdown">
            <a href="#" 
                class="dropdown-toggle oi-menu" data-toggle="dropdown" 
                role="button" aria-haspopup="true" aria-expanded="false">Cadastros<span class="caret"/>&nbsp;
            </a>
            <ul class="dropdown-menu">
                <router-link :to="{ name: 'cadGrouper' }" tag="li">
                    <a class="oi-menu">Agrupadores</a>
                </router-link>
                <router-link :to="{ name: 'cadProject' }" tag="li">
                    <a class="oi-menu">Status de Projetos</a>
                </router-link>
            </ul>
        </li>
    
        <oiSelectionLogonLogoff v-show="!isLogged"/>

        <li class="dropdown" v-show="isLogged">
          <a href="#" 
            style="margin:0;padding:0;border:0"
            class="dropdown-toggle oi-menu" 
            data-toggle="dropdown" 
            role="button" 
            aria-haspopup="true" 
            aria-expanded="false">
            <span class="glyphicon glyphicon-user"/> <label v-show="isLogged">{{currentUser.name}}</label> <span class="caret"/>
          </a>


          <ul class="dropdown-menu">
            <li >
              <a class="oi-menu" @click="localLogoff">Logoff</a>
            </li>
            <!--
            <router-link v-show="!isLogged" :to="{ name: 'auth' }" tag="li">
              <a class="oi-menu">Entrar</a>
            </router-link>
            -->
          </ul>
        </li>        
    </ul>
</template>

<style scoped>
  .oi-menu {
    height: 25px;
    margin: 0;
    padding: 1px 5px 15px 5px;
  }
  .navbar-default .navbar-nav > li > a {
    color: white;
    font-size: 13px;
    font-weight: bold;
  }
</style>
