<template>
  <main id="menu-config">
    <v-row>
      <div class="col-md-4" id="menu-config">
        <div class="menu-config">
          <ul @mouseleave="close">
            <li>
             <button @click="alterarSenha" class="titulo">Alterar Senha</button>
            </li>
            <li>
              <button @click="grupos">Grupos</button>
            </li>
            <li>
              <button @click="pausas" class="pausas">Pausas  <font-awesome-icon icon="chevron-right" /></button>
            </li>
            <li>
              <button @click="disponivel" class="disponivel"><font-awesome-icon icon="check-circle" />  Disponível</button>
            </li>
            <li>
              <button @click="logout">Logout</button>
            </li>
            <li class="ultimo">
              <button @click="close">
                fechar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import { BrowserWindow, remote } from "electron"
  import { path } from "path"
  const windowManager = remote.require("electron-window-manager")

export default {
  name: "menu-config",
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    close() {
      window.close();
    },
    minimizar() {
      remote.BrowserWindow.getFocusedWindow().minimize();
    }
  }
</script>

<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
  @import url("https://fonts.googleapis.com/css?family=Titillium+Web&display=swap");

  .block {
    font-family: "Titillium Web", sans-serif;
    padding: 1px;
    .main {
      box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.270);
      border-radius: 5px;
      text-align: center;
      background-color: rgb(255, 255, 255);
      .menu-config {
        color: #4a4a4a;
        font-size: 14px;
        width: 100%;
        height: min-content;
        &__btn {
          display: block;
          text-decoration: none;
          font-family: OpenSans, Verdana, Arial;
          font-size: 13px;
          color: #666;
          padding: 0 16px;
          display: block;
          font-size: 14px;
          font-weight: 500;
          height: 45px;
          line-height: 45px;
          &:hover {
            cursor: pointer;
            color: #1d3d72;
            background-color: rgba(0, 0, 0, 0.1);
          }
          &.btn--pausas {
            color: #ee840b;
          }
          &.btn--disponivel {
            color: #30ae5e;
          }
        }
      }
    }
  }
</style>
