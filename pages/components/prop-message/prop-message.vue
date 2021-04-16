<!-- /**
 * <prop-message :showProp.sync="toastShow" :message="toastMessage"></prop-message>
 * showProp.sync => 同步綁定是否展示，只需要傳設置為true即可，不需要手動重置為false
 * message => 需要展示的消息提示
 * color => 字體顏色
 */ -->
<template>
		<view class="prop-content" @tap.stop="" v-if="showProp">
			<view class="prop-container" :animation="animationData">
				<view class="prop-container-message" :style="{color:color}">{{message}}</view>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				animation: {},
				animationData: {},
				showAnimation_view:false
			}
		},
		props:{
			showProp:{
				type:[Boolean,String],
				default:false
			},
			message:{
				type:[String],
				default:'這是一段彈窗信息'
			},
			color:{
				type:[String],
				default:'#FFFFFF'
			}
		},
		onLoad() {
			this.initAnimation()
		},
		methods: {
			initAnimation() {
				this.animation = uni.createAnimation({
					duration: 1000,
					timingFunction: 'ease',
					delay:200
				})
				this.showAnimation()
			},
			showAnimation() {
				setTimeout(res =>{
					this.animation.translateY('-20px').opacity(1).step()
					this.animationData = this.animation.export()
					setTimeout(res=>{
						this.hideAnimation()
					},2000)
				},100)
			},
			hideAnimation() {
				this.animation.translateY(0).opacity(0).step()
				this.animationData = this.animation.export()
				setTimeout(res =>{
					this.$emit('update:showProp',false)
				},1000)
			}
		},
		watch:{
			showProp(){
				if(this.showProp){
					this.initAnimation()
				}
			}
		}
	}
</script>

<style lang="scss">
	.prop-content {
		position: fixed;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		top: 0;
		left: 0;

		.prop-container {
			width: 478upx;
			height: 242upx;
			text-align: center;
			position: relative;
			margin: auto;
			top: 50%;
			margin-top: -122upx;
			overflow: hidden;
			background-color: rgba(0, 0, 0, 0.7);
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 30upx;
			opacity: 0;
			.prop-container-message {}
		}
	}
</style>
