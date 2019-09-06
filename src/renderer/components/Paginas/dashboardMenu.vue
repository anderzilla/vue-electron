<template>
  <v-row class="dash">
    <v-col cols="3" class="bloco">
      <p class="title font-weight-light">Agente: <b>{{ nomeAgente }}</b></p>
      <p class="title font-weight-light">Grupo: <b>{{ nomeGrupo }}</b></p>
      <p class="title font-weight-light">Disponível à: <b>{{ disponibilidade }}</b></p>
    </v-col>
    <v-col cols="3" class="bloco">
      <p class="title font-weight-light">{{ ligacoesInternas }} : Ligações Internas</p>
      <p class="title font-weight-light">{{ ligacoesEntrantes }} : Ligações Entrantes</p>
      <p class="title font-weight-light">{{ ligacoesSaintes }} : Ligações Saintes</p>
    </v-col>
    <v-col cols="3" class="bloco">
      <p class="title font-weight-light">{{ ligacoesAtendidasSaintes }} : Ligações Atendidas/Saintes</p>
      <p class="title font-weight-light">{{ ligacoesAbandonadas }} : Ligações Abandonadas</p>
      <p class="title font-weight-light">{{ ligacoesTransportadas }} : Ligações Transportadas</p>
    </v-col>
    <v-col cols="3" class="bloco-ultimo">
      <p class="title font-weight-light">Agentes disponíveis: <v-chip color="danger" x-small pill >{{ agentesDisponiveis }}</v-chip></p>
      <p class="title font-weight-light"></p>
      <p class="title font-weight-light">Tempo Médio: {{ tempoMedio }}</p>
    </v-col>
  </v-row>
</template>

<script>

  let tmp = new Date();
  let entrada = (tmp.getHours()-1)+':'+tmp.getMinutes()+':'+tmp.getSeconds();
  let tmpMedio = '1'+':'+tmp.getMinutes()+':'+tmp.getSeconds();
  export default {
    data () {
      return {
        nomeAgente: 'Fulano de Tal',
        nomeGrupo: 'Desenvolvedores',
        disponibilidade: entrada,
        ligacoesInternas: '10',
        ligacoesEntrantes: '3',
        ligacoesSaintes: '6',
        ligacoesAtendidasSaintes: '7',
        ligacoesAbandonadas: '2',
        ligacoesTransportadas: '2',
        agentesDisponiveis: '14',
        tempoMedio: tmpMedio,
      }
    }
  }
</script>

<style scoped>
  .title {
    color: rgb(243, 243, 243);
    font-size: 11px;
    font-weight: lighter;
    letter-spacing: 0px;
    margin: 0px 5px;
    line-height: 20px;
  }

  .dash { 
    margin-left: 5px;
    margin-top: 0px;
    padding:0px; 
    }

  .bloco {
    border-right: solid rgba(20, 42, 78, 0.6) 10px;
    padding: 0px;
    max-height: 60px;
  }
  .bloco-ultimo {
    padding: 0px;
    max-height: 60px;
  }
</style>
