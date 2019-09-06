<template>
  <main id="menu-config">
    <v-row>
      <div class="col-md-4" id="menu-config">
        <div class="menu-config">
          <ul @mouseleave="close">
            <li>
             <button @click="configuracoes" class="titulo">Configurações</button>
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
              <button @click="grupos">Grupos</button>
             <span>Logout</span>
            </li>
            <li class="ultimo">
              <button @click="close">
                fechar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </v-row>
  </main>
</template>

<script>
import { BrowserWindow, remote } from "electron";
import { path } from "path";
const windowManager = remote.require('electron-window-manager');

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
#menu-config {
  background-color: #ffffff;
  overflow-x: hidden;
  border-radius: 5px;
  border: solid 1px #cecece;
  text-align: center;
  padding: 0;
}

main {
  display: flex;
  justify-content: space-between;
}

main > div {
  flex-basis: 100%;
}

.left-side {
  display: flex;
  flex-direction: column;
}
/*remove scrollbar */
::-webkit-scrollbar {
  display: none;
}

.menu-config {
  color: #4a4a4a;
  font-size: 14px;
  width: 100%;
  height: 275px;
  padding: 0px -15px;
}

.menu-config ul {
  width: 90%;
  margin: 0px 10px;
}

.menu-config ul li {
  height: 45px;
  padding: 10px 0px;
  line-height: 25px;
  border-bottom:#ececec solid 1px;
}

.menu-config ul li:hover {
  font-weight: bold;
  cursor: pointer;
  background-image: linear-gradient(#ffffff, #ececec);
}

.pausas {
  color:#EE840B;
}

.disponivel {
  color:#30AE5E;
}

.ultimo{
  border-bottom: none !important;
}

.menu-config ul li a {
  color: #4a4a4a;
  text-decoration: none;
}

.menu-config ul li a:hover {
  color: #3268d8;
  text-decoration: none;
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
