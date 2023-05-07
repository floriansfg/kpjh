<template>
	<input type="text" v-model="type"/>
	<input type="test" v-model="password"/>
	<button @click="submit"/>
</template>

<script>

export default {
	data() {
		return {
			type: '',
			password: ''
		}
	},
	methods: {
		async submit() {
			console.log(this.type)
			const {data,error} = await fetch("/api/login", {
				method: 'post',
				body: JSON.stringify({
					type: this.type,
					password: this.password
				})
			});
			
			if(!error) {

			}
		}
	}
}

</script>