<template>

	<view class="game-rules" @touchmove.stop.prevent="" v-if="show" @tap.stop="hideAnimation">
		<view class="game-rules-body" @tap.stop="" :animation="animationData">
			<image class="close-rules" @tap.stop="hideAnimation"
				src="https://img-cdn.macaotown.com/o_1f2nr1oci18hr1vkbc0pa717l5d.png" />
			<view class="rules-title" @tap.stop="">
				<image @tap.stop="" src="https://img-cdn.macaotown.com/o_1f37136lpshq750kvarfdgj41h.png"
					class="head-cion"></image>
			</view>
			<view class="rule-item" v-for="(item,index) in 3" :key="index">
				<view class="rule-item-title">
					<image mode="aspectFill" v-if="index == 0"
						src="https://img-cdn.macaotown.com/o_1f37136lp1o221mkv19aktfah9q1e.png"></image>
					<image mode="aspectFill" v-if="index == 1"
						src="https://img-cdn.macaotown.com/o_1f37136lpsgpnh6kqq6fchof1f.png"></image>
					<image mode="aspectFill" v-if="index == 2"
						src="https://img-cdn.macaotown.com/o_1f37136lpbbls7p106iru0veh1g.png"></image>
				</view>
				<view class="rule-item-body" v-if="index==0">
					<view class="shop-title">
						迎新獎勵
					</view>
					<view class="shop-line">
						<view class="line">
							<progress :duration="duration" :percent="taskLog.welcome_percent" active stroke-width="11"
								activeColor="#F47E41" backgroundColor="#E9E9E9" />
						</view>
						<view class="shop-line-txt">
							{{taskLog.welcome_num}}/{{taskLog.welcome_total}}
						</view>
					</view>
					<view class="shop-merchant">
						抽獎次數+1
					</view>
				</view>
				<view class="rule-item-body" v-if="index==1">
					<view class="shop-title">
						邀請好友
					</view>
					<view class="shop-line">
						<view class="line">
							<progress :duration="duration" :percent="taskLog.invit_percent" active stroke-width="11"
								activeColor="#F47E41" backgroundColor="#E9E9E9" />
						</view>
						<view class="shop-line-txt">
							{{taskLog.invit_num}}/{{taskLog.invit_total}}
						</view>
					</view>
					<view class="shop-merchant">
						抽獎次數+1（每人上限5次）
					</view>
				</view>
				<view class="rule-item-body" v-if="index==2">
					<view class="shop-title">
						勞動節簽到
					</view>
					<view class="shop-line">
						<view class="line">
							<progress :duration="duration" :percent="taskLog.sign_percent" active stroke-width="11"
								activeColor="#F47E41" backgroundColor="#E9E9E9" />
						</view>
						<view class="shop-line-txt">
							{{taskLog.sign_num}}/{{taskLog.sign_total}}
						</view>
					</view>
					<view class="shop-merchant">
						抽獎次數+1
					</view>
				</view>
				<view v-if="index==0" class="task-btn" :class="taskLog.welcome_status==0?'task-btn-yinxin':''"
					@tap="taskSubmit(index)" id="task-btn-yinxin">
					<view class="tast-btn-body" :class="taskLog.welcome_status==0?'task-btn-yinxin-body':''">
						領取
					</view>
				</view>
				<view v-if="index==1" class="task-btn" :class="taskLog.invit_num<5?'task-btn-wx':''"
					@tap="taskSubmit(index)" id="task-btn-wx">
					<view class="tast-btn-body" :class="taskLog.invit_num<5?'task-btn-wx-body':''">
						去邀請
					</view>
				</view>
				<view v-if="index==2" class="task-btn" @tap="taskSubmit(index)"
					:class="taskLog.sign_status==1?'':'task-btn-yinxin'" id="task-btn">
					<view class="tast-btn-body" :class="taskLog.sign_status==1?'':'task-btn-yinxin-body'">
						{{taskLog.sign_status?'已簽到':'簽到'}}
					</view>
				</view>
			</view>
		</view>
		<prop-message :showProp.sync="toastShow" :message="toastMessage"></prop-message>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				animation: {},
				animation1: {},
				animationData: {},
				show: false,
				taskLog: {}, //任務記錄
				signIn: false, //是否已簽到
				toastMessage: '',
				toastShow:false,
				duration: 0
			}
		},
		created() {
			this.animation = uni.createAnimation({
				duration: 300,
				timingFunction: 'ease'
			})
			this.animation1 = uni.createAnimation({
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
			}
		},
		methods: {
			initAnimation() {
				this.animation.bottom('0').step()
				this.animationData = this.animation.export()
			},
			hideAnimation() {
				this.animation.bottom('-1360upx').step()
				this.animationData = this.animation.export()
				setTimeout(res => {
					this.show = false
				}, 400)
			},
			taskSubmit(index) {
				this.$emit('handelChange', index)
				if (index == 0 && this.taskLog.welcome_status == 0) {
					this.getWelcome()
				} else if (index == 1 && this.taskLog.invit_status == 0) {
					this.hideAnimation()
				} else if (index == 2 && this.taskLog.sign_status == 0) {
					this.userSignIn()
				}
			},
			// 获取任務記錄
			getTaskLog() {
				uni.request({
					url: this.$api + 'mysteryboxnum/task_center',
					method: 'GET',
					header: {
						'Authorization': 'Bearer ' + uni.getStorageSync('token')
					},
					data: {
						mbid: 8
					},
					success: res => {
						if (res.data.status == 1) {
							this.duration = 5
							this.taskLog = res.data.data
							this.taskLog.invite_percent = (this.taskLog.invite_num / 5) * 100
							this.taskLog.welcome_percent = this.taskLog.welcome_status == 1 ? 100 : 0
							this.taskLog.sign_percent = this.taskLog.sign_status == 1 ? 100 : 0
						}
					}
				})
			},
			// 領取迎新獎勵/
			getWelcome() {
				uni.request({
					url: this.$api + 'mysteryboxnum/welcome_new',
					method: 'GET',
					header: {
						'Authorization': 'Bearer ' + uni.getStorageSync('token')
					},
					data: {
						mbid: 8
					},
					success: res => {
						this.getTaskLog()
						if (res.data.status == 1) {
							this.toastMessage='恭喜你獲得1次抽獎機會!'
							this.toastShow=true
						} else {
							this.toastMessage='你已簽到'
							this.toastShow=true
							this.signIn = true
						}
					}
				})
			},
			// 簽到
			userSignIn() {
				uni.request({
					url: this.$api + 'mysteryboxnum/sign_in',
					method: 'GET',
					header: {
						'Authorization': 'Bearer ' + uni.getStorageSync('token')
					},
					data: {
						mbid: 8
					},
					success: res => {
						this.getTaskLog()
						if (res.data.status == 1) {
							this.toastMessage='恭喜你獲得1次抽獎機會!'
							this.toastShow=true
						} else {
							this.toastMessage='你已簽到'
							this.toastShow=true
							this.signIn = true
						}
					}
				})
			}
		},
		watch: {
			showRuleAnimation() {
				this.duration = 0
				this.getTaskLog()
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
			background: linear-gradient(2deg, #F94E3F, #FF5C14, #FF7D36, #FF6314, #FF7C24, #FFA924);
			box-shadow: 0upx 4upx 10upx 0upx rgba(0, 0, 0, 0.5);
			border-radius: 80upx 80upx 0upx 0upx;
			padding-top: 150upx;
			box-sizing: border-box;

			.close-rules {
				position: absolute;
				top: -88upx;
				width: 68upx;
				height: 68upx;
				right: 30upx;
				border-radius: 50%;
			}

			.head-cion {
				width: 638upx;
				height: 236upx;
				position: absolute;
				top: -90upx;
				left: 44upx;
			}

			.rule-item {
				margin: auto;
				width: 681upx;
				height: 170upx;
				background: #FFFFFF;
				border: 16upx solid #FCC66E;
				box-shadow: 0upx -10upx 26upx 3upx #FF7F2C;
				border-radius: 84upx;
				margin-bottom: 65upx;
				display: flex;
				align-items: center;
				box-sizing: border-box;

				.rule-item-title {
					width: 102upx;
					height: 102upx;
					box-sizing: border-box;
					position: relative;
					border-radius: 50%;
					overflow: hidden;
					margin-left: 32upx;
				}

				.rule-item-body {
					margin-left: 10upx;

					.shop-title {
						width: 100%;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						font-size: 33upx;
						font-weight: 400;
						color: #3E3E3E;
						line-height: 36upx;
					}

					.shop-line {
						display: flex;
						align-items: center;
						margin: 6upx 0;

						.line {
							width: 244upx;
							height: 22upx;
							background: #E9E9E9;
							border-radius: 12upx;
							overflow: hidden;
						}

						.shop-line-txt {
							font-size: 34upx;
							font-weight: 400;
							color: #FAAB24;
							line-height: 36upx;
							margin-left: 16upx;
						}
					}

					.shop-merchant {
						width: 100%;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						font-size: 24upx;
						font-weight: 400;
						color: #787878;
						line-height: 36upx;
					}
				}

				.task-btn {
					width: 126upx;
					height: 55upx;
					background: #AEAEAE;
					border-radius: 27upx;
					text-align: center;
					margin-left: auto;
					margin-right: 20upx;

					.tast-btn-body {
						width: 121upx;
						height: 50upx;
						background: #CECECE;
						border-radius: 25upx;
						text-align: center;
						font-size: 28upx;
						font-weight: 500;
						color: #FFFFFF;
						line-height: 50upx;
						margin: auto;
					}
				}

				.task-btn-yinxin {
					background: #E96F26 !important;
				}

				.task-btn-yinxin-body {
					background: #FF8034 !important;
				}

				.task-btn-wx {
					background: #10C768 !important;
				}

				.task-btn-wx-body {
					background: #15D872 !important;
				}
			}
		}

		.toast-message {
			width: 0;
			height: 0;
			position: fixed;
			line-height: 242upx;
			text-align: center;
			font-size: 32upx;
			font-weight: 400;
			color: #FFFFFF;
			background: rgba(5, 5, 5, 0.7);
			bottom: 0;
			left: 0;
			margin-left: -230upx;
			border-radius: 30upx;
			overflow: hidden;
		}
	}
</style>
