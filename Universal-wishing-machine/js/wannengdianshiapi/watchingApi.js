const CountApp = {
	data() {
		return {
			input_html: "https://www.iqiyi.com/v_ko3o3jgims.html",
			input_online_html: "https://www.iqiyi.com/v_ko3o3jgims.html",
			input_all_html: "https://www.iqiyi.com/v_ko3o3jgims.html",
			input_alltwo_html: "https://www.iqiyi.com/v_ko3o3jgims.html",
			magnet_other:"https://www.iqiyi.com/v_ko3o3jgims.html",
			sel_api: 'public-api-other-one',
			sel_api_online: 'UnKnown-api-warning-four-tengxun',
			sel_api_all: '可以优酷/爱奇艺原画接口1',
			sel_api_alltwo: 'HK',
			sel_magnet_other:"磁解析(360会报错)",
			json: [{
					name: '速度最快,但是巨多广告',
					api: "https://api.sigujx.com/?url="
				},
				{
					name: 'PHP-api-three(安卓可用,但有广告)',
					api: "https://jx.618g.com/?url="
				},
				{
					name: 'PHP-api-five(解析差,有广告)',
					api: "https://www.xymav.com/?url="
				},
				{
					name: 'PHP-api-six(安卓可用,但有广告)',
					api: "https://www.nxflv.com/?url="
				},
				{
					name: '测试接口(有广告)',
					api: "https://www.1717yun.com/jiexi/?url="
				},
				{
					name: '测试接口2(有广告)',
					api: "https://jx.ivito.cn/?url="
				},
				{
					name: '测试接口3(有广告)',
					api: "http://z1.m1907.cn/?jx="
				},
			],
			
			json_online: [
				{
					name: '不开放',
					api: "none"
				}			
			],
			
			all_json: [
				{
					name: '不开放',
					api: 'none'
				},
			],
			all_json_two:[
				{
					name:"思古接口1(有巨多广告)",
					api:"https://api.sigujx.com/?url="
				},
				{
					name:"114解析(安卓端可用,无广告)",
					api:"https://jx.f41.cc/?url="
				},
				{
					name:"解析接口2(有巨量广告)",
					api:"https://www.ckmov.vip/api.php?url="
				},
				{
					name:"超清接口2(有广告)",
					api:"http://k8aa.com/jx/index.php?url="
				},
				{
					name:"bl接口2(有广告,要过滤)",
					api:"https://vip.bljiex.com/?v="
				},
				{
					name:"大亨接口(有广告)",
					api:"http://jx.cesms.cn/?url="
				},
			],
			magnet_json:[
				{
					name:"本接口暂不开放",
					api:"none"
				},
			]
		}
	},
	mounted() {

	},
	methods: {
		open_blank() {
			let array_index = 0;
			for (let i = 0; i < this.json.length; i++) {
				if (this.sel_api == this.json[i].name) {
					array_index = i;
				}
			};
			open(this.json[array_index].api + this.input_html, "_blank");
		},
		open_blank_unkonwn() {
			let unknown_api = 0;
			for (var i = 0; i < this.json_online.length; i++) {
				if (this.sel_api_online == this.json_online[i].name) {
					unknown_api = i;
				}
				console.log(this.json_online[i].name)
			};
			open(this.json_online[unknown_api].api + this.input_online_html, "_blank");
		},
		open_All() {
			let all_index = 0;
			for (var i = 0; i < this.all_json.length; i++) {
				if (this.sel_api_all == this.all_json[i].name) {
					all_index = i;
				}
			};
			open(this.all_json[all_index].api + this.input_all_html, "_blank");
		},
		open_All_Two(){
			let all_index_two = 0;
			for(var i = 0;i<this.all_json_two.length;i++){
				if(this.sel_api_alltwo == this.all_json_two[i].name){
					all_index_two = i;
				}
			}
			open(this.all_json_two[all_index_two].api + this.input_alltwo_html,"_blank");
		},
		open_magnet(){
			let magnet_index = 0;
			for(var i = 0;i < this.magnet_json.length;i++){
				if(this.sel_magnet_other == this.magnet_json[i].name){
					magnet_index = i;
				}
			}
			open(this.magnet_json[magnet_index].api+this.magnet_other,"_blank");
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


/* 

 */
