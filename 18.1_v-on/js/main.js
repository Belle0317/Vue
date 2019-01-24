var app = new Vue({
	el: '#app',
	methods: {
		onClick: function() {
			console.log("clicked");
		},
		onEnter: function() {
			console.log("mouse enter");
		},
		onOut: function() {
			console.log("mouse out");
		},
		// onSubmit: function(e) {
		// 	e.preventDefault();
		// 	console.log("Submited");
		// },
		onSubmit: function() {
			console.log("Submited");
		},
	},

});