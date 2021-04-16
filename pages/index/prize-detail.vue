<template>
	<view class="prize-detail" :style="'padding-top:' +bodyMarginTop+'px;'">
		<view class="bg-ios"></view>
		<!-- #ifdef MP -->
		<view class="mp-tapbar-content">
			<view class="mp-tapbar" :style="'height:' +statusBarHeight+'px;'">
			</view>
			<view class="mp-tapbar-share-back">
				<image id="mp-tapbar-share-back" @tap="backPage"
					src="https://img-cdn.macaotown.com/o_1f2oagqba1i3p1dk11b3ek3l1dj4e.png">
				</image>
				<view>
					我的獎品
				</view>
			</view>
		</view>
		<!-- #endif -->
		<view class="taps-model" :class="taps_model_error?'':'taps-model-error'" :animation="tapsAnimation">
			{{tapsMessage}}
		</view>
		<view class="prize-user-message-content" :class="prize.status==0||prize.status==2?'opacity-bg':''">
			<view class="prize-user-message">
				<view class="prize-user-message-left">
					<view class="prize-user-message-left-title">{{prize.name}}</view>
					<view class="prize-user-message-left-subtitle">泰豐超級市場</view>
					<view class="prize-user-message-left-time">有效期:{{prize.exptime}}</view>
				</view>
				<image class="prize-user-message-img"
					src="https://img-cdn.macaotown.com/o_1f32mqmpbbno1pu5eq8j6f1g99e.png"></image>
				<!-- <image class="prize-user-message-img" :src="prize.imgs?prize.imgs[0]:''"></image> -->
			</view>
			<view class="prize-user-message-taps">
				<view class="due-soon" v-if="prize.toexpire==1">即將到期</view>
				<view class="change-award-winning" v-if="prize.luckdraw==1">核銷有獎</view>
			</view>
			<view class="user-message" v-if="prize.needfill==1&&!prize.showOther">
				<view class="user-message-title">
					請在{{prize.exptime}}前提交資料
				</view>
				<view v-for="(item,index) in extra" :key="index" class="user-message-input">
					<input @input="checkExtraInput" class="user-message-input-a" :type="item.type"
						:placeholder="item.name" v-model="item.content"
						:class="item.error?'user-message-input-error':''" />
				</view>
				<view @tap="subMitExtraData" id="submit-user-message-btn" class="submit-user-message-btn"
					:class="submitExtra?'':'bgcolor999'">
					提交
				</view>
			</view>
			<view class="exchange-content"
				v-if="prize_verify.pickuptype=='scan'&&prize.showOther==true&&prize.status==1">
				<view class="exchange-title">
					請出示此頁面展示給工作人員
				</view>
				<view class="qrcode-exchange">
					<view class="qrcode-exchange-qrcode">
						<image :src="prize_verify.qrcodeurl"></image>
					</view>
					<view class="qrcode-exchange-title">獎品編號</view>
					<view class="qrcode-exchange-number">{{prize.couponno}}</view>
				</view>
			</view>
			<view class="used-content" v-if="prize.status==2">
				<view class="used-title">
					商品已使用
				</view>
				<view class="used-icon">
					<image src="https://img-cdn.macaotown.com/o_1f32sc8d5ajp1a4bomlvjk158ve.png"></image>
				</view>
			</view>
			<view class="losed-content" v-if="prize.status==0">
				<view class="losed-title">
					商品已失效
				</view>
				<view class="losed-icon">
					<image src="https://img-cdn.macaotown.com/o_1f32sami21ghd1m3o1ums9hu6idm.png"></image>
				</view>
			</view>
			<view class="done-exchange" v-if="prize_verify.pickuptype=='none'&&prize.showOther==true">
				<view class="done-exchange-txt" v-html="prize.remark2">
					抽獎結果將於4月30日在公帳號公佈
				</view>
				<view class="done-exchange-attention">
					<view class="done-exchange-attention-txt" v-if="prize.followbutton">
						關注公眾號 留意開獎信息
					</view>
					<image v-else src="https://img-cdn.macaotown.com/o_1f32p77rhvqo10lt17ca117410te.png"
						class="done-exchange-attention-cion"></image>
				</view>
			</view>
			<view class="password-exchange"
				v-if="prize_verify.pickuptype=='passwd'&&prize.showOther==true&&prize.status==1">
				<view class="password-exchange-title">
					請將此頁面展示給工作人員
				</view>
				<view class="password-exchange-input-content">
					<input class="password-exchange-input" v-model="hx_password" @input="checkPassword"
						placeholder-style="font-size:26upx;color:#999999;font-weight:400;" placeholder="由工作人員輸入密碼"
						:class="password_error?'user-message-input-error':''" />
					<view class="password-exchange-submit" :class="submitExtra?'':'bgcolor999'" @tap="hxSubmit">核銷
					</view>
				</view>
			</view>
		</view>
		<view class="merchant-address">
			<view class="merchant-address-title">
				{{prize.store?prize.store.list.title:''}}
			</view>
			<view class="merchant-address-address">
				{{prize.store?prize.store.list.address:''}}
			</view>
			<navigator hover-class="none" url="../merchange/shop-list/shop-list" class="merchant-address-more">
				<view>{{prize.store?prize.store.count:''}}家店通用</view>
				<image src="https://img-cdn.macaotown.com/o_1f32mqmpb1bnbtke1nclus51b07d.png"></image>
			</navigator>
		</view>
		<view class="prize-explain">
			<view class="explain-title">使用條款及細則</view>
			<view class="explain-text" v-html="prize.content"></view>
		</view>
		<view class="prop-content" @touchmove.stop.prevent="" v-if="showPropModelData" @tap.stop="closePropModule">
			<view class="prop-container">
				<view class="publicity" @tap.stop="" v-if="true">
					<view class="publicity-title" v-if="ticket_mbid<=0">
						<view class="one-tit">
							玩遊戲
						</view>
						<view class="two-tit">
							贏更多獎品
						</view>
					</view>
					<view class="publicity-title1" v-if="ticket_mbid>0">
						<view class="one-tit">
							額外獲得
						</view>
						<view class="two-tit">
							一次抽獎機會
						</view>
					</view>
					<view v-if="ticket_mbid>0" class="publicity-gonow" @tap="goToGameTicket" id="publicity-gonow">
						<view class="publicity-gonow-txt">立即抽獎</view>
						<image class="publicity-gonow-icon"
							src="https://img-cdn.macaotown.com/o_1f32safdd18cv1rur5t1r2e1dvtf.png"></image>
					</view>
					<navigator url="./index" v-if="ticket_mbid<=0" class="publicity-gonow" id="publicity-gonow">
						<view class="publicity-gonow-txt">立即前往</view>
						<image class="publicity-gonow-icon"
							src="https://img-cdn.macaotown.com/o_1f32safdd18cv1rur5t1r2e1dvtf.png"></image>
					</navigator>
				</view>
				<view class="no-publicity" @tap.stop="" v-if="true">
				</view>
				<view class="no-all" @tap.stop="" v-if="false">
				</view>
				<view class="close-prop-content" id="close-prop-content" @tap.stop="closePropModule">
					<image src="https://img-cdn.macaotown.com/o_1f2nppedu9ocnmfuqd1d9c1t1hd.png"></image>
				</view>
			</view>
		</view>
		<view class="go-walk-button" id="go-walk-button" v-if="prize.extra_mbid>0&&prize.status==2&&prize.luckdraw==1"
			@tap="scratchTicket">去抽獎</view>
		<view class="go-walk-icon" id="go-walk-icon" v-if="prize.extra_mbid>0&&prize.status==2&&prize.luckdraw==1"
			@tap="scratchTicket">
			<image class="walk-icon" src="https://img-cdn.macaotown.com/o_1f32sc8d516udoogluogoi13nlc.png"></image>
			<view class="walk-text">去抽獎</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				couponno: '', //獎品編號
				prize: {}, //獎品
				animation: '', //動畫對象
				tapsAnimation: {}, //提示框動畫組
				tapsMessage: '成功', //提示語
				showPropModelData: false, //展示彈窗
				taps_model_error: false, //弹窗是否为成功
				prize_verify: {}, //核銷方式
				extra: [], //用戶提交的數據格式
				submitExtra: false, //提交按鈕是否可以點擊,
				hx_password: '', //核銷密碼
				password_error: false, //密码是否错误
				ticket_mbid: 0, //抽奖盲盒id
				statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
				systemInfo: uni.getSystemInfoSync(),
				bodyMarginTop: 0, //距離頂部外邊距
			}
		},
		onLoad(e) {
			// 環境為小程序時，設置內容、從頂部到導航欄下的距離
			// #ifdef MP
			this.bodyMarginTop = uni.getSystemInfoSync().statusBarHeight + 50
			// #endif
			this.couponno = e.couponno
			this.getMessage()
			this.animation = uni.createAnimation({
				duration: 1000,
				timingFunction: 'ease',
			})
			this.get_prize_verify()
		},
		methods: {
			// 返回上一層
			backPage() {
				uni.navigateBack({
					delta: -1
				})
			},
			// 關閉核銷後的彈窗
			closePropModule() {
				this.showPropModelData = false
				this.getMessage()
				this.get_prize_verify()
			},
			// 去抽奖，刮刮乐
			goToGameTicket() {
				uni.navigateTo({
					url: './scratchTicket?mbid=' + this.ticket_mbid + '&couponno=' + this.couponno
				})
			},
			// 核銷獎品（輸入密碼核銷）
			hxSubmit() {
				if (this.password_error) {
					return
				}
				uni.request({
					url: this.$api + 'mysteryboxnum/prize_verify_do',
					method: 'POST',
					header: {
						'Authorization': 'Bearer ' + uni.getStorageSync('token')
					},
					data: {
						couponno: this.couponno,
						passwd: this.hx_password
					},
					success: res => {
						if (res.data.status == 1) {
							this.showPropModelData = true
							this.taps_model_error = true
							this.ticket_mbid = parseInt(res.data.data.extra_mbid)
						} else {
							this.password_error = true
							this.taps_model_error = false
							this.tapsMessage = res.data.info
							this.showPropModel()
						}
					}
				})
				console.log(this.hx_password);
			},
			// 檢查用戶時候輸入核销
			checkPassword() {
				this.password_error = false
			},
			// 檢查用戶時候輸入完數據
			checkExtraInput() {
				let check = true
				this.extra.forEach(item => {
					if (!item.content) {
						check = false
					}
				})
				this.submitExtra = check
			},
			// 提交用戶填寫的數據
			subMitExtraData() {
				if (!this.submitExtra) {
					return false
				}
				// let phoneRule =
				// 	/^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)$/
				// let check = false
				// this.extra.forEach(item => {
				// 	if (item.name == '電話') {
				// 		if (!phoneRule.test(parseInt(item.content))) {
				// 			item.error = true
				// 			check = true
				// 			this.tapsMessage = '請填寫正確的電話號碼'
				// 		} else {
				// 			item.error = false
				// 		}
				// 	}
				// })
				// if (check) {
				// 	this.showPropModel()
				// 	return false
				// }
				let check = false
				this.extra.forEach(val => {
					if (!val.content.trim()) {
						val.error = true
						check = true
						this.tapsMessage = val.name+'不能為空'
					}
					if (val.type == 'number') {
						if (isNaN(val.content)) {
							val.error = true
							check = true
							this.tapsMessage = '請填寫正確的數字格式'
						}
					}
				})
				if (check) {
					this.showPropModel()
					return false
				}
				uni.request({
					url: this.$api + 'mysteryboxnum/myprize_detail_filldata',
					method: 'POST',
					header: {
						'Authorization': 'Bearer ' + uni.getStorageSync('token')
					},
					data: {
						couponno: this.couponno,
						filldata: JSON.stringify(this.extra)
					},
					success: res => {
						if (res.data.status == 1) {
							this.prize.showOther = true
							this.taps_model_error = true
							this.showPropModel()
							this.tapsMessage = '提交成功'
							this.$forceUpdate()
						} else {
							this.tapsMessage = '提交失敗'
							this.taps_model_error = false
						}
					}
				})
			},
			// 獲取核銷方式
			get_prize_verify() {
				uni.request({
					url: this.$api + 'mysteryboxnum/prize_verify',
					method: 'GET',
					header: {
						'Authorization': 'Bearer ' + uni.getStorageSync('token')
					},
					data: {
						couponno: this.couponno
					},
					success: res => {
						if (res.data.status == 1) {
							this.prize_verify = res.data.data
						}
					}
				})
			},
			showPropModel() {
				this.animation.top(this.bodyMarginTop + 'px').step()
				this.tapsAnimation = this.animation.export()
				setTimeout(res => {
					this.animation.top('-40px').step()
					this.tapsAnimation = this.animation.export()
				}, 2500)
			},
			// 獲取信息
			getMessage() {
				uni.request({
					url: this.$api + 'mysteryboxnum/myprize_detail',
					method: 'GET',
					header: {
						'Authorization': 'Bearer ' + uni.getStorageSync('token')
					},
					data: {
						couponno: this.couponno
					},
					success: res => {
						if (res.data.status == 1) {
							this.extra = JSON.parse(res.data.data.extra)
							this.prize = res.data.data
							this.prize.showOther = this.prize.needfill == 0 ? true : false
							// 已完成已過期的不需要填寫資料
							if (this.prize.status == 0 || this.prize.status == 2) {
								this.prize.showOther = true
							}
							// 不需要核銷且已經填過資料的不需要繼續填寫資料
							if (this.prize.hasfill == 1 && this.prize.pickuptype == 'none') {
								this.prize.showOther = true
							}
						}
					}
				})
			},
			//跳轉到刮刮卡抽獎
			scratchTicket() {
				uni.navigateTo({
					url: './scratchTicket?mbid=' + this.prize.extra_mbid + '&couponno=' + this.couponno
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F6F6F6;
		color: red;
	}

	.bg-ios {
		position: absolute;
		width: 100%;
		height: 100vh;
		top: -100vh;
		left: 0;
		background: linear-gradient(90deg, #FFF573 0%, #FFC338 100%);
	}

	.mp-tapbar-content {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		background: linear-gradient(90deg, #FFF573 0%, #FFC338 100%);
		color: #FFFFFF;

		.mp-tapbar-share-back {
			height: 100upx;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;

			image {
				width: 34upx;
				height: 34upx;
				transform: rotate(180deg);
				position: absolute;
				left: 0;
				top: 50%;
				margin-top: -17upx;
				margin-left: 14upx;
			}
		}
	}

	.opacity-bg {
		opacity: 0.7;
	}

	.prize-detail {
		min-height: 100vh;
		width: 100%;
		padding: 40upx;
		margin-top: 40upx;
		box-sizing: border-box;

		image {
			width: 100%;
			height: 100%;
		}

		.taps-model {
			width: 100%;
			height: 72upx;
			line-height: 72upx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #FFFFFF;
			text-align: center;
			position: fixed;
			z-index: 99;
			top: -72upx;
			left: 0;
			font-size: 28upx;
			background-color: #333333;
			overflow: hidden;
		}

		.taps-model-error {
			background-color: #FA5151 !important;
		}

		.user-message-input-error {
			color: #FA5151 !important;
		}

		.bgcolor999 {
			background: #999999 !important;
		}

		.prize-user-message-content {
			width: 100%;
			border-radius: 30upx;
			margin: auto;
			box-sizing: border-box;
			padding: 40upx;
			box-shadow: 0upx 5upx 11upx 0upx rgba(0, 0, 0, 0.08);
			background-repeat: no-repeat;
			background-size: 100%;
			background-color: #FFFFFF;
			position: relative;

			.prize-user-message {
				width: 100%;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;

				.prize-user-message-left {
					width: calc(100% - 146upx);

					view {
						width: 100%;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						word-break: normal;
						text-align: left;
					}

					.prize-user-message-left-title {
						font-size: 32upx;
						font-family: PingFangTC-Semibold, PingFangTC;
						font-weight: 600;
						background-color: #333333;
						line-height: 45upx;
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}

					.prize-user-message-left-subtitle {
						font-size: 28upx;
						font-family: PingFangTC-Regular, PingFangTC;
						font-weight: 400;
						background-color: #333333;
						line-height: 40upx;
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}

					.prize-user-message-left-time {
						font-size: 24upx;
						font-family: PingFangTC-Regular, PingFangTC;
						font-weight: 400;
						background-color: #999999;
						line-height: 33upx;
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
				}

				.prize-user-message-img {
					width: 146upx;
					height: 146upx;
					border-radius: 20upx;
				}
			}

			.prize-user-message-taps {
				display: flex;
				padding-bottom: 32upx;
				border-bottom: 2upx dashed #999999;

				view {
					width: 120upx;
					height: 40upx;
					background: #FFF8CF;
					border-radius: 10upx 0upx 10upx 0upx;
					font-size: 20upx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					line-height: 40upx;
					text-align: center;
				}

				.due-soon {
					background-color: #FFF8CF;
					color: #FE8C08;
				}

				.change-award-winning {
					margin-left: 26upx;
					background-color: #FFE3E3;
					color: #FF3838;
				}
			}

			.user-message {
				box-sizing: border-box;

				.user-message-title {
					font-size: 30upx;
					font-family: PingFangTC-Semibold, PingFangTC;
					font-weight: 600;
					color: #333333;
					line-height: 26upx;
					text-align: center;
					margin-top: 58upx;
					margin-bottom: 40upx;
				}

				.user-message-input {
					width: 100%;
					height: 100upx;
					line-height: 100upx;
					box-shadow: 0 2upx 4upx 0 rgba(0, 0, 0, 0.2);
					border-radius: 10upx;
					margin-bottom: 30upx;
					overflow: hidden;

					.user-message-input-a {
						width: 100%;
						height: 100%;
						line-height: 100upx;
						background-color: rgba(255, 255, 255, 0);
						border: none;
						outline: none;
						color: #FFC100;
						text-align: center;
						background: #FFFBE5;
						font-size: 36upx;
					}
				}



				.submit-user-message-btn {
					width: 100%;
					height: 84upx;
					line-height: 84upx;
					border-radius: 42upx;
					text-align: center;
					background-color: #FFC100;
					font-size: 28upx;
					font-family: PingFangTC-Semibold, PingFangTC;
					font-weight: 600;
					color: #FFFFFF;
					letter-spacing: 4upx;
				}
			}

			.exchange-content {
				.exchange-title {
					width: 100%;
					text-align: center;
					font-size: 30upx;
					font-family: PingFangTC-Semibold, PingFangTC;
					font-weight: 600;
					color: #333333;
					line-height: 26upx;
					margin-top: 60upx;
					margin-bottom: 26upx;
				}

				.qrcode-exchange {
					pading-bottom: 36upx;

					.qrcode-exchange-qrcode {
						width: 260upx;
						height: 260upx;
						margin: auto;
					}

					.qrcode-exchange-title {
						font-size: 24upx;
						font-family: PingFangTC-Regular, PingFangTC;
						font-weight: 400;
						color: #3A3A3A;
						line-height: 26upx;
						text-align: center;
						margin: 16upx 0;
					}

					.qrcode-exchange-number {
						width: 300upx;
						height: 44upx;
						line-height: 44upx;
						text-align: center;
						margin: auto;
						background-color: #FFFBE5;
						font-size: 24upx;
						font-family: PingFangTC-Regular, PingFangTC;
						font-weight: 400;
						color: #FE8C08;
						border-radius: 22upx;
					}
				}
			}

			.used-content {
				.used-title {
					width: 100%;
					text-align: center;
					font-size: 30upx;
					font-family: PingFangTC-Semibold, PingFangTC;
					font-weight: 600;
					color: #333333;
					line-height: 26upx;
					margin-top: 60upx;
					margin-bottom: 40upx;
				}

				.used-icon {
					width: 126upx;
					height: 126upx;
					border-radius: 50%;
					margin: auto;
				}
			}

			.losed-content {
				.losed-title {
					width: 100%;
					text-align: center;
					font-size: 30upx;
					font-family: PingFangTC-Semibold, PingFangTC;
					font-weight: 600;
					color: #333333;
					line-height: 26upx;
					margin-top: 60upx;
					margin-bottom: 40upx;
				}

				.losed-icon {
					width: 126upx;
					height: 126upx;
					border-radius: 50%;
					margin: auto;
				}
			}

			.done-exchange {
				.done-exchange-title {
					text-align: center;
					margin-top: 58upx;
					font-size: 30upx;
					font-family: PingFangTC-Semibold, PingFangTC;
					font-weight: 600;
					color: #3A3A3A;
					line-height: 26upx;
				}

				.done-exchange-txt {
					margin: 26upx 0;
					font-size: 28upx;
					font-family: PingFangTC-Regular, PingFangTC;
					font-weight: 400;
					color: #333333;
					line-height: 40upx;
				}

				.done-exchange-attention {
					text-align: center;

					.done-exchange-attention-txt {
						width: 594upx;
						line-height: 84upx;
						text-align: center;
						font-size: 28upx;
						font-family: PingFangTC-Semibold, PingFangTC;
						font-weight: 600;
						color: #FFFFFF;
						background-color: #07C160;
						border-radius: 42upx;
					}

					.done-exchange-attention-cion {
						width: 126upx;
						height: 126upx;
						border-radius: 50%;
						margin-top: 14upx;
					}
				}
			}

			.password-exchange {
				.password-exchange-title {
					text-align: center;
					font-size: 30upx;
					font-family: PingFangTC-Semibold, PingFangTC;
					font-weight: 600;
					color: #333333;
					line-height: 26upx;
					margin-top: 60upx;
					margin-bottom: 40upx;
				}

				.password-exchange-input-content {
					width: 600upx;
					height: 116upx;
					background: #FFFBE5;
					box-shadow: 0 2upx 4upx 0 rgba(0, 0, 0, 0.2);
					border-radius: 10upx;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.password-exchange-submit {
						width: 114upx;
						height: 60upx;
						line-height: 60upx;
						text-align: center;
						color: #FFFFFF;
						background-color: #FFC100;
						margin-right: 16upx;
						border-radius: 30upx;
						font-size: 28upx;
						font-family: PingFangTC-Semibold, PingFangTC;
						font-weight: 600;
					}

					.password-exchange-input {
						width: calc(100% - 130upx);
						height: 100%;
						padding: 0 20upx;
						color: #FFC100;
						font-size: 36upx;
					}
				}
			}
		}

		.prize-user-message-content:before {
			content: '';
			position: absolute;
			width: 50upx;
			height: 50upx;
			border-radius: 50%;
			background-color: #F6F6F6;
			top: 250upx;
			left: -25upx;
		}

		.prize-user-message-content:after {
			content: '';
			position: absolute;
			width: 50upx;
			height: 50upx;
			border-radius: 50%;
			background-color: #F6F6F6;
			top: 250upx;
			right: -25upx;
		}

		.merchant-address {
			width: 100%;
			padding: 30upx 40upx 26upx 40upx;
			box-sizing: border-box;
			background: #FFFFFF;
			box-shadow: 0upx 5upx 11upx 0upx rgba(0, 0, 0, 0.08);
			border-radius: 20upx;
			margin-top: 30upx;

			.merchant-address-title {
				font-size: 32upx;
				font-family: PingFangTC-Semibold, PingFangTC;
				font-weight: 600;
				background-color: #333333;
				line-height: 45upx;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}

			.merchant-address-address {
				margin-top: 20upx;
				font-size: 24upx;
				font-family: PingFangTC-Regular, PingFangTC;
				font-weight: 400;
				background-color: #999999;
				line-height: 30upx;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}

			.merchant-address-more {
				margin-top: 52upx;
				font-size: 24upx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #3A3A3A;
				line-height: 33upx;
				text-align: center;
				display: flex;
				justify-content: center;
				align-items: center;

				image {
					width: 16upx;
					height: 16upx;
					margin-left: 6upx;
				}
			}
		}

		.prize-explain {
			padding: 40upx;
			background: #FFFFFF;
			box-shadow: 0upx 5upx 11upx 0upx rgba(0, 0, 0, 0.08);
			border-radius: 20upx;
			margin-top: 30upx;

			.explain-title {
				font-size: 32upx;
				font-family: PingFangTC-Semibold, PingFangTC;
				font-weight: 600;
				background-color: #333333;
				line-height: 45upx;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}

			.explain-text {
				font-size: 24upx;
				font-family: PingFangTC-Regular, PingFangTC;
				font-weight: 400;
				background-color: #999999;
				line-height: 44upx;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}

		.prop-content {
			width: 100%;
			height: 100vh;
			overflow: hidden;
			background: rgba(0, 0, 0, 0.5);
			position: fixed;
			z-index: 99999;
			top: 0;
			left: 0;
			display: flex;
			align-items: center;

			.prop-container {
				width: 100%;
				height: 1180upx;
				overflow: hidden;
			}

			.publicity {
				width: 552upx;
				height: 698upx;
				background-image: url('https://img-cdn.macaotown.com/o_1f32safddkfk1sabutb18pf4kge.png');
				background-repeat: no-repeat;
				background-size: 100%;
				margin: auto;
				margin-top: 100upx;
				padding-top: 204upx;
				box-sizing: border-box;

				.publicity-title,
				.publicity-title1 {
					width: 394upx;
					height: 64upx;
					line-height: 64upx;
					margin: auto;
					background-image: url('https://img-cdn.macaotown.com/o_1f32safdd15v76u16mc4rc53pg.png');
					background-repeat: no-repeat;
					background-size: 100%;
					font-size: 32upx;
					display: flex;
					justify-content: center;
					font-weight: 600;
					color: #FFFFFF;
					text-align: center;

					.one-tit {}

					.two-tit {
						opacity: 0.8;
					}
				}

				.publicity-title1 {
					width: 342upx;
				}

				.publicity-gonow {
					width: 196upx;
					height: 56upx;
					display: flex;
					justify-content: center;
					align-items: center;
					margin: auto;
					margin-top: 16upx;
					border-radius: 28upx;
					border: 4upx solid #FA5151;

					.publicity-gonow-txt {
						font-size: 30upx;
						font-weight: 400;
						color: #FA5151;
					}

					.publicity-gonow-icon {
						width: 28upx;
						height: 28upx;
					}
				}
			}

			.no-publicity {
				width: 480upx;
				height: 270upx;
				margin: auto;
				background-image: url('https://img-cdn.macaotown.com/o_1f2qq3e1v16e5sbdfpb1cfh3kma.png');
				background-repeat: no-repeat;
				background-size: 100%;
				box-shadow: 0upx 0upx 16upx 0upx rgba(0, 0, 0, 0.41);
				border-radius: 30upx;
				box-sizing: border-box;
			}

			.no-all {
				width: 532upx;
				height: 536upx;
				margin: auto;
				margin-top: 300upx;
				background-image: url('https://img-cdn.macaotown.com/o_1f34jtmgcftk1p56qm5nvh6ava.png');
				background-repeat: no-repeat;
				background-size: 100%;
				border-radius: 30upx;
			}

			.close-prop-content {
				width: 70upx;
				height: 70upx;
				border-radius: 50%;
				margin: auto;
				margin-top: 26upx;
			}
		}

		.go-walk-button {
			width: 100%;
			height: 130upx;
			line-height: 130upx;
			text-align: center;
			font-size: 34upx;
			font-weight: 600;
			color: #FFFFFF;
			background: linear-gradient(90deg, #FF5771 0%, #FF7373 100%);
			position: fixed;
			bottom: 0;
			left: 0;
		}

		.go-walk-icon {
			width: 154upx;
			position: fixed;
			right: 0;
			top: 45%;

			.walk-icon {
				width: 100%;
				height: 126upx;
			}

			.walk-text {
				width: 118upx;
				height: 34upx;
				background: linear-gradient(90deg, #FF5771 0%, #FF7373 100%);
				box-shadow: 0upx 9upx 10upx 0upx rgba(255, 73, 91, 0.27);
				border-radius: 20upx;
				font-size: 24upx;
				font-weight: 600;
				color: #FFFFFF;
				line-height: 34upx;
				margin: auto;
				text-align: center;
				opacity: 0.8;
			}
		}
	}
</style>
