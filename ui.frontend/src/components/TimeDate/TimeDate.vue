<template>
  <div class="div-container">
    <div class="current-time">{{ horaAtual }}</div>
    <div class="current-date">{{ dataAtual }}</div>
  </div>
</template>

<script>

export default {
  name: 'TimeDate',
  data () {
    return {
      dataAtual: new Date().toLocaleDateString('pt-BR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      horaAtual: new Date().toLocaleTimeString('pt-BR', { hour12: false, hour: 'numeric', minute: 'numeric' })
    }
  }
}
</script>

<style scoped>
.div-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  font-family: 'Mark Pro';
  font-style: normal;
  color: #222222;
  }
.current-time {
    font-weight: 700;
    font-size: 7em;
    line-height: 7rem;
}

.current-date {
    font-weight: 400;
    font-size: 14px;
}

@media screen and (max-width: 450px) {
  .div-container {
    display: none;
  }
}

</style>
