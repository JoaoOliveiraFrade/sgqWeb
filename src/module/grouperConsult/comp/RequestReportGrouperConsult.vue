<script>
  // import { mapActions } from 'vuex'
  // import ServicesProjectXgrouper from '@/module/projectXgrouper/services'
  // import ServicesProject from '@/module/project/test/services'
  // import ServicesGrouper from '@/module/grouperConsult/services'
  // import oiShowGridProject from '@/module/project/test/comp/ShowGridProject.vue'
  import { mapGetters } from 'vuex'
  import oiModal from '@/comp/modal/Modalx.vue'
  import { paths } from '@/environment'
  import Toastr from 'toastr'

  export default {
    name: 'RequestReportGrouperConsult',

    components: { oiModal },

    data () {
      return {
        email: {
          from: 'sgq@oi.net.br',
          to: '',
          subject: '',
          url: ''
        },

        emailType: 'HTML'
      }
    },

    computed: {
      ...mapGetters(['grouper', 'grouperProjects'])
    },

    methods: {
      sendReportByEmail () {
        Toastr.info('E-mail solicitado! Pode continuar a usar a aplicação...', '', { timeOut: 20000 })

        this.email.url = paths.app + '/grouperConsult/reportById/' + this.grouper.id

        if (this.emailType === 'Imagem') {
          // this.email.url = paths.app + '/grouperConsult/report/' + this.grouper.id
          this.$http.post(paths.api + '/SendEmailGrouper', this.email).then(r => {
            Toastr.success('E-mail enviado!', '', { timeOut: 15000 })
          }, e => {
            Toastr.error('Não foi possível enviar o e-mail. Tente novamente!', '', { timeOut: 15000 })
          })
        } else {
          let reportGrouper = {
            email: this.email,
            grouper: this.grouper,
            projects: this.grouperProjects
          }
          this.$http.post(paths.api + '/SendEmailGrouperHtml', reportGrouper).then(r => {
            Toastr.success('E-mail enviado!', '', { timeOut: 15000 })
          }, e => {
            Toastr.error('Não foi possível enviar o e-mail. Tente novamente!', '', { timeOut: 15000 })
          })
        }
      },

      closeModalShowReport () {
        this.$router.push({ name: 'showByIdGrouperConsult', params: { grouper: this.grouper.id } })
      }
    },

    mounted () {
      this.email.subject = '[Status Agrupador] ' + this.grouper.name
    }

  }
</script>

<template>
  <oiModal id="showReport">
    <div style="margin:0; border:0; padding:0" slot="header">
      <div class="col-xs-1" style="padding:0; margin:0; border:0">
        <a class="btn btn-primary btn-xs"   
          role="button"
          data-dismiss="modal"
          @click="closeModalShowReport">
          Fechar
        </a> 
      </div>
    
      <div class="col-xs-10" style="text-align: center">
        <label class="fd-label">{{email.subject}}</label>
      </div>
      
      <hr class="col-xs-12" >
    </div>


    <div class="text-center" style="padding: 0; padding-left: 15px; padding-right: 15px" slot="body">
      <div class="form-group" style="text-align: left">
          E-mail de destino:
        <input type="email" autofocus v-focus
          class="form-control" 
          placeholder="email de destino" 
          v-model="email.to">
      </div>

      <div class="form-group" style="text-align: left; margin-bottom: 3px;">
          Assunto do e-mail:
          <textarea class="form-control" rows="2" id="subject" placeholder="título da menssagem" v-model="email.subject"></textarea>
      </div>

      <div style="white-space: nowrap; padding: 0px; margin: 0px; border: 0px">
        <div class="col-sm-1">
          <label style="text-align: left; font-weight: normal">
            Formato: 
          </label>
        </div>
        <div class="col-sm-1">
          <label style="text-align: center; font-weight: normal; font-size:10px">
            <input type="radio" value="HTML" v-model="emailType">&nbsp;HTML
          </label>
        </div>
        <div class="col-sm-1">
          <label style="text-align: center; font-weight: normal; font-size:10px">
            <input type="radio" value="Imagem" v-model="emailType">&nbsp;Imagem
          </label>
        </div>
        <div class="col-sm-6">
          <a class="btn btn-primary btn-xs" id="alert-target"
            role="button"
            :disabled="!(email.to != '' && email.subject != '')"
            @click="sendReportByEmail">
            Enviar
          </a>            
        </div>
      </div>

      </div
    </div>
  </oiModal>
  <!--
  <div class="container-fluid well well-sm">
    <div class="row">
      <div class="col-xs-12 text-left">
        <a class="btn btn-xs my-tool-tip oi-icon"
          @click="requestReport"
          data-toggle="modal"
          data-target="#showReport"
          title="Report Por Email">
          <span class="glyphicon glyphicon-envelope"></span>
        </a>
        <a class="btn btn-xs my-tool-tip oi-icon"
          @click="grouperSearch"
          data-toggle="tooltip" 
          title="Pesquisar">
          <span class="glyphicon glyphicon-search"></span>
        </a>
      </div>
    </div>

    <div class="col-xs-12 well well-sm oi-well">
      <div class="col-sm-1" style="margin:0; border:0; padding:5px" v-show="grouper.type === 'STATUS'">
          <label class="fd-label">Farol:</label>
          <div class="text-left" style="padding-bottom:5px">
            <img alt="Farol Verde" src="../../../asset/image/verde-sm.png"  v-show="grouper.trafficLight === 'VERDE'">
            <img alt="Farol Amarelo" src="../../../asset/image/amarelo-sm.png" v-show="grouper.trafficLight === 'AMARELO'">
            <img alt="Farol Vermelho" src="../../../asset/image/vermelho-sm.png" v-show="grouper.trafficLight === 'VERMELHO'">
          </div>
      </div>
      
      <div class="col-sm-11" style="margin:0; border:0; padding:5px">
        <div>
          <label class="fd-label">Nome:</label>
        </div>
        <div>
          <label 
            class="fd-content" 
            v-html="grouper.name"
          />
        </div>
      </div>

      <div class="col-xs-12" style="margin:0; border:0; padding:5px" v-show="grouper.type === 'STATUS'">
        <div>
          <label class="fd-label">Resumo Executivo Agrupador:</label>
        </div>
        <div>
          <label 
            class="fd-content" 
            v-html="grouper.executiveSummary ? grouper.executiveSummary : 'Sem dados!'"
          />
        </div>
      </div>

      <div class="col-xs-12" style="margin:0; border:0; padding:5px">
        <oiShowGridProject
          :items="projects"
        />
      </div>
    </div>
  </div>
-->    
</template>

<style scoped>
  .oi-well {
    margin: 2px; 
    padding: 0;
  }

  .oi-col {
    padding: 5px; 
    margin: 0; 
    border: 0;
  }

  .fd-label {
    margin: 0; 
    border: 0; 
    padding: 0; 
    color: gray;
  }

  .fd-content {
    margin: 0; 
    border: 0; 
    padding: 3px; 
    text-align: left;
    font-weight: normal;
  }

  img {
    margin: 0; 
    border: 0; 
    padding: 0;
    vertical-align: top;
    height: 35px;
    width: 35px;
  }
  .oi-icon {
    font-size: medium;
  }  
  hr {
      height: 4px;
      box-shadow: inset 0 4px 4px -4px rgba(0, 0, 0, 0.4);
      margin: 0px;
      border: 0px;
      padding: 0px;
      margin-top: 2px;
  }
</style>
