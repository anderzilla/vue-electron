import dashboardMenu from "../Paginas/dashboardMenu";
import { BrowserWindow, remote } from "electron";
import { path } from "path";


const windowManager = remote.require('electron-window-manager');

export default {
  name: "main-menu",
  components: { dashboardMenu },
  data: {
    agente: '',
    grupo: '',
    disponibilidade:'',
    pausa:'',
  },
  mounted() {
    if (localstorage.agente){
      this.agente = localStorage.agente;
    }
    if (localstorage.grupo){
      this.grupo = localStorage.grupo;
    }
    if (localstorage.disponibilidade){
      this.disponibilidade = localStorage.disponibilidade;
    }
    if (localstorage.pausa){
      this.pausa = localStorage.pausa;
    }

  },
  methods: {
    persist() {
      localStorage.agente = this.agente;
      localStorage.grupo = this.grupo;
      localStorage.disponibilidade = this.disponibilidade;
      localStorage.pausa = this.pausa;
    },
    updateAll(){
      if (localstorage.agente){
      this.agente = localStorage.agente;
    }
    if (localstorage.grupo){
      this.grupo = localStorage.grupo;
    }
    if (localstorage.disponibilidade){
      this.disponibilidade = localStorage.disponibilidade;
    }
    if (localstorage.pausa){
      this.pausa = localStorage.pausa;
    }
    },
    testeLS() {
      var d = new Date();
      var now = d.toLocaleTimeString();
      localStorage.setItem('agente', 'Chuck Norris');
      localStorage.setItem('grupo', 'Elite');
      localStorage.setItem('disponibilidade', now);
      localStorage.setItem('pausa', '');
      localStorage.setItem('pausaInicio', '');
      var mainmenu = windowManager.get('mainmenu');
    },
    atualizaStatus(){
        if (localStorage.pausaInicio !== ''){
          var pausa = localStorage.pausa+' - Início: '+localStorage.pausaInicio;
          var disp = '';
        }else{
          var pausa = '';
          var disp = 'Disponível desde: '+localStorage.disponibilidade;
        }
        return {
        disponibilidade: disp,
        pausa:pausa,
        }
      },
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
      const yposition = window.screen.height - 320;
      const xposition = 10;
      const cfg = windowManager.createNew('menu-config', 'Configurações', menuConfigPath, null, {
      'width': 180,
      'height': 280,
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
    },
    chat() {
      if (process.env.NODE_ENV !== 'development') {
        global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
      }
      const menuChatPath = process.env.NODE_ENV === 'development'
      ? 'http://localhost:9080/#/MenuChat'
      : `file://${__dirname}/index.html#MenuChat`
      const yposition = window.screen.height - 320;
      const xposition = 40;
      const mchat = windowManager.createNew('menu-config', 'Configurações', menuChatPath, null, {
      'width': 180,
      'height': 280,
      'x': xposition,
      'y': yposition,
      'showDevTools': false,
      'resizable': false,
      'alwaysOnTop': true,
      'frame': false,
      'transparent': true,
      'webPreferences': {'nodeIntegration': true}
      });
      mchat.open();
    }
  }
};