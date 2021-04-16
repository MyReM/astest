<template>
	<view class="mine-prize">
		<view class="bg-ios"></view>
		<view class="merchant-content" :style="'padding-top:' +bodyMarginTop+'px;'">
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
			<view class="merchant-message">
				<view class="merchant-message-navigator">
					<view class="merchant-name" id="button-merchant-name">
						{{merchant.merchant_id?merchant.merchant_name:'選擇商戶'}}
					</view>
					<image v-if="false" class="merchant-change" id="merchant-change-two"
						src="https://img-cdn.macaotown.com/o_1f2oagqba1i3p1dk11b3ek3l1dj4e.png">
					</image>
				</view>
			</view>
			<image class="present-img" src="https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png"></image>
		</view>
		<view class="prize-body">
			<view class="prize-box">
				<view class="menu">
					<view class="menu-item" id="button-menu-item-one" :class="prize_type==0?'menu-item-active':''"
						@tap="prize_type=0">
						可使用
						<view class="menu-item-count" v-show="prize_type==0">
							{{prize_list.length>99?99:prize_list.length}}
						</view>
						</view>
					<view class="menu-item" id="button-menu-item-two" :class="prize_type==1?'menu-item-active':''"
						@tap="prize_type=1">
						<view class="menu-item-count" v-show="prize_type==1">
							{{prize_list.length}}
						</view>
						已使用
						</view>
					<view class="menu-item" id="button-menu-item-three" :class="prize_type==2?'menu-item-active':''"
						@tap="prize_type=2">
						<view class="menu-item-count" v-show="prize_type==2">
							{{prize_list.length}}
						</view>
						已過期
						</view>
				</view>
				<scroll-view class="prize-scoll" scroll-y="true">
					<view class="prize-item" :class="prize_type==0?'':prize_type==1&&item.luckdraw==1?'prize-item-ticket':'prize-item-opacity'"
						v-for="(item,index) in prize_list" :key="index">
						<view class="prize-item-left">
							<view class="left-top">
								<view class="left-top-image">
									<image :src="item.icon" mode="aspectFill"></image>
								</view>
								<view class="prize">
									<view class="prize-title">{{item.name}}</view>
									<view class="merchant">{{item.mbname}}</view>
								</view>
							</view>
							<view class="left-bottom-line">
							</view>
							<view class="left-bottom">
								<view class="left-botom-time">
									有效期至{{item.exptime}}
								</view>
								<view class="left-botom-btn" v-if="item.luckdraw==1">
									核銷有獎
								</view>
								<view class="left-botom-btn1" v-if="item.toexpire==1">
									即將到期
								</view>
							</view>
							<image class="prize-item-right-nouse" v-if="prize_type==2"
								src="https://img-cdn.macaotown.com/o_1f2oamevs13l3c6k1fkd11mq7jra.png"></image>
						</view>
						<view id="button-prize-use" class="prize-item-right" v-if="prize_type==0" @tap="goDetail(item)">
							去使用
						</view>
						<view class="prize-item-right" v-else-if="prize_type==1&&item.luckdraw!=1" @tap="goDetail(item)">
							已使用
						</view>
						<view class="prize-item-right" v-else-if="prize_type==1&&item.luckdraw==1" @tap="goTicketPrize(item.extra_mbid,item.couponno)">
							可抽獎
						</view>
						<view class="prize-item-right" @tap="goDetail(item)" v-else>
							未使用
						</view>
					</view>
					<view class="no-data" v-if="prize_list.length==0">
						<image src="https://img-cdn.macaotown.com/o_1f2oanlfgp3dvm84cb1g6o8e7a.png"></image>
						<view class="no-get-prize">還未拿到獎品</view>
						<navigator url="./index" hover-class="none" class="get-task" id="button-get-task">快來參與最新活動吧 ></navigator>
					</view>
					<view class="footer">
						技術支持 達酷互動雲 dakuu.com
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="about-to-expire" v-if="aboutToExpire" @tap.stop="aboutToExpire=false">
			<view class="about-to-expire-body" @tap.stop="">
				<view class="head-context">
					<image class="close-icon" @tap.stop="aboutToExpire=false" id="close-icon" src="https://img-cdn.macaotown.com/o_1f34heok4114316ac9572ht1b9c.png"></image>
					<view class="head-context-title">
						獎品過期提示
					</view>
					<view class="head-context-tap">
						您有以下商品即將無法使用
					</view>
				</view>
				<scroll-view scroll-y="true">
					<view class="ticket-item" v-for="(item,index) in my_prize_deadline" :key="index">
						<image class="ticket-item-img" :src="item.icon"></image>
						<view class="ticket-item-body">
							<view class="ticket-item-title">{{item.name}}</view>
							<view class="ticket-item-merchant">{{item.mbname}}</view>
							<view class="ticket-item-time">有效期至{{item.exptime}}</view>
						</view>
					</view>
				</scroll-view>
				<view @tap.stop="aboutToExpire=false" class="look-ticket-button" id="look-ticket-button">
					立即查看
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				prize_type: 0,
				userInfo: uni.getStorageSync('userInfo'),
				prize_list: [],
				statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
				systemInfo: uni.getSystemInfoSync(),
				bodyMarginTop: 0,//距離頂部外邊距
				merchant: {
					merchant_id:111,
					merchant_name: '泰豐超級市場',
					imgUrl: ''
				},//商家
				aboutToExpire:false,//是否展示快過期獎品彈窗
				my_prize_deadline:[],//快過期獎品列表
			}
		},
		onLoad(e) {
			if (e.merchant_id) {
				this.merchant = e
			}
			// 環境為小程序時，設置內容、從頂部到導航欄下的距離
			// #ifdef MP
			this.bodyMarginTop = uni.getSystemInfoSync().statusBarHeight + 50
			// #endif
			this.getMyPrizeDeadline()
		},
		onShow() {
			this.getPrize()
		},
		methods: {
			// 去抽奖
			goTicketPrize(mbid,couponno){
				uni.navigateTo({
					url:'./scratchTicket?mbid='+mbid+'&couponno='+couponno
				})
			},
			// 獲取我的獎品
			getPrize() {
				uni.request({
					url: this.$api + 'mysteryboxnum/my_prize_list',
					method: 'GET',
					header: {
						'Authorization': 'Bearer ' + uni.getStorageSync('token')
					},
					data: {
						type: this.prize_type
					},
					success: res => {
						if (res.data.status == 1) {
							this.prize_list=[]
							this.prize_list = res.data.data
						}
					}
				})
			},
			// 獲取過期提示獎品
			getMyPrizeDeadline(){
				uni.request({
					url: this.$api + 'mysteryboxnum/my_prize_deadline',
					method: 'GET',
					header: {
						'Authorization': 'Bearer ' + uni.getStorageSync('token')
					},
					success: res => {
						if (res.data.status == 1) {
							this.my_prize_deadline=[]
							this.my_prize_deadline = res.data.data
							this.my_prize_deadline=res.data.data.length>0?true:false
						}
					},
					fail:res =>{
						console.log(res);
					}
				})
			},
			// 獎品詳情
			goDetail(item) {
				uni.navigateTo({
					url: './prize-detail?couponno=' + item.couponno
				})
			},
			// 返回上一層
			backPage() {
				uni.navigateBack({
					delta: -1
				})
			}
		},
		watch: {
			prize_type() {
				this.getPrize()
			}
		}
	}
</script>

<style lang="scss">
	.mine-prize {
		position: relative;
		.bg-ios{
			width: 100%;
			height: 100vh;
			position: absolute;
			top: -100vh;
			left: 0;
			z-index: 999;
			background: linear-gradient(127deg, #FFF46A 0%, #FE9307 100%);
		}
		.mp-tapbar-content {
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 9999;

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

		.merchant-content {
			width: 100%;
			/* #ifdef MP */
			height: 502upx;
			/* #endif */
			/* #ifdef H5 */
			height: 338upx;
			/* #endif */
			background: linear-gradient(127deg, #FFF46A 0%, #FE9307 100%);
			box-sizing: border-box;
			position: relative;

			.merchant-message {
				width: 100%;
				padding-left: 96upx;
				padding-top: 96upx;
				box-sizing: border-box;
				position: relative;
				z-index: 9;

				.merchant-message-navigator {
					display: flex;
					justify-content: flex-start;
					height: 50upx;
					align-items: center;
				}

				.merchant-name {
					min-width: 1em;
					max-width: 70%;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					margin-right: 6upx;
					font-size: 38upx;
					font-family: PingFangTC-Semibold, PingFangTC;
					font-weight: 600;
					background-color: #333333;
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}

				.merchant-change {
					width: 30upx;
					height: 30upx;
				}
			}

			.present-img {
				width: 278upx;
				height: 284upx;
				right: 64upx;
				position: absolute;
				z-index: 1;
				/* #ifdef H5 */
				top: 36upx;
				/* #endif */
				/* #ifdef MP */
				top: 198upx;
				/* #endif */
			}

		}

		.prize-body {
			width: 100%;
			margin-top: -64upx;
			/* #ifdef MP */
			height: calc(100vh - 438upx);
			/* #endif */
			/* #ifdef H5 */
			height: calc(100vh - 274upx);
			/* #endif */
			overflow: hidden;
			background: #FFFBE5;
			border-radius: 64upx 64upx 0 0;
			position: relative;
			z-index: 9;
			box-sizing: border-box;

			.prize-box {
				width: 100%;
				border-top-left-radius: 60upx;
				border-top-right-radius: 60upx;
				background-color: #fffbe5;
				padding: 0 40upx;
				box-sizing: border-box;

				.menu {
					display: flex;
					justify-content: space-around;
					height: 98upx;
					padding-top: 46upx;
					box-sizing: border-box;

					.menu-item {
						position: relative;
						font-size: 28upx;
						font-family: PingFangTC-Regular, PingFangTC;
						font-weight: 400;
						color: #999999;
						line-height: 26px;
						.menu-item-count{
							position: absolute;
							width: 32upx;
							height: 32upx;
							border-radius: 50%;
							background-color: #FFC100;
							font-size: 24upx;
							font-weight: 600;
							color: #333333;
							line-height: 32upx;
							text-align: center;
							top: -16upx;
							right: -32upx;
						}
					}

					.menu-item-active {
						font-size: 32upx;
						font-family: PingFangTC-Semibold, PingFangTC;
						font-weight: 600;
						color: #3A3A3A;
						line-height: 26px;
						position: relative;
					}

					.menu-item-active:before {
						content: '';
						position: absolute;
						bottom: -10upx;
						width: 50upx;
						height: 6upx;
						background-color: #FFC100;
						left: 50%;
						margin-left: -25upx;
					}
				}

				.prize-scoll {
					margin-top: 40upx;
					/* #ifdef MP */
					height: calc(100vh - 626upx);
					/* #endif */
					/* #ifdef H5 */
					height: calc(100vh - 546upx);
					/* #endif */
					position: relative;
				}


				.prize-item {
					margin-bottom: 26upx;
					display: flex;
					width: 674upx;
					height: 244upx;
					box-sizing: border-box;
					overflow: hidden;
					position: relative;
					background-image: url('https://img-cdn.macaotown.com/o_1f2qk6s5b1cmppee1jnt97o1h4ba.png');
					background-repeat: no-repeat;
					background-size: 100%;

					.prize-item-left {
						width: calc(100% - 156upx);
						height: 100%;
						padding: 26upx 18upx 28upx 50upx;
						box-sizing: border-box;
						position: relative;
						z-index: 9;

						.prize-item-right-nouse {
							position: absolute;
							width: 152upx;
							height: 152upx;
							top: 10upx;
							right: 0;
							z-index: 1;
						}

						.left-top {
							display: flex;
							width: 100%;
							padding-bottom: 26upx;
							align-items: center;
							position: relative;
							z-index: 9;

							.left-top-image {
								width: 108upx;
								height: 106upx;
								border-radius: 50%;
								overflow: hidden;
								background-color: #FFFFFF;
							}

							.prize {
								margin-left: 20upx;
								height: 106upx;
								box-sizing: border-box;
								overflow: hidden;
								padding-top: 10upx;

								.prize-title {
									width: 100%;
									white-space: nowrap;
									word-break: normal;
									overflow: hidden;
									text-overflow: ellipsis;
									font-size: 32upx;
									font-family: PingFangTC-Semibold, PingFangTC;
									font-weight: 600;
									background-color: #333333;
									line-height: 46upx;
									padding-top: 10upx;
									box-sizing: border-box;
									-webkit-background-clip: text;
									-webkit-text-fill-color: transparent;
								}

								.merchant {
									font-size: 24upx;
									font-family: PingFangTC-Regular, PingFangTC;
									font-weight: 400;
									background-color: #333333;
									line-height: 32upx;
									padding-top: 10upx;
									box-sizing: border-box;
									-webkit-background-clip: text;
									-webkit-text-fill-color: transparent;
								}
							}
						}

						.left-bottom-line {
							width: 100%;
							border-top: 2upx dashed #333333;
							opacity: 0.2;
						}

						.left-bottom {
							font-size: 24upx;
							color: #cfcfcf;
							padding-top: 20upx;
							display: flex;
						}

						.left-botom-btn,
						.left-botom-btn1 {
							margin-left: auto;
							width: 120upx;
							height: 40upx;
							line-height: 40upx;
							font-size: 24upx;
							text-align: center;
							border-radius: 10upx 0 10upx 0;
						}

						.left-botom-btn {
							color: #FF3838;
							background-color: #FFE3E3;
						}

						.left-botom-btn1 {
							color: #FE8C08;
							background-color: #FFF8CF;
						}
					}

					.prize-item-right {
						width: 156upx;
						writing-mode: tb-rl;
						text-align: center;
						line-height: 156upx;

						font-size: 30upx;
						font-family: PingFangTC-Semibold, PingFangTC;
						font-weight: 600;
						color: #424242;
						letter-spacing: 8upx;
					}
				}

				.prize-item-opacity {
					opacity: 0.7;
					background-image: url('https://img-cdn.macaotown.com/o_1f2qk72381uqa1ej8oqd16f610tmd.png');
				}
				.prize-item-ticket {
					background-image: url('https://img-cdn.macaotown.com/o_1f3510hcu3javmotm214fu1339a.png');
				}

				.no-data {
					width: 362upx;
					height: 374upx;
					position: absolute;
					top: 50%;
					left: 50%;
					margin-top: -187upx;
					margin-left: -181upx;

					image {
						width: 100%;
						height: 274upx;
					}

					.no-get-prize {
						width: 100%;
						text-align: center;
						font-size: 24upx;
						font-family: PingFangTC-Regular, PingFangTC;
						font-weight: 400;
						color: #999999;
						line-height: 28upx;
						margin-top: 32upx;
					}

					.get-task {
						width: 100%;
						text-align: center;
						font-size: 28upx;
						font-family: PingFangTC-Regular, PingFangTC;
						font-weight: 400;
						color: #FFC100;
						line-height: 34upx;
						margin-top: 8upx;
						text-decoration: underline;
					}
				}
				.footer {
					width: 100%;
					height: 100upx;
					line-height: 100upx;
					text-align: center;
					color: #C8C7CC;
					font-size: 24upx;
				}
			}
		}

		.about-to-expire {
			width: 100%;
			height: 100vh;
			overflow: hidden;
			position: fixed;
			top: 0;
			left: 0;
			background-color: rgba(0,0,0,0.5);
			z-index: 9;

			.about-to-expire-body {
				width: 600upx;
				height: 934upx;
					position: absolute;
					top: 50%;
					left: 50%;
					margin-left: -300upx;
				margin-top: -400upx;
				border-radius: 20upx;
				overflow: hidden;
					background-color: #FFFFFF;
				.head-context{
					width: 100%;
					height: 228upx;
					background-image: url('https://img-cdn.macaotown.com/o_1f34heok42v83ru7475np17qqb.png');
					background-repeat: no-repeat;
					background-size: 100%;
					text-align: right;
					padding: 40upx;
					box-sizing: border-box;
					position: relative;
					.close-icon{
						width: 24upx;
						height: 24upx;
						
					}
					.head-context-title{
						width: 100%;
						text-align: center;
						font-size: 40upx;
						font-weight: 600;
						color: #333333;
						line-height: 36upx;
					}
					.head-context-tap{
						width: 100%;
						text-align: center;
						font-size: 28upx;
						font-weight: 400;
						color: #333333;
						line-height: 40upx;
						margin-top: 16upx;
					}
				}
				scroll-view{
					width: 100%;
					height: 700upx;
				}
				.ticket-item{
					width: 100%;
					padding: 24upx 60upx;
					box-sizing: border-box;
					display: flex;
					.ticket-item-img{
						width: 120upx;
						height: 120upx;
						border-radius: 20upx;
						overflow: hidden;
					}
					.ticket-item-body{
						width: calc(100% - 140upx);
						margin-left: 20upx;
							background-color: #333333;
							line-height: 42upx;
							-webkit-background-clip: text;
							-webkit-text-fill-color: transparent;
						.ticket-item-title{
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							font-size: 30upx;
							font-weight: 600;
						}
						.ticket-item-merchant{
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
								font-size: 26upx;
								font-weight: 400;
								line-height: 37upx;
						}
						.ticket-item-time{
							
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
								font-size: 24upx;
								font-weight: 400;
								line-height: 33upx;
						}
					}
				}
				.look-ticket-button{
					width: 500upx;
					height: 100upx;
					line-height: 100upx;
					border-radius: 50upx;
					text-align: center;
					font-size: 34upx;
					font-weight: 600;
					color: #FFFFFF;
					position: absolute;
					bottom: 26upx;
					z-index: 9;
					left: 50%;
					margin-left: -250upx;
					background-color: #FFC100;
				}
			}
		}

	}
</style>
