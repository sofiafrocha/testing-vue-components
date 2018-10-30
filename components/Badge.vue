<template>
	<div :class="cssClasses">{{ value }}</div>
</template>

<script>
export default {
	name: 'Badge',
	props: {
		value: {
			type: Number,
			required: true,
			default: 0,
		},
		hasNew: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	computed: {
		cssClasses() {
			return {
				'c-Badge': true,
				'has-new': this.hasNew,
			};
		},
	},
};
</script>

<style lang="scss" scoped>
.c-Badge {
	position: relative;
	display: inline-block;
	padding: 6px 9px;
	border-radius: 6px;
	background-color: #303f9f;
	color: white;
	font-weight: bold;
	font-family: -apple-system, sans-serif;
	font-size: 16px;
	border: 1px solid transparent;

	&.has-new {
		&:after {
			content: '';
			background-color: red;
			border-radius: 20px;
			width: 14px;
			height: 14px;
			position: absolute;
			right: -6px;
			top: -6px;
		}
	}
}
</style>
