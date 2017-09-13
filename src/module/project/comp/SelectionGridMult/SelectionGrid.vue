selected<script>
  import { mapGetters, mapState } from 'vuex'

  export default {
    name: 'SelectionGrid',

    props: {
      projects: { type: Array, default: [] },
      selected: { type: Array, default: [] }
      // projectsLoading: { type: Boolean, default: false }
    },

    data () {
      return {
        filterTerm: '',
        selected_: this.selected,
        isUpdate: false
      }
    },

    computed: {
      ...mapGetters('project', ['projectFilterProperties']),
      ...mapState('project', ['loading']),

      filteredByTerm () {
        if (this.filterTerm !== '') {
          let words = this.filterTerm.split('+')

          return this.projects.filter(item => {
            return words.every(word => {
              return this.projectFilterProperties.some(filterProperty => {
                return item[filterProperty.name].toLowerCase().indexOf(word.toLowerCase()) > -1
              })
            })
          })
        } else {
          return this.projects
        }
      }
    },

    watch: {
      'selected': {
        handler () {
          this.selected_ = this.selected
        }
      }
    },

    methods: {
      // ...mapActions('project', ['setProjectFilterTerm', 'setSelectedProjects']),

      selectAll: function () {
        this.selected_ = this.filteredByTerm
        this.isUpdate = true
      },

      unSelectAll: function () {
        this.selected_ = []
        this.isUpdate = true
      },

      selectProject: function () {
        this.isUpdate = true
      },

      confirm: function () {
        this.$emit('onConfirm', this.selected_)
        this.isUpdate = false
      }
    }
  }
</script>

<template>
  <span>
    <div class="loader" v-show="loading" style="margin-top: 25px;margin-bottom: 25px"></div>    

    <div v-show="!loading">
      <div class="col-xs-12" style="margin:0; border:0; padding:0; padding-bottom: 3px">
        <span style="white-space:nowrap; padding:0">
          <!--  v-show="dataSource.length > 0" -->
          <button 
            type="button" 
            class="btn btn-xs" 
            @click="selectAll">Todos
          </button>

          <!--  v-show="selected.length > 0" -->
          <button 
            type="button" 
            class="btn btn-xs" 
            @click="unSelectAll">Nenhum
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
          autofocus v-focus
          class="form-control" 
          style="margin: 0; padding-left: 3px; height: 25px"
          placeholder="Informe os filtros. Na pesq. por farol, digite a cor 'verd' ou 'amar' ou 'verm'. Ex: multip+verd+2017."
          v-model="filterTerm"
          @keyup="setProjectFilterTerm(filterTerm)"
      />    
      
      <table class="table table-condensed table-striped table-hover table-bordered" style="margin-bottom:5px; padding-bottom:0; margin-top:3px">
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

        <tbody v-for="project in filteredByTerm">
            <tr>
                <td style="padding: 1px; margin: 0px; border-top: 1px; text-align: center; width: 25px; border-radius: 3px;">
                    <input
                        type="checkbox" 
                        :value="project" 
                        v-model="selected_"
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
    </div>
  </span>            
</template>

<style scoped>
  table {
    border-collapse: separate;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
  }
  .loader {
      margin: auto;
      width: 50%;
      border: 16px solid #f3f3f3; /* Light grey */
      border-top: 16px solid #3498db; /* Blue */
      border-bottom: 16px solid #3498db;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
  }

  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }  
</style>
