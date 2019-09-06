<template>
  <main id="main-menu">
    <div class="row">
      <div id="menu-principal">
        <div class="menu-icones">
          <ul>
            <li>
              <button @click="configuracoes">
                <font-awesome-icon icon="bars" />
              </button>
            </li>
            <li>
              <font-awesome-icon icon="comment-alt" />
            </li>
            <li>
              <font-awesome-icon icon="bell" />
            </li>
            <li>
              <font-awesome-icon icon="clock" />
            </li>
            <li>
              <font-awesome-icon icon="address-book" />
            </li>
            <li>
              <font-awesome-icon icon="tty" />
            </li>
            <li>
              <font-awesome-icon icon="phone-volume" />
            </li>
            <li>
              <font-awesome-icon icon="envelope" />
            </li>
            <li>
              <font-awesome-icon icon="headset" />
            </li>
            <li>
              <font-awesome-icon :icon="['fab', 'whatsapp']"/>
            </li>
          </ul>
        </div>
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
    </div>
  </main>
</template>

<script>
import dashboardMenu from "./Paginas/dashboardMenu";
import { BrowserWindow, remote } from "electron";
import { path } from "path";
const windowManager = remote.require('electron-window-manager');

export default {
  name: "main-menu",
  components: { dashboardMenu },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    closeAll() {
      windowManager.closeAll()
      window.close();
    },
    minimizar() {
      remote.BrowserWindow.getFocusedWindow().minimize();
    },
    configuracoes() {
      if (process.env.NODE_ENV !== 'development') {
        global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
      }
      const menuConfigPath = process.env.NODE_ENV === 'development'
      ? 'http://localhost:9080/#/MenuConfig'
      : `file://${__dirname}/index.html#MenuConfig`
      const yposition = window.screen.height - 370;
      const xposition = 10;
      const cfg = windowManager.createNew('menu-config', 'Configurações', menuConfigPath, null, {
      'width': 180,
      'height': 320,
      'x': xposition,
      'y': yposition,
      'showDevTools': false,
      'resizable': false,
      'alwaysOnTop': true,
      'frame': false,
      'transparent': true,
      'webPreferences': {'nodeIntegration': true}
      });
      cfg.open();
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
@import url("https://fonts.googleapis.com/css?family=Titillium+Web&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Titillium Web", sans-serif;
}
#main-menu {
  background-color: rgba(29,61,114,0.8);
  overflow-x: hidden;
}

#logo {
  height: auto;
  margin-bottom: 20px;
  width: 420px;
}

main {
  display: flex;
  justify-content: space-between;
}

main > div {
  flex-basis: 50%;
}

.left-side {
  display: flex;
  flex-direction: column;
}
/*remove scrollbar */
::-webkit-scrollbar {
  display: none;
}

.menu-icones {
    color: #fff;
    background-color: rgba(29,61,114,1);
    height: 60px;
    margin: 0px;
    padding: 10px;
    min-width: 420px;
    width: 420px;
}

.menu-icones ul {
  display: inline;
}

.menu-icones ul li {
  display: inline;
  height: 40px;
  padding: 0px 10px;
  line-height: 40px;
}

.menu-icones ul li a {
  color: #ffffff;
  text-decoration: none;
}

.menu-icones ul li a:hover {
  color: #3268d8;
  text-decoration: none;
}

.dashboard {
  position: absolute;
  top: 0;
  left:400px;
  right: 30px;
  width: auto;
  color: #fff;
  border-left: solid 10px rgba(48,174,94,1);
  height: 60px;
  margin-top: 0px;
  padding-right: 10px;
}

.fecharMinimizar {
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(29,61,114,1);
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
