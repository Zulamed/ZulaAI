<script lang="ts">
	import { fly } from "svelte/transition";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { needsPaddingChangedForMobile } from "../../routes/c/store";
	import Tooltip from "$lib/components/tooltip.svelte";
	import { firstStep } from "../../routes/auth/components/store";
	import { fi } from "date-fns/locale";
	let searchValue = "";

	function openChatlist() {
		const chatlist = document.querySelector(".sidebar-chatlist") as HTMLDivElement;
		chatlist.style.left = "0";
	}
	let isMobile = false;
	let isLoading = true;

	const updateMobileStatus = () => {
		isMobile = window.innerWidth <= 1024;
		$needsPaddingChangedForMobile = isMobile;
	};

	onMount(() => {
		updateMobileStatus();
		isLoading = false;
		window.addEventListener("resize", updateMobileStatus);

		return () => {
			window.removeEventListener("resize", updateMobileStatus);
		};
	});

	function openExitDialog() {
		const exitDialogOverlay = document.querySelector(".exit-dialog-overlay") as HTMLDivElement;
		const exitDialog = document.querySelector(".exit-dialog") as HTMLDivElement;
		exitDialogOverlay.style.display = "block";
		exitDialog.style.display = "block";
	}

	function closeExitDialog() {
		const exitDialogOverlay = document.querySelector(".exit-dialog-overlay") as HTMLDivElement;
		const exitDialog = document.querySelector(".exit-dialog") as HTMLDivElement;
		exitDialogOverlay.style.display = "none";
		exitDialog.style.display = "none";
	}

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
		const chatlist = document.querySelector(".chatlist") as HTMLDivElement;
		history = history;
		let diff = chatlist.clientHeight - chatlist.scrollHeight;
		chatlist.scrollTo({ top: diff, behavior: "smooth" });
	}

	function closeChatlist() {
		const chatlist = document.querySelector(".sidebar-chatlist") as HTMLDivElement;
		chatlist.style.left = "-100%";
	}
</script>

{#if $page.url.pathname === "/c/chatId" && isMobile}
	<div style="display: none;" />
{:else}
	<div class="sidebar-buttons">
		<div class="button-wrapper">
			<Tooltip tooltipText="Chat">
				<a
					slot="trigger"
					href="/c"
					class="button-lg"
					class:active={$page.url.pathname === "/c" || $page.url.pathname === "/c/chatId"}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#A1A1A1"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg
					>
				</a>
			</Tooltip>
			<span>Chat</span>
		</div>

		<div class="button-wrapper btn-history">
			<button on:click={openChatlist} class="button-lg">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-history"
					><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path
						d="M12 7v5l4 2"
					/></svg
				>
			</button>
			<span>Verlauf</span>
		</div>
		<div class="button-wrapper">
			{#if isMobile}
				<a
					class="button-lg"
					class:active={$page.url.pathname === "/settings" ||
						$page.url.pathname === "/settings/account" ||
						$page.url.pathname === "/settings/password"}
					href="/settings"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#A1A1A1"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-settings"
						><path
							d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
						/><circle cx="12" cy="12" r="3" /></svg
					>
				</a>
			{:else}
				<Tooltip tooltipText="Einstellungen">
					<a
						slot="trigger"
						class="button-lg"
						class:active={$page.url.pathname === "/settings/account" ||
							$page.url.pathname === "/settings/password" ||
							$page.url.pathname === "/settings"}
						href="/settings/account"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#A1A1A1"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-settings"
							><path
								d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
							/><circle cx="12" cy="12" r="3" /></svg
						>
					</a>
				</Tooltip>
			{/if}
			<span>Einstellungen</span>
		</div>
		<div class="button-wrapper">
			<Tooltip tooltipText="Ausloggen">
				<button slot="trigger" on:click={openExitDialog} class="button-lg">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="none"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-log-out"
						><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line
							x1="21"
							x2="9"
							y1="12"
							y2="12"
						/></svg
					>
				</button>
			</Tooltip>
			<span>Ausloggen</span>
		</div>

		<div class="exit-dialog-overlay">
			<div class="exit-dialog">
				<div class="exit-dialog-content">
					<p>Wollen Sie sich wirklich ausloggen?</p>
					<div class="exit-dialog-buttons">
						<button class="exit-dialog-button exit-dialog-button-yes">Ausloggen</button>
						<button on:click={closeExitDialog} class="exit-dialog-button exit-dialog-button-no">Schließen</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="sidebar-chatlist">
		{#if $page.url.pathname === "/c" || $page.url.pathname === "/c/chatId" || ($page.url.pathname === "/settings/account" && isMobile) || ($page.url.pathname === "/settings" && isMobile)}
			<h1 class="chatlist-title">Meine Simulationen</h1>
			<div class="search-chat-wrapper">
				<button on:click={addChat} class="sidebar-lg-button"
					><img src="/icons/plus.svg" alt="plus" />Neue Simulation</button
				>
			</div>
			<div class="search-chat-wrapper">
				<label class="search-chat">
					<img src="/icons/search.svg" alt="search" />
					<input bind:value={searchValue} type="text" placeholder="Suche" />
				</label>
			</div>

			<div class="chatlist">
				<button on:click={closeChatlist} class="btn-back">
					<img src="/icons/back.svg" alt="Back" />
				</button>
				<div class="chatlist-header">
					<a href="/c" on:click={closeChatlist}>
						<img src="/logo/Grouplogo2.svg" alt="Zulamed" class="logo" />
					</a>
				</div>
				{#if searchValue.length > 0}
					{#each filteredHistory as item}
						<a
							transition:fly={{ y: -10, duration: 100 }}
							href="/c/chatId"
							class="chatlist-item"
							on:click={closeChatlist}
						>
							<h2 class="chat-title">{item.title}</h2>
							<span class="last-update">{item.time}</span>
							<img src="/logo/Mobilelogo.webp" alt="" />
							<p class="last-message">
								{item.text}
							</p>
						</a>
					{/each}
				{:else}
					{#each history as item}
						<a
							transition:fly={{ y: -10, duration: 100 }}
							href="/c/chatId"
							class="chatlist-item"
							on:click={closeChatlist}
						>
							<h2 class="chat-title">{item.title}</h2>
							<span class="last-update">{item.time}</span>
							<img src="/logo/Mobilelogo.webp" alt="" />
							<p class="last-message">
								{item.text}
							</p>
						</a>
					{/each}
				{/if}
			</div>
		{:else}
			<h1 class="chatlist-title">Einstellungen</h1>
			<div class="search-chat-wrapper">
				<a href="/settings/account" class="sidebar-lg-button" class:active={$page.url.pathname === "/settings/account"}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="26"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#00BCA1"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-user"
						><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg
					>

					Persönliche daten
				</a>
			</div>
			<div class="search-chat-wrapper">
				<a
					href="/settings/password"
					class="sidebar-lg-button"
					class:active={$page.url.pathname === "/settings/password"}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#00BCA1"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-lock"
						><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg
					>
					Passwort ändern
				</a>
			</div>
		{/if}
	</div>
{/if}

<style>
	.btn-back {
		display: none;
	}
	.sidebar-lg-button.active {
		background-color: #00bca1;
		color: #fff;
	}
	.sidebar-lg-button.active svg {
		stroke: #fff;
	}
	.sidebar-lg-button.active:hover {
		background-color: #00bca1;
	}
	.chatlist::-webkit-scrollbar {
		width: 4px;
	}
	.chatlist::-webkit-scrollbar-track {
		border-radius: 25px;
		background-color: transparent;
	}
	.chatlist::-webkit-scrollbar-thumb {
		border-radius: 25px;
		background-color: #00bca1;
	}
	.chatlist {
		scrollbar-width: none;
		scrollbar-color: #00bca1 transparent;
	}
	.sidebar-chatlist {
		height: 100%;
		width: 85%;
		padding: 93px 17px 20px 17px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 14px;
	}

	.chatlist-title {
		width: 100%;
		text-align: start;
		font-size: 25px;
		font-weight: 600;
		color: #000;
		padding: 0 0 0 20px;
	}
	.chatlist-header {
		display: none;
	}

	.sidebar-lg-button {
		all: unset;
		cursor: pointer;
		display: flex;
		width: 100%;
		align-items: center;
		gap: 22px;
		padding: 14px 24px;
		color: #00bca1;
		border: 1px solid #00bca1;
		border-radius: 6px;
		font-size: 20px;
		font-weight: 500;
		line-height: 27px;
		user-select: none;
	}

	.sidebar-lg-button:hover {
		background-color: #f1f1f1;
	}

	.search-chat-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.search-chat {
		all: unset;
		display: flex;
		width: 100%;
		align-items: center;
		gap: 16px;
		padding: 9px 17px 9px 17px;
		background-color: #f4f4f4;
		border: 1px solid #f4f4f4;
		border-radius: 6px;
		font-size: 15px;
		font-weight: 500;
		line-height: 27px;
		cursor: text;
	}

	.search-chat img {
		width: 20px;
	}

	.search-chat input {
		all: unset;
		width: 100%;
		font-size: 15px;
		font-weight: 400;
		color: #000;
	}

	.search-chat:focus-within {
		border: 1px solid #00bca1;
	}

	/* =========chatlist========= */

	.chatlist {
		width: 100%;
		display: flex;
		flex-direction: column-reverse;
		gap: 10px;
		padding: 10px 5px 10px 0;
		overflow-y: scroll;
		overflow-x: hidden;
		scrollbar-width: none;
	}
	@supports (-ms-ime-align: auto) {
		.chatlist {
			scrollbar-width: none;
		}
	}

	.chatlist-item {
		all: unset;
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 7px;
		padding: 19px 38px;
		background-color: transparent;
		border: 1px solid transparent;
		border-radius: 6px;
		cursor: pointer;
		color: #000;
	}

	.chatlist-item:hover {
		background-color: #f4f4f4;
	}

	.chatlist-item img {
		position: absolute;
		top: 22px;
		left: 11px;
		width: 17px;
	}

	.chat-title {
		font-size: 16px;
		font-weight: 700;
		color: #000;
	}

	.last-message {
		font-size: 15px;
		font-weight: 400;
		color: #000;
		max-width: 232px;
	}

	.last-update {
		position: absolute;
		top: 21px;
		right: 16px;
		font-size: 12px;
		font-weight: 400;
		color: #1e1f22;
	}
	/* =========Dialog========= */

	.exit-dialog-overlay {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 10000;
	}

	.exit-dialog {
		display: none;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 500px;
		height: 200px;
		background: #fff;
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		z-index: 101;
		transition: 0.2s ease;
	}

	.exit-dialog-content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 30px;
		padding: 15px 20px;
	}

	.exit-dialog-content p {
		font-size: 20px;
		font-weight: 500;
		color: #000;
	}

	.exit-dialog-buttons {
		display: flex;
		gap: 20px;
	}

	.exit-dialog-button {
		all: unset;
		cursor: pointer;
		padding: 10px 20px;
		color: #fff;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
	}
	.exit-dialog-button-yes {
		background: #00bca1;
	}
	.exit-dialog-button-yes:hover,
	.exit-dialog-button-yes:active {
		background: #00a58c;
	}
	.exit-dialog-button-no {
		background: red;
	}
	.exit-dialog-button-no:hover,
	.exit-dialog-button-no:active {
		background: #c70000;
	}

	/* =========Dialog========= */

	.sidebar-buttons {
		height: 100%;
		width: 15%;
		border-right: 1px solid #eaeaea;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 25px;
		padding: 235px 0 0 0;
	}

	.button-lg {
		all: unset;
		width: 46px;
		height: 46px;
		cursor: pointer;
		border-radius: 9px;
		background: #f9f9f9;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.btn-history {
		display: none;
	}
	.button-wrapper span {
		display: none;
	}
	.button-lg:hover,
	.button-lg:active {
		background: #f1f1f1;
	}
	.button-lg.active {
		background: #00bca1;
	}

	.button-lg.active svg {
		stroke: #fff;
	}

	.button-lg svg {
		width: 33px;
		height: 33px;
		stroke: #00bca1;
	}

	@media (max-width: 1440px) {
		.sidebar-chatlist {
			height: 100%;
			width: 85%;
			padding: 54px 10px 0 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 14px;
		}

		.chatlist-title {
			width: 100%;
			text-align: start;
			font-size: 18px;
			font-weight: 600;
			color: #000;
			padding: 0 0 0 20px;
		}

		.sidebar-lg-button {
			all: unset;
			cursor: pointer;
			display: flex;
			width: 100%;
			align-items: center;
			gap: 7px;
			padding: 9px 17px 9px 17px;
			color: #00bca1;
			border: 1px solid #00bca1;
			border-radius: 6px;
			font-size: 14px;
			font-weight: 500;
			line-height: 27px;
		}

		.sidebar-lg-button:hover {
			background-color: #f1f1f1;
		}

		.search-chat {
			all: unset;
			display: flex;
			width: 100%;
			align-items: center;
			gap: 16px;
			padding: 9px 17px 9px 17px;
			background-color: #f4f4f4;
			border: 1px solid #f4f4f4;
			border-radius: 6px;
			font-size: 14px;
			font-weight: 500;
			line-height: 27px;
			cursor: text;
		}
		.search-chat input {
			all: unset;
			width: 100%;
			font-size: 14px;
			font-weight: 400;
			color: #000;
		}
		.search-chat:focus-within {
			border: 1px solid #00bca1;
		}

		/* =========chatlist========= */

		.chatlist {
			width: 100%;
			display: flex;
			flex-direction: column-reverse;
			gap: 10px;
			padding: 10px 3px 10px 0;
			overflow: scroll;
		}

		.chatlist-item {
			all: unset;
			position: relative;
			display: flex;
			flex-direction: column;
			gap: 7px;
			padding: 17px 29px;
			background-color: transparent;
			border: 1px solid transparent;
			border-radius: 6px;
			cursor: pointer;
			color: #000;
		}

		.chatlist-item:hover {
			background-color: #f4f4f4;
		}

		.chatlist-item img {
			position: absolute;
			top: 18px;
			left: 9px;
			width: 12px;
		}

		.chat-title {
			font-size: 12px;
			font-weight: 700;
			color: #000;
		}

		.last-message {
			font-size: 12px;
			font-weight: 400;
			color: #000;
			max-width: 232px;
		}

		.last-update {
			position: absolute;
			top: 21px;
			right: 16px;
			font-size: 8px;
			font-weight: 400;
			color: #1e1f22;
		}

		/* =========Dialog=========  */

		.exit-dialog {
			width: 400px;
			height: 200px;
			border-radius: 8px;
		}

		.exit-dialog-content {
			gap: 30px;
			padding: 15px 20px;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		.exit-dialog-content p {
			font-size: 16px;
		}

		.exit-dialog-buttons {
			gap: 10px;
		}

		.exit-dialog-button {
			padding: 10px 15px;
			border-radius: 6px;
		}

		/* =========Dialog=========  */

		.sidebar-buttons {
			height: 100%;
			width: 15%;
			border-right: 1px solid #eaeaea;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 25px;
			padding: 149px 0 0 0;
		}
		.button-wrapper span {
			display: none;
		}
		.button-lg {
			all: unset;
			width: 32px;
			height: 32px;
			background: #f9f9f9;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 9px;
		}
		.button-lg svg {
			width: 23px;
			height: 23px;
		}
	}

	@media (max-width: 1024px) {
		.chatlist-header {
			background-color: #fff;
			position: relative;
			display: block;
			height: fit-content;
			width: 100%;
			padding-bottom: 26px;
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 100;
		}
		.chatlist-header .logo {
			width: 174px;
		}
		.btn-back {
			all: unset;
			height: fit-content;
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			cursor: pointer;
			left: 20px;
			z-index: 1000;
			top: 20px;
		}
		.sidebar-chatlist {
			width: 100%;
			background-color: #fff;
			display: block;
			position: fixed;
			top: 0;
			left: -100%;
			padding: 0 13px;
			transition: 0.4s ease;
		}

		.chatlist-title,
		.sidebar-lg-button,
		.search-chat {
			display: none;
		}
		.chatlist {
			padding: 26px 9px 20px 9px;
			height: 100%;
			flex-direction: column;
		}
		.chatlist-item {
			background-color: #f5f5f5;
		}

		/* ========Dialog========= */

		.exit-dialog {
			width: 100%;
			height: 100%;
			border-radius: 0;
		}

		.exit-dialog-content {
			gap: 20px;
			padding: 15px 20px;
		}

		.exit-dialog-content p {
			font-size: 16px;
		}

		.exit-dialog-buttons {
			gap: 10px;
		}

		.exit-dialog-button {
			padding: 10px 15px;
			border-radius: 6px;
		}

		/* ========Dialog========= */

		.sidebar-buttons {
			width: 100%;
			height: fit-content;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			padding: 0 39px;
			gap: 20px;
		}
		.button-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 11px;
			width: 55px;
		}
		.button-lg {
			all: unset;
			width: 55px;
			height: 55px;
			cursor: pointer;
			border-radius: 9px;
			background: #f9f9f9;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.button-lg svg {
			width: 31px;
			height: 31px;
		}
		.button-wrapper span {
			display: block;
			color: #000;
			font-size: 10px;
			font-weight: 400;
		}
	}
</style>
