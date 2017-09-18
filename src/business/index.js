import Vue from 'vue'
import {
 Card,
 Tag,
 Button,
 Switch,
 Row,
 Col
} from 'element-ui'
import './style.scss'
import template from './timelist.html'
import timeWeekends from './list/time-weekends.json'
import timeWorkingDay from './list/time-working-day.json'

Vue.use(Card)
Vue.use(Tag)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Row)
Vue.use(Col)

export default new Vue({
  el: '#app',
  data() {
    return {
      time: '',
      isAuto: false
    }
  },
  created() {
    this.time = this.getCurTime()
    this.timer()
  },
  mounted() {

  },
  computed: {

  },
  methods: {
    getCurTime() {
      let hour = new Date().getHours()
      let minute = new Date().getMinutes()
      if (minute < 10) {
        minute = `0${minute}`
      }
      return `${hour}:${minute}`
    },
    timer() {
      let that = this
      let timer = setTimeout(() => {
        clearTimeout(timer)
        that.time = that.getCurTime()
        that.timer()
      }, 1000)
    }
  },
  template
})
