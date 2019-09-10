<template>
  <main id="alterar-senha">
    <v-row>
      <div class="col-md-4" id="alterar-senha">
        <div class="alterar-senha">
          <h1>Alterar Senha</h1>
          <v-form>
            <v-text-field 
            name="senha-atual" 
            type="password" 
            color="#B91717" 
            placeholder="Senha Atual" 
            outlined
            :rules="[rules.required, rules.min]"
            required></v-text-field>
            <v-text-field 
            name="nova senha" 
            type="password" 
            color="#B91717"  
            hint="Sua senha deve ter de 3 a 64 caracteres" 
            placeholder="Nova Senha" 
            outlined
            :rules="[rules.required, rules.min]"
            required></v-text-field>
            <v-text-field 
            name="confirmar-senha" 
            type="password" 
            color="#B91717"  
            hint="Sua senha deve ter de 3 a 64 caracteres" 
            placeholder="Confirmar Senha" 
            outlined
            :rules="[rules.required, rules.min]"
            required></v-text-field> 
            <div class="botoes">
            <v-btn text small color="#B91717" @click="close"><font-awesome-icon icon="times-circle" class="icn-btn" /> Cancelar</v-btn>
            <v-btn small color="#B91717" class="btn-txt-branco"><font-awesome-icon icon="check-circle" class="icn-btn" /> Salvar</v-btn>
            </div>
          </v-form>
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
  name: "alterar-senha",
  data: () => ({
    valid: true,
    select: null,
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password: "",
    rules: {
      required: value => !!value || "Obrigatório.",
      min: v => v.length >= 3 || "Minimo de 3 caracteres"
    }
  }),
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
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
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
#alterar-senha {
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

/*remove scrollbar */
::-webkit-scrollbar {
  display: none;
}

.alterar-senha {
  color: #4a4a4a;
  font-size: 14px;
  width: 100%;
  height: 345px;
  padding: 25px 40px;
}
.alterar-senha h1 {
  font-weight: lighter;
  font-size: 18px;
  margin-bottom: 20px;
}

.botoes{
  text-align: right;
}

.icn-btn {
  margin: 0px 4px;
  height: 20px;
}

.btn-txt-branco{
  color: #ffffff !important;
}

.v-input__slot {
  min-height: 30px !important;
  padding: 8px !important;
}
.v-input input {
    max-height: 20px !important;
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
