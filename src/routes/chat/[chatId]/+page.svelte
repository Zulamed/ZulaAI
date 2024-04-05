<script lang="ts">
    let inputValue = "";

    type Message = {
        text: string;
        time: string;
        sender: string;
        isUser: boolean;
    };

    let messages: Message[] = [
        // {
        //     isUser: false,
        //     sender: "Patient",
        //     time: "9:34 pm",
        //     text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        // },
        // {
        //     isUser: true,
        //     sender: "You",
        //     time: "9:19 pm",
        //     text: `123`,
        // },
    ];

    function addMessage() {
        messages.push({
            isUser: true,
            sender: "You",
            time: new Date().toLocaleTimeString(),
            text: inputValue,
        });
        messages = messages;

        inputValue = "";
    }
</script>

<div class="main">
    <div class="header">
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
                        <img class="sender-img" src="/icons/user.jpg" alt="" />
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
            <div class="message incoming">
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
                    ></textarea>
                    <button on:click={addMessage} id="sendBtn" class="send-btn"
                        ><img src="/icons/send.svg" alt="send" /></button
                    >
                </div>
            </div>
        </div>
    </div>
</div>

<style>
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
        padding: 0 35px;
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
        left: -7px;
        z-index: 100;
    }

    .message-time {
        font-size: 8px;
        font-weight: 400;
        color: #1e1f22;
    }

    .message-content {
        background: #fff;
        padding: 15px 35px;
        border-radius: 11px;
        font-size: 13px;
        font-weight: 400;
        color: #000000;
    }

    .message.incoming .message-content {
        background: #00bca11a;
    }
    .message.outgoing .message-content {
        background: #fff;
    }

    /* ===================MESSAGEBOX=================== */

    .messagebox-wrapper {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 16px 40px;
    }

    .message-box {
        bottom: 0;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        border-radius: 12px;
        padding: 0px 20px;
        background-color: #fff;
    }

    .typing-textarea {
        width: 100%;
        display: flex;
        position: relative;
        align-items: center;
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

    .typing-textarea textarea:valid + .send-btn {
        visibility: visible;
    }

    .typing-textarea textarea {
        width: 100%;
        height: 80px;
        border: none;
        outline: none;
        resize: none;
        font-size: 15px;
        font-weight: 400;
        color: #000;
        padding: 31px 45px 31px 29px;
        border-radius: 12px;
    }

    .typing-textarea textarea::-webkit-scrollbar {
        width: 6px;
    }
    .typing-textarea textarea::-webkit-scrollbar-track {
        border-radius: 25px;
        background-color: transparent;
    }
    .typing-textarea textarea::-webkit-scrollbar-thumb {
        border-radius: 25px;
        background-color: #dcefed;
    }
    .typing-textarea textarea {
        scrollbar-width: thin;
        scrollbar-color: #dcefed transparent;
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
            font-size: 15px;
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
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 16px 40px;
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
            overflow: scroll;
            display: flex;
            flex-direction: column;
            padding-bottom: 23px;
            align-items: center;
            justify-content: end;
            gap: 19px;
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
</style>
