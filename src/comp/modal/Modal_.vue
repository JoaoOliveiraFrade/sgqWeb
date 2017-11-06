<script>
  export default {
    name: 'Modal_',

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
                <div class="modal-body">
                    <slot></slot>
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
    .modal-body {
      margin:0px;
      border:0px;
      padding:5px;
    }
</style>
