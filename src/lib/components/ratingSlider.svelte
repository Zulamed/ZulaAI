<script>
	export let value = 50; // Значение ползунка по умолчанию
	export let question = "Ich finde, dass ZULA einfach zu verwenden ist"; // Текст по умолчанию
</script>

<div class="slider-container">
	<p class="feedback-question">{question}</p>
	<div class="ticks-overlay">
		<div class="fix">
			<div class="tick-fix"></div>
			<div class="tick-fix"></div>
		</div>
		<div class="ticks">
			<div class="tick"></div>
			<div class="tick"></div>
			<div class="tick"></div>
			<div class="tick"></div>
			<div class="tick"></div>
		</div>
		<input type="range" min="0" max="100" class="slider" bind:value />
	</div>
	<div class="labels">
		<span>Stimme gar nicht zu</span>
		<span>Neutral</span>
		<span>Stimme ganz zu</span>
	</div>
</div>

<style>
	.ticks-overlay {
		position: relative;
		width: 100%;
		left: 0px;
		display: flex;
		align-items: center;
	}
	.feedback-question {
		line-height: 1.5;
		font-size: 15px;
		font-family: "Montserrat", sans-serif;
		font-weight: 400;
		float: left;
		margin-bottom: 33px;
	}

	.slider-container {
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
		position: relative;
		margin-bottom: 26px;
	}

	.slider {
		-webkit-appearance: none;
		appearance: none;
		width: 100%;
		height: 6px;
		background: #00bca1;
		outline: none;
		opacity: 1;
		cursor: pointer;
		position: relative;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 25px;
		height: 25px;
		background: #00bca1;
		cursor: pointer;
		border-radius: 50%;
	}

	.slider::-moz-range-thumb {
		width: 20px;
		height: 20px;
		background: #00bca1;
		border: none;
		outline: none;
		cursor: pointer;
		border-radius: 50%;
	}

	.labels {
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
		font-size: 10px !important;
		color: #000;
		margin-top: 15px;
		font-weight: 400;
	}

	.ticks {
		display: flex;
		justify-content: space-between;
		position: absolute;
		width: 101%;
		top: 50%;
		left: 50%;
		transform: translateY(-50%) translateX(-50%);
	}
	.fix {
		display: flex;
		justify-content: space-between;
		position: absolute;
		width: 100%;
		top: 50%;
		left: 50%;
		transform: translateY(-50%) translateX(-50%);
	}

	.tick-fix {
		width: 6px;
		height: 21px;
		border-radius: 5px;
		background: #fff;
	}

	.tick {
		width: 6px;
		border-radius: 5px;
		height: 21px;
		background: #00bca1;
	}

	@media (max-width: 1440px) {
		.slider-container {
			max-width: 600px;
		}

		.feedback-question {
			font-size: 12px;
			margin-bottom: 22px;
		}

		.labels {
			font-size: 9px;
		}

		.slider {
			height: 4px;
			padding: 0;
		}

		.slider::-webkit-slider-thumb {
			width: 14px;
			height: 14px;
		}

		.slider::-moz-range-thumb {
			width: 14px;
			height: 14px;
		}

		.ticks {
			width: 100%;
		}

		.fix {
			width: 100%;
		}

		.tick-fix {
			width: 6px;
			height: 15px;
		}

		.tick {
			width: 4px;
			height: 15px;
		}
	}

	@media (max-width: 1024px) {
		.slider-container {
			max-width: 600px;
		}

		.feedback-question {
			font-size: 12px;
			margin-bottom: 22px;
		}

		.labels {
			font-size: 10px;
		}

		.slider {
			height: 4px;
			padding: 0;
		}

		.slider::-webkit-slider-thumb {
			width: 17px;
			height: 17px;
		}

		.slider::-moz-range-thumb {
			width: 17px;
			height: 17px;
		}

		.ticks {
			width: 100%;
		}

		.fix {
			width: 100%;
		}

		.tick-fix {
			width: 6px;
			height: 21px;
		}

		.tick {
			width: 4px;
			height: 14px;
		}
	}
</style>
