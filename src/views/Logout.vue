<template>
	<div class="louout">
		<button type="primary" @click="out">退出</button>
	</div>
</template>

<script>
	export default{
		methods:{
			out(){
				this.$http({
					url:'http://www.520mg.com/member/index_login.php',
					method:'post',
					withCredentials:true,
					data:`dopost=exit`
				}).then((res)=>{
					console.log(res.data);
					if(res.data.status==1){
						this.$store.commit("setlog",false);
						this.$router.push('/')
					}
				})
			}
			
		}
	}
</script>

<style>
</style>
