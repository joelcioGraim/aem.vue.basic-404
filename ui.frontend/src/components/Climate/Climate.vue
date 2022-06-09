<template>
  <div class="div-container">
    <div class="city">{{ locale }} - RS</div>
    <div class="container-icon-temp">
        <img id="icon-weather" class="icon" :src="icon" alt="weather-icon" />
        <div class="temp">{{ weather }}°</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Climate',
  data () {
    return {
      locale: '',
      latitude: -28.264978335353234,
      longitude: -52.412004631674485,
      weather: '',
      icon: ''
    }
  },
  mounted () {
    this.getWeather()
  },
  methods: {
    getWeather () {
      this.$http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&lang=pt&units=metric&APPID=ce765a481ed0ec0fd7294c4e1bed85f5`)
        .then((response) => {
          this.getIcon(response.body)
          this.getTemperature(response.body)
        }, (response) => {
          console.log(response)
          alert('O servidor openweathermap.org não está disponível no momento.')
        })
    },
    getIcon (value) {
      this.icon = `http://openweathermap.org/img/w/${value.weather[0].icon}.png`
    },
    getTemperature (value) {
      this.weather = value.main.temp.toFixed(0)
      this.locale = value.name
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
  .city {
  width: 50%;
  height: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-family: 'Poppins';
  padding-left: 40%;
}
.container-icon-temp{
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 30px;
  padding-left: 40%;
}
.icon {
  height: 60px;
}
.temp {
  font-size: 48px;
  font-family: 'Poppins';
}

@media screen and (max-width: 450px) {
  .city {
    width: 65%;
    height: 23px;
    font-size: 12px;
  }
  .container-icon-temp{
    width: 50%;
    height: 30px;
  }
  .icon {
    height: 45px;
  }
  .temp {
    font-size: 32px;
    margin-right: -14px;
  }
}

</style>
