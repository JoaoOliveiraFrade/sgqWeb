<script>
  export default {
    name: 'showSelections',

    props: {
      data: {type: Array}
    }
  }
</script>

<template>
  <div class="row well-sm" style="padding-top:0px; padding-bottom:0px">
    <div class="col-xs-12 col-sm-6 col-lg-4" v-for="item in data" track-by="$index" style="padding:0">
          <!--
          <div class="col-xs-1" style="margin:0; border:0">
            <i class='glyphicon glyphicon-ok' style="font-size: x-small"></i>
          </div>
          -->
          <div class="col-xs-12" >
            <label :for=item style="font-size:small;  font-weight:normal; margin-bottom:1px">{{item.name}}</label>
          </div>
      </div>
  </div>
</template>
