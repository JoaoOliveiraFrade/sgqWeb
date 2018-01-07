<script>
  import oiModal from '@/comp/modal/Modal2.vue'
  import showSelections from '@/module/selection/comp/showSelections.vue'
  import editSelections from '@/module/selection/comp/editSelections.vue'

  export default {
    name: 'selections',

    components: { oiModal, showSelections, editSelections },

    props: {
      idChild: { type: String },
      title: { type: String },
      dataSource: { type: Array },
      itemsSelected: { type: Array },
      showButtonSelected: { type: Boolean },
      gender: { type: String }
    },

    data () {
      return {
        itemsSelected_: this.itemsSelected,
        selectedText: ''
      }
    },
    watch: {
      'itemsSelected': {
        // deep: true,
        handler () {
          this.itemsSelected_ = this.itemsSelected
        }
      }
    },

    created () {
      if (this.gender === 'male') {
        this.selectedText = 'Selecionado'
      } else {
        this.selectedText = 'Selecionada'
      }
    },

    computed: {
      hasItemsSelected () {
        if (this.itemsSelected_ === null || this.itemsSelected_ === undefined) {
          return false
        }

        if (this.itemsSelected_.length <= 0) {
          return false
        } else {
          return true
        }
      }
    },

    methods: {
      changeSelected (itemsSelected) {
        this.itemsSelected_ = itemsSelected
        this.$emit('onChangeSelected', itemsSelected)
      }
    }

  }
</script>

<template>
  <span style="margin:0; border:0; padding:0">
    <label class="fd-label" v-text="title">:</label>
    
    <!-- EDIT -->
    <button 
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        :data-target="'#modalEdit' + idChild"
      >
        Seleção
    </button>
    
    <oiModal :id="'modalEdit' + idChild" :title="'Seleção de ' + title" size="l">
      <editSelections slot="body"
          :id="idChild"
          :title="title"
          :dataSource="dataSource"
          :itemsSelected="itemsSelected_"
          :gender="gender"
          @onChangeSelected="changeSelected">
      </editSelections> 
    </oiModal>    

    <!-- SHOW -->
    <button 
        type="button"
        v-show="hasItemsSelected && showButtonSelected"
        class="btn btn-xs"
        data-toggle="modal" 
        :data-target="'#modalShow' + idChild"
    >
      {{selectedText}}
    </button>

    <oiModal :id="'modalShow' + idChild" :title="title + ' ' + selectedText" size="l">
      <showSelections slot="body"
          :title="title"
          :dataSource="itemsSelected_"
      ></showSelections> 
    </oiModal>

    <showSelections
        v-show="hasItemsSelected && !showButtonSelected"
        :dataSource="itemsSelected_">
    </showSelections>     
    
  </span>
</template>

<style scoped>
  .fd-label {
    margin: 0; 
    border: 0; 
    padding: 0; 
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
