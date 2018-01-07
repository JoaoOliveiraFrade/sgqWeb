<script>
  import { mapActions, mapState, mapGetters } from 'vuex'
  import oiMultiselection from './multiselection/Main.vue'

  export default {
    name: 'SystemMultiselectionFbyDevManufByGrid',

    components: { oiMultiselection },

    props: {
      filterDevManuf: { type: Array, default: () => [] },
      preSelected: { type: Array, default: () => [] },
      showButtonSelected: { type: Boolean, default: true }
    },

    computed: {
      ...mapState('systemFromAgent', ['selected']),
      ...mapGetters('systemFromAgent', ['getDataFbyDevManuf'])
    },

    methods: {
      ...mapActions('systemFromAgent', ['loadDataGbyDevManuf']),
      ...mapActions('systemFromAgent', ['setSelected']),

      confirm (selected) {
        this.setSelected(selected)
        this.$emit('onConfirm', selected)
      }
    },

    mounted () {
      this.loadDataGbyDevManuf()
      this.setSelected(this.preSelected)
    }

    // watch: {
    //   'filterDevManuf': {
    //     handler () {
    //       this.setSelected(this.preSelected)
    //     }
    //   }
    // }
  }
</script>

<template>
  <span>
    <oiMultiselection
      :systems="getDataFbyDevManuf(filterDevManuf)"
      :selected="selected"
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
