selected<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'GridSelection',

    data () {
      return {
        filterTerm: '',
        selected: [],
        isUpdate: false
      }
    },

    computed: {
      ...mapGetters(['projectsFilteredByTerm', 'selectedProjects'])
    },

    watch: {
      'selectedProjects': {
        // deep: true,
        handler () {
          this.selected = this.selectedProjects
        }
      }
    },

    methods: {
      ...mapActions(['setProjectFilterTerm', 'setSelectedProjects']),

      selectAll: function () {
        this.selected = this.projectsFilteredByTerm
        this.isUpdate = true
      },

      unSelectAll: function () {
        this.selected = []
        this.isUpdate = true
      },

      selectProject: function () {
        this.isUpdate = true
      },

      confirm: function () {
        this.setSelectedProjects(this.selected)
        this.isUpdate = false
      }
    }
  }
</script>

<template>
  <span>
    <div class="col-xs-12" style="margin:0; border:0; padding:0; padding-bottom: 3px">
      <span style="white-space:nowrap; padding:0">
        <!--  v-show="dataSource.length > 0" -->
        <button 
          type="button" 
          class="btn btn-xs" 
          @click="selectAll">Tudo
        </button>

        <!--  v-show="selected.length > 0" -->
        <button 
          type="button" 
          class="btn btn-xs" 
          @click="unSelectAll">Nada
        </button>

        <button 
            type="button" 
            class="btn btn-primary btn-xs" 
            data-dismiss="modal"
            v-show="isUpdate"
            @click="confirm">Confirmar
        </button>

        <slot/>
        
      </span>    
    </div>
    
    <input type="text"
        autofocus
        class="form-control" 
        style="margin: 0; padding-left: 3px; height: 25px"
        placeholder="Informe os filtros. Na pesq. por farol, digite a cor 'verd' ou 'amar' ou 'verm'. Ex: multip+verd+2017."
        v-model="filterTerm"
        @keyup="setProjectFilterTerm(filterTerm)"
    />    
    
    <table class="table table-condensed table-striped table-hover table-bordered" style="margin-bottom:0; padding-bottom:0; margin-top:3px">
      <thead>
          <tr>
              <th style="padding: 1px; margin: 0px; border-top: 1px; text-align: center; width: 25px;">
                <font size="2px"></font>
              </th>                                

              <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                  <font size="2" class="text-nowrap">Rel.
                      <a href="#" @click.prevent="setOrder('release')">
                      </a>
                  </font>
              </th>

              <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                  <font size="2" class="text-nowrap">Clas.
                      <a href="#" @click.prevent="setOrder('classification')">
                      </a>
                  </font>
              </th style="padding:0">

              <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                  <font size="2" class="text-nowrap">Proj.
                      <a href="#" @click.prevent="setOrder('project')">
                      </a>
                  </font>
              </th>
              <th style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                  <font size="2" class="text-nowrap">Nome
                      <a href="#" @click.prevent="setOrder('name')">
                      </a>
                  </font>
              </th>
          </tr>
      </thead>

      <tbody v-for="project in projectsFilteredByTerm">
          <tr>
              <td style="padding: 1px; margin: 0px; border-top: 1px; text-align: center; width: 25px; border-radius: 3px;">
                  <input
                      type="checkbox" 
                      :value="project" 
                      v-model="selected"
                      @click="selectProject"
                  />
              </td>

              <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                  <font size="2">{{project.release}}</font>
              </td style="padding:0">

              <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                  <font size="2">{{project.classification}}</font>
              </td style="padding:0">

              <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                  <font size="2">{{project.subprojectDelivery}}</font>
              </td style="padding:0">

              <td style="padding: 1px; margin: 0px; border-top: 1px; padding-left: 5px;">
                  <font size="2">{{project.name}}</font>
              </td style="padding:0">
          </tr>
      </tbody> 
    </table>

  </span>            
</template>

<style scoped>
  table {
    border-collapse: separate;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
  }  
</style>
