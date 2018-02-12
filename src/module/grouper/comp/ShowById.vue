<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  // import ServicesProjectXgrouper from '@/module/projectXgrouper/services'
  // import ServicesProject from '@/module/project/testProj/services'
  // import ServicesGrouper from '@/module/grouperConsult/services'

  import oiShowSelected from './ShowSelected.vue'
  import oiShowGridTestProj from '@/genComp/project/testProj/ShowGrid.vue'

  import oiButton from '@/genComp/link/Button.vue'

  export default {
    name: 'ShowById',

    components: { oiShowSelected, oiShowGridTestProj, oiButton },

    computed: {
      ...mapState('grouper', ['data', 'selected', 'grouperProjects']),
      ...mapGetters('grouper', ['grouperProjectsTotal', 'grouperProjectsPlanned', 'grouperProjectsRealized'])
    },

    /*
    watch: {
      '$route' (to, from) {
        this.grouperId = this.$route.params.grouper
        this.loadData()
      }
    },
    */

    methods: {
      ...mapActions(['setFeatureName']),
      ...mapActions('grouper', ['setSelectedById']),

      requestReportGrouperConsult () {
        this.$router.push({ name: 'grouperReportById', params: { grouperId: this.selected.id } })
      }
    },

    mounted () {
      this.setFeatureName('Agrupadores')
      this.setSelectedById(this.$route.params.grouperId)
    }
  }
</script>

<template>

  <div class="container-fluid">

      <div class="col-xs-12" style="padding: 0px; margin: 0px; margin-top: 7px;">

        <oiButton
          icon="envelope"
          label="Report Por Email"
          title="Envio de Report Por Email"
          @click="requestReportGrouperConsult"
        />

        <oiButton
          icon="search"
          label="Pesquisa"
          title="Pesquisa de Agrupador"
          @click="$router.push({ name: 'groupSearch' })"
        />

    </div>

    <div id="header">

      <div class="col-xs-12 well" style="padding: 0px; margin: 0px; margin-top: 2px;">

        <oiShowSelected/>

      </div>

    </div>

    <div id="body">

      <div class="col-xs-12 well" style="padding: 0px; margin: 0px; margin-top: 2px;">

        <oiShowGridTestProj :items="grouperProjects"/>

      </div>

    </div>

  </div>

</template>

<style scoped>
</style>
