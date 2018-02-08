<script>
  import { mapGetters, mapActions } from 'vuex'
  // import oiSelectionLogonLogoff from '@/module/auth/comp/SelectionLogonLogoff.vue'
  
  import oiButton from '@/module/auth/comp/button.vue'

  export default {
    name: 'MenuHeader',

    components: { oiButton },

    data () {
      return {
      }
    },
    methods: {
      ...mapActions('auth', ['logOff']),

      localLogoff () {
        this.logOff()
        this.$emit('collapseMenuMobile')
        this.$router.push('/')
      }
    },
    computed: {
      ...mapGetters('auth', ['isLogged', 'currentUser'])
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
                role="button" aria-haspopup="true" aria-expanded="false">Operacional<span class="caret"/>&nbsp;
            </a>
            <ul class="dropdown-menu">
                <li class="dropdown-submenu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" style="padding-left:4px">Entrega</a>
                    <ul class="dropdown-menu" style="width:190px">

                        <router-link :to="{ name: 'testProjSearch' }" tag="li" @click.native="$emit('collapseMenuMobile')">
                            <a class="oi-menu">Teste</a>
                        </router-link>

                        <router-link :to="{ name: 'bitiProjSearch' }" tag="li" @click.native="$emit('collapseMenuMobile')">
                            <a class="oi-menu">Clarity</a>
                        </router-link>
                    </ul>
                </li>

                <router-link :to="{ name: 'groupSearch' }" tag="li" @click.native="$emit('collapseMenuMobile')">
                    <a class="oi-menu">Agrupador</a>
                </router-link>

                <router-link :to="{ name: 'trg' }" tag="li" @click.native="$emit('collapseMenuMobile')">
                    <a class="oi-menu">TRG</a>
                </router-link>

                <router-link :to="{ name: 'defectMonitor' }" tag="li" @click.native="$emit('collapseMenuMobile')">
                    <a class="oi-menu">Monitor Defeito</a>
                </router-link>
                

                <li class="dropdown-submenu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" style="padding-left:4px">Ind. Oper.</a>
                    <ul class="dropdown-menu">
                        <li class="dropdown-submenu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" style="padding-left:4px">Desenvol.</a>
                            <ul class="dropdown-menu" style="width:170px">
                                <router-link :to="{ name: 'indOperDevDefectDensity' }" tag="li">
                                    <a class="oi-menu">Densidade Defeito</a>
                                </router-link>
                                <router-link :to="{ name: 'indOperDevDefectAverangeTime' }" tag="li">
                                    <a class="oi-menu">Tempo Médio Defeito</a>
                                </router-link>
                                <router-link :to="{ name: 'indicatorTest' }" tag="li">
                                    <a class="oi-menu">Defeito Reaberto</a>
                                </router-link>
                                <!--                                
                                <router-link :to="{ name: 'indicatorTest' }" tag="li">
                                    <a class="oi-menu">Defeito C/Class. Errada</a>
                                </router-link>
                                <router-link :to="{ name: 'indicatorTest' }" tag="li">
                                    <a class="oi-menu">Defeito S/Prev.Solução </a>
                                </router-link>
                                -->
                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" style="padding-left:4px">Teste</a>
                            <ul class="dropdown-menu" style="width:230px">
                                <router-link :to="{ name: 'indicatorTest' }" tag="li">
                                    <a class="oi-menu">Produtividade</a>
                                </router-link>
                                <router-link :to="{ name: 'indicatorTest' }" tag="li">
                                    <a class="oi-menu">Rejeição Evidência</a>
                                </router-link>
                                <router-link :to="{ name: 'indicatorTest' }" tag="li">
                                    <a class="oi-menu">Defefeito Improcedente</a>
                                </router-link>
                                <router-link :to="{ name: 'indicatorTest' }" tag="li">
                                    <a class="oi-menu">Defefeito UAT</a>
                                </router-link>
                                <router-link :to="{ name: 'indicatorTest' }" tag="li">
                                    <a class="oi-menu">Tempo Médio Resteste Defeito</a>
                                </router-link>
                            </ul>
                        </li>

                        <!--
                        <li class="dropdown-submenu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" style="padding-left:4px">Desempenho</a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-submenu">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" style="padding-left:4px">Desenvolvimento</a>
                                    <ul class="dropdown-menu" style="width: 210px">
                                        <router-link :to="{ name: 'indPerfDevDefectDensity' }" tag="li">
                                            <a class="oi-menu">Densidade Defeito</a>
                                        </router-link>
                                        <router-link :to="{ name: 'indPerfDevDefectInsideSLA' }" tag="li">
                                            <a class="oi-menu">Defeito Dentro SLA (agente)</a>
                                        </router-link>
                                        <router-link :to="{ name: 'indPerfDevDefectOfTSInTI' }" tag="li">
                                            <a class="oi-menu">Defeito de TS em TI</a>
                                        </router-link>
                                        <router-link :to="{ name: 'indPerfDevDefectOfTSInTIAgent' }" tag="li">
                                            <a class="oi-menu">Defeito de TS em TI (agente)</a>
                                        </router-link>
                                    </ul>
                                </li>

                                <li class="dropdown-submenu">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" style="padding-left:4px">Teste</a>
                                </li>
                            </ul>
                        </li>
                        -->
                    </ul>
                </li>

           

                <!--
                'fullscreen=yes, titlebar=no, toolbar=no, location=no, channelmode=0no, status=no, menubar=no, scrollbars=yes, resizable=yes'
                -->

                <!--
                <li>
                    <a class="oi-menu" @click="$emit('collapseMenuMobile')"
                        href="#"
                        onclick="window.open('http://sgq.intranet/Mobile_Status_TRG_Menu.aspx', 
                            'newwindow', ''
                        ); 
                        return false;">TRG
                    </a>
                </li>
                <li>
                    <a class="oi-menu" @click="$emit('collapseMenuMobile')" style="height:20px;margin:0;padding-top:0px;" 
                        href="#"
                        onclick="window.open('http://sgq.intranet/Mobile_Status_Release_Menu.aspx', 
                            'newwindow', ''
                        );
                        return false">Release
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
                -->
            </ul>
        </li>

        <li class="dropdown">
            <a href="#" 
                class="dropdown-toggle oi-menu" data-toggle="dropdown" 
                role="button" aria-haspopup="true" aria-expanded="false">Informacional<span class="caret"/>&nbsp;
            </a>
            <ul class="dropdown-menu" style="width:210px">
                <router-link :to="{ name: 'informationalReleaseSearch' }" tag="li" @click.native="$emit('collapseMenuMobile')">
                    <a class="oi-menu">Release</a>
                </router-link>
            </ul>
        </li>

        <router-link :to="{ name: 'pulledChain' }" tag="li" @click.native="$emit('collapseMenuMobile')">
            <a class="oi-menu">Cadeia Puxada</a>
        </router-link>

        <!--
        <li class="dropdown">
            <a href="#" 
                class="dropdown-toggle oi-menu" data-toggle="dropdown" 
                role="button" aria-haspopup="true" aria-expanded="false">Monit.Def.<span class="caret"/>&nbsp;
            </a>
            <ul class="dropdown-menu">
                <li>
                    <a class="oi-menu" @click="$emit('collapseMenuMobile')"
                        href="#"
                        onclick="window.open('http://sgq.intranet/Mobile_Monitor_Defeitos_Menu.aspx', 
                            'newwindow', ''
                        ); 
                        return false;">Anterior
                    </a>            
                </li>
                <router-link :to="{ name: 'defectMonitor' }" tag="li" @click.native="$emit('collapseMenuMobile')">
                <a class="oi-menu">Novo</a>
                </router-link>
            </ul>
        </li>
        -->




<!--

<a href="#" class="dropdown-toggle" data-toggle="dropdown">Menu 2 <b class="caret"></b></a>
<ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li class="divider"></li>
    <li><a href="#">Separated link</a></li>
    <li class="divider"></li>
    <li><a href="#">One more separated link</a></li>
    <li class="dropdown-submenu">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown</a>
        <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li class="divider"></li>
            <li class="dropdown-submenu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown</a>
                <ul class="dropdown-menu">
                    <li class="dropdown-submenu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown</a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li class="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
-->




<!--
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
-->    
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
                    <a class="oi-menu">Status de Entrega</a>
                </router-link>
            </ul>
        </li>
    
        <li class="dropdown">
            <oiSelectionLogonLogoff v-show="!isLogged"/>
        </li>
        
        <!--
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
          </ul>
        </li>
        -->
        <!--
        <router-link v-show="!isLogged" :to="{ name: 'auth' }" tag="li">
            <a class="oi-menu">Entrar</a>
        </router-link>
        -->

        <oiButton/>
        
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

.dropdown-submenu {
    position: relative;
}

.dropdown-submenu>.dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
    margin-left: -1px;
    -webkit-border-radius: 0 6px 6px 6px;
    -moz-border-radius: 0 6px 6px;
    border-radius: 0 6px 6px 6px;
}

.dropdown-submenu:hover>.dropdown-menu {
    display: block;
}

.dropdown-submenu>a:after {
    display: block;
    content: " ";
    float: right;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-left-color: #ccc;
    margin-top: 5px;
    margin-right: -10px;
}

.dropdown-submenu:hover>a:after {
    border-left-color: #fff;
}

.dropdown-submenu.pull-left {
    float: none;
}

.dropdown-submenu.pull-left>.dropdown-menu {
    left: -100%;
    margin-left: 10px;
    -webkit-border-radius: 6px 0 6px 6px;
    -moz-border-radius: 6px 0 6px 6px;
    border-radius: 6px 0 6px 6px;
}  
</style>
