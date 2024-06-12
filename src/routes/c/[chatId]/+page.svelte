<script lang="ts">
	import Rules from "$lib/components/rules.svelte";
	import RatingSlider from "$lib/components/ratingSlider.svelte";
	import { onMount } from "svelte";
	import { writable, type Writable } from "svelte/store";
	import { fly } from "svelte/transition";
	import TooltipMelt from "$lib/components/tooltipMelt.svelte";
	import { melt } from "@melt-ui/svelte";
	import { addNotification } from "$lib/components/snackbar.svelte";
	import { chatHistory } from "$lib/stores/history";
	import { page } from "$app/stores";
	import { redirect } from "@sveltejs/kit";

	let isMobile = false;
	let isLoading = true;
	let isOpen = false;
	let solved = false;

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

	let inputValue = "";
	let textareaHeight = writable<number>(0);

	type Message = {
		text: string;
		time: string;
		sender: string;
		senderImg: string;
		isUser: boolean;
		showDislikeFeedback: boolean;
		showLikeFeedback: boolean;
		buttonStates: boolean[];
		signalSolve: boolean;
	};

	let messages: Message[] = [
		{
			isUser: false,
			sender: "Patient",
			senderImg: "/icons/patient.png",
			time: "9:34 pm",
			text: `Test message. Need an API to work correctly.`,
			showDislikeFeedback: false,
			showLikeFeedback: false,
			buttonStates: [false, false, false, false],
			signalSolve: false
		}
	];

	function addMessage() {
		const time = new Date().toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
			hour12: true
		});
		let trimmedValue = inputValue.trim();
		if (!trimmedValue) {
			return;
		}

		let message: Message = {
			isUser: true,
			sender: "Sie",
			senderImg: "",
			time: time,
			text: inputValue,
			showDislikeFeedback: false,
			showLikeFeedback: false,
			buttonStates: [false, false, false, false],
			signalSolve: true
		};

		messages.push(message);
		messages = messages;

		if (message.signalSolve) {
			solved = true;
			let id = parseInt($page.params.chatId);
			let historyItem = $chatHistory.find((x) => x.id === id);
			if (historyItem) {
				historyItem.isSolved = true;
				$chatHistory = $chatHistory;
			}
		}

		inputValue = "";
		textareaHeight.set(0);

		const textarea = document.getElementById("chat-input") as HTMLTextAreaElement;

		if (window.innerWidth > 1440) {
			textarea.style.height = "80px";
		} else {
			textarea.style.height = "54px";
		}
		let messagesWrapper = document.querySelector(".messages-wrapper") as HTMLDivElement;
		requestAnimationFrame(function () {
			messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
		});
	}
	let previousPage = "";

	onMount(() => {
		previousPage = document.referrer || "/";

		const textarea = document.getElementById("chat-input") as HTMLTextAreaElement;

		textarea.addEventListener("keydown", (event) => {
			if (event.key === "Enter" && !event.shiftKey) {
				event.preventDefault();
				if (inputValue.trim() !== "") {
					addMessage();
				}
			} else if (event.key === "Enter" && event.shiftKey) {
				const textBefore = inputValue.substring(0, textarea.selectionStart);
				const textAfter = inputValue.substring(textarea.selectionEnd);
				const cursorPosition = textarea.selectionStart;
				if (textBefore.trim() === "" && textAfter.trim() === "") {
					textarea.selectionStart = cursorPosition + 1;
					textarea.selectionEnd = cursorPosition + 1;
				} else {
					textarea.selectionStart = cursorPosition + 1;
					textarea.selectionEnd = cursorPosition + 1;
				}
				textarea.value = inputValue;
				textarea.style.height = "auto";
				textarea.style.height = textarea.scrollHeight + "px";
			}
		});

		textarea.addEventListener("input", () => {
			if (window.innerWidth > 1440) {
				textarea.style.height = textarea.scrollHeight - 1 + "px";
			} else {
				textarea.style.height = "54px";
			}
		});
	});

	function goBack() {
		history.back();
	}

	function goHome() {
		window.location.href = "/c";
	}

	function openChatFeedbackPopup() {
		const chatFeedbackOverlay = document.querySelector(".chat-feedback-overlay") as HTMLDivElement;
		chatFeedbackOverlay.style.display = "flex";
	}

	function closeChatFeedbackPopup() {
		const chatFeedbackOverlay = document.querySelector(".chat-feedback-overlay") as HTMLDivElement;
		chatFeedbackOverlay.style.display = "none";
	}

	function openRulesPopup() {
		const popup = document.querySelector(".rules-overlay") as HTMLDivElement;
		popup.style.display = "flex";
	}

	function closeRulesPopup() {
		const popup = document.querySelector(".rules-overlay") as HTMLDivElement;
		popup.style.display = "none";
	}

	function openEcgPopup() {
		const ecg = document.querySelector(".ecg-overlay") as HTMLDivElement;
		ecg.style.display = "flex";
	}

	function closeEcgPopup() {
		const ecg = document.querySelector(".ecg-overlay") as HTMLDivElement;
		ecg.style.display = "none";
	}

	function openDislikePreFeedback(message: Message) {
		let messageIndex = messages.findIndex((msg) => msg === message);
		messages[messageIndex] = {
			...message,
			showDislikeFeedback: true,
			showLikeFeedback: false
		};
		messages = messages;
	}

	function closePreFeedback(message: Message) {
		let messageIndex = messages.findIndex((msg) => msg === message);
		messages[messageIndex] = {
			...message,
			showLikeFeedback: false,
			showDislikeFeedback: false
		};
		messages = messages;
	}

	function openFeedbackPopup(message: Message) {
		popupMessage = message;
		isOpen = true;
	}

	function closeFeedbackPopup() {
		isOpen = false;
	}

	function toggleFeedbackState(message: Message, index: number) {
		let origMessage = message;
		origMessage.buttonStates[index] = !origMessage.buttonStates[index];
		popupMessage = origMessage;
		messages = messages;
	}

	let popupMessage: Message;
</script>

<svelte:head>
	<title>ZulaAI - Chat</title>
</svelte:head>

<div class="main">
	<!-- ===================FEEDBACK POPUP=================== -->

	{#if isOpen}
		<div class="feedback-overlay" style:display={isOpen ? "flex" : "none"}>
			<div class="feedback-popup">
				<form
					method="post"
					action="/submit-feedback"
					on:submit={(e) => {
						e?.preventDefault();
						addNotification({
							data: {
								message: "Feedback gesendet"
							}
						});
					}}
				>
					<div class="feedback-header">
						<h2 class="feedback-title">Geben Sie zusätzliches Feedback</h2>
						<button type="button" class="close-feedback" on:click={closeFeedbackPopup}
							><svg
								stroke="#00BCA1"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								class="lucide lucide-x"
								><path d="M18 6L6 18M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div class="feedback-content">
						<div class="feedback-buttons">
							<button
								type="button"
								class="feedback-button"
								class:active={popupMessage.buttonStates[0]}
								on:click={() => toggleFeedbackState(popupMessage, 0)}
							>
								Medizinisch ungenau
							</button>

							<button
								type="button"
								class="feedback-button"
								class:active={popupMessage.buttonStates[1]}
								on:click={() => {
									toggleFeedbackState(popupMessage, 1);
								}}
							>
								Technischer Fehler
							</button>

							<button
								type="button"
								class="feedback-button"
								class:active={popupMessage.buttonStates[2]}
								on:click={() => {
									toggleFeedbackState(popupMessage, 2);
								}}
							>
								Emotionen unangemessen dargestellt
							</button>

							<button
								type="button"
								class="feedback-button"
								class:active={popupMessage.buttonStates[3]}
								on:click={() => {
									toggleFeedbackState(popupMessage, 3);
								}}
							>
								Anweisungen nicht korrekt befolgt
							</button>
						</div>
						<div class="feedback-input">
							<input type="text" placeholder="Bitte teilen Sie uns Ihre Meinung mit" />
						</div>
						<div class="feedback-submit">
							<button
								type="submit"
								on:click={() => {
									closeFeedbackPopup();
									closePreFeedback(popupMessage);
								}}
								class:disabled={popupMessage.buttonStates.every((x) => !x)}
								disabled={popupMessage.buttonStates.every((x) => !x)}>Abgeben</button
							>
						</div>
					</div>
				</form>
			</div>
		</div>
	{/if}

	<!-- ===================FEEDBACK POPUP=================== -->

	<div class="chatlist-header">
		<button on:click={goHome} class="btn-back">
			<img src="/icons/back.svg" alt="Back" />
		</button>
		<a href="/c">
			<img src="/logo/Grouplogo2.svg" alt="Zulamed" class="logo" />
		</a>
	</div>
	<div class="chatbox">
		<div class="chat-feedback-overlay">
			<form action="" method="post">
				<div class="chat-feedback-popup">
					<div>
						<button type="button" class="close-popup" on:click={closeChatFeedbackPopup}
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#00BCA1"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-x"
								><path d="M18 6L6 18M6 6l12 12" />
							</svg>
						</button>

						<div class="popup-header">
							<h2 class="popup-title">Teilen Sie Ihre Meinung mit uns</h2>
						</div>

						<div class="rating-sliders-wrapper" style="margin-top: 33px;">
							<RatingSlider question="ZULA ist einfach zu verwenden." />
							<RatingSlider question="ZULA hat ein intuitives Interface." />
							<RatingSlider
								question="ZULA hilft mir einen großen Überblick über Krankheiten, Diagnostik und Therapie zu erhalten, um schneller Entscheidungen zu treffen."
							/>
							<RatingSlider question="Ich kann ZULA in mein Lernfeld als Hilfsmedium integrieren." />
							<RatingSlider question="ZULA gibt medizinisch genaue Informationen." />
							<RatingSlider question="Ich würde ZULA einem Freund oder Kollegen weiterempfehlen." />
						</div>
					</div>
					<button type="submit" class="chat-feedback-btn">Feedback senden</button>
				</div>
			</form>
		</div>

		<div class="ecg-overlay">
			<div class="ecg-popup">
				<button class="close-popup" on:click={closeEcgPopup}
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#00BCA1"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-x"
						><path d="M18 6L6 18M6 6l12 12" />
					</svg>
				</button>
				<div class="popup-header">
					<h2 class="popup-title">ECG</h2>
				</div>
				<div class="popup-content">
					<p class="popup-text">ECG (Elektrokardiogramm) text goes here.</p>
				</div>
			</div>
		</div>

		<div class="rules-overlay">
			<div class="popup">
				<button class="close-rulespopup" on:click={closeRulesPopup}
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#00BCA1"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-x"
						><path d="M18 6L6 18M6 6l12 12" />
					</svg></button
				>
				<div class="popup-header">
					<h2 class="popup-title">Willkommen bei einer Simulation mit ZulaMed</h2>
				</div>
				<div class="popup-content">
					<Rules />
				</div>
			</div>
		</div>
		<TooltipMelt placement="left">
			<button slot="button" let:trigger use:melt={trigger} class="info-button" on:click={openRulesPopup}>
				<img src="/icons/info.svg" alt="info" />
			</button>
			<p slot="content">Info</p>
		</TooltipMelt>
		<div class="messages-wrapper">
			<!-- ==========MESSAGE MEDICAL RECORD========== -->
			<div class="message incoming medical-record">
				<div class="message-full" style="display: flex; flex-direction: column;">
					<img class="sender-img" src="/icons/description.png" alt="" />
					<div class="message-info">
						<h2 class="message-sender">Fallbeschreibung</h2>
					</div>
					<div class="message-content">
						<p class="content-text">Test medical record. Need an API to work correctly.</p>
					</div>
				</div>
			</div>
			<!-- ==========MESSAGE MEDICAL RECORD========== -->
			<!-- ==========MESSAGE BOT TEST========== -->
			<div class="message incoming-error">
				<div class="message-full" style="display: flex; flex-direction: column;">
					<img class="sender-img" src="/icons/patient.png" alt="" />
					<div class="message-info">
						<h2 class="message-sender">Patient</h2>
						<span class="message-time">20:31 am</span>
					</div>
					<div class="message-content">
						<p class="content-text">Test error message. Need an API to work correctly.</p>
					</div>
				</div>
			</div>
			<!-- ==========MESSAGE BOT TEST========== -->

			<!-- ==========MESSAGE ECG========== -->
			<div class="message incoming">
				<div class="message-full" style="display: flex; flex-direction: column;">
					<img class="sender-img" src="/icons/description.png" alt="" />
					<div class="message-info">
						<h2 class="message-sender">Ergebnisse</h2>
					</div>
					<div class="message-content result">
						<p class="content-text">ECG</p>
						<button class="popup-btn" on:click={openEcgPopup}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="14"
								height="14"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#FFFFFF"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-clipboard-plus"
								><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path
									d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
								/><path d="M9 14h6" /><path d="M12 17v-6" /></svg
							>
						</button>
					</div>
				</div>
			</div>
			<!-- ==========MESSAGE ECG========== -->

			<!-- ==========MESSAGE PRELOADER========== -->
			<div class="message incoming-typing">
				<div class="message-full" style="display: flex; flex-direction: column;">
					<img class="sender-img" src="/icons/patient.png" alt="" />
					<div class="message-info">
						<h2 class="message-sender">Patient</h2>
						<span class="message-time">19:34 pm</span>
					</div>
					<div class="message-content">
						<div class="typing-animation">
							<div class="dot"></div>
							<div class="dot"></div>
							<div class="dot"></div>
						</div>
					</div>
				</div>
			</div>
			<!-- ==========MESSAGE PRELOADER========== -->
			<!-- ==========MESSAGE OUTGOING========== -->
			{#each messages as message}
				<div transition:fly={{ y: 7, duration: 150 }} class="message {message.isUser ? 'outgoing' : 'incoming'}">
					<div class="message-full" style="display: flex; flex-direction: column;">
						{#if message.sender === "Patient"}
							<img class="sender-img" src="/icons/patient.png" alt="" />
						{/if}
						<div class="message-info">
							<h2 class="message-sender">{message.sender}</h2>
							<span class="message-time">{message.time}</span>
						</div>
						<div class="message-content">
							<p class="content-text">
								{message.text}
							</p>
						</div>
					</div>
					{#if !message.isUser}
						<div class="rate-buttons">
							<!-- <TooltipMelt placement="top">
                                <button
                                    slot="button"
                                    let:trigger
                                    use:melt={trigger}
                                    class="rate-btn like"
                                    on:click={() =>
                                        openLikePreFeedback(message)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        style:fill={message.showLikeFeedback
                                            ? "#00BCA1"
                                            : "transparent"}
                                        stroke="#00BCA1"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-thumbs-up"
                                    >
                                        <path d="M7 10v12" />
                                        <path
                                            d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"
                                        />
                                    </svg>
                                </button>
                                <p slot="content">Mag ich</p>
                            </TooltipMelt> -->
							<TooltipMelt placement="bottom">
								<button
									slot="button"
									let:trigger
									use:melt={trigger}
									class="rate-btn dislike"
									on:click={() => openDislikePreFeedback(message)}
								>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										style:stroke={message.showDislikeFeedback ? "#transparent" : "#00bca1"}
										xmlns="http://www.w3.org/2000/svg"
										class="icon-md"
										style="stroke-width: 1.5px;"
										><path
											d="M11.4079 21.4961C11.1953 21.8698 10.7683 22.0649 10.348 21.9805C8.4373 21.5968 7.27541 19.6391 7.84844 17.7691L8.69697 14.9999L6.98577 14.9999C4.35915 14.9999 2.45151 12.492 3.14262 9.94747L4.50063 4.94747C4.97329 3.20722 6.54741 1.99994 8.34378 1.99994H14.0328C15.131 2.00207 16.0206 2.89668 16.0206 3.99994V14.9999H15.6827C15.3253 14.9999 14.9953 15.1922 14.818 15.5038L11.4079 21.4961Z"
											style:fill={message.showDislikeFeedback ? "#00BCA1" : "transparent"}
										></path><path
											d="M18.0124 14.9999C19.6624 14.9999 21 13.6568 21 11.9999V4.99994C21 3.34308 19.6624 1.99994 18.0124 1.99994H17.4794C17.8184 2.58829 18.0124 3.27136 18.0124 3.99994V14.9999Z"
											style:fill={message.showDislikeFeedback ? "#00BCA1" : "transparent"}
										></path></svg
									>
								</button>
								<p slot="content">Mag ich nicht</p>
							</TooltipMelt>
						</div>
					{/if}
					{#if !message.isUser && message.showDislikeFeedback}
						<div
							transition:fly={{ y: 7, duration: 150 }}
							class="feedback-wrapper"
							style:display={message.showDislikeFeedback ? "block" : "none"}
						>
							<div class="prefeedback-header">
								<h2 class="prefeedback-title">Erzählen Sie uns mehr:</h2>
								<button class="close-feedback" on:click={() => closePreFeedback(message)}
									><svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#00BCA1"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-x"
										><path d="M18 6L6 18M6 6l12 12" />
									</svg>
								</button>
							</div>
							<form
								class="prefeedback-content"
								method="post"
								on:submit={(e) => {
									e?.preventDefault();
									addNotification({
										data: {
											message: "Feedback gesendet"
										}
									});
								}}
							>
								<div class="prefeedback-buttons">
									<div class="prefeedback-button-wrapper">
										<button
											type="button"
											class="prefeedback-button"
											class:active={message.buttonStates[0]}
											on:click={() => toggleFeedbackState(message, 0)}
										>
											Medizinisch ungenau
										</button>
									</div>
									<div class="prefeedback-button-wrapper">
										<button
											type="button"
											class="prefeedback-button"
											class:active={message.buttonStates[1]}
											on:click={() => toggleFeedbackState(message, 1)}
										>
											Technischer Fehler
										</button>
									</div>
									<div class="prefeedback-button-wrapper">
										<button
											type="button"
											class="prefeedback-button"
											class:active={message.buttonStates[2]}
											on:click={() => {
												toggleFeedbackState(message, 2);
											}}
										>
											Emotionen unangemessen dargestellt
										</button>
									</div>
									<div class="prefeedback-button-wrapper">
										<button
											type="button"
											class="prefeedback-button"
											class:active={message.buttonStates[3]}
											on:click={() => {
												toggleFeedbackState(message, 3);
											}}
										>
											Anweisungen nicht korrekt befolgt
										</button>
									</div>

									<button type="button" class="prefeedback-button button5" on:click={() => openFeedbackPopup(message)}
										>Sonstiges</button
									>
								</div>
								<div class="prefeedback-submit-wrapper">
									<button
										type="submit"
										class:disabled={message.buttonStates.every((x) => !x)}
										disabled={message.buttonStates.every((x) => !x)}
										on:click={() => closePreFeedback(message)}
										class="prefeedback-submit">Teilen Sie uns Ihre Meinung mit</button
									>
								</div>
							</form>
						</div>
					{/if}
				</div>
			{/each}
			<!-- ==========MESSAGE OUTGOING========== -->

			<!-- ==========CHAT FINISH MESSAGE========== -->

			{#if solved}
				<div class="message incoming medical-record">
					<div class="message-full" style="display: flex; flex-direction: column;">
						<img class="sender-img" src="/icons/description.png" alt="" />
						<div class="message-info">
							<h2 class="message-sender">Fallbeschreibung</h2>
							<span class="message-time">19:34 pm</span>
						</div>
						<div class="message-content">
							<p class="content-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat justo vel porta mattis. Nunc
								eleifend mi velit, eu tincidunt ex fermentum eget. Sed id malesuada nibh, sit amet varius mi. Cras
								luctus enim et justo aliquet, vel consequat quam pretium. Vivamus maximus lectus eget mauris egestas
								maximus. Cras tincidunt neque et ex ultricies scelerisque. Nunc venenatis sem vitae tortor consectetur,
								eget lacinia velit egestas. Praesent sollicitudin eget ligula at vehicula. Proin eget dui fermentum,
								accumsan velit vel, aliquet erat. Vivamus quis urna finibus, convallis purus rutrum, laoreet libero.
								Maecenas quis tristique justo, vitae rutrum tortor. Nulla semper lectus nec justo dapibus efficitur ac a
								tellus. Vivamus laoreet erat in enim rhoncus, eget feugiat turpis dapibus. Maecenas consequat ac turpis
								quis hendrerit. Vestibulum nec elit eget mi pharetra suscipit vel vitae ex. Aliquam at elit non risus
								facilisis vulputate a accumsan felis. Quisque et sem quis quam posuere tincidunt. Curabitur faucibus ex
								ac quam gravida, at scelerisque ex aliquet. Aenean imperdiet porta malesuada. Sed facilisis, velit ut
								faucibus feugiat, nisl sem fermentum massa, ac aliquet leo ligula a arcu. Vivamus a nulla vel dui
								placerat rutrum.
							</p>
						</div>
					</div>
				</div>

				<div class="chat-feedback-wrapper">
					<button on:click={openChatFeedbackPopup} class="chat-feedback-btn">Schreiben Sie bitte Ihre Meinung</button>
				</div>
			{/if}
			<!-- ==========CHAT FINISH MESSAGE========== -->
		</div>

		<div class="messagebox-wrapper">
			<div class="message-box">
				<div class="typing-textarea">
					<textarea
						bind:value={inputValue}
						required
						id="chat-input"
						placeholder={!solved ? "Stelle deine Fragen" : "Der Chat ist beendet"}
						style="height: {textareaHeight}px;"
						disabled={solved}
						class={!solved ? "chat-input" : "chat-input disabled"}
					></textarea>
					<button on:click={addMessage} id="sendBtn" class="send-btn"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#A1A1A1"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-send"
							><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* ===============CHAT FEEDBACK POPUP================ */

	.rating-sliders-wrapper {
		margin-top: 33px;
		height: 420px;
		overflow-y: scroll;
		overflow-x: hidden;
		padding: 0 20px;
		scrollbar-width: thin;
		scrollbar-color: #00bca1 #f1f1f1;
	}

	.rating-sliders-wrapper::-webkit-scrollbar {
		width: 5px;
	}

	.rating-sliders-wrapper::-webkit-scrollbar-thumb {
		background-color: #00bca1;
		border-radius: 10px;
	}

	.rating-sliders-wrapper::-webkit-scrollbar-track {
		background-color: #f1f1f1;
	}

	.chat-feedback-overlay {
		display: none;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #00000033;
		z-index: 9999;
		justify-content: center;
		align-items: center;
	}

	.chat-feedback-popup {
		width: 100%;
		max-width: 800px;
		height: fit-content;
		background-color: #fff;
		border-radius: 0.75rem;
		position: relative;
		color: #000;
		display: flex;
		flex-direction: column;
		box-shadow: 1px 5px 13px 1px #00000040;
		padding: 34px 77px;
		align-items: center;
		gap: 100px;
	}
	/* ===============CHAT FEEDBACK POPUP================ */

	.disabled {
		background-color: #e5e5e5;
		color: #9c9c9c;
		cursor: not-allowed;
	}
	.chat-feedback-wrapper {
		display: flex;
		justify-content: center;
	}

	.chat-feedback-btn {
		font-family: "Montserrat", sans-serif;
		background-color: #00bca1;
		color: white;
		padding: 10px 20px;
		border-radius: 10px;
		font-size: 16px;
		font-weight: 500;
		cursor: pointer;
	}

	.chat-feedback-btn:hover,
	.chat-feedback-btn:active {
		background-color: #00a991;
	}

	/* ===============FEEDBACK CONTAINER================ */

	.feedback-wrapper {
		display: none;
		width: 98%;
		background-color: transparent;
		border: 1px solid #00bca1;
		border-radius: 11px;
		padding: 17px 45px;
	}

	.prefeedback-submit.disabled {
		background-color: #e5e5e5;
		color: #9c9c9c;
		cursor: not-allowed;
	}

	.prefeedback-submit.disabled:hover {
		background-color: #e5e5e5;
	}

	.prefeedback-header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.prefeedback-title {
		font-size: 15px;
		font-weight: 400;
		line-height: 18.29px;
		color: #000;
	}

	.prefeedback-content {
		padding: 0;
		margin-top: 10px;
	}
	.prefeedback-buttons,
	.feedback-buttons {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		user-select: none;
		column-gap: 17px;
		row-gap: 10px;
		width: 100%;
	}

	.prefeedback-buttons .prefeedback-button,
	.feedback-buttons .feedback-button {
		all: unset;
		cursor: pointer;
		background-color: transparent;
		border: 1px solid #00bca1;
		color: #000;
		font-size: 0.875rem;
		white-space: nowrap;
		font-weight: 500;
		line-height: 1.25rem;
		padding: 0.5rem 0.75rem;
		border-radius: 0.5rem;
	}

	.prefeedback-buttons .prefeedback-button.active,
	.feedback-buttons .feedback-button.active {
		background-color: #00bca1;
		color: #fff;
	}

	.feedback-buttons .feedback-button.active:hover,
	.feedback-buttons .feedback-button.active:active,
	.prefeedback-buttons .prefeedback-button.active:hover,
	.prefeedback-buttons .prefeedback-button.active:active {
		background-color: #00bca1;
	}

	.feedback-buttons .feedback-button:active,
	.prefeedback-buttons .prefeedback-button:active {
		transform: scale(0.99);
		transition: 0.1s ease;
	}

	.prefeedback-buttons .prefeedback-button:hover,
	.prefeedback-buttons .prefeedback-button:active,
	.feedback-buttons .feedback-button:hover,
	.feedback-buttons .feedback-button:active {
		background-color: #e5e5e5;
	}

	.prefeedback-buttons button:hover,
	.prefeedback-buttons button:active {
		background-color: #e5e5e5;
	}

	.prefeedback-submit-wrapper {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.prefeedback-submit {
		padding: 7px 15px;
		background-color: #00bca1;
		border-radius: 9px;
		color: #fff;
		font-size: 15px;
		font-family: "Montserrat", sans-serif;
		font-weight: 400;
		cursor: pointer;
		margin-top: 13px;
		align-self: center;
	}

	.prefeedback-submit:hover,
	.prefeedback-submit:active {
		background-color: #00a991;
	}

	/* ===============FEEDBACK CONTAINER================ */
	/* ===============FEEDBACK POPUP================ */

	.feedback-overlay {
		display: none;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #00000033;
		z-index: 9999;
		justify-content: center;
		align-items: center;
	}

	.feedback-popup {
		width: 100%;
		max-width: 800px;
		background-color: #fff;
		border-radius: 0.75rem;
		position: relative;
		color: #000;
		display: flex;
		flex-direction: column;
		box-shadow: 1px 5px 13px 1px #00000040;
		align-items: center;
	}

	.feedback-header {
		width: 100%;
		padding: 24px;
		border-bottom: 1px solid #9c9c9c;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.feedback-title {
		font-size: 16px;
		font-weight: 700;
		color: #000;
	}
	.close-feedback {
		all: unset;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4px;
		border-radius: 50%;
	}
	.close-feedback svg {
		stroke: #000;
	}
	.close-feedback:hover,
	.close-feedback:active {
		background-color: #f4f4f4;
	}

	.feedback-content {
		width: 100%;
		padding: 24px;
	}
	.feedback-buttons {
		display: flex;
		flex-wrap: wrap;
		user-select: none;
		gap: 1rem;
	}

	.feedback-input {
		width: 100%;
		margin-top: 1.5rem;
	}
	.feedback-submit {
		width: 100%;
		margin-top: 1.5rem;
		display: flex;
		justify-content: end;
	}
	.feedback-submit button {
		all: unset;
		cursor: pointer;
		background-color: #00bca1;
		color: #fff;
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1.25rem;
		padding: 0.5rem 0.75rem;
		border-radius: 0.5rem;
	}

	.feedback-submit button.disabled {
		background-color: #e5e5e5;
		color: #9c9c9c;
		cursor: not-allowed;
	}

	.feedback-submit button.disabled:hover {
		background-color: #e5e5e5;
	}

	.feedback-submit button:hover,
	.feedback-submit button:active {
		background-color: #00a991;
	}
	.feedback-input input {
		font-family: "Montserrat", sans-serif;
		font-size: 14px;
		font-weight: 400;
		width: 100%;
		padding: 12px;
		border: 1px solid #9c9c9c;
		border-radius: 0.5rem;
	}

	.feedback-input input:user-valid {
		border: 1px solid #00bca1;
	}

	.feedback-input input:focus {
		border: 1px solid #00bca1;
	}

	/* ===============FEEDBACK POPUP================ */

	.rate-buttons {
		display: flex;
		gap: 9px;
		padding: 0 45px;
	}
	.rate-btn {
		all: unset;
		cursor: pointer;
		border-radius: 50%;
		padding: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.rate-btn:hover,
	.rate-btn:active {
		background-color: #d9d9d973;
	}

	.rate-btn svg {
		width: 20px;
		height: 20px;
		fill: transparent;
	}
	.rate-btn.active {
		background-color: #00bca1;
	}

	.rate-btn.active svg {
		stroke: #f5f5f5;
	}

	/* =========popup========= */
	.close-rulespopup {
		all: unset;
		cursor: pointer;
		position: absolute;
		right: 27px;
		top: 25px;
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4px;
	}

	.close-rulespopup:hover {
		background-color: #f4f4f4;
		border-radius: 50%;
	}
	.ecg-overlay {
		display: none;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #00000033;
		z-index: 9999;
		justify-content: center;
		align-items: center;
	}

	.ecg-popup {
		width: 100%;
		max-width: 800px;
		background-color: #fff;
		border-radius: 15px;
		padding: 36px 70px 19px 70px;
		position: relative;
		color: #000;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.popup-title {
		font-size: 15px;
		font-weight: 700;
		color: #000;
		text-align: center;
	}

	.rules-overlay {
		display: none;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #00000033;
		z-index: 9999;
		justify-content: center;
		align-items: center;
	}

	.rules-overlay .popup {
		width: 100%;
		max-width: 800px;
		background-color: #fff;
		border-radius: 15px;
		padding: 36px 70px 19px 70px;
		position: relative;
		color: #000;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.popup-title {
		font-size: 16px;
		font-weight: 700;
		color: #000;
		text-align: center;
	}
	.popup-content {
		height: 500px;
		overflow-y: scroll;
		scrollbar-width: thin;
		scrollbar-color: #00bca1 #f5f5f5;
		margin-bottom: 8px;
	}

	.popup-content::-webkit-scrollbar {
		width: 5px;
	}

	.popup-content::-webkit-scrollbar-thumb {
		background-color: #00bca1;
		border-radius: 10px;
	}

	.popup-content::-webkit-scrollbar-track {
		background-color: #f5f5f5;
	}

	/* =========popup========= */

	.info-button {
		position: absolute;
		top: 23px;
		right: 23px;
		background: none;
		border: none;
		cursor: pointer;
	}
	.info-button img {
		width: 28px;
		height: 28px;
	}
	/* =========popup========= */

	.popup-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.2);
		z-index: 9999;
		display: none;
		align-items: center;
		justify-content: center;
	}
	.popup-btn {
		all: unset;
		cursor: pointer;
		display: flex;
		align-items: center;
		padding: 5px;
		background-color: #00bca1;
		border-radius: 50%;
	}
	.popup {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 29px;
		padding: 38px 62px;
		background-color: #fff;
		width: 100%;
		height: 100%;
		max-height: 600px;
		max-width: 830px;
		border-radius: 33px;
		box-shadow: 1px 5px 13px 1px #00000040;
	}

	.popup-header {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 15px;
	}
	.close-popup {
		all: unset;
		cursor: pointer;
		position: absolute;
		right: 27px;
		top: 25px;
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4px;
	}

	.close-popup:hover {
		background-color: #f4f4f4;
		border-radius: 50%;
	}

	.popup-title {
		font-size: 16px;
		font-weight: 700;
		color: #000000;
	}

	.popup-content {
		display: flex;
		flex-direction: column;
		gap: 10px;
		overflow-y: scroll;
		scrollbar-width: thin;
		scrollbar-color: #00bca1 transparent;
	}

	.popup-content::-webkit-scrollbar {
		width: 5px;
	}

	.popup-content::-webkit-scrollbar-track {
		background-color: transparent;
	}

	.popup-content::-webkit-scrollbar-thumb {
		background-color: #00bca1;
		border-radius: 8px;
	}

	.popup-text {
		font-size: 15px;
		font-weight: 400;
		color: #000000;
		padding: 0 15px;
	}

	/* =========popup========= */

	.typing-animation {
		display: flex;
		align-items: center;
		gap: 3px;
		height: 13px;
	}

	.typing-animation .dot {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background-color: #00bca1;
	}

	.typing-animation .dot:nth-child(1) {
		animation: typing 1s infinite;
	}

	.typing-animation .dot:nth-child(2) {
		animation: typing 1s infinite 0.3s;
	}

	.typing-animation .dot:nth-child(3) {
		animation: typing 1s infinite 0.6s;
	}

	@keyframes typing {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-5px);
		}
		100% {
			transform: translateY(0);
		}
	}

	/* =========header========= */

	.main {
		width: 100%;
		height: calc(100% - 93px);
		display: flex;
		flex-direction: column;
		padding: 0 17px 22px 0;
	}

	.chatbox {
		position: relative;
		width: 100%;
		height: 100%;
		border-radius: 15px;
		background-color: #f5f5f5;
		padding: 16px 42px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.messages-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: end;
		align-items: center;
		gap: 19px;
		overflow-x: hidden;
		overflow-y: scroll;
		scrollbar-width: thin;
		scrollbar-color: #00bca1 transparent;
	}

	.messages-wrapper::-webkit-scrollbar-thumb {
		background-color: #00bca1;
		border-radius: 8px;
	}
	.messages-wrapper::-webkit-scrollbar-track {
		background-color: transparent;
	}

	@supports (-ms-ime-align: auto) {
		.messages-wrapper {
			scrollbar-width: thin;
			scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
		}
	}

	.message {
		display: flex;
		flex-direction: column;
		gap: 2px;
		width: 98%;
	}

	.message-full {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 98%;
	}

	.message-info {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 0 45px;
	}

	.message-sender {
		font-size: 16px;
		font-weight: 700;
		color: #1e1f22;
	}

	.sender-img {
		position: absolute;
		width: 45px;
		height: 45px;
		top: 0;
		border-radius: 8px;
		left: -7px;
		z-index: 100;
	}

	.message-time {
		font-size: 12px;
		font-weight: 400;
		color: #1e1f22;
	}

	.message-content {
		background: #fff;
		padding: 29px 49px;
		border-radius: 11px;
		font-size: 15px;
		font-weight: 400;
		color: #000000;
	}

	.message-content.result {
		display: flex;
		align-items: center;
		gap: 10px;
		background: #dcefed !important;
		border: 1px solid #00bca1 !important;
	}

	.content-text {
		white-space: pre-wrap;
		word-break: break-word;
		line-height: 18.29px;
		display: flex;
		align-items: center;
		gap: 6px;
	}
	.message.incoming.medical-record .message-content {
		background: #dcefed;
		border: 1px solid #00bca1;
	}
	.message.incoming.medical-record .message-content p {
		white-space: unset;
	}
	.message.incoming .message-content,
	.message.incoming-typing .message-content {
		background: #00bca11a;
		border: 1px solid transparent;
	}
	.message.incoming-error .message-content {
		background: #ff00001a;
		border: 1px solid #ff0000;
	}
	.message.outgoing .message-content {
		background: #fff;
	}

	/* ===================MESSAGEBOX=================== */

	.messagebox-wrapper {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 10px;
		z-index: 1000;
	}

	.message-box {
		bottom: 0;
		width: 100%;
		display: flex;
		align-items: center;
		gap: 10px;
		border-radius: 12px;
		padding: 0;
		background-color: #fff;
		border: 1px solid #fff;
	}

	.typing-textarea {
		position: relative;
		width: 100%;
		display: flex;
		position: relative;
		align-items: center;
	}
	.typing-textarea .send-btn {
		all: unset;
		position: absolute;
		visibility: hidden;
		cursor: pointer;
		width: 24px;
		height: 24px;
		right: 20px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px;
	}

	.typing-textarea textarea:valid + .send-btn {
		visibility: visible;
	}
	.message-box:focus-within {
		border: 1px solid #00bca1;
	}

	.typing-textarea textarea {
		font-family: "Montserrat";
		width: 100%;
		max-height: 330px;
		height: 80px;
		border: none;
		outline: none;
		resize: none;
		font-size: 15px;
		font-weight: 400;
		color: #000;
		padding: 31px 45px 31px 29px;
		border-radius: 12px;
		white-space: pre-wrap;
	}

	.typing-textarea textarea::-webkit-scrollbar {
		width: 0px;
	}
	.typing-textarea textarea::-webkit-scrollbar-track {
		border-radius: 25px;
		background-color: transparent;
	}
	.typing-textarea textarea::-webkit-scrollbar-thumb {
		border-radius: 25px;
		background-color: transparent;
	}
	.typing-textarea textarea {
		scrollbar-width: thin;
		scrollbar-color: transparent transparent;
	}
	.send-btn:hover {
		background-color: #f4f4f4;
	}

	.chatlist-header {
		display: none;
	}

	@media (max-width: 1440px) {
		.rating-sliders-wrapper {
			height: 380px;
		}

		.chat-feedback-overlay {
			display: none;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: #00000033;
			z-index: 9999;
			justify-content: center;
			align-items: center;
		}

		.chat-feedback-popup {
			width: 100%;
			max-width: 800px;
			height: fit-content;
			background-color: #fff;
			border-radius: 0.75rem;
			position: relative;
			color: #000;
			display: flex;
			flex-direction: column;
			box-shadow: 1px 5px 13px 1px #00000040;
			padding: 34px 77px;
			align-items: center;
			gap: 30px;
		}

		/* ===============FEEDBACK CONTAINER================ */

		.feedback-wrapper {
			display: none;
			width: 100%;
			background-color: transparent;
			border: 1px solid #00bca1;
			border-radius: 11px;
			padding: 15px 35px;
		}

		.prefeedback-header {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.prefeedback-title {
			font-size: 13px;
			font-weight: 400;
			line-height: 18.29px;
			color: #000;
		}

		.prefeedback-content {
			padding: 0;
			margin-top: 10px;
		}

		.prefeedback-buttons {
			display: flex;
			flex-wrap: wrap;
			user-select: none;
			column-gap: 14px;
			row-gap: 14px;
			width: 100%;
		}

		.prefeedback-buttons button {
			all: unset;
			cursor: pointer;
			background-color: transparent;
			border: 1px solid #00bca1;
			color: #000;
			font-size: 0.75rem;
			font-weight: 500;
			line-height: 1.25rem;
			padding: 0.4rem 0.65rem;
			border-radius: 0.5rem;
		}

		.prefeedback-submit {
			font-size: 0.875rem;
			white-space: nowrap;
			font-weight: 500;
			line-height: 1.25rem;
			padding: 0.5rem 0.75rem;
			border-radius: 0.5rem;
		}

		/* ===============FEEDBACK CONTAINER================ */

		/* ===============FEEDBACK POPUP================ */

		.feedback-overlay {
			display: none;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: #00000033;
			z-index: 9999;
			justify-content: center;
			align-items: center;
		}

		.feedback-popup {
			width: 100%;
			max-width: 700px;
			background-color: #fff;
			border-radius: 15px;
			position: relative;
			color: #000;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.feedback-header {
			width: 100%;
			padding: 20px;
			border-bottom: 1px solid #9c9c9c;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.feedback-title {
			font-size: 13px;
			font-weight: 400;
			line-height: 16.29px;
			color: #000;
		}

		.feedback-content {
			padding: 20px;
		}

		.feedback-buttons {
			display: flex;
			flex-wrap: wrap;
			user-select: none;
			gap: 1rem;
		}

		.feedback-input {
			width: 100%;
			margin-top: 1.5rem;
		}

		.feedback-submit {
			width: 100%;
			margin-top: 1.5rem;
			display: flex;
			justify-content: end;
		}

		.feedback-submit button {
			all: unset;
			cursor: pointer;
			background-color: #00bca1;
			color: #fff;
			font-size: 0.875rem;
			font-weight: 500;
			line-height: 1.25rem;
			padding: 0.5rem 0.75rem;
			border-radius: 0.5rem;
		}

		.feedback-input input {
			font-family: "Montserrat", sans-serif;
			font-size: 13px;
			font-weight: 400;
			width: 100%;
			padding: 7px 10px;
			border: 1px solid #9c9c9c;
			border-radius: 0.5rem;
		}

		.feedback-input input:focus,
		.feedback-input input:active {
			border: 1px solid #00bca1;
		}

		/* ===============FEEDBACK POPUP================ */

		.rate-btn svg {
			width: 18px;
			height: 18px;
		}
		.ecg-popup {
			width: 100%;
			max-width: 600px;
			background-color: #fff;
			border-radius: 15px;
			padding: 19px 20px 19px 20px;
			position: relative;
			color: #000;
			display: flex;
			flex-direction: column;
			align-items: center;
			height: auto !important;
		}
		.close-popup {
			top: 10px;
			right: 10px;
		}
		.popup-header {
			margin-bottom: 10px;
		}
		.info-button {
			top: 12px;
			right: 12px;
		}

		.info-button img {
			width: 24px;
			height: 24px;
		}
		/* =========popup========= */

		.popup-title {
			font-size: 15px;
			margin-bottom: 0px;
		}

		.popup-text {
			font-size: 13px;
		}

		.popup-overlay {
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: #00000033;
			z-index: 999;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.rules-overlay {
			display: none;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: #00000033;
			justify-content: center;
			align-items: center;
		}

		.rules-overlay .popup {
			width: 100%;
			max-width: 600px;
			background-color: #fff;
			border-radius: 15px;
			padding: 36px 70px 19px 70px;
			position: relative;
			color: #000;
			display: flex;
			flex-direction: column;
			align-items: center;
			height: auto !important;
		}
		.popup-content {
			height: 300px;
			padding: 0 7px;
		}

		/* =========popup========= */

		.typing-textarea {
			width: 100%;
			display: flex;
			position: relative;
			align-items: center;
		}

		.typing-textarea textarea {
			width: 100%;
			height: 54px;
			border: none;
			outline: none;
			resize: none;
			font-size: 13px;
			font-weight: 400;
			color: #000;
			padding: 19px 33px;
		}

		.typing-textarea .send-btn {
			all: unset;
			visibility: hidden;
			cursor: pointer;
			width: 24px;
			height: 24px;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 8px;
		}

		.main {
			width: 100%;
			height: calc(100% - 54px);
			display: flex;
			flex-direction: column;
			padding: 0 17px 22px 0;
		}
		.chatbox {
			position: relative;
			width: 100%;
			height: 100%;
			border-radius: 15px;
			background-color: #f5f5f5;
			padding: 16px 32px;
			display: flex;
			flex-direction: column;
			overflow: hidden;
		}

		/* =========header========= */

		.messagebox-wrapper {
			width: 100%;
			display: flex;
			align-items: center;
			gap: 10px;
		}

		.message-box {
			bottom: 0;
			width: 100%;
			display: flex;
			align-items: center;
			gap: 10px;
			border-radius: 12px;
			padding: 0px;
			background-color: #fff;
			padding-right: 35px;
		}

		.send-btn {
			all: unset;
			cursor: pointer;
			width: 24px;
			height: 24px;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 8px;
		}
		.send-btn:hover {
			background-color: #f4f4f4;
		}
		/* ===================MESSAGEBOX=================== */
		/* =========messages========= */

		.messages-wrapper {
			width: 100%;
			height: calc(100% - 54px);
			display: flex;
			flex-direction: column;
			align-items: end;
			padding: 0 10px 25px 10px;
			align-items: center;
			gap: 19px;
			overflow-x: hidden;
			overflow-y: scroll;
			scrollbar-width: thin;
		}

		.message {
			display: flex;
			flex-direction: column;
			align-items: start;
			gap: 2px;
			width: 100%;
		}
		.message-info {
			display: flex;
			align-items: end;
			gap: 20px;
			padding: 0 40px;
		}

		.rate-buttons {
			padding: 0 40px;
		}

		.message-full {
			width: 100%;
		}
		.message-sender {
			font-size: 12px;
			font-weight: 700;
			color: #1e1f22;
		}
		.sender-img {
			position: absolute;
			width: 31px;
			height: 31px;
			top: 0;
			border-radius: 4px;
			left: 0px;
			z-index: 85;
		}
		.message-time {
			font-size: 8px;
			font-weight: 400;
			color: #1e1f22;
		}
		.message-content {
			background: #fff;
			padding: 20px 35px;
			border-radius: 11px;
			font-size: 13px;
			font-weight: 400;
			color: #000000;
		}
	}

	@media (max-width: 1024px) {
		.rating-sliders-wrapper {
			height: 450px;
		}

		.chat-feedback-overlay {
			display: none;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: #00000033;
			z-index: 9999;
			justify-content: center;
			align-items: center;
		}

		.chat-feedback-overlay form {
			height: 100%;
		}

		.chat-feedback-popup {
			width: 100%;
			height: 100%;
			background-color: #fff;
			border-radius: 0.75rem;
			position: relative;
			color: #000;
			display: flex;
			flex-direction: column;
			padding: 18px 32px;
			align-items: center;
			justify-content: center;
			gap: 50px;
			border-radius: 0;
		}

		/* ===============FEEDBACK CONTAINER================ */

		.prefeedback-submit {
			font-size: 0.7rem;
			font-weight: 500;
			line-height: 1.25rem;
			padding: 0.5rem 0.75rem;
			border-radius: 0.5rem;
		}

		.feedback-wrapper {
			display: none;
			width: 100%;
			background-color: transparent;
			border: 1px solid #00bca1;
			border-radius: 11px;
			padding: 15px 20px;
		}

		.prefeedback-header {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.prefeedback-title {
			font-size: 13px;
			font-weight: 400;
			line-height: 18.29px;
			color: #000;
		}

		.prefeedback-content {
			padding: 0;
			margin-top: 10px;
		}

		/* ===============FEEDBACK CONTAINER================ */

		/* ===============FEEDBACK POPUP================ */

		.feedback-overlay {
			display: none;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: #00000033;
			z-index: 9999;
			justify-content: center;
			align-items: center;
		}

		.feedback-popup {
			width: 100%;
			height: fit-content;
			max-width: 600px;
			background-color: #fff;
			border-radius: 0;
			position: relative;
			color: #000;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.feedback-header {
			width: 100%;
			padding: 20px;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #9c9c9c;
			justify-content: space-between;
		}

		.feedback-title {
			font-size: 13px;
			font-weight: 400;
			line-height: 16.29px;
			color: #000;
		}

		.feedback-content {
			padding: 20px;
		}

		.feedback-buttons {
			display: flex;
			flex-wrap: wrap;
			user-select: none;
			gap: 1rem;
		}

		.feedback-input {
			width: 100%;
			margin-top: 1.5rem;
		}

		.feedback-submit {
			width: 100%;
			margin-top: 1.5rem;
			display: flex;
			justify-content: end;
		}

		.feedback-submit button {
			all: unset;
			cursor: pointer;
			background-color: #00bca1;
			color: #fff;
			font-size: 0.875rem;
			white-space: nowrap;
			font-weight: 500;
			line-height: 1.25rem;
			padding: 0.5rem 0.75rem;
			border-radius: 0.5rem;
		}

		.feedback-submit button:hover,
		.feedback-submit button:active {
			background-color: #00a991;
		}

		.feedback-input input {
			font-family: "Montserrat", sans-serif;
			font-size: 13px;
			font-weight: 400;
			width: 100%;
			padding: 7px 10px;
			border: 1px solid #9c9c9c;
			border-radius: 0.5rem;
		}

		.feedback-input input:focus {
			border: 1px solid #00bca1;
		}

		/* ===============FEEDBACK POPUP================ */

		.rate-btn svg {
			width: 16px;
			height: 16px;
		}
		.ecg-popup {
			width: 100%;
			max-width: 100%;
			background-color: #fff;
			border-radius: 15px;
			padding: 36px 16px 19px 16px;
			position: relative;
			color: #000;
			display: flex;
			flex-direction: column;
			align-items: center;
			height: 100dvh !important;
			border-radius: 0;
		}

		.popup-header {
			margin-bottom: 12px;
		}

		.info-button {
			top: 12px;
			right: 12px;
			z-index: 105;
		}

		.rate-buttons {
			padding: 0 30px;
		}
		.info-button img {
			width: 24px;
			height: 24px;
		}

		.rules-overlay .popup {
			max-width: 100%;
			padding: 36px 20px 19px 20px;
			height: 100dvh !important;
			border-radius: 0;
		}
		.close-rulespopup {
			right: 6px;
			top: 6px;
		}
		.popup-content {
			height: 100%;
			padding: 0 7px;
		}
		/* =========popup========= */

		.popup {
			padding: 38px 42px;
			max-width: 100%;
			max-height: 100dvh;
			width: 100%;
			height: 100dvh;
			border-radius: 0;
			padding: 20px;
		}

		/* =========popup========= */

		.main {
			width: 100%;
			height: 100%;
			padding: 0;
		}

		.chatbox {
			height: 100dvh;
			padding: 0px;
			border-radius: 0;
			background-color: #fff;
			position: inherit;
			padding-top: 64px;
			gap: 0;
		}

		/* =======message box======= */
		.message-box {
			padding: 0;
		}
		.messagebox-wrapper {
			width: 100%;
			display: flex;
			align-items: center;
			gap: 10px;
			padding: 24px 23px 24px 23px;
			background: #fff;
			border-top: 1px solid #f5f5f5;
		}

		.typing-textarea textarea {
			background-color: #f5f6f5;
			width: 92%;
			height: 54px;
		}

		.message-box:focus-within {
			border: 1px solid transparent;
		}
		.typing-textarea {
			justify-content: space-between;
		}
		.typing-textarea .send-btn {
			width: 54px;
			height: 54px;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #9c9c9c;
			padding: 0;
			visibility: visible;
			cursor: not-allowed;
		}
		.typing-textarea textarea:valid + .send-btn {
			background-color: #00bca1;
		}

		.typing-textarea .send-btn svg {
			width: 27px;
			height: 27px;
			stroke: #fff;
		}

		.messages-wrapper {
			padding: 0px 24px 10px 24px;
			height: calc(100% - 54px);
		}

		.message.outgoing .message-content {
			background: #f5f5f5;
		}

		.chatlist-header {
			background-color: #fff;
			display: block;
			height: 56px;
			width: 100%;
			padding: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 103;
			position: absolute;
			top: 0;
			left: 0;
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
		}
		.message-content {
			border-radius: 15px;
		}
		.message.incoming .message-content,
		.message.incoming-typing .message-content {
			background: #00bca11a;
			border: 1px solid transparent;
		}
		.sender-img {
			left: -10px;
		}
		.message-info {
			padding: 0 30px;
		}
	}

	@media (max-width: 768px) {
		.typing-textarea textarea {
			width: 85%;
		}
	}

	@media (max-width: 431px) {
		.typing-textarea textarea {
			width: 77%;
		}
		.prefeedback-buttons {
			column-gap: 6px;
			row-gap: 6px;
		}
		.prefeedback-buttons .prefeedback-button {
			font-size: 0.7rem;
		}
	}
</style>
