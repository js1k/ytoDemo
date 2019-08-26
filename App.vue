<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page{
		width:100%;
		height:100%;
	}
	.flx-ce-ce{
		display:flex;
		align-items: center;
		justify-content: center;
	}
	.flx-ce{
		display:flex;
		align-items: center;
	}
	.flx-ce-start{
		display:flex;
		align-items: center;
		justify-content: flex-start;
	}
	.flx-ce-end{
		display:flex;
		align-items: center;
		justify-content: flex-end;
	}
	.flx-ce-bet{
		display:flex;
		align-items: center;
		justify-content: space-between;
	}
	.flx-clm{
		display: flex;
		flex-direction: column;
	}
	.flx-clm-start{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.flx-clm-ce{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.flx-clm-end{
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	.flx-clm-ce-bet{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	.lx{
		display: flex;
	}
	.item-ce{
		align-items: center;
	}
	.jus-ce{
		justify-content: center;
	}
	.jus-bet{
		justify-content: space-between;
	}
	.go-back{
		width:44upx;
		height:44upx;
		position: absolute;
		left: 40upx;
		top:22upx;
	}
</style>
