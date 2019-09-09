<template>
  <main class="main">
    <v-row>
      <div class="menu">
        <button class="menu__btn" @click="configuracoes">
          <font-awesome-icon icon="bars" />
        </button>
        <button class="menu__btn">
          <font-awesome-icon icon="comment-alt" />
        </button>
        <button class="menu__btn">
          <font-awesome-icon icon="bell" />
        </button>
        <button class="menu__btn">
          <font-awesome-icon icon="clock" />
        </button>
        <button class="menu__btn">
          <font-awesome-icon icon="address-book" />
        </button>
        <button class="menu__btn">
          <font-awesome-icon icon="tty" />
        </button>
        <button class="menu__btn">
          <font-awesome-icon icon="phone-volume" />
        </button>
        <button class="menu__btn">
          <font-awesome-icon icon="envelope" />
        </button>
        <button class="menu__btn">
          <font-awesome-icon icon="headset" />
        </button>
        <button class="menu__btn">
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </button>
      </div>
      <div class="dashboard">
        <dashboardMenu></dashboardMenu>
      </div>
      <div class="fecharMinimizar">
        <ul>
          <li>
            <button @click="closeAll">
              <font-awesome-icon icon="window-close" id="fechar" />
            </button>
          </li>
          <li>
            <template>
              <button @click="minimizar">
                <font-awesome-icon icon="window-minimize" id="minimizar" />
              </button>
            </template>
          </li>
        </ul>
      </div>
    </v-row>
  </main>
</template>

<script>
import dashboardMenu from "./Paginas/dashboardMenu";
import { BrowserWindow, remote } from "electron";
import { path } from "path";

const windowManager = remote.require("electron-window-manager");

export default {
  name: "main-menu",
  components: { dashboardMenu },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    closeAll() {
      windowManager.closeAll();
      window.close();
    },
    minimizar() {
      remote.BrowserWindow.getFocusedWindow().minimize();
    },
    configuracoes() {
      if (process.env.NODE_ENV !== "development") {
        global.__static = require("path")
          .join(__dirname, "/static")
          .replace(/\\/g, "\\\\");
      }
      const menuConfigPath =
        process.env.NODE_ENV === "development"
          ? "http://localhost:9080/#/MenuConfig"
          : `file://${__dirname}/index.html#MenuConfig`;
      const yposition = window.screen.height - 370;
      const xposition = 10;
      const cfg = windowManager.createNew(
        "menu-config",
        "Configurações",
        menuConfigPath,
        null,
        {
          width: 180,
          height: 320,
          x: xposition,
          y: yposition,
          showDevTools: false,
          resizable: false,
          alwaysOnTop: true,
          frame: false,
          transparent: true,
          webPreferences: { nodeIntegration: true }
        }
      );
      cfg.open();
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
@import url("https://fonts.googleapis.com/css?family=Titillium+Web&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow: unset !important;
}

body {
  font-family: "Titillium Web", sans-serif;
}

.main {
  background-color: rgba(29, 61, 113, 0.75);
  overflow: unset;
  display: flex;
  justify-content: space-between;
  >.row {
    margin: 0;
  }
  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
    height: 60px;
    padding: 10px;
    margin: 0;
    color: #fff;
    background-color: rgba(29, 61, 114, .8);
    &__btn {
      background-color: transparent;
      border-style: none;
      color: white;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      outline: none;
      &:hover,
      :active {
        color: #1d3d72;
        background: white;
      }
    }
  }
}

#logo {
  height: auto;
  margin-bottom: 20px;
  width: 420px;
}

.dashboard {
  position: absolute;
  top: 0;
  left: 400px;
  right: 30px;
  width: auto;
  color: #fff;
  border-left: solid 10px rgba(48, 174, 94, 1);
  height: 60px;
  margin-top: 0px;
  padding-right: 10px;
}

.fecharMinimizar {
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(29, 61, 114, 1);
  color: #fff;
  float: right;
  height: 60px;
  margin: 0px;
  padding: 10px 2px;
  width: 30px;
}

.fecharMinimizar ul {
  list-style-type: none;
}

.fecharMinimizar ul li {
  height: 20px;
  padding: 0px 5px;
  line-height: 10px;
}

.fecharMinimizar ul li #fechar {
  color: #3268b8;
}

.fecharMinimizar ul li #fechar:hover {
  color: #c90000;
}

.fecharMinimizar ul li #minimizar {
  color: #3268b8;
}

.fecharMinimizar ul li #minimizar:hover {
  color: #ffffff;
}

.welcome {
  color: #555;
  font-size: 23px;
  margin-bottom: 10px;
}

.title {
  color: #2c3e50;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 6px;
}

.title.alt {
  font-size: 18px;
  margin-bottom: 10px;
}

.doc p {
  color: black;
  margin-bottom: 10px;
}

.doc button {
  font-size: 0.8em;
  cursor: pointer;
  outline: none;
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
}

.doc button.alt {
  color: #42b983;
  background-color: transparent;
}
</style>
