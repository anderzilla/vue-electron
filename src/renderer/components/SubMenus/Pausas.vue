<template>
  <main id="menu-pausa">
    <v-row>
      <div class="col-md-4" id="menu-pausa">
        <div class="menu-pausa">
          <h1>{{$t("app.pausas")}}</h1>
          <v-container>
            <v-row>
              <v-col class="md-6">
                <ul>
                  <li>
                    <button @click="setPausa('Acesso Remoto')" class="btnPausas">{{ $t("app.acessoRemoto")}}</button>
                  </li>
                  <li>
                    <button @click="setPausa('Almoço')" class="btnPausas">{{ $t("app.almoco")}}</button>
                  </li>
                  <li>
                    <button @click="setPausa('Análise caso crítico')" class="btnPausas">{{ $t("app.analiseCasoCritico")}}</button>
                  </li>
                  <li>
                    <button @click="setPausa('Apoio Técnico Interno')" class="btnPausas">{{ $t("app.apoioTecnicoInterno")}}</button>
                  </li>
                  <li>
                   <button @click="setPausa('Assuntos adm/fin.')" class="btnPausas">{{ $t("app.assuntosAdministrativoFinanceiro")}}</button>
                  </li>
                  <li>
                    <button @click="setPausa('Banheiro')" class="btnPausas">{{ $t("app.banheiro")}}</button>
                  </li>
                  <li>
                    <button @click="setPausa('Cafezinho')" class="btnPausas">{{ $t("app.cafezinho")}}</button>
                  </li>
                  <li>
                    <button @click="setPausa('Em Treinamento')" class="btnPausas">{{ $t("app.emTreinamento")}}</button>
                  </li>
                </ul>
              </v-col>
              <v-col class="md-6">
                <ul>
                  <li>
                    <button @click="setPausa('Laboratório')" class="btnPausas">{{ $t("app.laboratorio")}}</button>
                  </li>
                  <li>
                    <button @click="setPausa('Lanche da tarde')" class="btnPausas">{{ $t("app.lancheDaTarde")}}</button>
                  </li>
                  <li>
                    <button @click="setPausa('OS Externa')" class="btnPausas">{{ $t("app.osExterna")}}</button>
                  </li>
                  <li>
                    <button @click="setPausa('Qualificador')" class="btnPausas">{{ $t("app.qualificador")}}</button>
                  </li>
                  <li>
                   <button @click="setPausa('Reunião com Gerência')" class="btnPausas">{{ $t("app.reuniaoComGerencia")}}</button>
                  </li>
                  <li>
                    <button @click="setPausa('Reunião kick-off')" class="btnPausas">{{ $t("app.reuniaoKickOff")}}</button>
                  </li>
                  <li>
                    <button @click="setPausa('Visita Cliente')" class="btnPausas">{{ $t("app.visitaCliente")}}</button>
                  </li>
                  <li>
                    
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
  name: "menu-pausas",
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    close() {
      window.close();
    },
    setPausa(x) { 
      if (localStorage.pausa === x){
        var d = new Date();
        var now = d.toLocaleTimeString();
        localStorage.setItem('disponibilidade', now);
        localStorage.setItem('pausaInicio', '');
        localStorage.setItem('pausa', '');
        alert('Pausa Encerrada! - '+x);
        var mainmenu = windowManager.get('mainmenu');
        mainmenu.reload(true);
        window.close();
      }else{
        var d = new Date();
        var now = d.toLocaleTimeString();
        localStorage.setItem('pausa', x);
        localStorage.setItem('pausaInicio', now);
        alert('Pausa Iniciada! - '+x);
        var mainmenu = windowManager.get('mainmenu');
        mainmenu.reload(true);
        window.close();
      }
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
#menu-pausa {
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

.menu-pausa {
  color: #4a4a4a;
  font-size: 14px;
  width: 100%;
  height: 400px;
  padding: 5px 25px;
}

.menu-pausa h1 {
  font-weight: lighter;
  font-size: 20px;
  text-align: left;
}

.menu-pausa ul {
  width: 100%;
  margin: 0px;
  list-style-type: none;
  text-align: center;
}

.menu-pausa ul li {
  height: 40px;
  padding:20px -10px;
  line-height: 30px;
}

.menu-pausa ul li:hover {
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

.disponivel {
  color: #30ae5e;
}

.ultimo {
  border-bottom: none !important;
}

.menu-pausa ul li a {
  color: #4a4a4a;
  text-decoration: none;
}

.menu-pausa ul li a:hover {
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
