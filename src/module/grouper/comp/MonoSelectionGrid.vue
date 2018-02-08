<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'MonoSelectionGrid',

    computed: {
      // ...mapGetters('grouperConsult', ['filteredByTerm'])
      ...mapGetters('grouper', ['filteredByTerm'])
    },

    methods: {
      ...mapActions('grouper', ['setSelected']),

      select (item) {
        this.setSelected(item)
        this.$router.push({ name: 'grouperShowById', params: { grouperId: item.id } })
      }
    }
  }
</script>

<template>
  <div>
    <table class="table table-condensed table-striped table-hover table-bordered" style="margin-bottom:0; padding-bottom:0">
      <thead>
        <tr>
          <th style="padding: 1px; margin: 0px; border-top: 1px; text-align: center; width: 25px;">
            <font size="2px"></font>
          </th>                                
          <!--
          <th class="text-center">
              <font size="2px">Farol</font>
          </th>                                
          -->
          <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
            <font size="2px">Nome</font>
          </th>                                
        </tr>
      </thead>
      <tbody v-for="item in filteredByTerm">
        <tr>
          <td style="padding: 1px; margin: 0px; border-top: 1px; text-align: center; width: 25px; border-radius: 3px;">
            <a class='btn' 
              style="padding: 0px; margin: 0px; border-top: 1px"
              data-toggle="tooltip" 
              title="Exibir" 
              @click="select(item)">
              <i class='glyphicon glyphicon-list-alt'></i>
            </a>
          </td>
          <!--
          <td class="text-center" style="padding:0;">
              <div class="text-center" style="padding:0;">
                  <img alt="Farol Verde" src="../../asset/images/verde.png" v-show="item.trafficLight === 'VERDE'" class="img">
                  <img alt="Farol Amarelo" src="../../asset/images/amarelo.png" v-show="item.trafficLight === 'AMARELO'" class="img">
                  <img alt="Farol Vermelho" src="../../asset/images/vermelho.png" v-show="item.trafficLight === 'VERMELHO'"class="img">
              </div>
          </td>
          -->
          <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
              <font size="2px" v-text="item.name"></font>
          </td>
        </tr>
      </tbody> 
    </table>
  </div>
</template>

<style scoped>
  img {
    margin-top: 8px; 
    border: 0; 
    padding: 0;
    height: 18px;
    width: 18px;
  } 
  table {
    border-collapse: separate;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
  }  
  .oi-icon {
    font-size: medium;
  }
</style>
