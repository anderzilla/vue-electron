<template>
  <main id="alterar-senha">
    <v-row>
      <div class="col-md-4" id="alterar-senha">
        <div class="alterar-senha">
          <h1>{{ $t("app.alterarSenha") }}</h1>
          <v-form>
            <v-text-field 
            name="senha-atual" 
            type="password" 
            color="#B91717" 
            v-bind:placeholder="$t('app.senhaAtual')"
            outlined
            :rules="[rules.required, rules.min]"
            required></v-text-field>
            <v-text-field 
            name="nova-senha" 
            type="password" 
            color="#B91717"  
            hint="Sua senha deve ter de 3 a 64 caracteres" 
            v-bind:placeholder="$t('app.novaSenha')"
            outlined
            :rules="[rules.required, rules.min]"
            required></v-text-field>
            <v-text-field 
            name="confirmar-senha" 
            type="password" 
            color="#B91717"  
            hint="Sua senha deve ter de 3 a 64 caracteres" 
            v-bind:placeholder="$t('app.confirmarSenha')"
            outlined
            :rules="[rules.required, rules.min]"
            required></v-text-field> 
            <div class="botoes">
            <v-btn text small color="#B91717" @click="close"><font-awesome-icon icon="times-circle" class="icn-btn" /> {{ $t("app.cancelar") }}</v-btn>
            <v-btn small color="#B91717" class="btn-txt-branco"><font-awesome-icon icon="check-circle" class="icn-btn" /> {{ $t("app.salvar") }}</v-btn>
            </div>
          </v-form>
        </div>
      </div>
    </v-row>
  </main>
</template>

<script src="./js/alterarSenha.js"></script>
<style src="./scss/alterarSenha.scss"></style>
