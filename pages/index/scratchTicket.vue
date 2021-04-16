<template>
	<view class="scratch-ticket">
		<view class="title-icon" id="title-icon">
			<image src="https://img-cdn.macaotown.com/o_1f2lu953ltkk1fli1bkks28ab5o.png"></image>
		</view>
		<view class="ticket-title" id="ticket-title">
			<image class="ticket-title-start" id="ticket-title-start"
				src="https://img-cdn.macaotown.com/o_1f2lu953l6gd18gl7691qh01svmn.png"></image>
			<view class="ticket-title-text" id="ticket-title-text">
				泰豐x人頭馬 消費賞不停
			</view>
			<image class="ticket-title-start" id="ticket-title-start"
				src="https://img-cdn.macaotown.com/o_1f2lu953l6gd18gl7691qh01svmn.png"></image>
		</view>
		<view class="broadcast">
			<!-- <view class="cast-head">
				<view class="icon">icon</view>
				<swiper class="cast-text" style="height: 60upx;width: 60%;" autoplay interval="3000" duration="13000"circular>
					<swiper-item v-for="v in 8" :key="v">
						<view style="white-space: nowrap;">用戶{{v}}抽中一等獎</view>
					</swiper-item>
				</swiper>
			</view> -->
			<view class="ticket-handel">

				<view class="forbid-scarth" v-if="forbid_scarth==true"></view>
				<scratch-card @startTouch="startTouch" @stopMove="stopMove" ref="card" @complete="seatShow"
					:disabled="false" titleColor="#7c7ca0" :titleSize="36" title="刮開即中獎" watermark="">
					<!-- 刮刮后将显示的内容 -->
					<view class="scratch-card">
						<view class="get-ticket-content" v-show="showOppenPropBody">恭喜你!中獎了</view>
						<view class="get-ticket-content no-get-ticket-content" v-show="showNoOppenPropBody">未能中獎</view>
					</view>
				</scratch-card>
			</view>
			<!-- <view @click="ticketInit">再刮一次</view> -->
		</view>
		<view class="residue-content">
			<view class="residue-content-body">
				<view class="residue-content-text">剩餘</view>
				<view class="residue-content-count">{{mystery_ticket_num}}</view>
				<view class="residue-content-text">次刮獎機會</view>
			</view>
		</view>
		<view class="prize-list">
			<view class="prize-list-tile">
				<image src="https://img-cdn.macaotown.com/o_1f2lu953lvr41ok71e5714pc2ukp.png"
					class="prize-list-tile-img"></image>
				<view class="prize-list-tile-text">
					刮刮樂獎品
				</view>
				<image src="https://img-cdn.macaotown.com/o_1f2lu953l1rq214jb12itf4q5v5q.png"
					class="prize-list-tile-img"></image>
			</view>
			<scroll-view scroll-x="true" class="prize">
				<view class="prize-item" v-for="(item,index) in prizeTickList" :key="index">
					<image :src="item.icon" class="prize-item-img">
					</image>
					<view class="prize-item-title">泰豐x人頭馬</view>
				</view>
			</scroll-view>
			<view class="support-content">
				技術支持 達酷互動雲 dakuu.com
			</view>
		</view>
		<view class="side-menu">
			<navigator url="./mine" hover-class="none" class="menu-mine side-menu-item" id="menu-mine">中獎記錄</navigator>
			<view class="menu-rules side-menu-item" id="menu-rules" @tap="showGameRules=!showGameRules">活動規則</view>
		</view>
		<view class="open-prop-content" @touchmove.stop.prevent="moveStop" v-if="showOppenProp">
			<view class="open-prop-body" v-if="showOppenPropBody">
				<view class="open-prop-title">
					<view class="open-prop-title-line">
					</view>
					<view class="open-prop-title-text">
						恭喜你獲得
					</view>
					<view class="open-prop-title-line">
					</view>
				</view>
				<view class="open-prop-produce">
					<view class="open-prop-produce-decriation">
						{{openTicketMessage.name}}
					</view>
					<image :src="openTicketMessage.icon"></image>
				</view>
				<navigator url="./mine" class="open-prop-btn" id="open-look-btn">
					<view class="open-prop-btn-text">查看獎品</view>
					<image src="https://img-cdn.macaotown.com/o_1f2nppedu19u5hea89p166v1qpce.png"></image>
				</navigator>
				<view class="close-open-prop" @tap="showOppenProp=false">
					<image src="https://img-cdn.macaotown.com/o_1f2nr1oci18hr1vkbc0pa717l5d.png" />
				</view>
			</view>
			<view class="no-open-prop-body" v-if="showNoOppenPropBody">
				<view class="no-open-prop-title">
					<view class="no-open-prop-title-line"></view>
					<view class="no-open-prop-title-text">很遺憾未中獎</view>
					<view class="no-open-prop-title-line"></view>
				</view>
				<view class="no-open-prop-subtitle">再接再厲</view>
				<view class="no-open-prop-img">
					<image src="https://img-cdn.macaotown.com/o_1f2nr1ocj6tq1fm11v2891l2h6e.png"></image>
				</view>
				<view class="no-open-prop-btn">
					<view class="no-open-prop-btn-text" @tap="showOppenProp=false">我知道了</view>
					<image src="https://img-cdn.macaotown.com/o_1f2nr1ocj1ksogmc1bhddgeb9mg.png"></image>
				</view>
				<view class="no-close-open-prop" @tap="showOppenProp=false">
					<image src="https://img-cdn.macaotown.com/o_1f2nr1oci18hr1vkbc0pa717l5d.png" />
				</view>
			</view>
		</view>
		<game-rules :boxMessage="boxTicketMessage" :showRuleAnimation="showGameRules"></game-rules>
	</view>
</template>

<script>
	import scratchCard from './scratch-card.vue'
	import gameRules from '../components/game-rules.vue'
	export default {
		components: {
			scratchCard,
			gameRules
		},
		data() {
			return {
				forbid_scarth: false, //禁止掛卡
				userInfo: uni.getStorageSync('userInfo'),
				boxMessage: uni.getStorageSync('boxMessage'),
				showTicketContent: true,
				showOppenProp: false, //刮開後顯示彈窗
				showOppenPropBody: false, //刮開顯示已中獎
				showNoOppenPropBody: false, //刮開顯示未中獎
				boxTicketMessage: {}, //刮刮卡盲盒信息
				prizeTickList: {}, //刮刮卡盲盒獎品信息
				mystery_ticket_num: 0, //剩餘刮卡次數
				openTicketMessage: {}, //刮開後的獎品信息
				mbid: 0,
				couponno: '',
				showGameRules: false,
				PRIZE_NUMBER: 0, //中獎幾率，20%中獎率
			}
		},
		onLoad(e) {
			this.mbid = e.mbid
			this.couponno = e.couponno
			this.getMBox()
			// uni.showLoading({
			// 	title:'正在加載中...'
			// })
			// this.showTicketContent=false
			// setTimeout(() =>{
			// 	this.$refs.card.init();
			// 	this.showTicketContent=true
			// 	uni.hideLoading()
			// },500)
		},
		methods: {
			// 用戶開始掛卡，請求數據
			startTouch() {
				this.PRIZE_NUMBER = parseInt(Math.random() * 100)
				if (this.PRIZE_NUMBER <= 29) {
					this.showOppenPropBody = true
					this.showNoOppenPropBody = false
				} else {
					this.showNoOppenPropBody = true
					this.showOppenPropBody = false
				}
				// this.oppenBox(this.boxTicketMessage.id)
			},
			ticketInit() {
				this.openTicketMessage = false
				this.$refs.card.init();
			},
			// 刮開後請求中獎數據
			seatShow(isTicket) {
				if (this.forbid_scarth) {
					this.ticketInit()
				} else {
					if (this.showOppenPropBody) {
						console.log('中獎le');
						this.oppenBox()
					} else {
						this.noPrizeDownNum()
					}
					this.showOppenProp = true
				}
			},
			// 未中獎扣除次數
			noPrizeDownNum() {
				let data = {
					mbid: this.mbid
				}
				if (this.couponno) {
					data.couponno = this.couponno
				}
				uni.request({
					url: this.$api + 'mysteryboxnum/upd_num',
					method: 'GET',
					header: {
						'Authorization':'Bearer ' + uni.getStorageSync('token')
					},
					data: data,
					success: res => {
						if(res.data.status==1){
							this.couponno=''
						}
					}
				})
			},
			// 停止刮卡
			stopMove(percent) {
				if (this.forbid_scarth) {
					// 沒有刮卡次數時終止狀態
					this.ticketInit()
				}
			},
			moveStop() {},
			parseInteger(num) {
				return parseInt(num)
			},
			// 获取盲盒详情
			getMBox() {
				uni.request({
					url: this.$api + 'mysteryboxmall/detail', //仅为示例，并非真实接口地址。
					method: 'GET',
					header: {
						'Authorization': 'Bearer ' + uni.getStorageSync('token')
					},
					data: {
						mbid: this.mbid
					},
					success: (res) => {
						if (res.data.status == 1) {
							this.boxTicketMessage = res.data.data
							this.getPrizeList()
							this.getMysteryNum()
						}
					}
				})
			},
			// 獲取盲盒獎品
			getPrizeList() {
				uni.request({
					url: this.$api + 'mysteryboxnum/my_prize',
					method: 'GET',
					header: {
						'Authorization': 'Bearer ' + uni.getStorageSync('token')
					},
					data: {
						mbid: this.boxTicketMessage.id
					},
					success: res => {
						if (res.data.status == 1) {
							this.prizeTickList = res.data.data
						}
					}
				})
			},
			// 獲取開合次數
			getMysteryNum() {
				uni.request({
					url: this.$api + 'mysteryboxnum/mystery_num',
					method: 'GET',
					header: {
						'Authorization': 'Bearer ' + uni.getStorageSync('token')
					},
					data: {
						mbid: this.boxTicketMessage.id
					},
					success: res => {
						if (res.data.status == 1) {
							this.mystery_ticket_num = res.data.data.num
						}
					}
				})
			},
			// 打开盲盒
			oppenBox(mbid, num, again) {
				if (this.mystery_ticket_num <= 0) {
					console.log('你的開盒次數不足');
					return
				}
				let BUY_ONE_URL = 'mysteryboxnum/mystery_buyone'
				let data = {
					mbid: this.mbid
				}
				if (this.couponno) {
					data.couponno = this.couponno
				}
				uni.request({
					url: this.$api + BUY_ONE_URL, //仅为示例，并非真实接口地址。
					method: 'GET',
					header: {
						'Authorization': 'Bearer ' + uni.getStorageSync('token')
					},
					data: data,
					success: (res) => {
						if (res.data.status == 1) {
							this.openTicketMessage = res.data.data
							this.getMysteryNum()
						} else {
							let message = res.data.info
							if (res.data.info.indexOf('上限')) {
								message = '今次刮卡次數已達到上限，明天再來試試吧'
							}
							uni.showToast({
								title: message,
								icon: 'none'
							})
							this.forbid_scarth = true
						}
					}
				})
			}
		},
		watch: {
			showOppenProp() {
				if (this.showOppenProp == false) {
					let b = Math.random(0, 1)
					this.ticketInit()
				}
			}
		}
	}
</script>

<style lang="scss">
	.scratch-ticket {
		width: 100%;
		background-image: url('https://img-cdn.macaotown.com/o_1f2lu953lbqf6lo61nf2le4el.png');
		background-repeat: no-repeat;
		background-size: 100%;
		padding-top: 262upx;

		.title-icon {
			width: 558upx;
			height: 112upx;
			margin: auto;
		}

		.ticket-title {
			width: 542upx;
			height: 68upx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			background-color: #6061D1;
			box-shadow: 0 1upx 0 0 #FFFFFF, 0 2upx 2upx 0 rgba(0, 0, 0, 0.19);
			border-radius: 18upx;
			margin: auto;
			margin-top: 14upx;
			padding: 0 20upx;

			.ticket-title-start {
				width: 26upx;
				height: 26upx;
			}

			.ticket-title-text {
				width: 378upx;
				overflow: hidden;
				white-space: nowrap;
				word-break: normal;
				font-size: 34upx;
				font-weight: 500;
				font-synthesis: initial;
				color: #E6E7FF;
			}
		}

		.broadcast {
			width: 708upx;
			height: 432upx;
			margin: auto;
			background-image: url('https://img-cdn.macaotown.com/o_1f2lu953l87gj8b1uud10ph1dn8r.png');
			background-repeat: repeat;
			background-size: 100%;
			margin-top: 80upx;
			padding-top: 72upx;
			box-sizing: border-box;

			.cast-head {
				display: flex;
				font-size: 24upx;
				line-height: 40upx;
				padding-left: 30upx;
			}

			.ticket-handel {
				width: 562upx;
				height: 294upx;
				margin: auto;
				border-radius: 8upx;
				overflow: hidden;
				position: relative;

				.forbid-scarth {
					position: absolute;
					width: 100%;
					height: 100%;
					opacity: 0;
					z-index: 9;
				}

				.scratch-card {
					height: 294upx;

					.get-ticket-content {
						width: 100%;
						text-align: center;
						line-height: 294upx;
						font-size: 74upx;
						font-family: Source Han Sans CN;
						font-weight: 800;
						font-style: italic;
						color: #565662;
						// text-shadow: 2upx 2upx 0 #FFFFFF;
						background: linear-gradient(0deg, #E4B77B 0%, #D29B4F 100%);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}

					.no-get-ticket-content {
						background: linear-gradient(0deg, #9C9CB8 0%, #8C8CA8 99.31640625%);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
				}
			}
		}

		.residue-content {
			width: 100%;
			display: flex;
			justify-content: flex-end;
			box-sizing: border-box;

			.residue-content-body {
				min-width: 226upx;
				height: 60upx;
				padding: 0 10upx;
				margin-right: 60upx;
				background-image: url('https://img-cdn.macaotown.com/o_1f2lu953l1o5d13tc3ou44p3cik.png');
				background-repeat: no-repeat;
				background-size: 100%;
				display: flex;
				align-items: flex-end;
				justify-content: center;

				.residue-content-text {
					font-size: 24upx;
					color: #B83456;
				}

				.residue-content-count {
					font-size: 42upx;
					font-family: DIN Condensed;
					font-weight: bold;
					font-style: italic;
					color: #B83456;
					margin-right: 8upx;
				}
			}
		}

		.prize-list {
			width: calc(100% - 4upx);
			margin: auto;
			background: linear-gradient(0deg, #F3809D, #FC93AE);
			padding-top: 35upx;
			margin-top: 104upx;

			.prize-list-tile {
				width: 100%;
				height: 32upx;
				display: flex;
				justify-content: center;
				align-items: center;

				.prize-list-tile-img {
					width: 106upx;
					height: 4upx;
					border: 2upx dashed #333333;
					border-radius: 4upx;
				}

				.prize-list-tile-text {
					color: #FFFFFF;
					font-size: 34upx;
					font-style: italic;
					font-family: PingFang SC;
					font-weight: 600;
					margin: 0 34upx;
				}
			}

			.prize {
				margin-top: 44upx;
				width: 100%;
				padding: 24upx 0;
				white-space: nowrap;

				.prize-item {
					width: 214upx;
					height: 252upx;
					display: inline-block;
					background-image: url('https://img-cdn.macaotown.com/o_1f2lu953l1f5m15458pt7f81sj4j.png');
					background-repeat: no-repeat;
					background-size: 100%;
					margin: 0 20upx;
					text-align: center;

					.prize-item-img {
						width: calc(100% - 80upx);
						height: calc(100% - 100upx);
						margin: auto;
						margin-top: 20upx;
					}

					.prize-item-title {
						border-top: 2upx dashed #333333;
						width: 156upx;
						height: 68upx;
						margin: auto;
						font-size: 22upx;
						text-align: center;
						box-sizing: border-box;
						color: #333333;
						line-height: 68upx;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						word-break: normal;
					}
				}
			}

			.support-content {
				width: calc(100% - 4upx);
				height: 54ux;
				line-height: 54upx;
				text-align: center;
				color: #FFFFFF;
				margin: auto;
				background-color: #000000;
				opacity: 0.2;
				font-size: 24upx;
				margin-top: 68upx;
			}
		}

		.side-menu {
			position: absolute;
			width: 100%;
			height: 134upx;
			top: 362upx;
			left: 0;
			display: flex;
			justify-content: space-between;

			.side-menu-item {
				width: 46upx;
				height: 100%;
				writing-mode: tb-rl;
				letter-spacing: 4upx;
				color: #6061D1;
				font-size: 24upx;
				text-align: center;
				background: #FFFFFF;
				opacity: 0.6;
			}

			.menu-mine {
				border-radius: 0px 8upx 6upx 0px;
			}

			.menu-rules {
				border-radius: 8upx 0 0 8upx;
			}
		}

		.open-prop-content {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 998;
			width: 100%;
			height: 100vh;
			overflow: hidden;
			background-color: rgba(0, 0, 0, 0.8);

			.open-prop-body {
				width: 694upx;
				height: 904upx;
				position: absolute;
				top: 186upx;
				left: 50%;
				margin-left: -347upx;
				background-image: url('https://img-cdn.macaotown.com/o_1f2nppedtq8719cp179v1ktjtpnc.png');
				background-repeat: no-repeat;
				background-size: 100%;
				text-align: center;

				.open-prop-title {
					width: 360upx;
					display: flex;
					justify-content: space-around;
					align-items: center;
					margin: auto;
					margin-top: 360upx;

					.open-prop-title-line {
						width: 44upx;
						border-top: 1upx solid #946930;
					}

					.open-prop-title-text {
						font-size: 36upx;
						white-space: nowrap;
						font-family: Source Han Sans CN;
						font-weight: 800;
						color: #E44F4F;
						// text-shadow: 1px 1px 0px #FFFFFF;
						background: linear-gradient(0deg, #E4B77B 0%, #D29B4F 100%);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
				}

				.open-prop-produce {
					width: 360upx;
					margin: auto;
					overflow: hidden;
					text-align: center;
					margin-top: 17upx;

					image {
						width: 140upx;
						height: 140upx;
						border-radius: 50%;
						margin-top: 20upx;
					}

					.open-prop-produce-decriation {
						width: 100%;
						font-size: 30upx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #B98946;
					}
				}

				.open-prop-btn {
					width: 280upx;
					height: 90upx;
					margin: auto;
					position: relative;

					image {
						position: absolute;
						top: 0;
						left: 0;
						z-index: 1;
					}

					.open-prop-btn-text {
						font-size: 24upx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #FFFFFF;
						position: relative;
						z-index: 2;
						width: 100%;
						text-align: center;
						line-height: 90upx;
					}
				}

				.open-prop-mine {
					width: 100%;
					text-align: center;
					font-size: 34upx;
					line-height: 40upx;
					margin-top: 21upx;
				}

				.close-open-prop {
					width: 58upx;
					height: 58upx;
					border-radius: 50%;
					background-color: #CECECE;
					position: absolute;
					bottom: 20upx;
					left: 50%;
					margin-left: -29upx;
					color: #333333;
					font-size: 52upx;
				}
			}

			.no-open-prop-body {
				width: 454upx;
				height: 546upx;
				position: absolute;
				top: 50%;
				left: 50%;
				margin-top: -273upx;
				margin-left: -227upx;
				background-image: url('https://img-cdn.macaotown.com/o_1f2nr1ocjs55m2hpmr1t223scf.png');
				background-repeat: no-repeat;
				background-size: 100%;

				.no-open-prop-title {
					margin-top: 96upx;
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-wrap: nowrap;

					.no-open-prop-title-line {
						width: 50upx;
						height: 2upx;
						background-color: #535353;
						opacity: 0.3;
					}

					.no-open-prop-title-text {
						white-space: nowrap;
						margin: 0 12upx;
						font-size: 38upx;
						font-family: Source Han Sans CN;
						font-weight: 800;
						text-shadow: 2px 2px 160px #FFFFFF;
						background: linear-gradient(0deg, #9A9A9A 0%, #616161 100%);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
				}

				.no-open-prop-subtitle {
					width: 100%;
					text-align: center;
					font-size: 34upx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #333333;
					margin-top: 17upx;
				}

				.no-open-prop-img {
					width: 150upx;
					height: 150upx;
					margin: auto;
					margin-top: 36upx;
				}

				.no-open-prop-btn {
					width: 280upx;
					height: 90upx;
					margin: auto;
					position: relative;

					image {
						position: absolute;
						top: 0;
						left: 0;
						z-index: 1;
					}

					.no-open-prop-btn-text {
						font-size: 24upx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #FFFFFF;
						position: relative;
						z-index: 2;
						width: 100%;
						text-align: center;
						line-height: 90upx;
					}
				}

				.no-close-open-prop {
					width: 58upx;
					height: 58upx;
					border-radius: 50%;
					position: absolute;
					bottom: -84upx;
					left: 50%;
					margin-left: -29upx;
					font-size: 52upx;
					background-color: #000000;
					opacity: 0.5;
				}
			}
		}
	}
</style>
