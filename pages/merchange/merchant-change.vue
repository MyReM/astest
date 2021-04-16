<template>
	<view class="merchant-change-content">
		<scroll-view scroll-y="true" class="select-code">
			<view class="select-code-item" @tap="activeIndex=index" id="active-index"
				:class="index == activeIndex ? 'select-code-item-active':''" v-for="(item,index) in chartCodes"
				:key="index">
				<view class="active-select" v-show="index == activeIndex"></view>
				<view class="select-code-item-code" id="select-code">
					{{item}}
				</view>
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="merchant-list">
			<view class="merchant-item" @tap="selectMerchant(item)" v-for="(item,index) in merchantList" :key="index">
				<view class="merchant-image">
					<image :src="item.imgUrl" mode="aspectFill"></image>
				</view>
				<view class="merchant-name">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chartCodes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
					'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
				],
				activeIndex: 0,
				merchantList: [{
					id:9129,
					name: 'Vincent Ramsey',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:9799,
					name: '澳門特區旅遊局',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:969,
					name: 'Loretta Graves',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:939,
					name: '蒲哲澜',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:299,
					name: '英記家 Nancy McCarthy',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:199,
					name: '永以萍',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:991,
					name: 'dakuu達酷互動',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:919,
					name: 'Matthew Bell',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:996,
					name: 'Victoria Jensen',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:999,
					name: '戴雪桂',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:999,
					name: '傻傻',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:999,
					name: '阿森gas',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:999,
					name: '阿斯鋼和',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:999,
					name: '赫爾',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:999,
					name: '今日違情義',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:999,
					name: '湯科蓉',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:999,
					name: '卡迪夫',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:999,
					name: '阿薩和',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:999,
					name: '榮耀喏',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:999,
					name: '安徽人家',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}, {
					id:999,
					name: '阿哈迪斯',
					imgUrl: 'https://img-cdn.macaotown.com/o_1f2oagqba38agdsce7hrt3jbg.png'
				}]
			}
		},
		methods: {
			// 選中商家
			selectMerchant(item) {
				uni.navigateTo({
					url: '../index/mine?merchant_id=' + item.id+'&merchant_name='+item.name
				})
			}
		}
	}
</script>

<style lang="scss">
	.merchant-change-content {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		display: flex;

		.select-code {
			width: 130upx;
			height: 100vh;
			background-color: #F6F6F6;
			box-sizing: border-box;

			.select-code-item:last-child {
				margin-bottom: 50upx;
			}

			.select-code-item {
				margin-top: 12upx;
				display: flex;
				width: 100%;
				height: 100upx;
				padding: 10upx 0;

				.active-select {
					width: 12upx;
					height: 100%;
					background: #FFC100;
					border-radius: 6px;
				}

				.select-code-item-code {
					width: calc(100% - 12upx);
					height: 80upx;
					line-height: 80upx;
					text-align: center;
					font-size: 30upx;
					font-family: PingFangSC-Semibold, PingFang SC;
					font-weight: 600;
					color: #8c8c8c;
				}
			}

			.select-code-item-active {
				background-color: #FFFFFF;

				.select-code-item-code {

					color: #FCCB00;
				}
			}
		}

		.merchant-list {
			width: calc(100% - 130upx);
			height: 100vh;
			background-color: #FFFFFF;
			padding-top: 50upx;
			box-sizing: border-box;

			.merchant-item {
				width: 100%;
				height: 70upx;
				margin-bottom: 58upx;
				padding: 0 26upx;
				box-sizing: border-box;
				overflow: hidden;
				display: flex;
				justify-content: flex-start;

				.merchant-image {
					width: 70upx;
					height: 100%;
					border-radius: 50%;
				}

				.merchant-name {
					width: calc(100% - 70upx);
					height: 100%;
					line-height: 70upx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					padding-left: 36upx;
					box-sizing: border-box;
					font-size: 30upx;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: #3A3A3A;
				}
			}
		}
	}
</style>
