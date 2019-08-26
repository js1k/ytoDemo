<template>
	<view class="content flx-clm">
		<!-- #ifndef MP-WEIXIN || MP-ALIPAY -->
		<!-- <view class="index-bar flx-ce-ce">uni-app</view> -->
		<!-- #endif -->
		<view class="user-info flx-ce-start">
			<view class="header-con flx-ce-ce">
				<image src="../../static/index/default_header.png" mode="scaleToFill" class="user-header"></image>
			</view>
			<view class="flx-clm-start">
				<view class="user-name">名字起得特别长</view>
				<view class="flx-ce-ce">
					<image src="../../static/index/dashi_icon.png" mode="aspectFit" class="level-ico"></image>
				</view>
			</view>
		</view>
		<view class="section flx-clm-ce">
			<image src="../../static/index/logo.png" mode="scaleToFill" class="theme-logo"></image>
			<view class="season-title">
				--保险避坑指南季7.1-7.8--
			</view>
			<view class="season-theme">
				保险你做主 权益早知道
			</view>
			<view class="season-img-con">
				<image src="../../static/index/season1_icon.png" mode="scaleToFill" class="season-icon"></image>
			</view>
			<view class="btn-con">
				<image src="../../static/index/star_btn.png" mode="scaleToFill" class="btn" @click="goHome"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			goHome(){
				uni.navigateTo({
					url:'../homepage/homepage'
				})
			}
		}
	}
</script>

<style>
	page{
		width:100%;
		height:100%;
		background: linear-gradient(180deg,#460EBA 0%,#5F8AEE 100%);
	}
	.content {
		width:100%;
		height:100%;
	}
	.index-bar{
		width:100%;
		height:88upx;
		font-size:34upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
	}
	.user-info{
		padding-left:32upx;
		margin-top:12upx;
	}
	.header-con{
		width:92upx;
		height:92upx;
		border-radius: 50%;
		margin-right:16upx;
		background:linear-gradient(360deg,rgba(236,53,52,1) 0%,rgba(246,141,90,1) 46%,rgba(250,199,111,1) 100%);
	}
	.user-header{
		width:84upx;
		height:84upx;
		border-radius: 50%;
		
	}
	.section{
		width:100%;
		height: 100%;
		flex-flow: 1;
		justify-content: center;
	}
	.user-name{
		font-size:28upx;
		line-height: 1;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
		margin-bottom:8upx;
	}
	.level-ico{
		width:88upx;
		height:40upx
	}
	.theme-logo{
		width:342upx;
		height:120upx;
	}
	.season-title{
		font-size:24upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(255,255,255,1);
		margin: 4upx 0 16upx;
	}
	.season-theme{
		font-size:38upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(255,216,94,1);
	}
	.season-img-con{
		width:562upx;
		height:562upx;
		margin-top:32upx;
		margin-bottom:96upx;
	}
	.season-icon{
		width:562upx;
		height:562upx;
	}
	.btn,.btn-con{
		width:298upx;
		height:88upx;
	}
</style>
