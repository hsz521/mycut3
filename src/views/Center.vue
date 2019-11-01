<template>
	<div class="center">
		<h1>个人中心</h1>
		<p>编号:{{user.M_KeepTime}}</p>
		
	</div>
</template>

<script>
export default{
	data(){
		return{
			user:{}
		}
	},
	methods:{
		middle(){
			this.$http({
				url:'http://www.520mg.com/member/ajax_login.php',
				method:'get',
				withCredentials:true,
			}).then((res)=>{
				console.log(res.data)
				this.user=res.data
			})
		}
	},
	created(){
		this.middle();
	}
}
</script>

<style>
</style>
