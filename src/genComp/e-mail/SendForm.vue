<script>
  export default {
    name: 'SendForm',

    props: {
      url: { type: String },
      receiver: { type: String, default: '' },
      subject: { type: String, default: '' }
    },

    data () {
      return {
        format: ''
      }
    }

  }
</script>

<template>

  <div class="container-fluid" style="margin-top:7px;">

    <div class="row">
        <div class="form-group">
            <label>URL:</label>
            <input type="text" autofocus class="form-control input-sm" v-model="url">
        </div>
    </div>

    <div class="row">
        <div class="form-group">
            <label>Desinatário:</label>
            <input type="text" autofocus class="form-control input-sm" v-model="receiver">
        </div>
    </div>

    <div class="row">
        <div class="form-group">
            <label>Assunto</label>
            <input type="text" class="form-control input-sm" v-model="subject">
        </div>
    </div>

    <div class="row">
      <div class="form-group" style="text-align: center; margin-bottom:5px;">

        <oiButton
          icon="send"
          label="Enviar"
          title="Enviar Email"
          :disabled="!isUserValid"
          @click="logon(user)"
        />
        

      </div>
    </div>

  </div>

</template>

<style scoped>
</style>
