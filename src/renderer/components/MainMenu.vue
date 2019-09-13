<template>
  <main class="main">
    <v-row>
      <div class="menu">
        <button
          class="menu__btn"
          @click="configuracoes"
        >
          <font-awesome-icon icon="bars" />
        </button>
        <button class="menu__btn">
          <font-awesome-icon icon="comment-alt" />
        </button>
        <button class="menu__btn">
          <v-badge>
            <template v-slot:badge>1</template>
            <font-awesome-icon icon="bell" />
          </v-badge>
        </button>
        <button class="menu__btn">
          <font-awesome-icon icon="clock" />
        </button>
        <button class="menu__btn">
          <font-awesome-icon icon="address-book" />
        </button>
        <button class="menu__btn">
          <font-awesome-icon icon="tty" />
        </button>
        <button class="menu__btn">
          <font-awesome-icon icon="phone-volume" />
        </button>
        <button class="menu__btn">
          <font-awesome-icon icon="envelope" />
        </button>
        <button class="menu__btn">
          <font-awesome-icon icon="headset" />
        </button>
        <button class="menu__btn">
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </button>
      </div>
      <dashboardMenu></dashboardMenu>
      <div class="window-actions">
        <div class="window-actions--col">
          <button
            class="window-actions__btn btn--close"
            @click="closeAll"
          >
            <font-awesome-icon icon="window-close" />
          </button>
          <button
            class="window-actions__btn btn--minimize"
            @click="minimizar"
          >
            <font-awesome-icon icon="window-minimize" />
          </button>
        </div>
      </div>
    </v-row>
  </main>
</template>

<script>
import dashboardMenu from "./Paginas/dashboardMenu";
import { BrowserWindow, remote } from "electron";
import { path } from "path";

const windowManager = remote.require("electron-window-manager");

export default {
  name: "main-menu",
  components: { dashboardMenu },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    closeAll() {
      windowManager.closeAll();
      window.close();
    },
    minimizar() {
      remote.BrowserWindow.getFocusedWindow().minimize();
    },
    configuracoes() {
      if (process.env.NODE_ENV !== "development") {
        global.__static = require("path")
          .join(__dirname, "/static")
          .replace(/\\/g, "\\\\");
      }
      const menuConfigPath =
        process.env.NODE_ENV === "development"
          ? "http://localhost:9080/#/MenuConfig"
          : `file://${__dirname}/index.html#MenuConfig`;
      const yposition = window.screen.height - 370;
      const xposition = 10;
      const cfg = windowManager.createNew(
        "menu-config",
        "Configurações",
        menuConfigPath,
        null,
        {
          width: 180,
          height: 320,
          x: xposition,
          y: yposition,
          showDevTools: false,
          resizable: false,
          movable: false,
          minimizable: false,
          maximizable: false,
          alwaysOnTop: true,
          frame: false,
          transparent: true,
          webPreferences: { nodeIntegration: true }
        }
      );
      cfg.open();
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
@import url("https://fonts.googleapis.com/css?family=Titillium+Web&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow: unset !important;
}

body {
  font-family: "Titillium Web", sans-serif;
}

.main {
  background-color: #435d8d;
  > .row {
    margin: 0;
    .menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 400px;
      height: 60px;
      padding: 10px;
      margin: 0;
      color: #fff;
      background-color: #1d3d72;
      &__btn {
        background-color: transparent;
        border-style: none;
        color: white;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        outline: none;
        &:hover,
        :active {
          color: #1d3d72;
          background: white;
        }
        .v-badge__badge {
          background: #ff9100;
        }
      }
    }
    .window-actions {
      position: absolute;
      right: 0;
      height: 60px;
      width: 30px;
      color: #fff;
      background-color: rgba(29, 61, 114, 0.8);
      &--col {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 60px;
        justify-content: center;
      }
      &__btn {
        color: #3268b8;
        outline: none;
        &.btn--close:hover {
          color: #c90000;
        }
        &.btn--minimize:hover {
          color: #fff;
        }
      }
    }
  }
}

#logo {
  height: auto;
  margin-bottom: 20px;
  width: 420px;
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
