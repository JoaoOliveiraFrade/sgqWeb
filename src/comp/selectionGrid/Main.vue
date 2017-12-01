<script>
  import oiModal from '@/comp/modal/Modal2.vue'
  import oiEdit from './Edit.vue'

  export default {
    name: 'selectionGrid',

    components: { oiModal, oiEdit },

    props: {
      title: { type: String, required: true },
      data: { type: Array, required: true },
      selected: { type: Array, default: [] },
      // isShowButtonSelected: { type: Boolean, default: true },
      gender: { type: String, default: 'female' }
    },

    data () {
      return {
        selected_: this.selected
      }
    },
    watch: {
      'selected': {
        // deep: true,
        handler () {
          this.selected_ = this.selected
        }
      }
    },

    computed: {
      hasSelected () {
        if (this.selected_.length <= 0) {
          return false
        } else {
          return true
        }
      },

      nome () {
        return 'modalSelectionGrid' + this.title.replaceAll(' ', '').replaceAll('.', '').replaceAll('(', '').replaceAll(')', '')
      },

      hasFilter (item) {
        return this.selected.length !== 0 && this.selected.length !== this.data.length
      }

      // selectedText () {
      //   if (this.gender === 'male') {
      //     return 'Selecionado'
      //   } else {
      //     return 'Selecionada'
      //   }
      // }
    },

    methods: {
      confirm (selected) {
        this.selected_ = selected
        this.$emit('onConfirm', selected)
      }
    }
  }
</script>

<template>
  <span style="margin:0; border:0; padding-top:0">

    <a
      data-toggle="modal"
      :data-target="'#modalSelectionGrid' +  title.replaceAll(' ', '').replaceAll('.', '').replaceAll('(', '').replaceAll(')', '')"
      ><i class="glyphicon glyphicon glyphicon-filter" title="Filtrar" :style="hasFilter ? 'color: green' : ''"/>
    </a>

    <oiModal
      :id="nome"
      :title="'Seleção de ' + title" 
      size="l">

      <oiEdit slot="body"
          :title="title"
          :data="data"
          :selected="selected_"
          :gender="gender"
          @onConfirm="confirm">
      </oiEdit> 

    </oiModal>
   
  </span>
</template>

<style scoped>
  a:hover, a:visited, a:link, a:active
  {
      text-decoration: none;
      cursor: pointer;      
      font-size: 12px;
  }

  .fd-label {
    margin: 0; 
    border: 0; 
    padding: 0; 
    padding-left: 5px; 
    padding-top: 1px; 
    color: gray;
  }
  hr {
      height: 4px;
      box-shadow: inset 0 4px 4px -4px rgba(0, 0, 0, 0.4);
      margin: 0px;
      border: 0px;
      padding: 0px;
      margin-top: 2px;
  } 
</style>
