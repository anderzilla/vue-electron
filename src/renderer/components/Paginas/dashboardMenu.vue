<template>
  <div class="row dash">
    <div class="col-sm-3 bloco">
      <p class="title">{{ nomeAgente }}</p>
      <p class="title">{{ nomeGrupo }}</p>
      <p class="title">Disponível à: {{ disponibilidade }}</p>
    </div>
    <div class="col-sm-3 bloco">
      <p class="title">{{ ligacoesInternas }} : Ligações Internas</p>
      <p class="title">{{ ligacoesEntrantes }} : Ligações Entrantes</p>
      <p class="title">{{ ligacoesSaintes }} : Ligações Saintes</p>
    </div>
    <div class="col-sm-3 bloco">
      <p class="title">{{ ligacoesAtendidasSaintes }} : Ligações Atendidas/Saintes</p>
      <p class="title">{{ ligacoesAbandonadas }} : Ligações Abandonadas</p>
      <p class="title">{{ ligacoesTransportadas }} : Ligações Transportadas</p>
    </div>
    <div class="col-sm-3">
      <p class="title">Agentes disponíveis{{ agentesDisponiveis }}</p>
      <p class="title"></p>
      <p class="title">Tempo Médio{{ tempoMedio }}</p>
    </div>
  </div>
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
    letter-spacing: .25px;
    margin-top: -2px;
  }

  .dash { 
    margin-left: 10px;
    margin-top: -10px; 
    }

  .bloco {
    border-right: solid rgba(20, 42, 78, 0.6) 10px;
  }

  .item .name {
    color: #6a6a6a;
    margin-right: 6px;
  }

  .item .value {
    color: #35495e;
    font-weight: bold;
  }
</style>
