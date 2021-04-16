<template>
	<view class="shop-list">
		<view class="shop-item" v-for="(item,index) in storeList" :key="index">
			<view class="shop-item-title">
				{{item.title}}
			</view>
			<view class="shop-item-address">
				{{item.address}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				storeList:[],//門店列表
			}
		},
		onLoad() {
			this.getStoreList()
		},
		methods: {
			getStoreList(){
				uni.request({
					url: this.$api+'mysteryboxnum/tf_store_list',
					method: 'GET',
					header:{
						'Authorization': 'Bearer '+uni.getStorageSync('token')
					},
					success:res=>{
						if(res.data.status==1) {
							this.storeList = res.data.data
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F6F6F6;
	}

	.shop-list {
		padding: 40upx;
		box-sizing: border-box;

		.shop-item {
			background-color: #FFFFFF;
			width: 100%;
			padding: 30upx 40upx;
			box-sizing: border-box;
			margin-bottom: 30upx;
			box-shadow: 0upx 5upx 11upx 0upx rgba(0, 0, 0, 0.08);

			.shop-item-title {
				font-size: 32upx;
				font-weight: 600;
				background-color: #333333;
				line-height: 46upx;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}

			.shop-item-address {
				margin: 16upx 0;
				font-size: 24upx;
				font-weight: 400;
				background-color: #999999;
				line-height: 30upx;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}

		
	}
</style>
