<template>
  <div class="block">
    <main class="main">
      <div class="menu-config">
        <ul>
          <li>
            <a class="button">Configurações</a>
          </li>
          <li>
            <a class="button">Grupos</a>
          </li>
          <li>
            <a class="button pausas">
              Pausas
              <font-awesome-icon icon="chevron-right" />
            </a>
          </li>
          <li>
            <a class="button disponivel">
              <font-awesome-icon icon="check-circle" />Disponível
            </a>
          </li>
          <li>
            <a class="button" @click="grupos">Grupos</a>
          </li>
          <li class="ultimo">
            <a class="button" @click="close">Fechar</a>
          </li>
        </ul>
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
        this.$electron.shell.openExternal(link)
      },
      close() {
        window.close()
      },
      minimizar() {
        remote.BrowserWindow.getFocusedWindow().minimize()
      }
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
      overflow: hidden;
      border-radius: 5px;
      text-align: center;
      background-color: rgb(255, 255, 255);
      .menu-config {
        color: #4a4a4a;
        font-size: 14px;
        width: 100%;
        height: min-content;
        padding: 0px -15px;
        .button {
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
        }
        .pausas {
          color: #ee840b;
        }
        .disponivel {
          color: #30ae5e;
        }
      }
    }
  }
</style>
