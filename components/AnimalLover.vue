<template>
	<div>
		<img v-show="!failed" :src="url" alt="Loading a dog...">
		<p v-show="failed">Ups :( Try again please?</p>
		<br>
		<button @click="getPicture">Get me a photo of a dog!</button>
	</div>
</template>

<script>
export default {
	name: 'AnimalLover',
	data() {
		return {
			url: '',
			failed: null,
			endpoint: 'https://random.dog/woof.json',
		};
	},
	methods: {
		getPicture() {
			this.failed = false;

			return this.$http.get(this.endpoint).then((response) => {
				console.log('YEY', response.body);
				this.url = response.body.url;


				if (this.isValidPicture) {
					this.failed = false;
				}
				else {
					this.failed = true;
				}

				return Promise.resolve();
			}, (response) => {
				console.log('NOPE', response);
				this.failed = true;

				return Promise.reject();
			});
		},
	},
	computed: {
		isValidPicture() {
			const isPNG = this.url.toLowerCase().indexOf('.png') !== -1;
			const isJPG = this.url.toLowerCase().indexOf('.jpg') !== -1;
			const isJEPG = this.url.toLowerCase().indexOf('.jpeg') !== -1;
			const isGIF = this.url.toLowerCase().indexOf('.gif') !== -1;

			if (isPNG || isJPG || isJEPG || isGIF) {
				return true;
			}

			return false;
		},
	},
};
</script>

<style lang="scss" scoped>
img {
	width: 100%;
	max-width: 400px;
	height: auto;
}

button {
	margin-top: 1rem;
}
</style>
