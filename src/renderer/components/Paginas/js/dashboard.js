import { isNull } from 'util';
import { BrowserWindow, remote } from "electron";
const windowManager = remote.require('electron-window-manager');

  let tmp = new Date();
  let entrada = (tmp.getHours()-1)+':'+tmp.getMinutes()+':'+tmp.getSeconds();
  let tmpMedio = '1'+':'+tmp.getMinutes()+':'+tmp.getSeconds();

  if (localStorage.pausaInicio !== ''){
    var pausa = localStorage.pausa+' - Início: '+localStorage.pausaInicio;
    var disp = '';
  }else{
    var pausa = '';
    var disp = 'Disponível desde: '+localStorage.disponibilidade;
  }
  
  export default {
    name: 'dashboardMenu',
    data () {
      return {
        nomeAgente: localStorage.agente,
        nomeGrupo: localStorage.grupo,
        disponibilidade: disp,
        pausa:pausa,
        ligacoesInternas: '10',
        ligacoesEntrantes: '3',
        ligacoesSaintes: '6',
        ligacoesAtendidasSaintes: '7',
        ligacoesAbandonadas: '2',
        ligacoesTransportadas: '2',
        agentesDisponiveis: '14',
        tempoMedio: tmpMedio,
      }
    },
    methods:{
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
      }
    }
  }