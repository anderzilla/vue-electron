<template>
  <main id="menu-grupos">
    <v-row>
      <div class="col-md-4" id="menu-grupos">
        <div class="menu-grupos">
          <h1>Grupos</h1>

          <ul>
            <li>
              <input type="checkbox" id="grupo1" class="mx-2" color="#B91717" checked disabled/>
              <label for="grupo1">Grupo 1</label>
            </li>
            <li>
              <input type="checkbox" id="grupo2" class="mx-2" color="#B91717" />
              <label for="grupo2">Grupo 2</label>
            </li>
            <li>
              <input type="checkbox" id="grupo3" class="mx-2" color="#B91717" />
              <label for="grupo3">Grupo 3</label>
            </li>
            <li>
              <input type="checkbox" id="grupo4" class="mx-2" color="#B91717" />
              <label for="grupo4">Grupo 4</label>
            </li>
            <li>
              <input type="checkbox" id="grupo5" class="mx-2" color="#B91717" />
              <label for="grupo5">Grupo 5</label>
            </li>
          </ul>
          <div class="botoes">
            <v-btn text small color="#B91717" @click="close">
              <font-awesome-icon icon="times-circle" class="icn-btn" />Cancelar
            </v-btn>
            <v-btn small color="#B91717" class="btn-txt-branco">
              <font-awesome-icon icon="check-circle" class="icn-btn" />Salvar
            </v-btn>
          </div>
        </div>
      </div>
    </v-row>
  </main>
</template>

<script>
import { BrowserWindow, remote } from "electron";
import { path } from "path";
const windowManager = remote.require("electron-window-manager");

export default {
  name: "menu-grupos",
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
#menu-grupos {
  background-color: #ffffff;
  overflow-x: hidden;
  border-radius: 5px;
  border: solid 1px #cecece;
  text-align: left;
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

.menu-grupos {
  color: #4a4a4a;
  font-size: 14px;
  width: 100%;
  height: 340px;
  padding: 5px 25px;
}

.menu-grupos h1{
    font-weight: lighter;
    font-size: 20px;
    text-align: left
}

.menu-grupos ul {
  width: 90%;
  margin: 0px 10px;
  list-style-type:none;
}

.menu-grupos ul li {
  height: 45px;
  padding: 10px 0px;
  line-height: 25px;
  border-bottom: #ececec solid 1px;
}

.menu-grupos ul li:hover {
  font-weight: bold;
  cursor: pointer;
  background-image: linear-gradient(#ffffff, #ececec);
}

.botoes{
    margin-top: 25px;
    text-align: center;
}

.pausas {
  color: #ee840b;
}

.disponivel {
  color: #30ae5e;
}

.ultimo {
  border-bottom: none !important;
}

.menu-grupos ul li a {
  color: #4a4a4a;
  text-decoration: none;
}

.menu-grupos ul li a:hover {
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
