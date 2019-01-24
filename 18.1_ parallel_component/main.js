//任意组件间的通信核心在于调度器

var Event = new Vue(); //外部的事件调度器

Vue.component('huahua', {
	template: `
	   <div>
	     我说：<input @keyup="on_change" v-model="i_said"/>
	    </div>`,
	methods: {
		on_change: function() {
			Event.$emit('huahua-said-something', this.i_said);

		}
	},
	data: function() {
		return {
			i_said: '',
		};
	}
});

Vue.component('shuandan', {
	template: `
      <div>花花说：{{huahua_said}}</div>
	`,
	data: function() {
		return {
			huahua_said: '',
		};
	},
	mounted: function() {
		var me = this;
		Event.$on('huahua-said-something', function(data) {
			console.log('data:', data);
			console.log(this);
			me.huahua_said = data;
		});
	}
})

new Vue({
	el: '#app',

});