## 属性说明

|属性	|类型	|说明	|
|--	|--	|--	|
|percentage	|Number	|刮开百分之多少的时候开奖	，默认45|
|touchSize	|Number	|刮痕的宽度，默认20	|
|fillColor	|String	|未刮开图层时的填充色	|
|watermark	|String	|水印文字，默认“刮一刮”	|
|watermarkColor	|String	|水印文字颜色	|
|watermarkSize	|Number	|水印文字大小，默认14	|
|title	|String	|标题，默认：刮一刮开奖	|
|titleColor	|String	|标题颜色	|
|titleSize	|Number	|标题文字大小，默认24	|
|disabled	|boolean	|是否禁止刮卡	|
|@complete	|function	|刮卡完成回调事件	|
|v-slot	|默认插槽	|刮卡显示的内容，本内容将被刮刮卡覆盖遮挡，刮刮后显示	|
|init()	|重置方法	|通过调用该方法，重置到初始状态	|
<template>
	<view class="base-cloud">
		<view class="father" id="canvas" style="position: relative;">
			<view :class="{op0 : !ready }">
				<slot></slot>
			</view>
			<canvas :style="{width: width+'px', height : height+'px',position:'absolute',top:0}" class="abs" :disable-scroll="true" @touchstart="touchstart" @touchend="touchend" @touchmove="touchmove" canvas-id="scratch-card"></canvas>
		</view>
	</view>
</template>

<script>
	let ctx = null ;
	export default {
		name : "scratch-card" ,
		props:{
			percentage : { //刮开百分之多少的时候开奖
				type : Number ,
				default : 45 
			},
			touchSize : { //触摸画笔大小
				type : Number ,
				default : 20 
			},
			fillColor : { //未刮开图层时的填充色
				type : String ,
				default : '#ddd' 
			},
			watermark : { //水印文字
				type : String ,
				default : '刮一刮' 
			},
			watermarkColor : { //水印文字颜色
				type : String ,
				default : '#c5c5c5' 
			},
			watermarkSize : { //水印文字大小
				type : Number ,
				default : 14 
			},
			title : { //提示文字
				type : String ,
				default : '刮一刮开奖' 
			},
			titleColor : { //提示文字颜色
				type : String ,
				default : '#888' 
			},
			titleSize : { //提示文字大小
				type : Number ,
				default : 24 
			},
			disabled : { //是否禁止刮卡
				type : Boolean ,
				default : false 
			}
		},
		data() {
			return {
				width : 0 ,
				height : 0 ,
				startX : null ,
				startY : null ,
				computing : false ,
				complete : false ,
				reset : false ,
				ready : false ,
				storePoints:[],
				startTouchOnce:false
			};
		},
		mounted() {
			ctx = uni.createCanvasContext("scratch-card" , this) ;
			this.getRect();
		},
		methods:{
			
			getRect:function(e){
				const query = uni.createSelectorQuery().in(this);
				query.select('#canvas').boundingClientRect(data => {
					this.width = data.width;
					this.height = data.height;
					setTimeout(e => {
						this.init();
					},100);
				}).exec();
			},
			
			init : async function(e){
				this.computing = false ;
				this.complete = false ;
				this.reset = false ;
				this.ready = false ;
				this.startTouchOnce=false
				let bgImgPath = await this.getImageInfo(
					'https://img-cdn.macaotown.com/o_1f2lu953l1fkf1rsf27ihd5vm0s.png'
				)
				ctx.clearRect(0,0,this.width,this.height);
				//绘制画布
				ctx.setFillStyle(this.fillColor);
				ctx.fillRect(0, 0, this.width , this.height );
				this.ready = true ;
				//绘制文字水印
				this.fillWatermark();
				// 繪製背景圖
				ctx.drawImage(bgImgPath.path, 0, 0, this.width, this.height)
				ctx.save()
				//绘制标题
				this.fillTitle();
				ctx.draw();
			},
			
			/**
			 * 绘制文字水印
			 */
			fillWatermark : function(e){
				if (!this.watermark) {
					return ;
				}
				var width = this.watermark.length * this.watermarkSize ;
				ctx.save() ;
				ctx.rotate(-10 * Math.PI / 180);
				let x = 0 ; 
				let y = 0 ;
				let i = 0 ;
				while( (x <= this.width * 5 || y <= this.height*5) && i < 300){
					ctx.setFillStyle(this.watermarkColor);
					ctx.setFontSize(this.watermarkSize);
					ctx.fillText(this.watermark,  x  , y );
					x += width + width * 1.6 ;
					if (x > this.width && y <= this.height ) {
						x = -Math.random()*100 ;
						y += this.watermarkSize * 3 ;
					}
					i++ ;
				}
				ctx.restore();
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
			/**
			 * 绘制标题
			 */
			fillTitle : function(e){
				if (!this.title) {
					return ;
				}
				ctx.setTextAlign("center");
				ctx.setTextBaseline("middle");
				ctx.setFillStyle(this.titleColor);
				ctx.setFontSize(this.titleSize);
				ctx.font = 'bold italic '+this.titleSize+'px sans-serif '
				ctx.fillText(this.title,  this.width/2  , this.height/3 );
			},
			
			touchstart : function(e){
				if (this.disabled) {
					return ;
				}
				this.startX = e.touches[0].x;
				this.startY = e.touches[0].y;
				// 用戶開始掛卡
				if(this.startTouchOnce==false){
					this.$emit('startTouch',true)
					this.startTouchOnce=true
				}
			},
			
			touchend : function(e){
				this.getFilledPercentage();
			},
			
			touchmove : function(e){
				if(this.complete || this.disabled ){
					return ;
				}
				// ctx.globalCompositeOperation = 'destination-out'; 
				ctx.moveTo(this.startX , this.startY );
				// ctx.beginPath();
				// ctx.arc(this.startX, this.startY, 20, 0, Math.PI * 20);
				// ctx.fill();
				ctx.clearRect( this.startX , this.startY , this.touchSize , this.touchSize ) ;
				ctx.draw(true);
				//记录移动点位
				this.startX = e.touches[0].x;
				this.startY = e.touches[0].y;
			},
			
			getFilledPercentage:function(e){
				if (this.computing) {
					return ;
				}
				this.computing = true ;
				uni.canvasGetImageData({
					canvasId: 'scratch-card' ,
					x: 0,
					y: 0,
					width: this.width ,
					height: this.height ,
					success: (res) => {
						let pixels = res.data;
						let transPixels = [];
						for (let i = 0; i < pixels.length; i += 4) {
							if (pixels[i + 3] < 128) {
								transPixels.push(pixels[i + 3]);
							}
						}
						var percent = (transPixels.length / (pixels.length / 4) * 100).toFixed(2);
						if( percent >= this.percentage ){						
							this.success();
						}
						this.computing = false ;
						console.log(percent)
						this.$emit('stopMove',percent)
					},
					fail : function(e){
						console.log(e);
					},
				}, this);
			},
			
			success : function(e){
				this.complete = true ;
				if (this.reset) {
					return ;
				}
				this.reset = true ;
				ctx.moveTo(0, 0);
				ctx.clearRect(0,0, this.width, this.height);
				ctx.stroke() ;
				ctx.draw(true);
				this.$emit("complete",{});
			},
		}
	}
</script>

<style>

</style>
