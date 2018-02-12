<script>
  // import jQuery from 'jquery/dist/jquery.js'
  import oiIcon from '@/genComp/link/Icon.vue'

  export default {
    name: 'Modal2',

    components: { oiIcon },

    props: {
      id: { type: String },
      title: { type: String },
      size: { type: String }
    },

    methods: {
      close () {
        this.$emit('onClose')
        this.$router.push('/')
      }
    }
  }
</script>

<template>
<div class="modal fade" :id="id" :ref="id">
    <div class="modal-dialog" :style="size==='l' ? 'max-width: 95%; width: auto !important;' : ''">
        <div class="modal-content" style="margin:0; border:0; padding:0; background-color: #f8f8ff">

            <div class="modal-header">
                <!--data-toggle="tooltip" data-dismiss="modal" -->

                <oiIcon class="icon" 
                    icon="remove-circle" 
                    title="Fechar"
                    data-dismiss="modal" 
                    @click="close"
                />

                <hr class="col-xs-12">
                <label class="fd-label" >{{title}}</label>
            </div>


            <div class="modal-body" >
                <slot name="body"></slot>
            </div>
            
            <div class="modal-footer">
                <slot name="footer"></slot>
            </div>
            
        </div>
    </div>
</div>      
</template>

<style scoped>
    a:hover, a:visited, a:link, a:active
    {
        text-decoration: none;
        cursor: pointer;      
    }

    .modal-header {
        margin:0;
        border:0;
        padding:0;
        text-align: left
    }

    .fd-label {
        margin: 0;
        border: 0; 
        padding: 0; padding-top:3.5px; padding-left:2px;
        font-size: medium;
        white-space: normal;
        vertical-align: top;
        color: #E95420;
    }
    .icon {
        margin:0;
        border:0;
        padding:0;
        padding-top:4px;
        margin-left:6px;
        font-size: 20px;        
    }    
    .modal-body, .modal-footer {
        margin:0px;
        border:0px;
        padding:0px; padding-left:10px; padding-right:10px;
        width: auto;
        height: 100%;
    }
    hr {
        height: 4px;
        box-shadow: inset 0 4px 4px -4px rgba(0, 0, 0, 0.4);
        margin: 0px;
        border: 0px;
        padding: 0px;
    } 
</style>
