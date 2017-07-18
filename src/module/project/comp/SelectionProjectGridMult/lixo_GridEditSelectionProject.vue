<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'GridEditSelectionProject',

    data () {
      return {
        selected: [],
        selectedAux: []
      }
    },

    mounted () {
      this.selectedAux = this.selectedProjects
    },

    computed: {
      ...mapGetters(['setProjectFilterTerm', 'projectsFilteredByTerm', 'selectedProjects'])
    },

    methods: {
      ...mapActions(['setSelectedProjects'])
    },

    watch: {
      'selectedProjects': {
        // deep: true,
        handler () {
          this.selected = this.selectedProjects
        }
      }
    }
  }

</script>

<template>
  <span>
    <table class="table table-condensed table-striped table-hover" style="margin-bottom:0px;">
    <thead>
        <tr>
            <th width="1%" style="padding:0">
            </th>                                

            <th style="padding:0">
                <font size="2" class="text-nowrap">Rel.
                    <a href="#" @click.prevent="setOrder('release')">
                    </a>
                </font>
            </th>

            <th style="padding:0">
                <font size="2" class="text-nowrap">Clas.
                    <a href="#" @click.prevent="setOrder('classification')">
                    </a>
                </font>
            </th style="padding:0">

            <th style="padding:0">
                <font size="2" class="text-nowrap">Proj.
                    <a href="#" @click.prevent="setOrder('project')">
                    </a>
                </font>
            </th>
            <th style="padding:0">
                <font size="2" class="text-nowrap">Nome
                    <a href="#" @click.prevent="setOrder('name')">
                    </a>
                </font>
            </th>
        </tr>
    </thead>

    <tbody v-for="project in projectsFilteredByTerm">
        <tr>
            <td style="padding:0; padding-right:5px">
                <input
                    type="checkbox" 
                    :id="project.id" 
                    :value="project.id" 
                    @click="setSelectedProjects(selected)"
                    v-model="selected"
                />
            </td>

            <td style="padding:0">
                <font size="2">{{project.release}}</font>
            </td style="padding:0">

            <td style="padding:0">
                <font size="2">{{project.classification}}</font>
            </td style="padding:0">

            <td style="padding:0">
                <font size="2">{{project.subprojectDelivery}}</font>
            </td style="padding:0">

            <td style="padding:0">
                <font size="2">{{project.name}}</font>
            </td style="padding:0">
        </tr>
    </tbody> 
    </table>
 </span>            
</template>

<style scoped>
  .oi-well {
    margin: 0;
    border: 0;
    padding: 0px;
  }
  .oi-col {
    padding: 3px; 
    margin: 0; 
    border: 0;
  }  
  .oi-message {
    margin: 0; 
    margin-left: 10px; 
    vertical-align: middle;
    font-size: 12px;
    font-weight: normal;
  }
  label { list-style-type: decimal; }  
</style>
