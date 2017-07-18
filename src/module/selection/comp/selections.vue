<script>
  import oiModal from '@/module/modal/comp/Modalx.vue'
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
      isShowButtonSelected: { type: Boolean },
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
        :data-target="'#modalEdit' + idChild">Seleção
    </button>

    <oiModal :id="'modalEdit' + idChild">

      <div class="row" style="margin:0; border:0; padding:0" slot="header">
        <div class="col-xs-1" style="padding:0; margin:0; border:0">
          <a class="btn btn-primary btn-xs"   
            role="button"
            data-dismiss="modal">
            Fechar
          </a> 
        </div>
      
        <div class="col-xs-10" style="text-align: center">
          <label class="fd-label">Seleção de {{title}}</label>
        </div>
        
        <hr class="col-xs-12" >
      </div>

      <editSelections slot="body"
          :id="idChild"
          :title="title"
          :dataSource="dataSource"
          :itemsSelected="itemsSelected_"
          @onChangeSelected="changeSelected">
      </editSelections> 

    </oiModal>

    <showSelections
        v-show="hasItemsSelected && !isShowButtonSelected"
        :dataSource="itemsSelected_">
    </showSelections> 

    <!-- SHOW -->
    <button 
        type="button"
        v-show="hasItemsSelected && isShowButtonSelected"
        class="btn btn-xs"
        data-toggle="modal" 
        :data-target="'#modalShow' + idChild"
    >{{selectedText}}
    </button>

    <oiModal :id="'modalShow' + idChild">
      <div class="row" style="padding:0; margin:0; border:0" slot="header">
        <div class="col-xs-1" style="padding:0; margin:0; border:0">
          <a class="btn btn-primary btn-xs"   
            role="button"
            data-dismiss="modal">
            Fechar
          </a> 
        </div>
      
        <div class="col-xs-10" style="color: read; padding:0; margin:0; border:0; text-align: center">
          <label class="fd-label">{{title}} {{selectedText}}</label>
        </div>
        
        <hr class="col-xs-12">
      </div>

      <showSelections slot="body"
          :title="title"
          :dataSource="itemsSelected_"
      ></showSelections> 

    </oiModal>
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
