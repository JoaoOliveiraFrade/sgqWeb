<script>
  import oiModal from '@/module/modal/comp/modal.vue'
  import showSelections from './showSelections.vue'
  import editSelections from './editSelections.vue'

  export default {
    name: 'selections',

    components: { oiModal, showSelections, editSelections },

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
      changeSelected (selected) {
        this.selected_ = selected
        this.$emit('onSelect', selected)
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
        :data-target="'#modalEdit' + title.split(' ').join('')">
        Seleção
    </button>
    <oiModal :id="'modalEdit' + title.split(' ').join('')" :title="'Seleção de ' + title" size="l">
      <editSelections slot="body"
          :title="title"
          :data="data"
          :selected="selected_"
          :gender="gender"
          @onSelect="changeSelected">
      </editSelections> 
    </oiModal>

    <button 
        type="button"
        v-show="hasSelected && isShowButtonSelected"
        class="btn btn-xs"
        data-toggle="modal" 
        :data-target="'#modalShow' + title.split(' ').join('')">
      {{selectedText}}
    </button>
    <oiModal :id="'modalShow' + title.split(' ').join('')" :title="title + ' ' + selectedText" size="l">
      <showSelections slot="body"
          :title="title"
          :data="selected_"
      ></showSelections> 
    </oiModal>

    <showSelections
        v-show="hasSelected && !isShowButtonSelected"
        :data="selected_">
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
