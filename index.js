

var app = new Vue({
  el : '#app',
  data: {
    list: ['apple', 'banana', 'strawbery']
  }
})


var app = new Vue({
  el : '#app2',
  methods: {
    handleClick: function(event) {
      alert(event.target)
    }
  }
})

var app = new Vue({
  el: '#app3',
  data: {
    message: 'firt message'
  }
})

var app = new Vue({
  el: '#app4',
  data: {
    show: true
  }
})

var app = new Vue({
  el: '#app5',
  data: {
    show: true
  }
})
