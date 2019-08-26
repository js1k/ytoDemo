<template>
	<view>
		<map id='myMap' style="width: 100%; height: 300upx;" 
		:latitude="latitude" 
		:longitude="longitude" 
		:markers="covers" 
		:alpha="0.5" 
		:show-location="true"
		@regionchange="regionchange" 
		@tap="handleTap"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude:'',
				longitude:'',
				covers: [{
					latitude: '',
					longitude: ''
					// iconPath: '../../static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../static/homepage/location.png'
				}],
				circles:[{
					latitude:'',
					longitude:'',
					radius:300,
					color:'#C1D75650',
					fillColor:'#C1D75650',
					strokeWidth:1
				}]
			}
		},
		mounted() {
			let that=this
			uni.getLocation({
				type:'gcj02',
				success:function(res){
					that.latitude=res.latitude
					that.longitude=res.longitude
					that.circles[0].latitude=res.latitude
					that.circles[0].longitude=res.longitude
					that.covers[0].latitude=res.latitude
					that.covers[0].longitude=res.longitude
				}
			})
			uni.chooseLocation({
				success(res) {
					console.log(res,9999)
				}
			})
		},
		methods: {
			regionchange(){
				console.log('regionchange')
			},
			handleTap(res){
				console.log(res)
			}
		}
	}
</script>

<style>

</style>
