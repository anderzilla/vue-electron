<template>
  <main id="menu-config">
    <v-row>
      <div class="col-md-4" id="menu-config">
        <div class="menu-config">
          <ul @mouseleave="close">
            <li>
             <button @click="alterarSenha" class="titulo" >{{ $t("app.alterarsenha")}}</button>
            </li>
            <li>
              <button @click="grupos" >{{ $t("app.grupos") }}</button>
            </li>
            <li>
              <button @click="pausas" class="pausas" >{{ $t("app.pausas") }}  <font-awesome-icon icon="chevron-right" /></button>
            </li>
            <li>
              <button @click="disponibilidade" class="disponivel" ><font-awesome-icon icon="check-circle" />  {{ $t("app.disponivel") }}</button>
            </li>
            <li>
              <button @click="logout" >{{ $t("app.sair") }}</button>
            </li>
          </ul>
        </div>
      </div>
    </v-row>
  </main>
</template>
<script src="./js/configuracoes.js"></script>
<style src="./scss/menus.scss"></style>
