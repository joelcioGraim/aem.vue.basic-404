<template>
  <footer class="footer-container">
    <p class="footer footer__item--p-essa-janela">
        Essa janela do navegador é usada para manter sua sessão de autenticação
        ativa. Deixe-a aberta em segundo plano e abra uma nova janela para
        continuar a navegar.
    </p>

    <div class="footer footer-vertical-line-before-search"></div>

    <p class="footer footer__item--p-application-refresh">
        Application refresh in
    </p>
    <div class="footer footer__item--app-counter">
        <div class="counter-item counter-item__span-number-seconds">
            {{ time }}
        </div>
        <div class="counter-item counter-item__span-text-seconds">seconds</div>
    </div>
    <a
        class="footer footer__item--a-continuar-navegando"
        v-on:click="restartTime"
    >
        Continuar navegando
    </a>

    <a class="footer" v-on:click="logout">logout</a>
</footer>

</template>

<script>
export default {
  name: 'FooterHome',
  data () {
    return {
      time: 600,
      interval: null
    }
  },
  mounted () {
    this.keepBrowsing()
  },
  methods: {
    keepBrowsing () {
      this.interval = setInterval(this.incrementTime, 1000)
    },
    incrementTime () {
      if (this.time === 0) {
        this.$router.push({ path: '/content/vue/404.html' })
        this.$router.go()
      } else {
        this.time = parseInt(this.time) - 1
      }
    },
    restartTime () {
      this.time = 600
    },
    logout () {
      this.$router.push({ path: '/content/vue/login.html' })
      this.$router.go()
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500&family=Space+Mono:wght@400;700&display=swap');
.footer-container {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 10%;
  height: 80px;
  width: 100%;
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
}
.footer {
  display: flex;
  align-items: center;

  padding-left: 20px;
  padding-right: 20px;

  font-family: 'Mark Pro';
  font-style: normal;
  font-weight: 400;

  color: #ffffff;
}
.footer__item--p-essa-janela {
    width: 33%;
    font-size: clamp(0.6em, 0.8vw, 3em);
    text-align: right;
}
.footer__item--p-application-refresh {
    width: 50px;
    margin-left: 5%;
    font-size: 14px;
    text-align: right;
}
.footer__item--app-counter {
    width: 490px;
}
.footer__item--a-continuar-navegando {
    background: #ffffff;
    font-size: 12px;
    color: #c13216;
    text-align: center;
    width: 100px;
}
.footer__item--a-logout {
    font-size: 12px;
    padding-right: 30px;
}
.footer-vertical-line-before-search {
    border-left: 1px solid white;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    margin-left: 1.5em;
}
.footer-vertical-line-after-search {
    border-left: 1px solid white;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    margin-left: 1.5em;
}

 @media screen and (max-width: 450px) {
 .footer-container {
    justify-content: end;
    flex-direction: row-reverse;
    bottom: 8%;
  }
  .footer__item--app-counter {
    display: none;
  }
  .footer__item--p-essa-janela {
    display: none;
  }
  .footer-vertical-line-before-search {
    display: none;
  }
  .footer__item--p-application-refresh {
    display: none;
  }
  .footer__item--a-continuar-navegando {
    padding-right: 200px;
  }
  .footer {
    padding-left: 110px;
  }
 }
</style>
