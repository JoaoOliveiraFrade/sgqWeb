<script>
  import jQuery from 'jquery'
  import oiBrand from './BrandHeader.vue'
  import oiButtonMobile from './ButtonMobileHeader.vue'
  import oiMenu from './MenuHeader.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'MainHeader',
    components: { oiBrand, oiMenu, oiButtonMobile },
    data () {
      return {
        menuIsOpen: false
      }
    },
    computed: {
      ...mapGetters(['featureName'])
    },
    methods: {
      onToggleMenu () {
        this.menuIsOpen = !this.menuIsOpen
      },
      collapseMenuMobile () {
        jQuery('.navbar-collapse').collapse('hide')
      }
    }
  }
</script>

<template>
    <nav id="header" class="navbar navbar-default" style="margin-bottom:0; border-bottom:0; padding-bottom:0">

        <table width="100%">

          <tr>
            <td id="brand" rowspan=2 style="width: 100px">
              <oi-brand/>
            </td>

            <td style="text-align: center;" colspan=2>
              <span class="title">{{featureName}}</span>
            </td>

            <td id="brand" rowspan=2>
              <oi-button-mobile @toggleMenu="onToggleMenu"/>
            </td>
          </tr>

          <tr>
            <td>
            </td>

            <td>
              <div id="menu-collapse" class="collapse navbar-collapse"> 
                <oi-menu @collapseMenuMobile="collapseMenuMobile"/>
              </div>
            </td>

            <td>
            </td>
          </tr>          
        </table>
        
    </nav> 
</template>

<style escoped>
  #header {
    margin: 0;
    padding: 0;
    border: 0;
  }
  #menu-collapse {
    padding-right: 30px;
  }
  #brand {
    padding-left: 10px;
  }
  .title {
    font-size: 17px;
    font-weight: bold;
    /*color: #FFFF00;*/
    color: white;
    text-align: center;
    padding-left: 5px;
    padding-right: 5px;
  }
</style>
