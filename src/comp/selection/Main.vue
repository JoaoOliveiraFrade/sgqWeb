<script>
  import oiModal from '@/module/modal/comp/modal.vue'
  import oiShow from './Show.vue'
  import oiEdit from './Edit.vue'

  export default {
    name: 'selections',

    components: { oiModal, oiShow, oiEdit },

    props: {
      title: { type: String, required: true },
      data: { type: Array, required: true },
      selected: { type: Array, default: [] },
      isShowButtonSelected: { type: Boolean, default: true },
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

      selectedText () {
        if (this.gender === 'male') {
          return 'Selecionado'
        } else {
          return 'Selecionada'
        }
      }
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
  <span style="margin:0; border:0; padding:0">
    <label class="fd-label" v-text="title">:</label>
    <button 
        type="button"     
        class="btn btn-xs"
        data-toggle="modal" 
        :data-target="'#modalEdit' + title.replace(' ', '').replace('.', '')">
        Seleção
    </button>
    <oiModal :id="'modalEdit' + title.replace(' ', '').replace('.', '')" :title="'Seleção de ' + title" size="l">
      <oiEdit slot="body"
          :title="title"
          :data="data"
          :selected="selected_"
          :gender="gender"
          @onConfirm="confirm">
      </oiEdit> 
    </oiModal>

    <button 
        type="button"
        v-show="hasSelected && isShowButtonSelected"
        class="btn btn-xs"
        data-toggle="modal" 
        :data-target="'#modalShow' + title.replace(' ', '').replace('.', '')">
      {{selectedText}}
    </button>
    <oiModal :id="'modalShow' + title.replace(' ', '').replace('.', '')" :title="title + ' ' + selectedText" size="l">
      <oiShow slot="body"
          :title="title"
          :data="selected_"
      ></oiShow> 
    </oiModal>

    <oiShow
        v-show="hasSelected && !isShowButtonSelected"
        :data="selected_">
    </oiShow>     
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
