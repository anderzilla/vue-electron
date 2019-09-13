<template>
  <main id="menu-chat">
    <v-row>
      <div class="col-md-4" id="menu-chat">
        <div class="menu-chat">
          <ul @mouseleave="close">
            <li>
             <button @click="iniciarChat">{{ $t("app.iniciarChat") }}</button>
            </li>
            <li>
              <button @click="enviarMensagem" >{{ $t("app.enviarMensagem") }}</button>
            </li>
            <li>
              <button @click="historicoChat">{{ $t("app.historicoDeChat") }}</button>
            </li>
            <li>
              <button @click="historicoMensagens">{{ $t("app.historicoDeMensagens") }}</button>
            </li>
            <li>
              {{ $t("app.mensagensNaoLidas") }}
            </li>
          </ul>
        </div>
      </div>
    </v-row>
  </main>
</template>

<script src="./js/chat.js"></script>
<style src="./scss/menus.scss"></style>
