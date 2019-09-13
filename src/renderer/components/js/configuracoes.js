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
    },
    logout() {
      window.close();
    },
    alterarSenha() {
      if (process.env.NODE_ENV !== 'development') {
        global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
      }
      const alterarSenhaPath = process.env.NODE_ENV === 'development'
      ? 'http://localhost:9080/#/AlterarSenha'
      : `file://${__dirname}/index.html#AlterarSenha`
      const yposition = window.screen.height - 480;
      const xposition = 200;
      const altpass = windowManager.createNew('alterar-senha', 'Alterar Senha', alterarSenhaPath, null, {
      'width': 350,
      'height': 350,
      'x': xposition,
      'y': yposition,
      'showDevTools': false,
      'resizable': false,
      'alwaysOnTop': true,
      'frame': false,
      'transparent': true,
      'webPreferences': {'nodeIntegration': true}
      });
      altpass.open();
    },
    grupos() {
      if (process.env.NODE_ENV !== 'development') {
        global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
      }
      const gruposPath = process.env.NODE_ENV === 'development'
      ? 'http://localhost:9080/#/Grupos'
      : `file://${__dirname}/index.html#Grupos`
      const yposition = window.screen.height - 470;
      const xposition = 190;
      const menuGrupos = windowManager.createNew('menu-grupos', 'Grupos', gruposPath, null, {
      'width': 250,
      'height': 355,
      'x': xposition,
      'y': yposition,
      'showDevTools': false,
      'resizable': false,
      'alwaysOnTop': true,
      'frame': false,
      'transparent': true,
      'webPreferences': {'nodeIntegration': true}
      });
      menuGrupos.open();
    },
    pausas() {
      if (process.env.NODE_ENV !== 'development') {
        global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
      }
      const pausasPath = process.env.NODE_ENV === 'development'
      ? 'http://localhost:9080/#/Pausas'
      : `file://${__dirname}/index.html#Pausas`
      const yposition = window.screen.height - 500;
      const xposition = 190;
      const menuPausas = windowManager.createNew('menu-pausas', 'Pausas', pausasPath, null, {
      'width': 400,
      'height': 455,
      'x': xposition,
      'y': yposition,
      'showDevTools': false,
      'resizable': false,
      'alwaysOnTop': true,
      'frame': false,
      'transparent': true,
      'webPreferences': {'nodeIntegration': true}
      });
      menuPausas.open();
    },
    disponibilidade() {
      if (process.env.NODE_ENV !== 'development') {
        global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
      }
      const disponibilidadePath = process.env.NODE_ENV === 'development'
      ? 'http://localhost:9080/#/Disponibilidade'
      : `file://${__dirname}/index.html#Disponibilidade`
      const yposition = window.screen.height - 270;
      const xposition = 190;
      const menuDisponibilidade = windowManager.createNew('disponibilidade', 'Disponibilidade', disponibilidadePath, null, {
      'width': 250,
      'height': 355,
      'x': xposition,
      'y': yposition,
      'showDevTools': false,
      'resizable': false,
      'alwaysOnTop': true,
      'frame': false,
      'transparent': true,
      'webPreferences': {'nodeIntegration': true}
      });
      menuDisponibilidade.open();
    }
  }
};