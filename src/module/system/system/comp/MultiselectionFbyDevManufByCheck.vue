<script>
  import { mapActions, mapState, mapGetters } from 'vuex'
  import oiSelection from '@/comp/selection/Main.vue'

  export default {
    name: 'SystemMultiselectionFbyDevManufByCheck',

    components: { oiSelection },

    props: {
      filterDevManuf: { type: Array, default: () => [] },
      preSelected: { type: Array, default: () => [] },
      showButtonSelected: { type: Boolean, default: true }
    },

    computed: {
      ...mapState('system', ['selected']),
      ...mapGetters('system', ['getDataFbyDevManuf'])
    },

    methods: {
      ...mapActions('system', ['loadDataGbyDevManuf']),
      ...mapActions('system', ['setSelected']),

      confirm (selected) {
        this.setSelected(selected)
        this.$emit('onConfirm', selected)
      }
    },

    mounted () {
      this.loadDataGbyDevManuf()
      this.setSelected(this.preSelected)
    },

    watch: {
      'filterDevManuf': {
        handler () {
          this.setSelected(this.preSelected)
        }
      }
    }
  }
</script>

<template>
  <span>
    <oiSelection
      title="Sistema"               
      :data="getDataFbyDevManuf(filterDevManuf)"
      :selected="selected"
      :showButtonSelected="showButtonSelected"
      gender="male"
      @onConfirm="confirm"
    />
  </span>
</template>

<style scoped>
  .fd-label {
    margin: 0; 
    border: 0; 
    padding: 0; 
    color: gray;
  }
</style>
