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
					name: 'public-api-other-one',
					api: "https://api.sigujx.com/?url="
				},
				{
					name: 'public-api-other-two',
					api: "http://api.ijx.xyz/?url="
				},
				{
					name: 'public-api-other-five',
					api: "https://api.hdworking.top/?url="
				},
				{
					name: 'public-api-other-seven',
					api: "https://vip.52jiexi.top/?url="
				},
				{
					name: 'PHP-api-one',
					api: "https://api.sigujx.com/?url="
				},
				{
					name: 'PHP-api-three',
					api: "https://jx.618g.com/?url="
				},
				{
					name: 'PHP-api-five',
					api: "https://www.xymav.com/?url="
				},
				{
					name: 'PHP-api-six',
					api: "https://www.nxflv.com/?url="
				},
				{
					name: '综合+1',
					api: "http://jx.598110.com/index.php?url="
				},
				{
					name: '综合+2',
					api: "http://www.1717yun.com/jx/ty.php?url="
				},
				{
					name: '综合+3',
					api: "http://py.ha12.xyz/sos/index.php?url="
				},
				{
					name: '综合+4',
					api: "http://jx.618ge.com/?url="
				},
				{
					name: '综合+5',
					api: "ttp://jx.598110.com/?url="
				},
				{
					name: 'CDN加速',
					api: "https://cdn.yangju.vip/k/?url="
				},
				{
					name: '大亨备用',
					api: "http://jx.cesms.cn/?url="
				},
				{
					name: '优质接口',
					api: "https://z1.m1907.cn/?jx="
				},
				{
					name: '智能接口',
					api: "http://demo.baores.com/?url"
				},
				{
					name: '智能接口+2',
					api: "https://jx.70808.net/?url="
				},
				{
					name: '黑云接口',
					api: "https://jiexi.380k.com/?url="
				},
			],
			
			json_online: [{
					name: 'UnKnown-api-warning-four-tengxun',
					api: "http://www.82190555.com/index/qqvod.php?url="
				},
				{
					name: 'UnKnown-api-warning-five',
					api: "http://vip.jlsprh.com/index.php?url="
				},
				{
					name: 'UnKnown-api-warning-eight',
					api: "http://www.sfsft.com/admin.php?url="
				},
				{
					name: 'UnKnown-api-warning-nine',
					api: "https://jx.618g.com/?url="
				},
				{
					name: 'UnKnown-api-warning-other-ad-two',
					api: "http://api.bbbbbb.me/vip/?url="
				},
				
				{
					name: '思古+2',
					api: "http://jx.1ff1.cn/?url="
				},
				{
					name: '万用+1',
					api: "http://vip.116kan.com/?url="
				},
				{
					name: '多线路+1',
					api: "http://jx.hongyishuzhai.com/index.php?url="
				},
				{
					name: '万用+2',
					api: "http://55jx.top/?url="
				},
				{
					name: '万用+3',
					api: "https://jx.000180.top/jx/?url="
				},
				{
					name: '万用+4',
					api: "http://19g.top/?url="
				},
				{
					name: '万用+5',
					api: "http://vip.jlsprh.com/v/4.php?url="
				},
				{
					name: '万用+6',
					api: "http://api.bingdou.net/?url="
				},
				{
					name: '思古再备用',
					api: "https://api.bbbbbb.me/jx/?url="
				},
				
			],
			
			all_json: [{
					name: '可以优酷/爱奇艺原画接口1',
					api: 'https://jiexi.380k.com/?url='
				},
				{
					name: '万用+2',
					api: 'https://jx.618ge.com/?url='
				},
				{
					name: '万用+3',
					api: 'https://jx.du2.cc/?url='
				},
				{
					name: '高速接口',
					api: 'http://jx.daheiyun.com/?url='
				},
				{
					name: '可看芒果',
					api: 'https://vip.jlsprh.com/?url='
				},
				{
					name: '仿造b站播放器',
					api: 'http://www.cuan.la/?url='
				},
				{
					name: 'M3U8播放器',
					api: 'http://jx.rdhk.net/?v='
				},
				{
					name: '高清蓝光',
					api: 'http://py.ha12.xyz/sos/index.php?url='
				},
				{
					name: '高清蓝光+2',
					api: 'http://gege.ha123.club/gege1234/index.php?url='
				},
				{
					name: '无名',
					api: 'http://www.85105052.com/admin.php?url='
				},
				{
					name: '无名备用',
					api: 'http://www.82190555.com/video.php?url='
				},
				{
					name: '可用+1',
					api: 'https://jqaaa.com/jx.php?url='
				},
				{
					name: '可用+2',
					api: 'http://17kyun.com/api.php?url='
				},
				{
					name: 'ok解析',
					api: 'http://okjx.cc/?url='
				},
				{
					name: '思古可用+',
					api: 'http://api.bbbbbb.me/jx/?url='
				},

			],
			all_json_two:[
				{
					name:"HK",
					api:"http://jx.rdhk.net/?v="
				},
				{
					name:"知网",
					api:"http://www.xyyh.xyz/zwjx/?url="
				},
				{
					name:"speed",
					api:"https://www.kpezp.cn/jlexi.php?url="
				},
				{
					name:"维多",
					api:"https://jx.ivito.cn/?url="
				},
				{
					name:"17云",
					api:"https://www.1717yun.com/jx/ty.php?url="
				},
				{
					name:"w解析",
					api:"https://api.tv920.com/vip/?url="
				},
				{
					name:"线路4",
					api:"https://jx.618g.com/?url="
				},
				{
					name:"线路2",
					api:"https://z1.m1907.cn/?jx="
				},
				{
					name:"线路1",
					api:"https://api.sigujx.com/?url="
				},
				{
					name:"其他解析",
					api:"http://nitian9.com/?url="
				},
				{
					name:"豪华",
					api:"http://api.lhh.la/vip/?url="
				},
				{
					name:"思古接口1",
					api:"https://api.sigujx.com/?url="
				},
				{
					name:"韩婧接口",
					api:"https://beaacc.com/api.php?url="
				},
				{
					name:"西瓜接口",
					api:"https://api.xiguaimg.com/odflv105/index.php?url=",					
				},
				{
					name:"无广告高清接口",
					api:"http://www.917k.la/?url="
				},
				{
					name:"114解析",
					api:"https://jx.f41.cc/?url="
				},
				{
					name:"解析接口2",
					api:"https://www.ckmov.vip/api.php?url="
				},
				{
					name:"超清接口2",
					api:"http://k8aa.com/jx/index.php?url="
				},
				{
					name:"bl接口2",
					api:"https://vip.bljiex.com/?v="
				},
				{
					name:"chance_one",
					api:"http://jx.618ge.com/?url="
				},
				{
					name:"凉城",
					api:"http://jx.mw0.cc/?url="
				},
				{
					name:"云播放",
					api:"http://www.33tn.cn/?url="
				},
				{
					name:"大亨接口",
					api:"http://jx.cesms.cn/?url="
				},
			],
			magnet_json:[
				{
					name:"磁解析(360会报错)",
					api:"https://apiv.ga/magnet/"
				},
				{
					name:"全网",
					api:"http://www.wmxz.wang/video.php?url="
				},
				{
					name:"腾讯专用",
					api:"http://jx.598110.com/index.php?url="
				},
				{
					name:"优酷专用",
					api:"http://api.baiyug.cn/vip/index.php?url="
				},
				{
					name:"全网可用重点爱奇艺",
					api:"https://api.flvsp.com/?skin=47ks&amp;url="
				},
				{
					name:"腾讯爱奇艺优酷专用",
					api:"http://jx.vgoodapi.com/jx.php?url="
				},
				{
					name:"腾讯爱奇艺专用",
					api:"https://api.47ks.com/webcloud/?v="
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
