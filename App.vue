<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("~@/static/iconfont/iconfont.css");
	/*每个页面公共css */
	page {
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100%;
		font-size: 36upx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FEF8E9;
		line-height: 47upx;
	}

	image {
		width: 100%;
		height: 100%;
	}

	::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
</style>
