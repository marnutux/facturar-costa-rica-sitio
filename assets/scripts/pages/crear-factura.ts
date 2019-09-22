const API_HACIENDA_URL = 'https://api.hacienda.go.cr/fe/ae'

export default {
  data() {
    return {
      receptorIdentificacion: ''
    }
  },
  watch: {
    receptorIdentificacion: function(newValue, oldValue) {
      if (newValue.length > 9) {
        this.$axios.$get(`${API_HACIENDA_URL}?identificacion=${newValue}`)
      }
    }
  }
}
