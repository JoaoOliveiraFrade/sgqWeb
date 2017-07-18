<script>
  import { mapGetters } from 'vuex'
  import oiModal from '@/module/modal/comp/Modalx.vue'
  import oiGridShowSelectionProject from '@/module/project/comp/SelectionProjectGridMult/GridShowSelectionProject.vue'
  import oiEditSelectionProject from '@/module/project/comp/SelectionProjectGridMult/EditSelectionProject.vue'

  export default {
    name: 'SelectionProjectGridMult',

    components: { oiModal, oiGridShowSelectionProject, oiEditSelectionProject },

    data () {
      return {
        title: 'Projeto',
        idChild: 'project'
      }
    },

    computed: {
      ...mapGetters(['selectedProjects'])
    },

    methods: {
      confirmSelection () {
        this.$emit('confirmSelection')
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

      <oiEditSelectionProject 
        @confirmSelection="confirmSelection"
        slot="header"
      />
    </oiModal>

    <!-- SHOW -->
    <button 
        type="button"
        v-show="selectedProjects.length"
        class="btn btn-xs"
        data-toggle="modal" 
        :data-target="'#modalShow' + idChild">Selecionado
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
          <label class="fd-label">{{title}} Selecionado</label>
        </div>
        
        <hr class="col-xs-12">
      </div>

      <oiGridShowSelectionProject slot="body"/>

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
