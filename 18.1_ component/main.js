// Vue.component('alert', );
var alert_component = {
	template: '<button @click="on_click">点击我</button>',
	props: ['msg'],
	methods: {
		on_click: function() {
			alert(this.msg);
		}
	}
};

new Vue({
	el: '#seg1',
	components: {
		alert: alert_component,
	}
});