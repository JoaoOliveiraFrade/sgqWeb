<script>
  import { mapState } from 'vuex'
  import oiGrid from '@/comp/grid/main.vue'

  export default {
    name: 'ShowData',

    components: { oiGrid },

    computed: {
      ...mapState('testPlan', ['steps']),

      columns () {
        return [
          {
            id: 'name',
            name: 'Nome',
            alignHeader: 'center',
            align: 'left',
            visible: true,
            sort: false,
            minWidth: '',
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'description',
            name: 'Descrição',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: true,
            sort: false,
            yesNoImage: false,
            filterOptions: []
          }, {
            id: 'expectedResult',
            name: 'Res. Esperado',
            alignHeader: 'center',
            align: 'left',
            minWidth: '',
            visible: true,
            sort: false,
            yesNoImage: false,
            filterOptions: []
          }
        ]
      }
    }
  }
</script>

<template>

    <div v-show="Object.keys(selected).length > 0">
      <oiGrid slot="body"
        filterTermMessage=""
        :data="steps"
        :columns="columns"
      />
    </div>

</template>

<style scoped>
</style>
