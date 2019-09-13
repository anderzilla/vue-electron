<template>
  <v-row class="dash">
    <v-col cols="3" class="bloco">
      <p class="title font-weight-light">{{ $t("app.agente") }}: <b>{{ nomeAgente }}</b></p>
      <p class="title font-weight-light">{{ $t("app.grupo") }}: <b>{{ nomeGrupo }}</b></p>
      <p class="title font-weight-light">{{ disponibilidade }} {{ pausa }}</p>
    </v-col>
    <v-col cols="3" class="bloco">
      <p class="title font-weight-light">{{ ligacoesInternas }} : {{ $t("app.ligacoesInternas") }}</p>
      <p class="title font-weight-light">{{ ligacoesEntrantes }} : {{ $t("app.ligacoesEntrantes") }}</p>
      <p class="title font-weight-light">{{ ligacoesSaintes }} : {{ $t("app.ligacoesSaintes") }}</p>
    </v-col>
    <v-col cols="3" class="bloco">
      <p class="title font-weight-light">{{ ligacoesAtendidasSaintes }} : {{ $t("app.ligacoesAtendidasSaintes") }}</p>
      <p class="title font-weight-light">{{ ligacoesAbandonadas }} : {{ $t("app.ligacoesAbandonadas") }}</p>
      <p class="title font-weight-light">{{ ligacoesTransportadas }} : {{ $t("app.ligacoesTransportadas") }}</p>
    </v-col>
    <v-col cols="3" class="bloco-ultimo">
      <p class="title font-weight-light">{{ $t("app.agentesDisponiveis") }}: <v-chip color="danger" x-small pill >{{ agentesDisponiveis }}</v-chip></p>
      <p class="title font-weight-light"><br> </p>
      <p class="title font-weight-light">{{ $t("app.tempoMedio") }}: {{ tempoMedio }}</p>
    </v-col>
  </v-row>
</template>

<script src="./js/dashboard.js"></script>
<style scoped src="./scss/dashboard.scss"></style>
