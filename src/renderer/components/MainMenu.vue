<template>
  <main id="main-menu">
    <v-row>
      <div id="menu-principal">
        <div class="menu-icones">
          <ul>
            <li>
              <button @click="configuracoes">
                <font-awesome-icon icon="bars" />
              </button>
            </li>
            <li>
              <button @click="chat">
              <font-awesome-icon icon="comment-alt" />
              </button>
            </li>
            <li>
              <button @click="testeLS">
              <font-awesome-icon icon="bell" />
              </button>
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
    </v-row>
  </main>
</template>

<script src="./js/mainMenu.js"></script>
<style src="./scss/mainMenu.scss"></style>
