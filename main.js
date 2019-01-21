var app = new Vue({
	el: '#app',
	data: {
		math: 90,
		engish: 80,
		physics: 95,
	},
	computed: {
		sum: function() {
			return parseFloat(this.math) + parseFloat(this.engish) + parseFloat(this.physics);
		},
		average: function() {
			return Math.round(this.sum / 3);
		}
	}

});
