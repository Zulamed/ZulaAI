<script lang="ts">
	import { onMount } from "svelte";
	import Preloader from "$lib/components/preloader.svelte";
	import Sidebarlinks from "$lib/components/sidebarLinks.svelte";
	import { needsPaddingChangedForMobile } from "./store";
	import { page } from "$app/stores";
	import { fly } from "svelte/transition";
	let searchValue = "";
	let isMobile = false;
	let isLoading = true;
	let filteredHistory: History[] = [];

	const names = [
		"Alice",
		"Bob",
		"Charlie",
		"David",
		"Eve",
		"Frank",
		"Grace",
		"Heidi",
		"Ivan",
		"Jane",
		"Kevin",
		"Laura",
		"Michael",
		"Nancy",
		"Oliver",
		"Peter",
		"Quincy",
		"Rachel",
		"Steve",
		"Tina",
		"Ursula",
		"Victor",
		"Wendy",
		"Xander",
		"Yvonne",
		"Zack"
	];

	$: filteredHistory = history.filter((item) => {
		const search = searchValue.toLowerCase();
		return item.title.toLowerCase().includes(search) || item.text.toLowerCase().includes(search);
	});
	const updateMobileStatus = () => {
		isMobile = window.innerWidth <= 1024;
	};

	onMount(() => {
		updateMobileStatus();
		isLoading = false;
		window.addEventListener("resize", updateMobileStatus);

		return () => {
			window.removeEventListener("resize", updateMobileStatus);
		};
	});

	type History = {
		title: string;
		time: string;
		text: string;
	};

	let history: History[] = [
		{
			title: "Patient - Rashid",
			time: "9:34 pm",
			text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit ...`
		}
	];

	function addChat() {
		const time = new Date().toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
			hour12: true
		});
		const randomName = names[Math.floor(Math.random() * names.length)];
		history.push({
			title: `Patient - ${randomName}`,
			time: time,
			text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit ...`
		});
		history = history;
		const chatlist = document.querySelector(".chatlist") as HTMLDivElement;
		requestAnimationFrame(() => {
			chatlist.scrollTo(0, 0);
		});
	}

	function closeChatlist() {
		const chatlist = document.querySelector(".sidebar-chatlist") as HTMLDivElement;
		chatlist.style.left = "-100%";
	}
</script>

{#if isLoading}
	<Preloader />
{:else}
	<div class="container" class:mobile-padding={$needsPaddingChangedForMobile}>
		<div class="sidebar">
			<Sidebarlinks />
		</div>
		<div class="main-side">
			{#if $page.url.pathname === "/c/chatId" && isMobile}
				<div style="display: none;" />
			{:else}
				<div class="header">
					<a href="/c">
						<img src="/logo/Grouplogo2.svg" class="logotype" alt="ZulaMed" />
					</a>
				</div>
			{/if}
			<slot />
		</div>
	</div>
{/if}

<style>
	/* ========HEADER======== */

	.mobile-padding {
		padding: 36px 0px !important;
	}

	.main-side {
		width: 100%;
	}
	.header {
		width: 100%;
		height: 93px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.header .logotype {
		width: 317px;
	}

	/* ========SCROLL BAR======== */

	/* ========SCROLL BAR======== */

	.container {
		width: 100%;
		height: 100vh;
		display: flex;
	}

	.sidebar {
		width: 30%;
		height: 100%;
		display: flex;
	}

	@media (max-width: 1440px) {
		.container {
			width: 100%;
			height: 100vh;
			display: flex;
		}
		.sidebar {
			width: 35%;
			height: 100%;
			display: flex;
		}

		/* HEADER */

		.header {
			height: 54px;
		}

		.header .logotype {
			width: 164px;
		}

		/* HEADER */
	}

	@media (max-width: 1024px) {
		.container {
			width: 100%;
			height: 100dvh;
			padding: 26px 39px 51px 39px;
			display: flex;
			flex-direction: column-reverse;
			justify-content: center;
		}
		.sidebar {
			width: 100%;
			height: fit-content;
			background-color: #fff;
			z-index: 100;
			margin: 0;
			position: fixed;
			bottom: 20px;
		}
		.header {
			position: fixed;
			top: 20px;
			height: fit-content;
		}
	}
</style>
