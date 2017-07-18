<script>
  export default {
    name: 'Modalx',

    props: ['id'],

    methods: {
      close () {
        this.$emit('onClose')
      }
    }
  }

</script>

<template>
    <div class="modal" :id="id">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="header"></slot>
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

<style scoped>
    body .modal-dialog { /* Width */
        max-width: 95%;
        width: auto !important;
    }
    .modal-header {
        margin:0px;
        border:0px;
        padding:2px;
    }
    .modal-body, .modal-footer {
        margin:0px;
        border:0px;
        padding:2px;
        padding-bottom:0px;
    }
</style>
