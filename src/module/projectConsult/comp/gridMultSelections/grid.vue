<script>
  import oiModal from '@/module/modal/comp/Modalx.vue'

  export default {
    name: 'projectGridMultSelectionsGrid',

    components: { oiModal },

    props: {
      projects: {type: Array},
      selected: {type: Array},
      selectedProjectsUpdated: {type: Boolean}
    },

    data () {
      return {
        selected_: this.selected,
        selectedProjectsUpdated_: this.selectedProjectsUpdated
      }
    },

    created () {
      console.log('projectGridMultSelectionsGrid - created')
    },

    mounted () {
      console.log('projectGridMultSelectionsGrid - mounted')
    },

    updated () {
      if (this.selectedProjectsUpdated || this.selectedProjectsUpdated_) {
        console.log('projectGridMultSelectionsGrid - updated - true')

        this.selectedProjectsUpdated_ = false
        this.$emit('setSelectedProjectsUpdated', this.selectedProjectsUpdated_)

        this.selected_ = this.selected
      } else {
        console.log('projectGridMultSelectionsGrid - updated - false')
      }
    }
  }

</script>

<template>
  <span>
    <pre v-show="false">{{projects}}</pre>
    <pre v-show="false">{{selectedProjectsUpdated}}</pre>
    <pre v-show="false">{{selectedProjectsUpdated_}}</pre>
  
    <span v-show="false">{{selected}}</span>
    <span v-show="false">{{selected_}}</span>

    <table class="table table-condensed table-striped table-hover" style="margin-bottom:0;padding-bottom:0">
    <thead>
        <tr>
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
            <th width="1%" style="padding:0">
            </th>                                
        </tr>
    </thead>

    <tbody v-for="project in projects">
        <tr style="padding:0">
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

            <td style="padding:0">
                <input 
                    type="checkbox" 
                    :id="project.id" 
                    :value="project.id" 
                    v-model="selected_"
                />
            </td>
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
