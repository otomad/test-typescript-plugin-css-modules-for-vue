<script setup lang="ts">
	import { onMounted, ref } from "vue";
	import styles from "@/assets/styles/my-styles.module.scss";
	import eases from "@/assets/styles/eases.module.scss";
	import MyJsx from "./MyJsx";
	// both type of styles and eases are CSSModuleClasses, which is given by Vite,
	// and equivalent to Record<string, string>.
	
	const ball = ref<HTMLDivElement>();
	onMounted(() => {
		if (ball.value) {
			ball.value.animate([
				{ left: 0 },
				{ left: "500px" },
			], {
				duration: 2000,
				easing: eases["ease-in-out-max"], // cannot invoke IntelliSense for the keys of `eases` while typing.
			});
		}
	});
</script>

<template>
	<h1 class="title">Test typescript-plugin-css-modules for Vue</h1>
	<MyJsx />
	<div :class="styles.ball" ref="ball"></div>
</template>

<style scoped lang="scss">
	.title {
		color: green;
	}
</style>
