<template>
	<view class="homepage">
		<view class="header flx-clm-ce">
			<image src="../../static/homepage/default_header.png" mode="aspectFit" class="header-img"></image>
			<view class="login">点击登录/注册</view>
		</view>
		<view class="section">
			<view class="clm flx-ce-bet">
				<view class="flx-ce">
					<image src="../../static/homepage/address.png" mode="aspectFit" class="clm-icon"></image>
					<view class="clm-font">地址管理</view>
				</view>
				<image src="../../static/homepage/right-arr.png" mode="aspectFit" class="clm-icon"></image>
			</view>
			<view class="clm flx-ce-bet">
				<view class="flx-ce" @click="isMasker=true">
					<image src="../../static/homepage/charge.png" mode="aspectFit" class="clm-icon"></image>
					<view class="clm-font">面单自助充值</view>
					<image src="../../static/homepage/question.png" mode="aspectFit" class="question-icon"></image>
				</view>
				<image src="../../static/homepage/right-arr.png" mode="aspectFit" class="clm-icon"></image>
			</view>
			<view class="clm flx-ce-bet">
				<view class="flx-ce">
					<image src="../../static/homepage/service.png" mode="aspectFit" class="clm-icon"></image>
					<view class="clm-font">客服热线</view>
				</view>
				<view class="phone">95554</view>
			</view>
		</view>
		<view class="masker flx-ce-ce" v-if="isMasker" @click="isMasker=false">
			<view class="question-tips flx-clm-ce">
				<view class="tips-header flx-ce-ce">温馨提醒</view>
				<view class="tips-section">
					<view class="">
						&nbsp;&nbsp;面单资助充值，是为圆通客户和业务员提供的资助购买电子面单的服务。
					</view>
					<view class="">
						包含: <text class="spe">购买电子面单 查看购买历史等 查询账号</text>
					</view>
				</view>
				<view class="btn-group flx-ce-ce">
					<button class="btn flx-ce-ce">我知道了</button>
					<button class="charge-btn btn flx-ce-ce">立即充值</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isMasker:false
			};
		},
		mounted() {
			
		},
		methods:{
			
		}
		
	}
</script>

<style lang="scss">
	.homepage{
		width:100%;
		height:100%;
		.header{
			width:100%;
			height:500upx;
			background:#490B68;
			.header-img{
				width:140upx;
				height:140upx;
				border-radius: 50%;
				margin-bottom:20upx;
			}
			.login{
				font-size: 30upx;
				color: white;
			}
		}
		.section{
			padding-left:40upx;
			.clm{
				padding:30upx 20upx 30upx 0;
				border-bottom:1upx solid #F0F0F0;
				.clm-icon{
					width:40upx;
					height:40upx;
				}
				.clm-font{
					font-size:30upx;
					color:#373737;
					margin-left:15upx;
				}
				.phone{
					font-size:30upx;
					color:#FF03B6;
				}
				.question-icon{
					width:30upx;
					height:30upx;
					margin-left:10upx
				}
			}
		}
		.masker{
			width:100%;
			height:100%;
			position: fixed;
			left:0;
			top:0;
			background:rgba(0,0,0,0.63);
			.question-tips{
				width:565upx;
				height:441upx;
				background:rgba(255,255,255,1);
				border-radius:10upx;
				.tips-header{
					width:100%;
					padding:25upx 0;
					font-size:34upx;
					font-family:PingFangSC;
					font-weight:400;
					color:rgba(0,0,0,1);
					line-height:48upx;
					border-bottom:1upx solid rgba(216,216,216,1);
				}
				.tips-section{
					width:504upx;
					height:120upx;
					font-size:28upx;
					font-family:PingFangSC;
					font-weight:400;
					color:rgba(0,0,0,1);
					line-height:40upx;
					padding-top:26upx;
				}
				.spe{
					color:rgba(71,8,108,1);
				}
				.btn-group{
					width:100%;
					margin:75upx 0 28upx 0;
					.btn{
						width:200upx;
						height:56upx;
						font-size:28upx;
						font-family:PingFangSC;
						font-weight:400;
						color:rgba(0,0,0,1);
						background:rgba(255,255,255,1);
						border-radius:10upx;
						border:1px solid rgba(204,204,204,1)
					}
					.charge-btn{
						background:rgba(71,8,108,1);
						color:white;
					}
				}
			}
		}
	}
</style>
