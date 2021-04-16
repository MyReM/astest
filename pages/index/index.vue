<template>
	<view class="mbox-content-body">
		<view class="head-bg">
			<image src="https://img-cdn.macaotown.com/o_1f2l31ibfqkv5fh8v71bta1fppq.png"></image>
		</view>
		<view class="mbox-body">
			<view class="head-content">
				<view class="head-content-music"></view>
				<view class="head-content-title">
					<view class="head-content-text">開盲盒贏人頭馬</view>
				</view>
			</view>
			<view class="mbox-content">
				<view class="mbox">
					<image class="mbox-img" src="https://img-cdn.macaotown.com/o_1f2l31ibfi251g5ag8k1hh10o5s.png">
					</image>
					<image class="mbox-bg" src="https://img-cdn.macaotown.com/o_1f2l31ibe6lo1ajk13461brr19kel.png">
					</image>
				</view>
				<view class="oppen-box-content">
					<view class="oppen-button">
						<image id="oppen-button" @tap="oppenBox(boxMessage.id,1)"
							src="https://img-cdn.macaotown.com/o_1f2l31ibf1ghgqm61mpt1sivrcun.png"></image>
					</view>
					<view class="invite-friends" id="invite-friends" @tap="openTask">
						<image src="https://img-cdn.macaotown.com/o_1f37fobop1rn1hls20mbj01svpa.png" mode="aspectFit">
						</image>
					</view>
				</view>
				<view class="mbox-count">可開{{mystery_num}}次盲盒</view>
			</view>
			<view class="mbox-product-content">
				<view class="mbox-product">
					<view class="line"></view>
					<view class="text">盲盒獎品</view>
					<view class="line"></view>
				</view>
				<scroll-view scroll-x="true" class="produce-list" @touchmove.stop.prevent="moveStop">
					<view class="produce-item" v-for="(item,index) in prizeList" :key="index">
						<image :src="item.icon"></image>
						<view class="produce-description">
							{{item.name}}
						</view>
						<view class="icon-taps" v-if="item.israre">
							稀有
						</view>
					</view>
				</scroll-view>
				<!-- <swiper class="produce-list"easing-function="linear" autoplay interval="2000" duration="2000" display-multiple-items="3" circular @touchmove.stop.prevent="moveStop">
					<swiper-item v-for="(item,index) in prizeList" :key="index">
						<view class="produce-item">
							
						<image :src="item.icon"></image>
						<view class="produce-description">
							{{item.name}}
						</view>
						<view class="icon-taps" v-if="item.israre">
							稀有
						</view>
						</view>
					</swiper-item>
				</swiper> -->
			</view>
			<view class="more-produce" @tap="openMorePrize">更多獎品></view>
			<!-- <view class="com-friends">
				<view class="com-friends-head-content">
					<view class="title">助力記錄</view>
					<view class="invite-btn">邀請好友 </view>
				</view>
				<view class="cf-sub-title">已獲得<text>30</text>位好友助力</view>
				<scroll-view class="scoll-friends" scroll-y="true">
					<view class="friend-item" v-for="item in 9" :key="item">
						<view class="friend-nick">好友暱稱</view>
						<view class="invite-time">4:15AM</view>
					</view>
				</scroll-view>
			</view> -->
			<view class="rules-content">
				<view class="rules-content-title">
					遊戲規則
				</view>
				<scroll-view scroll-y="true" class="rules-content-text">
					<view v-if="boxMessage.content" v-html="boxMessage.content">
					</view>
					<view v-else style="opacity: 0.8;font-weight: bold;padding-top: 80upx;box-sizing: border-box;">
						1.做任務獲得次數
						<view>2.與好友同玩得次數</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="taifeng-icon">
			<image src="https://img-cdn.macaotown.com/o_1f2l31ibf15u6c7j1hjt174evpct.png"></image>
		</view>
		<view class="footer-view">
			技術支持 達酷互動雲 dakuu.com
		</view>
		<view class="side-menu">
			<view class="menu-item">
				<image @tap="openGameRules" src="https://img-cdn.macaotown.com/o_1f2l31ibfon09mh12p3v0217lp.png">
				</image>
				<view class="menu-item-text" @tap="openGameRules">遊戲規則</view>
			</view>
			<view class="menu-item" @tap="toMine" id="to-mine">
				<image src="https://img-cdn.macaotown.com/o_1f2l31ibfon09mh12p3v0217lp.png"></image>
				<view class="menu-item-text">我的獎品</view>
			</view>
		</view>
		<view class="open-prop-content" @touchmove.stop.prevent="moveStop" v-if="showOppenProp">
			<view class="open-prop-body" :class="havePrize? '' :'open-prop-no-body'">
				<view v-show="havePrize">
					<view class="open-prop-title">
						<image src="https://img-cdn.macaotown.com/o_1f2ngb9uj1ge1jse1ip0ehh1elcc.png"></image>
					</view>
					<view class="open-prop-produce">
						<image :src="openMessage.icon"></image>
						<view class="open-prop-produce-decriation">
							{{openMessage.name}}
						</view>
					</view>
					<view class="open-prop-btn">
						<image v-if="parseInteger(mystery_num)>0" @tap="oppenBox(boxMessage.id,1,true)"
							src="https://img-cdn.macaotown.com/o_1f2ngb9uj1na71ong193lo11pjld.png"></image>
						<image @tap="openTask" v-else src="https://img-cdn.macaotown.com/o_1f3af6v84qjge3i1g2qh12go5a.png"></image>
					</view>
					<view class="open-prop-mine" id="to-mine-two" @tap="toMine">
						查看我的獎品
					</view>
				</view>
				<view v-show="!havePrize">
					<view class="open-prop-no-title">很遺憾未中獎</view>
					<view class="open-prop-no-subtitle">再接再厲</view>
					<view class="open-prop-no-icon">
						<image src="https://img-cdn.macaotown.com/o_1f2nr1ocj6tq1fm11v2891l2h6e.png"></image>
					</view>
					<view class="open-prop-no-invite">
						<image v-if="parseInteger(mystery_num)>0" @tap="oppenBox(boxMessage.id,1,true)"
							src="https://img-cdn.macaotown.com/o_1f2ngb9uj1na71ong193lo11pjld.png"></image>
						<image @tap="openTask" v-else src="https://img-cdn.macaotown.com/o_1f3af6v84qjge3i1g2qh12go5a.png"></image>
					</view>
				</view>
				<view class="close-open-prop" id="close-open-prop" @tap="showOppenProp=false">
					<image src="https://img-cdn.macaotown.com/o_1f2nr1oci18hr1vkbc0pa717l5d.png" />
				</view>
			</view>
		</view>
		<view class="share-to-wx" @tap.stop="shareToWX=false" v-show="shareToWX" @touchmove.stop.prevent="moveStop">
			<view class="shareLineSuccess-before" v-show="!shareLineSuccess">
				<view class="share-style" @tap.stop="moveStop">
					<image :src="cavansBGIMG" class="cavansBaseImg" mode="aspectFit"></image>
					<view class="share-style-container">
						<view class="share-style-text">
							<view class="share-style-text-item">{{userInfo.nickname}}邀請請你開盲盒</view>
							<view class="share-style-text-item share-style-text-item1">就差你了!</view>
							<view class="share-style-text-item share-style-text-item2">掃碼開盲盒!</view>
							<view class="share-style-text-item share-style-text-item2">齊贏大獎!</view>
						</view>
						<view class="share-style-applet-content">
							<image class="share-style-applet" :src="appletImg"></image>
							<view class="share-style-applet-txt">微信掃一掃進入遊戲</view>
						</view>
					</view>
				</view>
				<view class="share-btns">
					<button id="share-btn-friends" class="share-btn share-btn-friends" @tap.stop="" open-type="share">
						<view class="iconfont icon-ai-weixin"></view>
						<view class="share-btn-text">
							微信好友
						</view>
					</button>
					<button class="share-btn share-btn-line" id="share-btn-line" @tap.stop="saveImgToWX(true)">
						<view class="iconfont icon-zhangshangcaifuyemianshoujiban344"></view>
						<view class="share-btn-text">
							分享朋友圈
						</view>
					</button>
				</view>
			</view>
			<view v-show="shareLineSuccess" class="share-line-success">
				<image @tap.stop="" class="line-handel-img"
					src="https://img-cdn.macaotown.com/o_1f32c805ovhr1cco1o9lmab6h2c.png"></image>
				<view class="success-message" @tap.stop="">
					<view class="success-message-txt">
						海報已保存到【本地相冊】
					</view>
					<view class="success-message-txt">
						快去<text class="iconfont icon-zhangshangcaifuyemianshoujiban344"></text>【朋友圈】分享海報吧
					</view>
					<view class="success-message-ikonw" id="success-message-ikonw-button" @tap.stop="shareToWX=false">
						我知道了
					</view>
				</view>
			</view>
		</view>
		<more-prize :showRuleAnimation="showMorePrize" :prizeList="prizeList"></more-prize>
		<game-rules :boxMessage="boxMessage" :showRuleAnimation="showGameRules"></game-rules>
		<task-list :showRuleAnimation="showTaskList" @handelChange="checkShareH5"></task-list>
		<canvas id="myCanvas" :style="{ width: canvasW + 'px', height: canvasH + 'px' }" canvas-id="myCanvas"></canvas>
	</view>
</template>

<script>
	import morePrize from '../components/activity-list.vue'
	import gameRules from '../components/game-rules.vue'
	import taskList from '../components/task-animation.vue'
	export default {
		components: {
			morePrize,
			gameRules,
			taskList
		},
		data() {
			return {
				userInfo: {},
				boxMessage: {},
				prizeList: [], //盲盒獎品列表
				mystery_num: 0, //我的開合次數
				showOppenProp: false, //打开盲盒后提示弹窗
				openMessage: {},
				referrer: '', //推薦信息
				systemInfo: uni.getSystemInfoSync(),
				shareImgUrl: 'https://img-cdn.macaotown.com/o_1f2l3pd8g15vpju7f4pf2rv8c.png',
				shareTitle: '就差你了！掃碼開盲盒！齊贏大獎',
				shareDesc: '邀妳一起開盲盒',
				cavansBGIMG: 'https://img-cdn.macaotown.com/o_1f2qq3e1v16e5sbdfpb1cfh3kma.png', //分享海報背景圖
				appletImg: 'https://img-cdn.macaotown.com/o_1f2qsakng1ogg1vph1i1ntrrntra.jpg',
				shareLineSuccess: false, //海報保存成功，顯示引導頁
				havePrize: false, //是否中奖
				shareToWX: false, //分享到微信
				cavansBaseImg: '', //cavans绘制的海报base64格式图片
				canvasW: 0,
				canvasH: 0,
				showMorePrize: false, //查看更多獎品
				showGameRules: false, //遊戲規則
				showTaskList: false, //任务列表
				noAuthorization: false, //用戶是否已授權
			}
		},
		onLoad(e) {
			this.referrer = e
			// 绘制画布分享到朋友圈
			uni.getSystemInfo({
				success: (res) => {
					// this.canvasW = res.screenWidth
					// this.canvasH = res.screenHeight
					this.pixelRatio = res.pixelRatio
				}
			})
			// #ifdef H5
			// H5環境下的分享到微信好友
			this.mesaga = 'H5環境下執行'
			let curRoute = location.href.split('#')[0]
			this.curRoute = curRoute
			uni.request({
				url: this.$api + 'wx/get_jssdkconfig?url=' + encodeURIComponent(curRoute),
				method: 'GET',
				success: res => {
					if (res.data.status == 1) {
						this.init(res.data.data)
					}
				}
			})
			// #endif
			this.checkLogin()
		},
		onShow() {
			if (this.noAuthorization) {
				this.getUserInfo()
			}
		},
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			}
			return {
				title: this.shareTitle,
				path: '/pages/index/index?shareid=' + this.userInfo.id + '&mbid=' + this.boxMessage.id,
				imageUrl: this.shareImgUrl
			}
		},
		methods: {
			// 檢查登錄狀態
			checkLogin() {
				uni.login({
					success: res => {
						if (res.code) {
							//发起网络请求
							uni.request({
								url: 'https://api-dev.macaotown.com/mysteryboxnum/dakuu_miniapp_login',
								method: 'GET',
								data: {
									code: res.code
								},
								success: res => {
									if (res.data
										.status == 0) {
										uni.showToast({
											title: '登錄失敗',
											icon: 'none'
										})
									} else {
										uni.setStorageSync('token', res.data.data.auth_token)
										this.getMBox()
										this.getUserInfo()
									}
								}
							})
						} else {
							console.log('登录失败！' + res.errMsg)
						}
					}
				})
			},
			// 初始化微信jssdk，H5環境下才會調用
			init(e) {
				this.$wx.config({
					debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId: e.appid, // 必填，公众号的唯一标识
					timestamp: e.timestamp, // 必填，生成签名的时间戳
					nonceStr: e.noncestr, // 必填，生成签名的随机串
					signature: e.sign, // 必填，签名
					jsApiList: ["updateAppMessageShareData", "onMenuShareAppMessage",
						"onMenuShareTimeline"
					] // 必填，需要使用的JS接口列表
				});
				this.$wx.ready(() => {
					let curRoute = location.href.split('#')[0]
					let linkUrl = curRoute.concat('#/pages/index/index?shareid=' + this.userInfo.id + '&mbid=' +
						this.boxMessage.id)
					// H5環境下分享到朋友圈
					//分享到朋友圈
					this.$wx.onMenuShareTimeline({
						title: this.shareTitle, // 分享标题
						desc: this.shareDesc, // 分享描述 
						link: linkUrl, // 当前页面链接  
						imgUrl: this.shareImgUrl, // 分享图标                       
						success: () => {
							// 分享成功的回調
						}
					})
					// H5環境下分享給好友時的內容
					if (this.systemInfo.platform == 'ios') {
						//分享给朋友
						this.$wx.onMenuShareAppMessage({
							title: this.shareTitle, // 分享标题
							desc: this.shareDesc, // 分享描述 
							link: linkUrl, // 当前页面链接  
							imgUrl: this.shareImgUrl, // 分享图标                                
							success: () => {
								// 分享成功的回調
							}
						});
					} else {
						this.$wx.updateAppMessageShareData({
							title: this.shareTitle, // 分享标题
							desc: 'this.shareDesc', // 分享描述
							link: linkUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
							imgUrl: this.shareImgUrl,
							success: () => {
								// 分享成功的回調
							}
						})
						this.$wx.onShareTimeline()
					}
				})
				this.$wx.error(function(res) {
					console.log("验证失败")
				});
			},
			// 阻止滑動穿透
			moveStop() {},
			// 小數點取整
			parseInteger(num) {
				return parseInt(num)
			},
			// 獲取用戶token
			getToken() {
				uni.request({
					url: this.$api + 'index/jwt',
					method: 'GET',
					data: {
						leaguerid: '82021373'
					},
					success: (res) => {
						if (res.data.status == 1) {
							this.title = res.data.data.auth_token
							uni.setStorageSync('token', res.data.data.auth_token)
							this.getUserInfo()
							this.getMBox()
						}
					}
				})
			},
			// 获取用户信息
			getUserInfo() {
				uni.request({
					url: this.$api + 'leaguer/userinfo',
					method: 'GET',
					header: {
						'Authorization': 'Bearer ' + uni.getStorageSync('token')
					},
					success: (res) => {
						if (res.data.status == 1) {
							// 未授權，限制請求數據
							if (!res.data.data.nickname) {
								this.noAuthorization = false
								return false
							}
							this.noAuthorization = true
							this.userInfo = res.data.data
							uni.setStorageSync('userInfo', res.data.data)
							// 初始化海報畫布內容
							this.writeCanvas()
							if (this.referrer.shareid && this.referrer.mbid) {
								if (this.referrer.shareid == this.userInfo.id) {
									// 用戶本人進入
								} else {
									// 好友助力
									this.assistance()
								}
							} else {
								// 用戶個人進入或助力失敗
							}
						}
					}
				})
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
						mbid: 8
					},
					success: (res) => {
						if (res.data.status == 1) {
							this.boxMessage = res.data.data
							this.getPrizeList()
							this.getMysteryNum()
							uni.setStorageSync('boxMessage', res.data.data)
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
						mbid: 8
					},
					success: res => {
						if (res.data.status == 1) {
							this.prizeList = res.data.data
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
						mbid: 8
					},
					success: res => {
						if (res.data.status == 1) {
							this.mystery_num = res.data.data.num
						}
					}
				})
			},
			// 打开盲盒
			oppenBox(mbid, num, again) {
				// 用戶是否授權
				if (!this.noAuthorization) {
					this.wxLoginAuthorization()
					return false
				}
				if (this.mystery_num <= 0) {
					this.showTaskList = !this.showTaskList
					return false
				}
				if (again == true) {
					this.showOppenProp = false
					this.openMessage = {}
				}
				let BUY_ONE_URL = 'mysteryboxnum/mystery_buyone'
				uni.request({
					url: this.$api + BUY_ONE_URL, //仅为示例，并非真实接口地址。
					method: 'GET',
					header: {
						'Authorization': 'Bearer ' + uni.getStorageSync('token')
					},
					data: {
						mbid: mbid
					},
					success: (res) => {
						if (res.data.status == 1) {
							this.openMessage = res.data.data
							this.showOppenProp = true
							this.havePrize = this.openMessage.prizeid==0?false:true
							this.getUserInfo()
							this.getMBox()
						} else {
							uni.showToast({
								title: res.data.info,
								icon: 'none'
							})
						}
					}
				})
			},
			// 打開遊戲規則
			openGameRules() {
				// 點擊遊戲規則滑動到規則部分
				uni.createSelectorQuery().select(".rules-content").boundingClientRect(res => { //最外层盒子的节点：类class或者id
					uni.pageScrollTo({
						duration: 300, //过渡时间
						scrollTop: res.top, //到达距离顶部的top值
						//scrollTop:data.top - res.top,//如果置顶
					})
				}).exec()
				// 用戶是否授權
				// if (!this.noAuthorization) {
				// 	this.wxLoginAuthorization()
				// 	return false
				// }
				// this.showGameRules = !this.showGameRules
			},
			// 打開更多獎品
			openMorePrize() {
				// 用戶是否授權
				if (!this.noAuthorization) {
					this.wxLoginAuthorization()
					return false
				}
				this.showMorePrize = !this.showMorePrize
			},
			// 點擊任務列表
			openTask() {
				// 用戶是否授權
				if (!this.noAuthorization) {
					this.wxLoginAuthorization()
					return false
				}
				this.showOppenProp=false
				this.showTaskList = !this.showTaskList
			},
			// 跳轉我的商品
			toMine() {
				// 用戶是否授權
				if (!this.noAuthorization) {
					this.wxLoginAuthorization()
					return false
				}
				this.showOppenProp=false
				uni.navigateTo({
					url: './mine'
				})
			},
			// 頁面內邀請好友按鈕（檢查是否為h5頁面）
			checkShareH5(e) {
				this.getMBox()
				if (e != 1) {
					return
				}
				// #ifdef H5
				uni.showToast({
					title: '請點擊右上角分享給好友',
					icon: 'none'
				})
				// #endif
				// #ifdef MP
				this.shareToWX = true
				// #endif
			},
			// cavans畫布描繪海報
			async writeCanvas() {
				const ctx = uni.createCanvasContext('myCanvas', this)
				let bgImgPath = await this.getImageInfo(this.cavansBGIMG)
				this.cavansBaseImg = bgImgPath.path
				this.canvasW = bgImgPath.width
				this.canvasH = bgImgPath.height
				let canvasW = bgImgPath.width
				let canvasH = bgImgPath.height

				// let ewmUrl = 'https://api-dev.macaotown.com/wx/get_miniapp_qrcode?url=pages/index/index&extra=' + this.userInfo.id
				let ewmUrl = this.$api + 'mysteryboxnum/get_miniapp_qrcode?url=pages/index/index&extra=' + this.userInfo.id
				let ewm = await this.downLoadFile(ewmUrl)
				// let ewm = await this.getImageInfo(this.appletImg)
				let textImg = await this.getImageInfo(
					'https://img-cdn.macaotown.com/o_1f37oc0upjoc1hoq1jl04fjsqja.png')
				let nickName = this.userInfo.nickname + '邀請你開盲盒' // 昵称
				let font1 = "就差你了!"
				let font2 = "掃碼開盲盒!"
				let font3 = "齊贏大獎!"
				let font4 = "微信掃一掃加入遊戲!"
				// cavans繪製必須要設置定時器，不設置就不會描繪，搞不懂為什麼
				setTimeout(() => {
					// 画大背景 单位是 px 不是 rpx
					ctx.drawImage(bgImgPath.path, 0, 0, canvasW, canvasH)
					ctx.save()
					//开始路径画圆,剪切处理
					ctx.beginPath()
					ctx.arc(this.canvasW - 121, this.canvasH - 181, 80, 0, 2 * Math.PI, false)
					ctx.clip()
					ctx.drawImage(ewm.tempFilePath, this.canvasW - 200, this.canvasH - 261, 160, 160)
					// 還原狀態
					ctx.restore()
					// 保存上下文
					ctx.save()
					// 選選字體文字
					ctx.drawImage(textImg.path, 40, this.canvasH - 228, 315, 183)
					ctx.save()


					// 恢复画布
					ctx.restore()

					// 写昵称 文本居中的起点是指居中的那个点
					ctx.setTextAlign('left')

					ctx.setFillStyle('#FFFFFF')

					// 用戶暱稱文字
					ctx.font = '36px serif'
					ctx.fillText(nickName, 40, this.canvasH - 246)
					// // 標題一文字大小
					// ctx.font = 'bold 72px serif'
					// ctx.fillText(font1, 40, this.canvasH - 168)
					// // 標題二文字大小
					// ctx.font = 'bold 48px serif'
					// ctx.fillText(font2, 40, this.canvasH - 108)
					// ctx.fillText(font3, 40, this.canvasH - 52)
					ctx.font = '28px serif'
					ctx.fillText(font4, this.canvasW - 304, this.canvasH - 50)
					ctx.draw(true, (res) => {
						this.saveImgToWX();
					})
				}, 1000)
			},
			// 获取图片信息
			getImageInfo(image) {
				return new Promise((req, rej) => {
					uni.getImageInfo({
						src: image,
						success: function(res) {
							req(res)
						},
					});
				})
			},
			downLoadFile(url) {
				return new Promise((req, rej) => {
					uni.downloadFile({
						url: url,
						success: function(res) {
							req(res)
						},
					});
				})
			},
			saveImgToWX(isSave) {
				if (isSave) {
					uni.showLoading({
						title: '正在生成海報，請稍等'
					})
				}
				// 保海報到相冊
				let that = this
				uni.canvasToTempFilePath({
					x: 0, // 起点横坐标
					y: 0, // 起点纵坐标
					width: that.canvasW, // canvas 当前的宽
					height: that.canvasH, // canvas 当前的高
					destWidth: that.canvasW * that.pixelRatio, // canvas 当前的宽 * 设备像素比
					destHeight: that.canvasH * that.pixelRatio, // canvas 当前的高 * 设备像素比
					canvasId: 'myCanvas',
					success: (res) => {
						if (isSave) {
							// #ifdef H5
							// H5環境直接把base64放在image，需要用戶長按保存
							uni.showToast({
								title: '長按圖片保存海報',
								icon: 'none'
							})
							// #endif
							// #ifdef MP
							//调取小程序中的保存圖片，把海報保存在手機相冊
							uni.saveImageToPhotosAlbum({
								filePath: res.tempFilePath,
								success: (res) => {
									// uni.showToast({
									// 	title: '可以去朋友圈分享給好友啦',
									// 	icon: 'none'
									// })
									this.shareLineSuccess = true
								},
								fail: function(res) {
									if (res.errMsg != 'saveImageToPhotosAlbum:fail auth deny')
										return false
									uni.showToast({
										title: '請在右上角設置相冊權限',
										icon: 'none'
									})
								}
							})
							// #endif
							uni.hideLoading()
						}
					},
					fail: function(res) {
						console.log(res)
					}
				}, this)
			},
			// 登錄授權
			wxLoginAuthorization() {
				uni.getUserProfile({
					desc: 'Wexin', // 这个参数是必须的  
					success: res => {
						uni.setStorageSync('wxUInfo', res)
						// uni.request({
						// 	url: this.$api + 'mysteryboxnum/upt_user_data',
						// 	method: 'POST',
						// 	header: {
						// 		'Authorization': 'Bearer ' + uni.getStorageSync('token')
						// 	},
						// 	data:{
						// 		encryptedData:res.encryptedData,
						// 		iv:res.iv,
						// 		userInfo:res.userInfo,
						// 		rawData:res.rawData,
						// 		signature:res.signature
						// 	},
						// 	success: res => {
						// 		console.log(res);
						// 	},
						// 	fail:error =>{
						// 		console.log(error);
						// 	}
						// })
						uni.request({
							url: this.$api + 'leaguer/miniapp_sync_userinfo',
							method: 'GET',
							header: {
								'Authorization': 'Bearer ' + uni.getStorageSync('token')
							},
							data: {
								nickname: res.userInfo.nickName,
								sex: res.userInfo.gender,
								city: res.userInfo.city,
								province: res.userInfo.province,
								country: res.userInfo.country,
								headimgurl: res.userInfo.avatarUrl
							},
							success: resp => {
								if (resp.data.status == 1) {
									// 已授權，放開限制請求數據
									this.noAuthorization = true
									this.getMBox()
									this.getUserInfo()
								} else {
									uni.showToast({
										title: '登錄失敗',
										icon: 'none'
									})
								}
							},
							fail() {

							}
						})
					},
					fail: err => {
						console.log('用戶拒絕授權')
					}
				})
			},
			// 好友助力
			assistance(){
				uni.request({
					url: this.$api + 'mysteryboxnum/assist',
					method:'GET',
					header:{
							'Authorization': 'Bearer ' + uni.getStorageSync('token')
					},
					data:{
						shareid:this.referrer.shareid,
						mbid:this.referrer.mbid
					},
					success:res =>{
						// console.log(res);
					}
				})
			}
		},
		watch: {
			shareToWX() {
				// 監聽分享彈框隱藏恢復所有狀態
				if (!this.shareToWX) {
					this.shareLineSuccess = false
					console.log(false)
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #d82521;
		background-image: url('https://img-cdn.macaotown.com/o_1f2l31ibf17s0oav76d1g481g0qm.png');
		background-repeat: no-repeat;
		background-size: 100%;
		padding: 0;
	}

	.mbox-content-body {
		position: relative;
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
		z-index: 9;

		image {
			width: 100%;
			height: 100%;
		}

		.head-bg {
			width: 100%;
			height: 1026upx;
			background-image: url('https://img-cdn.macaotown.com/o_1f2l31ibf39l1tpv1uqav8610scr.png');
			background-repeat: no-repeat;
			background-size: 100%;
			position: absolute;
			z-index: 0;
			left: 0;
			top: 0;

			image {
				width: 105%;
				height: 75%;
			}
		}

		.mbox-body {
			width: 100%;
			box-sizing: border-box;
			position: relative;
			z-index: 9;

			.head-content {
				display: flex;
				justify-content: flex-start;
				box-sizing: border-box;
				padding: 25upx;
				padding-bottom: 0;

				.head-content-music {
					width: 58upx;
					height: 58upx;
					border-radius: 50%;
					background-image: url('https://img-cdn.macaotown.com/o_1f2l31ibfk3ilah10ee49p1nrpu.png');
					background-repeat: no-repeat;
					background-size: 100%;
				}

				.head-content-title {
					width: 571upx;
					height: 301upx;
					background-image: url('https://img-cdn.macaotown.com/o_1f2l31ibe1ctaeji1f7j1vhk15p3k.png');
					background-repeat: no-repeat;
					background-size: 100%;
					margin-left: 15upx;
					display: flex;
					justify-content: center;
					align-items: flex-end;

					.head-content-text {
						font-size: 48upx;
						font-family: PingFang SC;
						font-weight: 400;
						color: #FFFFFF;
						line-height: 140upx;
					}
				}
			}

			.mbox-content {
				width: 100%;
				padding-bottom: 20upx;
				margin-top: 42upx;

				.mbox {
					position: relative;
					width: 100%;
					height: 522upx;
					text-align: center;

					.mbox-img {
						width: 354upx;
						height: 443upx;
					}

					.mbox-bg {
						width: 100%;
						height: 156upx;
						position: absolute;
						bottom: 0;
						left: 0;
						z-index: -1;
					}
				}


				.oppen-box-content {
					display: flex;
					width: 100%;
					padding: 0 46upx;
					box-sizing: border-box;
					justify-content: flex-end;

					.oppen-button {
						width: 334upx;
						height: 125upx;
						border-radius: 50%;
						margin-right: 34upx;
					}

					.invite-friends {
						width: 126upx;
						height: 115upx;
						position: relative;
					}
				}

				.mbox-count {
					width: 100%;
					text-align: center;
					font-size: 36upx;
					font-family: PingFang SC;
					font-weight: 400;
					color: #FEF8E9;
					line-height: 47upx;
					margin-top: 7upx;
				}

				.mbox-bottom-text {
					width: 459upx;
					height: 45upx;
					margin: auto;
					text-align: center;
					background: rgba(95, 95, 95, 0.53);
					opacity: 0.85;
					border-radius: 22upx;
					font-size: 30upx;
					line-height: 45upx;
					color: #FFFFFF;
					margin-top: 12upx;
				}
			}

			.mbox-product-content {
				width: 100%;
				// height: 382upx;
				background: linear-gradient(#ffad22, #FFA036, #ff9b2a, #ff8234);
				border-radius: 30upx 0px 0px 0px;

				.mbox-product {
					width: 100%;
					height: 47upx;
					display: flex;
					justify-content: center;
					align-items: center;
					padding-top: 14upx;

					.line {
						width: 147upx;
						height: 4upx;
						background-color: #7C2720;
						margin: 0 7upx;
					}

					.text {
						font-size: 36upx;
						font-weight: 600;
						color: #7C2720;
					}
				}

				.produce-list {
					width: 100%;
					padding: 24upx 0;
					white-space: nowrap;

					.produce-item {
						display: inline-block;
						margin-left: 20upx;
						width: 211upx;
						box-sizing: border-box;
						background-color: #E16C21;
						border-radius: 10upx;
						padding-bottom: 8upx;
						position: relative;

						image {
							height: 202upx;
							background: #FFFFFF;
							border-radius: 10upx;
						}

						.produce-description {
							width: 100%;
							font-size: 30upx;
							font-weight: 400;
							line-height: 36upx;
							color: #FFFFFF;
							border-radius: 10upx;
							padding: 0 11upx;
							box-sizing: border-box;
							white-space: pre-wrap;
							word-break: break-word;
							text-align: center;
							padding-bottom: 10upx;
						}

						.icon-taps {
							width: 80upx;
							height: 40upx;
							background: #D13611;
							border-bottom-right-radius: 30upx;
							color: #FFFFFF;
							font-size: 23upx;
							font-weight: 400;
							line-height: 40upx;
							text-align: center;
							position: absolute;
							top: 0;
							left: 0;
						}
					}
				}
			}

			.more-produce {
				width: 100%;
				text-align: right;
				font-size: 30upx;
				font-weight: 400;
				line-height: 36upx;
				color: #f7f7f7;
				margin-top: 26upx;
				padding-right: 29upx;
				box-sizing: border-box;
			}

			.com-friends {
				width: calc(100% - 60upx);
				margin: auto;
				margin-top: 30upx;
				box-sizing: border-box;
				border-radius: 30upx;
				overflow: hidden;

				.com-friends-head-content {
					display: flex;
					height: 77upx;
					background-color: rgba(246, 198, 174, 0.9);
					align-items: center;
					justify-content: space-between;

					.title {
						color: #893520;
					}

					.invite-btn {
						width: 226upx;
						height: 56upx;
						background: #C83A34;
						border-radius: 28upx;
						line-height: 56upx;
						text-align: center;
					}
				}

				.cf-sub-title {
					font-size: 26upx;
					background-color: rgba(249, 204, 152, 0.7);
					color: #7C2720;
					font-size: 30upx;
					line-height: 48upx;
					padding: 0 22upx;
					padding-top: 14upx;
					box-sizing: border-box;

					text {
						color: #aa0000;
					}
				}

				.scoll-friends {
					width: 100%;
					height: 240upx;
					padding-top: 29upx;
					background-color: rgba(249, 204, 152, 0.7);
				}

				.friend-item {
					display: flex;
					padding: 0 22upx;
					padding-bottom: 29upx;

					.friend-nick,
					.invite-time {
						font-size: 30upx;
						color: #FFFFFF;
						opacity: 0.8;
					}

					.invite-time {
						margin-left: auto;
					}
				}
			}
		}

		.taifeng-icon {
			width: 293upx;
			height: 56upx;
			margin: 26upx auto;
		}

		.footer-view {
			width: 750upx;
			height: 41upx;
			background: #464646;
			opacity: 0.7;
			line-height: 41upx;
			text-align: center;
			color: #C8C7CC;
			font-size: 24upx;
		}

		.side-menu {
			position: absolute;
			width: 128upx;
			height: 308upx;
			background: #D33D39;
			background-color: rgba(211, 61, 57, 0.6);
			border-radius: 71upx 0upx 0upx 71upx;
			right: 0;
			top: 298upx;
			z-index: 9;
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;

			.menu-item {
				margin: auto;
				width: 92upx;
				height: 92upx;
				line-height: 60upx;
				border-radius: 50%;
				text-align: center;
				background-color: #F0AD4E;
				font-size: 24upx;
				margin-top: 20upx;
				position: relative;

				.menu-item-text {
					width: 58upx;
					white-space: pre-wrap;
					position: absolute;
					z-index: 9;
					line-height: 30upx;
					top: 60upx;
					left: 45upx;
					margin-left: -29upx;
				}
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
				height: 984upx;
				position: absolute;
				top: 50%;
				left: 50%;
				margin-left: -347upx;
				margin-top: -492upx;
				background-image: url('https://img-cdn.macaotown.com/o_1f2ngb9ujn770d1616c5i1dm8e.png');
				background-repeat: no-repeat;
				background-size: 100%;
				text-align: center;

				.open-prop-title {
					width: 440upx;
					height: 128upx;
					margin: auto;
					margin-top: 189upx;
				}

				.open-prop-produce {
					width: 278upx;
					height: 354upx;
					margin: auto;
					overflow: hidden;
					text-align: center;
					background-color: #DA4518;
					border-radius: 10upx;
					margin-top: 14upx;

					image {
						width: 230upx;
						height: 220upx;
						margin-top: 18upx;
						border-radius: 10upx;
					}

					.open-prop-produce-decriation {
						width: 230upx;
						text-align: center;
						font-size: 34upx;
						color: #FFFFFF;
						line-height: 44upx;
						margin: auto;
					}
				}

				.open-prop-btn {
					width: 332upx;
					height: 106upx;
					margin: auto;
					margin-top: 31upx;
				}

				.open-prop-mine {
					width: 100%;
					text-align: center;
					font-size: 34upx;
					line-height: 40upx;
					margin-top: 21upx;
					text-decoration: underline;
				}

				.close-open-prop {
					width: 58upx;
					height: 58upx;
					border-radius: 50%;
					background-color: #000000;
					opacity: 0.9;
					position: absolute;
					bottom: -29upx;
					left: 50%;
					margin-left: -29upx;
					color: #333333;
					font-size: 52upx;
				}
			}

			.open-prop-no-body {
				background-image: url('https://img-cdn.macaotown.com/o_1f2qcrhj1lc012ii3q9t3b45ee.png');

				.open-prop-no-title {
					margin-top: 158upx;
					font-size: 48upx;
					font-family: PingFang SC;
					font-weight: 600;
					color: #F6F6F6;
					line-height: 48upx;
				}

				.open-prop-no-subtitle {
					font-size: 48upx;
					font-family: PingFang SC;
					font-weight: 400;
					color: #F6F6F6;
					line-height: 48upx;
					margin-top: 10upx;
				}

				.open-prop-no-icon {
					width: 236upx;
					height: 236upx;
					margin: auto;
					margin-top: 74upx;
					opacity: 0.6;
				}

				.open-prop-no-invite {
					width: 332upx;
					height: 104upx;
					margin: auto;
					margin-top: 86upx;
				}
			}
		}

		.share-to-wx {
			width: 100%;
			height: 100vh;
			overflow: hidden;
			box-sizing: border-box;
			background-color: rgba(0, 0, 0, 0.5);
			position: fixed;
			top: 0;
			left: 0;
			z-index: 10;
			text-align: center;
			.shareLineSuccess-before{
				position: relative;
				top: 50%;
				height: 1080upx;
				margin-top: -540upx;
			}
			.share-style {
				position: relative;
				width: 528upx;
				height: 934upx;
				margin: auto;

				.cavansBaseImg {
					position: absolute;
					top: 0;
					left: 0;
					z-index: 1;
					object-fit: cover;
				}

				.share-style-container {
					width: 100%;
					height: 100%;
					padding: 0 30upx;
					padding-bottom: 40upx;
					box-sizing: border-box;
					position: relative;
					z-index: 1;
					display: flex;
					justify-content: space-between;
					align-items: flex-end;

					.share-style-text {
						overflow: hidden;

						.share-style-text-item {
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							font-size: 26upx;
							font-family: PingFang SC;
							font-weight: 400;
							color: #FFFFFF;
							line-height: 1;
							text-align: left;
						}

						.share-style-text-item1 {
							font-size: 36upx;
							font-weight: bold;
							padding-top: 16upx;
						}

						.share-style-text-item2 {
							font-size: 26upx;
							font-weight: bold;
							padding-top: 10upx;
						}
					}

					.share-style-applet-content {
						text-align: right;

						.share-style-applet {
							width: 100upx;
							height: 100upx;
							border-radius: 50%;
						}

						.share-style-applet-txt {
							font-size: 24upx;
						}
					}
				}
			}

			.share-btns {
				display: flex;
				justify-content: space-around;
				margin-top: 50upx;

				.share-btn {
					width: 310upx;
					height: 96upx;
					border-radius: 48upx;
					align-items: center;
					overflow: hidden;
					display: flex;
					justify-content: space-around;

					.iconfont {
						color: #FFFFFF;
						font-size: 52upx;
					}

					.share-btn-text {
						font-size: 36upx;
						font-family: PingFang SC;
						font-weight: 400;
						color: #FFFFFF;
						line-height: 96upx;
						white-space: nowrap;
					}
				}

				.share-btn-friends {
					background-color: #00C947;
				}

				.share-btn-line {
					background-color: #FF8813;
				}
			}

			.share-line-success {
				width: 100%;
				padding: 0 10upx;
				box-sizing: border-box;
				text-align: center;
				position: relative;
				height: 1058upx;
				top: 50%;
				margin-top: -529upx;

				.line-handel-img {
					width: 432upx;
					height: 738upx;
				}

				.success-message {
					width: 100%;
					height: 500upx;
					background-image: url('https://img-cdn.macaotown.com/o_1f32c805oudi1omq1tgd7ku1a6nb.png');
					background-repeat: no-repeat;
					background-size: 100%;
					margin-top: -180upx;
					padding-top: 250upx;
					box-sizing: border-box;

					.success-message-txt {
						font-size: 34upx;
						font-family: PingFang SC;
						font-weight: 400;
						color: #FFFFFF;
						margin-bottom: 26upx;

						text {
							padding-left: 20upx;
							font-size: 42upx;
						}
					}

					.success-message-ikonw {
						width: 250upx;
						height: 78upx;
						line-height: 78upx;
						margin: auto;
						background-color: #F85344;
						border-radius: 39upx;
					}
				}
			}

		}

		.rules-content {
			width: 690upx;
			height: 894upx;
			background: #F9CC98;
			background-color: rgba(249, 204, 152, 0.7);
			border-radius: 30upx;
			margin: auto;
			box-sizing: border-box;
			overflow: hidden;
			margin-top: 46upx;

			.rules-content-title {
				width: 100%;
				height: 108upx;
				line-height: 108upx;
				text-align: center;
				font-size: 48upx;
				font-family: PingFang SC;
				font-weight: 600;
				color: #FEFEFE;
				background-color: rgba(249, 204, 152, 0.7);
			}

			.rules-content-text {
				width: 100%;
				height: 780upx;
				font-size: 37upx;
				font-weight: 400;
				color: #FFFFFF;
				line-height: 48upx;
				padding: 25upx 30upx;
				box-sizing: border-box;
			}
		}

		#myCanvas {
			position: absolute !important;
			bottom: -200%;
			left: 0;
			z-index: 1;
			opacity: 0;
		}
	}
</style>
