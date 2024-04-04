<div class="chatbox">
    <div class="messages-wrapper">
        <!-- ==========MESSAGE========== -->

        <div class="message">
            <img class="sender-img" src="/icons/user.jpg" alt="" />
            <div class="message-info">
                <h2 class="message-sender">You</h2>
                <span class="message-time">9:19 pm</span>
            </div>
            <div class="message-content received">
                <p class="content-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc consequat justo vel porta mattis. Nunc eleifend mi
                    velit, eu tincidunt ex fermentum eget. Sed id malesuada
                    nibh, sit amet varius mi. Cras luctus enim et justo aliquet,
                    vel consequat quam pretium. Vivamus maximus lectus eget
                    mauris egestas maximus. Cras tincidunt neque et ex ultricies
                    scelerisque. Nunc venenatis sem vitae tortor consectetur,
                    eget lacinia velit egestas. Praesent sollicitudin eget
                    ligula at vehicula. Proin eget dui fermentum, accumsan velit
                    vel, aliquet erat. Vivamus quis urna finibus, convallis
                    purus rutrum, laoreet libero. Maecenas quis tristique justo,
                    vitae rutrum tortor. Nulla semper lectus nec justo dapibus
                    efficitur ac a tellus. Vivamus laoreet erat in enim rhoncus,
                    eget feugiat turpis dapibus. Maecenas consequat ac turpis
                    quis hendrerit.
                </p>
            </div>
        </div>

        <!-- ==========MESSAGE========== -->
        <!-- ==========MESSAGE========== -->

        <div class="message">
            <img class="sender-img" src="/icons/user.jpg" alt="" />
            <div class="message-info">
                <h2 class="message-sender">Patient</h2>
                <span class="message-time">9:34 pm</span>
            </div>
            <div class="message-content">
                <p class="content-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc consequat justo vel porta mattis. Nunc eleifend mi
                    velit, eu tincidunt ex fermentum eget. Sed id malesuada
                    nibh, sit amet varius mi. Cras luctus enim et justo aliquet,
                    vel consequat quam pretium. Vivamus maximus lectus eget
                    mauris egestas maximus. Cras tincidunt neque et ex ultricies
                    scelerisque. Nunc venenatis sem vitae tortor consectetur,
                    eget lacinia velit egestas. Praesent sollicitudin eget
                    ligula at vehicula. Proin eget dui fermentum, accumsan velit
                    vel, aliquet erat. Vivamus quis urna finibus, convallis
                    purus rutrum, laoreet libero. Maecenas quis tristique justo,
                    vitae rutrum tortor. Nulla semper lectus nec justo dapibus
                    efficitur ac a tellus. Vivamus laoreet erat in enim rhoncus,
                    eget feugiat turpis dapibus. Maecenas consequat ac turpis
                    quis hendrerit.
                </p>
            </div>
        </div>

        <!-- ==========MESSAGE========== -->
    </div>

    <div class="messagebox-wrapper">
        <div class="message-box">
            <input
                type="text"
                class="message-input"
                placeholder="Ask your questions"
            />
            <button class="send-btn"
                ><img src="/icons/send.svg" alt="send" /></button
            >
        </div>
    </div>
</div>

<style>
    @media (max-width: 1280px) {
        .chatbox {
            position: relative;
            width: 100%;
            height: calc(100% - 54px);
            border-radius: 15px;
            background-color: #f5f5f5;
            padding: 16px 42px;
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
            padding: 10px 20px;
            background-color: #fff;
        }

        .message-input {
            all: unset;
            width: 100%;
            font-size: 13px;
            font-weight: 400;
            color: #000;
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

        /* =========messages========= */

        .messages-wrapper {
            width: 100%;
            height: calc(100% - 54px);
            overflow: scroll;
            display: flex;
            flex-direction: column-reverse;
            padding-bottom: 23px;
            align-items: center;
            gap: 19px;
        }

        .message {
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
        .message-content.received {
            background: #00bca11a;
        }
    }
</style>
