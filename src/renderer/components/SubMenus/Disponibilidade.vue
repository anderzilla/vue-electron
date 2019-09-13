<template>
  <main id="menu-disponibilidade">
    <v-row>
      <div class="col-md-4" id="menu-disponibilidade">
        <div class="menu-disponibilidade">
          <h1>{{ $t("app.disponibilidade") }}</h1>
          <v-container>
            <v-row>
              <v-col class="md-6">
                <ul>
                  <li>
                    <button @click="testealerta" class="btnPausas disponibilidade"><font-awesome-icon icon="check-circle" />  {{ $t("app.disponivel")}}</button>
                  </li>
                  <li>
                    <button @click="close" class="btnPausas email"><font-awesome-icon icon="envelope" />  {{ $t("app.email") }}</button>
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-container>
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
  name: "menu-disponibilidade",
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    close() {
      window.close();
    },
    testealerta() {
      alert('Any fool can use a computer');
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
#menu-disponibilidade {
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

.menu-disponibilidade {
  color: #4a4a4a;
  font-size: 14px;
  width: 100%;
  height: 160px;
  padding: 5px 25px;
}

.menu-disponibilidade h1 {
  font-weight: lighter;
  font-size: 20px;
  text-align: left;
}

.menu-disponibilidade ul {
  width: 100%;
  margin: 0px;
  list-style-type: none;
  text-align: center;
}

.menu-disponibilidade ul li {
  height: 40px;
  padding:20px -10px;
  line-height: 30px;
}

.menu-disponibilidade ul li:hover {
  font-weight: bold;
  cursor: pointer;
}

.botoesPausa {
  text-align: center;
}

.btnPausas{
    border: 1px #ececec solid;
    width: 100%;
    text-align: center;
    border-radius: 5px;
}

.disponibilidade {
  color: #30ae5e;
  border: #30ae5e solid 1px;
}

.email {
  color:#EE840B;
  border: #EE840B solid 1px;
}

.ultimo {
  border-bottom: none !important;
}

.menu-disponibilidade ul li a {
  color: #4a4a4a;
  text-decoration: none;
}

.menu-disponibilidade ul li a:hover {
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
