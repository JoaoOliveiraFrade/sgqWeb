<script>
  import { mapActions, mapState } from 'vuex'
  import oiMonoSelection from './MonoSelection.vue'
  import oiShowSelected from './ShowSelected.vue'

  export default {
    name: 'Search',

    components: { oiMonoSelection, oiShowSelected },

    computed: {
      ...mapState('informationalRelease', ['state'])
    },

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('informationalRelease', ['setState'])
    },

    mounted () {
      this.setFeatureName('Informacional - Release')
    }
  }
</script>

<template>
  <div class="container-fluid" style="padding-top: 10px">

    <oiMonoSelection v-show="state === 'search'"
      style="padding-top: 2px;"
    />

    <span v-show="state !== 'search'">

      <div class="row well well-sm" style="margin:0; padding:3px; padding-left:5px">

        <button style="margin-top:2px" class="btn btn-xs"
            title="Seleção"
            @click="setState('search')">
            <span class="glyphicon glyphicon-search"></span> Seleção
        </button>

      </div>

      <div class="row well well-sm" style="margin:0; padding:0; padding-left:5px">

        <oiShowSelected/>

      </div>

    </span>
    
    
  </div>

</template>

<style scoped>
  input {
     min-width: 100%
  }
  .container {
    margin-top: 15px;
  }
  .oi-well {
    margin: 0;
    border: 0;
    padding: 0;
  }
  .oi-icon {
    font-size: medium;
  }
</style>
