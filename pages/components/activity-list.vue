<template>

	<view class="game-rules" @touchmove.stop.prevent="" v-if="show" @tap.stop="hideAnimation">
		<view class="game-rules-body" :animation="animationData">
			<image class="close-rules" @tap.stop="hideAnimation"
				src="https://img-cdn.macaotown.com/o_1f2nr1oci18hr1vkbc0pa717l5d.png" />
			<view class="rules-title" @tap.stop="">
				<image @tap.stop="" src="https://img-cdn.macaotown.com/o_1f34tgvm3113013av1j2q15j6mmda.png" class="head-cion"></image>
				活動獎品
			</view>
			<scroll-view scroll-y="true">
				<view class="rule-item" v-for="(item,index) in prizeList" :key="index">
					<view class="rule-item-title">
						<image mode="aspectFill" :src="item.icon"></image>
					</view>
					<view class="rule-item-body">
						<view class="shop-title">
							{{item.name}}
						</view>
						<view class="shop-merchant">
							商家暱稱
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
				duration: 300,
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
			prizeList:{
				type:[Array],
				default:[]
			}
		},
		methods: {
			initAnimation() {
				this.animation.bottom('0').step()
				this.animationData = this.animation.export()
			},
			hideAnimation() {
				this.animation.bottom('-1260upx').step()
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
		}
	}
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
			bottom: -1360upx;
			left: 0;
			background: linear-gradient(209deg, #FD7B36 0%, #FFC101 100%);
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
				font-size: 56upx;
				font-weight: 600;
				color: #FFFFFF;
				line-height: 80upx;
				margin-top: 20upx;
				margin-bottom: 30upx;
				text-align: right;
				padding-right: 60upx;
				box-sizing: border-box;
				position: relative;
				.head-cion{
					width: 390upx;
					height: 294upx;
					position: absolute;
					bottom:0;
					left: 0;
				}
			}

			scroll-view {
				width: 100%;
				height: 898upx;
				.rule-item {
					margin: 0 30upx;
					box-sizing: border-box;
					background: #FFFFFF;
					box-shadow: 0upx 8upx 10upx -2upx rgba(255, 119, 0, 1);
					border-radius: 26upx;
					display: flex;
					align-items: center;
					padding: 20upx;
					margin-bottom: 28upx;
					.rule-item-title {
						width: 140upx;
						height: 140upx;
						box-sizing: border-box;
						position: relative;
						border-radius: 50%;
						overflow: hidden;
					}

					.rule-item-body {
						margin-left: 26upx;
						width: calc(100% - 166upx);
						.shop-title{
							width: 100%;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						font-size: 36upx;
						font-weight: 400;
						color: #525252;
						line-height: 50upx;
						}
						.shop-merchant{
								width: 100%;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							font-size: 32upx;
							font-weight: 400;
							color: #A3A3A3;
							line-height: 44upx;
						}
					}
				}
			}
		}
	}
</style>
