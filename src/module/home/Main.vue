<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'MainHome',

    data () {
      return {
      }
    },
    mounted () {
      this.setFeatureName('Home')
    },
    methods: {
      ...mapActions(['setFeatureName'])
    }
  }
</script>

<template>
  <div class="container">
    <br>
    <div class="row">
        <div class="col-xs-12 col-md-6">
            <img style="height:auto; width:70%" src="../../asset/image/objetivo.png">
        </div>
        <div class="col-xs-12 col-md-6">
            <img style="height:auto; width:70%" src="../../asset/image/Arquitetura.png">
        </div>
    </div>    
  </div>
</template>

<style scoped>

</style>
