<script>
    export default {
      name: 'editSelections',

      props: {
        title: {type: String},
        data: {type: Array},
        selected: {type: Array},
        gender: { type: String }
      },

      data () {
        return {
          isUpdate: false,
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

      // computed: {
      //   selected_: {
      //     get () { return this.selected },
      //     set (value) {
      //       this.selected = value
      //     }
      //   }
      // },

      methods: {
        selectAll: function () {
          this.selected_ = this.data
          this.isUpdate = true
        },

        unSelectAll: function () {
          this.selected_ = []
          this.isUpdate = true
        },

        update: function () {
          this.isUpdate = true
        },

        confirm () {
          this.$emit('onConfirm', this.selected_)
          this.isUpdate = false
        }
      }
    }
</script>

<template>
  <div style="margin-left:3px; margin-bottom:0px; text-align: left">
    <button
        type="button" 
        class="btn btn-xs"
        @click="selectAll()">{{ gender === 'male' ? 'Todos' : 'Todas'}}
    </button>
    
    <button
        type="button" 
        class="btn btn-xs" 
        @click="unSelectAll()">{{ gender === 'male' ? 'Nenhum' : 'Nenhuma' }}
    </button>
    
    <button
        type="button" 
        class="btn btn-primary btn-xs" 
        data-dismiss="modal"
        v-show="isUpdate"
        v-on:click="confirm()">Confirmar
    </button>


    <hr class="col-xs-12">

    <div class="row well-sm reset">

      <div class="col-xs-12 col-sm-6 col-lg-4" style="padding:0"
        v-for="item in data" 
        track-by="$index"
        >

        <div class="col-xs-1">
          <input style="margin-top:4px"
            type="checkbox" 
            :value=item
            v-model="selected_"
            @click="update" 
          />
        </div>       

        <div class="col-xs-11" style="padding-left:10px; margin-bottom:0px">
          <label style="font-size:small; font-weight:normal; margin-left:-15px; margin-bottom:1px" v-text="item.name"></label>
        </div>

      </div>

    </div>                
  </div>
</template>

<style scoped>
  .reset {
    margin: 0;
    border: 0;
    padding: 0;
  }  
  .fd-label {
    margin: 0; 
    border: 0; 
    padding: 0; 
    color: gray;
  }  
  hr {
      height: 2px;
      box-shadow: inset 0 2px 2px -2px rgba(0, 0, 0, 0.2);
      margin: 0px;
      border: 0px;
      padding: 0px;
      margin-top: 2px;
  } 
</style>
