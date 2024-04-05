<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    let inputValue = "";
    let textareaHeight = writable<number>(0);

    type Message = {
        text: string;
        time: string;
        sender: string;
        senderImg: string;
        isUser: boolean;
    };

    let messages: Message[] = [
        {
            isUser: false,
            sender: "Patient",
            senderImg: "/icons/user.jpg",
            time: "9:34 pm",
            text: `Test message. Need an API to work correctly.`,
        },
    ];

    function addMessage() {
        messages.push({
            isUser: true,
            sender: "You",
            senderImg: "/icons/user.jpg",
            time: new Date().toLocaleTimeString(),
            text: inputValue,
        });
        messages = messages;

        inputValue = "";
        textareaHeight.set(0);

        const textarea = document.getElementById(
            "chat-input",
        ) as HTMLTextAreaElement;
        if (window.innerWidth > 1280) {
            textarea.style.height = "80px";
        } else {
            textarea.style.height = "54px";
        }
    }

    onMount(() => {
        const textarea = document.getElementById(
            "chat-input",
        ) as HTMLTextAreaElement;

        textarea.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault(); // Предотвращаем перенос строки
                if (inputValue.trim() !== "") {
                    addMessage(); // Вызываем функцию для отправки сообщения
                }
            } else if (event.key === "Enter" && event.shiftKey) {
                // Нажатие Shift + Enter
                // Проверяем, есть ли уже текст в textarea
                const textBefore = inputValue.substring(
                    0,
                    textarea.selectionStart,
                );
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
            if (window.innerWidth > 1280) {
                textarea.style.height = "80px";
            } else {
                textarea.style.height = "54px";
            }
            textarea.style.height = textarea.scrollHeight + "px";
        });
    });
</script>

<div class="main">
    <div class="header">
        <a class="btn-back" href="/c">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#191616"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-left"
                ><path d="m15 18-6-6 6-6" /></svg
            >
        </a>
        <a href=".">
            <img
                src="/logo/Grouplogo2.svg"
                class="chatbox-logo"
                alt="ZulaMed"
            />
        </a>
    </div>

    <div class="chatbox">
        <div class="messages-wrapper">
            <!-- ==========MESSAGE========== -->
            {#each messages as message}
                <div class="message {message.isUser ? 'outgoing' : 'incoming'}">
                    <div
                        class="message-full"
                        style="display: flex; flex-direction: column;"
                    >
                        <img
                            class="sender-img"
                            src={message.senderImg}
                            alt=""
                        />
                        <div class="message-info">
                            <h2 class="message-sender">{message.sender}</h2>
                            <span class="message-time">{message.time}</span>
                        </div>
                        <div class="message-content">
                            <p class="content-text">{message.text}</p>
                        </div>
                    </div>
                </div>
            {/each}
            <!-- ==========MESSAGE========== -->
            <!-- ==========MESSAGE========== -->
            <div class="message incoming-error">
                <div
                    class="message-full"
                    style="display: flex; flex-direction: column;"
                >
                    <img class="sender-img" src="/icons/user.jpg" alt="" />
                    <div class="message-info">
                        <h2 class="message-sender">Patient</h2>
                        <span class="message-time">20:31 am</span>
                    </div>
                    <div class="message-content">
                        <p class="content-text">
                            Test error message. Need an API to work correctly.
                        </p>
                    </div>
                </div>
            </div>
            <!-- ==========MESSAGE========== -->

            <!-- ==========MESSAGE========== -->
            <div class="message incoming-typing">
                <div
                    class="message-full"
                    style="display: flex; flex-direction: column;"
                >
                    <img class="sender-img" src="/icons/user.jpg" alt="" />
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
            <!-- ==========MESSAGE========== -->
        </div>

        <div class="messagebox-wrapper">
            <div class="message-box">
                <div class="typing-textarea">
                    <textarea
                        bind:value={inputValue}
                        required
                        id="chat-input"
                        placeholder="Ask your questions"
                        style="height: {textareaHeight}px;"
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
                            ><path d="m22 2-7 20-4-9-9-4Z" /><path
                                d="M22 2 11 13"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .btn-back {
        display: none;
    }

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
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 17px 22px 0;
    }

    .header {
        width: 100%;
        height: 93px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .chatbox-logo {
        width: 300px;
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
    }

    .messages-wrapper {
        width: 100%;
        height: calc(100% - 54px);
        display: flex;
        flex-direction: column;
        align-items: end;
        padding-bottom: 45px;
        align-items: center;
        gap: 19px;
        overflow-x: hidden;
        overflow-y: scroll;
        scrollbar-width: thin;
    }
    @supports (-ms-ime-align: auto) {
        .messages-wrapper {
            scrollbar-width: thin;
            scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
        }
    }

    .message {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 10px;
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

    .content-text {
        white-space: pre-wrap;
        word-break: break-word;
        line-height: 18.29px;
    }

    .message.incoming .message-content,
    .message.incoming-typing .message-content {
        background: #00bca11a;
        border: 1px solid #00bca1;
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

    @media (max-width: 1280px) {
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

        .chatbox {
            position: relative;
            width: 100%;
            height: calc(100% - 54px);
            border-radius: 15px;
            background-color: #f5f5f5;
            padding: 16px 42px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        /* =========header========= */

        .main {
            width: 70%;
            height: 100%;
            display: flex;
            flex-direction: column;
            padding: 0 17px 22px 0;
        }

        .header {
            width: 100%;
            height: 54px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .chatbox-logo {
            width: 164px;
        }

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
            padding-bottom: 45px;
            align-items: center;
            gap: 19px;
            overflow-x: hidden;
            overflow-y: scroll;
            scrollbar-width: thin;
        }

        .message {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: end;
            gap: 10px;
            width: 100%;
        }
        .message-info {
            display: flex;
            align-items: end;
            gap: 20px;
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
            border-radius: 8px;
            left: 0px;
            z-index: 100;
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
        .main {
            width: 100%;
            height: 100%;
            padding: 0;
        }

        .header {
            height: fit-content;
            display: flex;
            align-items: center;
        }

        .chatbox {
            height: 100%;
            padding: 20px 0px;
            border-radius: 0;
            background-color: #fff;
        }

        /* =======message box======= */
        .message-box {
            padding: 0;
        }
        .messagebox-wrapper {
            position: fixed;
            bottom: 12px;
            left: 0;
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 24px 23px;
            border-top: 1px solid #f5f5f5;
        }

        .typing-textarea textarea {
            background-color: #f5f6f5;
            width: 92%;
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
            padding: 0 25px 45px 25px;
        }

        .message.outgoing .message-content {
            background: #f5f5f5;
        }

        .btn-back {
            display: block;
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
    }
</style>
