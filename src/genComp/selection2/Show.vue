<script>
    export default {
      name: 'showSelectionssfsd',
      props: {
        data: {type: Array}
      }
    }
</script>

<template>
  <div class="row well-sm" style="padding-top:5px; padding-bottom:8px;" >
    <div class="col-xs-12 col-sm-6 col-lg-4" v-for="(item, index) in data" :key="index" style="padding:0">
          <!--
          <div class="col-xs-1" style="margin:0; border:0">
            <i class='glyphicon glyphicon-ok' style="font-size: x-small"></i>
          </div>
          -->
          <div class="col-xs-12" >
            <label style="font-size:small; font-weight:normal; margin-bottom:1px">{{item}}</label>
          </div>
      </div>
  </div>
</template>
