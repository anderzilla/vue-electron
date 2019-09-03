<template>
    <main>
      <div class="row">
        <div class="col-md-4" id="menu-principal">
          <div class="menu-icones">
            <ul>
              <li><font-awesome-icon icon="bars" /></li>
              <li><font-awesome-icon icon="comment-alt" /></li>
              <li><font-awesome-icon icon="bell" /></li>
              <li><font-awesome-icon icon="clock" /></li>
              <li><font-awesome-icon icon="address-book" /></li>
              <li><font-awesome-icon icon="tty" /></li>
              <li><font-awesome-icon icon="phone-volume" /></li>
              <li><font-awesome-icon icon="envelope" /></li>
              <li><font-awesome-icon icon="headset" /></li>
              <li><font-awesome-icon icon="whatsapp" /></li>
            </ul>
          </div>  
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
      </div>
    </main>
</template>

<script>
  import SystemInformation from './MainMenu/SystemInformation'

  export default {
    name: 'main-menu',
    components: { SystemInformation },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }
  body { background-color: #1D3D72; overflow-x: hidden;}

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }
/*remove scrollbar */
  ::-webkit-scrollbar {
    display: none;
}

  .menu-icones{
    color:#fff;
  }

  .menu-icones ul{
    display: inline;
  }

  .menu-icones ul li{
    display: inline;;
    height: 60px;
    padding:0px 10px;
    line-height: 55px;
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
    font-size: .8em;
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
