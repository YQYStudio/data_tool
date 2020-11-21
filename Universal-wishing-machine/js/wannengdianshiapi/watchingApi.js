const CountApp = {
	data() {
		return {
			input_html: "https://www.iqiyi.com/v_ko3o3jgims.html",
			input_online_html:"https://www.iqiyi.com/v_ko3o3jgims.html",
			sel_api:'public-api-other-one',
			sel_api_online:'UnKnown-api-warning-four-tengxun',
			json: [{
					name: 'public-api-other-one',
					api: "https://api.sigujx.com/?url="
				},
				{
					name: 'public-api-other-two',
					api: "http://api.ijx.xyz/?url="
				},
				{
					name: 'public-api-other-three',
					api: "http://api.ijx.xyz/api.php?url="
				},
				{
					name: 'public-api-other-four',
					api: "https://jx.suiyilu.com/?url="
				},
				{
					name: 'public-api-other-five',
					api: "https://api.hdworking.top/?url="
				},
				{
					name: 'public-api-other-six',
					api: "http://www.10yy.cn/?url="
				},
				{
					name: 'public-api-other-seven',
					api: "https://vip.52jiexi.top/?url="
				},
				{
					name:'PHP-api-one',
					api:"https://api.sigujx.com/?url="
				},
				{
					name:'PHP-api-two',
					api:"https://jx.wslmf.com/?url="
				},
				{
					name:'PHP-api-three',
					api:"https://jx.618g.com/?url="
				},
				{
					name:'PHP-api-four',
					api:"https://vip.tadmin.cn/?url="
				},
				{
					name:'PHP-api-five',
					api:"https://www.xymav.com/?url="
				},
				{
					name:'PHP-api-six',
					api:"https://www.nxflv.com/?url="
				},
				
			],
			json_online:[
				{
					name:'UnKnown-api-warning-four-tengxun',
					api:"http://www.82190555.com/index/qqvod.php?url="
				},
				{
					name:'UnKnown-api-warning-five',
					api:"http://vip.jlsprh.com/index.php?url="
				},
				{
					name:'UnKnown-api-warning-six',
					api:"http://at520.cn/jx/?url="
				},
				{
					name:'UnKnown-api-warning-seven',
					api:"http://api.greatchina56.com/?url="
				},
				{
					name:'UnKnown-api-warning-eight',
					api:"http://www.sfsft.com/admin.php?url="
				},
				{
					name:'UnKnown-api-warning-nine',
					api:"https://jx.618g.com/?url="
				},
				{
					name:'UnKnown-api-warning-other-one',
					api:"http://aikan-tv.com/?url="
				},
				{
					name:'UnKnown-api-warning-other-ad-two',
					api:"http://api.bbbbbb.me/vip/?url="
				},
				{
					name:'UnKnown-api-warning-other-three',
					api:"http://jx.api.163ren.com/vod.php?url="
				},
				{
					name:'UnKnown-api-warning-other-ads',
					api:"http://api.nepian.com/ckparse/?url="
				},
				{
					name:'UnKnowm-php',
					api:"http://www.vipjiexi.com/yun.php?url="
				},
				{
					name:'UnKonw-python',
					api:"http://kx28.com/vip/index.php?url= "
				},
			]
		}
	},
	mounted() {
		
	},
	methods:{
		open_blank(){
			let array_index = 0;
			for(let i = 0;i<this.json.length;i++){
				if(this.sel_api==this.json[i].name){
					array_index = i;
				}
			};
			open(this.json[array_index].api+this.input_html,"_blank");
		},
		open_blank_unkonwn(){
			let unknown_api = 0;
			for(var i = 0; i < this.json_online.length;i++){
				if(this.sel_api_online == this.json_online[i].name){
					unknown_api = i;
				}
				console.log(this.json_online[i].name)
			};
			open(this.json_online[unknown_api].api+this.input_online_html,"_blank");
		}
	}
}

Vue.createApp(CountApp).mount('#watching')

// const sel_store = {
// 	data(){
// 		return{
// 			error:"input",
// 			sel_json:CountApp.data.json
// 		}
// 	},
// 	methods:{
// 		open_sel(){
// 			console.log("asda");
// 		}
// 	}
	
// }

// Vue.createApp(sel_store).mount("#sel")