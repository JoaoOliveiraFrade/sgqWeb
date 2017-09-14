<script>
  export default {
    name: 'Modal',

    props: {
      id: { type: String },
      title: { type: String },
      size: { type: String }
    },

    methods: {
      close () {
        this.$emit('onClose')
      }
    }
  }

</script>

<template>
    <div class="modal" :id="id" >
        <div class="modal-dialog" :style="size==='l' ? 'max-width: 95%; width: auto !important;' : ''">
            <div class="modal-content" style="background-color: #f8f8ff">
                <div class="modal-header" style="text-align: left;">
                    <a class='oi-icon' href="#"
                        data-toggle="tooltip" 
                        data-dismiss="modal"
                        title="Fechar">
                        <i class='glyphicon glyphicon-remove-circle' ></i>
                    </a>                        
            
                    <label class="fd-label" >{{title}}</label>
                    
                    <hr class="col-xs-12">
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>      
</template>
<!--


      <showSelections slot="body"
          :title="title"
          :dataSource="itemsSelected_"
      ></showSelections> 

-->
<style scoped>
    .fd-label {
        margin: 0; margin-left:5px; margin-top:0.5px;
        border: 0; 
        padding: 0; 
        font-size: medium;
        white-space: normal;
        vertical-align: top;
    }
    .oi-icon {
        margin: 0; margin-left:5px;
        border: 0;
        padding: 0; 
        font-size: large;
    }    
    .modal-header {
        margin:0px; margin-top: 3px;
        border:0px;
        padding:0px;
    }
    .modal-body, .modal-footer {
        margin:0px;
        border:0px;
        padding:0px; padding-left:10px; padding-right:10px;
    }
    hr {
        height: 4px;
        box-shadow: inset 0 4px 4px -4px rgba(0, 0, 0, 0.4);
        margin: 0px;
        border: 0px;
        padding: 0px;
    } 
  </style>
