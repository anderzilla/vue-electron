<template>
  <v-row class="dashboard">
    <v-col
      cols="3"
      class="bloco"
    >
      <p class="bloco__title">
        Agente:
        <b>{{ nomeAgente }}</b>
      </p>
      <p class="bloco__title">
        Grupo:
        <b>{{ nomeGrupo }}</b>
      </p>
      <p class="bloco__title">
        Disponível à:
        <b>{{ disponibilidade }}</b>
      </p>
    </v-col>
    <v-col
      cols="3"
      class="bloco"
    >
      <p class="bloco__title">{{ ligacoesInternas }} : Ligações Internas</p>
      <p class="bloco__title">{{ ligacoesEntrantes }} : Ligações Entrantes</p>
      <p class="bloco__title">{{ ligacoesSaintes }} : Ligações Saintes</p>
    </v-col>
    <v-col
      cols="3"
      class="bloco"
    >
      <p class="bloco__title">{{ ligacoesAtendidasSaintes }} : Ligações Atendidas/Saintes</p>
      <p class="bloco__title">{{ ligacoesAbandonadas }} : Ligações Abandonadas</p>
      <p class="bloco__title">{{ ligacoesTransportadas }} : Ligações Transportadas</p>
    </v-col>
    <v-col
      cols="3"
      class="bloco"
    >
      <p class="bloco__title">
        Agentes disponíveis:
        <v-chip
          color="danger"
          x-small
          pill
        >{{ agentesDisponiveis }}</v-chip>
      </p>
      <p class="bloco__title"></p>
      <p class="bloco__title">Tempo Médio: {{ tempoMedio }}</p>
    </v-col>
  </v-row>
</template>

<script>
const tmp = new Date();
const entrada =
  tmp.getHours() - 1 + ":" + tmp.getMinutes() + ":" + tmp.getSeconds();
const tmpMedio = "1" + ":" + tmp.getMinutes() + ":" + tmp.getSeconds();
export default {
  data() {
    return {
      nomeAgente: this.$t("app.name"),
      nomeGrupo: "Desenvolvedores",
      disponibilidade: entrada,
      ligacoesInternas: "10",
      ligacoesEntrantes: "3",
      ligacoesSaintes: "6",
      ligacoesAtendidasSaintes: "7",
      ligacoesAbandonadas: "2",
      ligacoesTransportadas: "2",
      agentesDisponiveis: "14",
      tempoMedio: tmpMedio
    };
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  top: 0;
  left: 400px;
  right: 30px;
  width: auto;
  height: 60px;
  position: absolute;
  color: #fff;
  padding: 0;
  margin: 0;
  border-left: solid 10px rgba(48, 174, 94, 1);
  .bloco {
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: solid #1d3d72 10px;
    &:last-of-type {
      border: none;
    }
    &__title {
      color: #f3f3f3;
      font-size: 11px;
      font-weight: lighter;
      letter-spacing: 0;
      line-height: 20px;
    }
  }
}
</style>
