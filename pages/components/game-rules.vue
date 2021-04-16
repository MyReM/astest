<template>

	<view class="game-rules" @touchmove.stop.prevent="" v-if="show" @tap.stop="hideAnimation">
		<view class="game-rules-body" :animation="animationData">
			<image class="close-rules" @tap.stop="hideAnimation"
				src="https://img-cdn.macaotown.com/o_1f2nr1oci18hr1vkbc0pa717l5d.png" />
			<view class="rules-title">
				盲盒獎多多規則說明
			</view>
			<scroll-view scroll-y="true">
				<view class="rule-item">
					<view class="rule-item-title">
						活動內容
					</view>
					<view class="rule-item-body">
						<view v-if="boxMessage.content" v-html="boxMessage.content">
						</view>
						<view v-else>
							暫無遊戲規則，商家正在加急制定中
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				animation: {},
				animationData: {},
				show: false
			}
		},
		created() {
			this.animation = uni.createAnimation({
				duration: 500,
				timingFunction: 'ease'
			})
			if (this.showRuleAnimation) {
				this.show = this.showRuleAnimation
				setTimeout(res => {
					this.initAnimation()
				}, 100)
			}
		},
		props: {
			showRuleAnimation: {
				type: [Boolean, String],
				default: false
			},
			boxMessage:{}
		},
		methods: {
			initAnimation() {
				this.animation.bottom('0').step()
				this.animationData = this.animation.export()
			},
			hideAnimation() {
				this.animation.bottom('-1060upx').step()
				this.animationData = this.animation.export()
				setTimeout(res => {
					this.show = false
				}, 400)
			}
		},
		watch: {
			showRuleAnimation() {
					this.show = false
					this.show = true
					setTimeout(res => {
						this.initAnimation()
					}, 100)
			}
		}}
</script>

<style lang="scss">
	.game-rules {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		position: fixed;
		background-color: rgba(0, 0, 0, 0.5);
		top: 0;
		left: 0;
		z-index: 1000;
		.game-rules-body {
			width: 100%;
			height: 1060upx;
			position: absolute;
			bottom: -1060upx;
			left: 0;
			background: #FFFFFF;
			box-shadow: 0upx 4upx 10upx 0upx rgba(0, 0, 0, 0.5);
			border-radius: 80upx 80upx 0upx 0upx;

			.close-rules {
				position: absolute;
				top: -78upx;
				width: 68upx;
				height: 68upx;
				right: 40upx;
				border-radius: 50%;
			}

			.rules-title {
				font-size: 52upx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #FF8011;
				line-height: 74upx;
				margin: 44upx 0;
				padding-left: 44upx;
				box-sizing: border-box;
			}

			scroll-view {
				width: 100%;
				height: 898upx;

				.rule-item {
					padding: 0 50upx;
					box-sizing: border-box;
					padding-bottom: 46upx;

					.rule-item-title {
						font-size: 32upx;
						font-weight: 600;
						color: #FF8011;
						line-height: 50upx;
						padding-left: 80upx;
						box-sizing: border-box;
						position: relative;
					}

					.rule-item-title:before {
						content: '';
						position: absolute;
						width: 40upx;
						height: 40upx;
						background: #FF9940;
						border: 8upx solid #FFE0E0;
						border-radius: 50%;
						left: 0;
					}

					.rule-item-body {
						font-size: 32upx;
						font-weight: 400;
						color: #7B7B7B;
						line-height: 44upx;
						margin-top: 32upx;
					}
				}
			}
		}
	}
</style>
