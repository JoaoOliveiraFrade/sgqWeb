<script>
    export default {
      name: 'editSelections',

      props: {
        id: {type: String},
        title: {type: String},
        dataSource: {type: Array},
        itemsSelected: {type: Array},
        gender: { type: String },
        onStart: {type: Function}
      },

      data () {
        return {
          isUpdate: false,
          itemsSelected_: this.itemsSelected
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

      // computed: {
      //   itemsSelected_: {
      //     get () { return this.itemsSelected },
      //     set (value) {
      //       this.itemsSelected = value
      //     }
      //   }
      // },

      methods: {
        selectAll: function () {
          this.itemsSelected_ = this.dataSource.map(e => e.id)
          this.isUpdate = true
        },

        unSelectAll: function () {
          this.itemsSelected_ = []
          this.isUpdate = true
        },

        update: function () {
          this.isUpdate = true
        },

        confirm () {
          this.$emit('onChangeSelected', this.itemsSelected_)
          this.isUpdate = false
        }
      }
    }
</script>

<template>
    <span style="margin-left:3px">
        <button 
            type="button" 
            id="selectAll" 
            class="btn btn-xs"
            @click="selectAll()">{{ gender === 'male' ? 'Todos' : 'Todas'}}
        </button>
        
        <button 
            type="button" 
            id="unSelectAll" 
            class="btn btn-xs" 
            @click="unSelectAll()">{{ gender === 'male' ? 'Nenhum' : 'Nenhuma' }}
        </button>
        
        <button 
            type="button" 
            id="Confirmar" 
            class="btn btn-primary btn-xs" 
            data-dismiss="modal"
            v-show="isUpdate"
            v-on:click="confirm()">Confirmar
        </button>

        <hr class="col-xs-12">

        <div class="row well-sm oi-well">
          <div class="col-xs-12 col-sm-6 col-lg-4" v-for="item in dataSource" track-by="$index" style="padding:0">
            <div class="col-xs-1">
              <input style="margin-top:4px"
                type="checkbox" 
                :id=item.id
                :value=item.id
                v-model="itemsSelected_"
                @click="update" 
              />
            </div>       

            <div class="col-xs-11">
              <label style="font-size:small; font-weight:normal; margin-left:-15px; margin-bottom:1px" v-text="item.id"></label>
            </div>                
        </div>                
        </div>
    </span>
</template>

<style scoped>
  .oi-well {
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
