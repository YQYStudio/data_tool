const CountApp = {
	data() {
		return {
			input_html: "https://www.iqiyi.com/v_ko3o3jgims.html",
			input_online_html: "https://www.iqiyi.com/v_ko3o3jgims.html",
			input_all_html: "https://www.iqiyi.com/v_ko3o3jgims.html",
			input_alltwo_html: "https://www.iqiyi.com/v_ko3o3jgims.html",
			magnet_other: "https://www.iqiyi.com/v_ko3o3jgims.html",
			sel_api: 'PHP-api-three(安卓可用,但有广告)',
			sel_api_online: '可用接口1',
			sel_api_all: '可以优酷/爱奇艺原画接口1',
			sel_api_alltwo: '第二接口',
			sel_magnet_other: "接口1",
			json: [{
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

			json_online: [{
					name: '可用接口1',
					api: "https://v.znb.me/?url="
				},
				{
					name: '可用接口2',
					api: "https://www.murl.us/?url="
				},
				{
					name: '可用接口3',
					api: "https://v.kcvod.com/?url="
				}, {
					name: '可用接口4',
					api: "http://s.kvod.us/?url="
				}
			],

			all_json: [{
				name: '不开放',
				api: 'none'
			}, ],
			all_json_two: [{
					name: "第二接口",
					api: "https://jx.ivito.cn/?url="
				},
				{
					name: "第四接口",
					api: "https://2.08bk.com/?url="
				},
				{
					name: "第六接口",
					api: "https://api.08bk.com/vip/?url="
				},
				{
					name: "第八接口",
					api: "https://okjx.cc/?url="
				},
				{
					name: "第九接口",
					api: "https://17kyun.com/api.php?url="
				},
				{
					name: "第十接口",
					api: "https://www.8090g.cn/jiexi/?url="
				},
				{
					name: "第十一接口",
					api: "https://www.administratorw.com/admin.php?url="
				},
				{
					name: "第十二接口",
					api: "https://jsap.attakids.com/?url="
				},
			],
			magnet_json: [{
					name: "接口1",
					api: "https://jx.wzslw.cn/?url="
				},
				{
					name: "接口2",
					api: "http://www.asys.vip/jx/?url="
				},
				{
					name: "接口3",
					api: "https://9kjx.com/?url="
				},
				{
					name: "接口4",
					api: "https://okjx.cc/?url="
				},

				{
					name: "接口5",
					api: "https://www.administratorw.com/video.php?url="
				},

				{
					name: "接口6",
					api: "https://www.33tn.cn/?url="
				},

				{
					name: "接口7",
					api: "https://jx.mw0.cc/?url="
				},


				{
					name: "接口9",
					api: "https://jx.ergan.top/?url="
				},

				{
					name: "接口10",
					api: "https://jx.ivito.cn/?url="
				},

				{
					name: "接口11",
					api: "http://33tn.cn/?url="
				},

				{
					name: "接口12",
					api: "https://www.kpezp.cn/jlexi.php?url="
				},

				{
					name: "接口13",
					api: "https://www.h8jx.com/jiexi.php?url="
				},

				{
					name: "接口14",
					api: "https://api.yueliangjx.com/?url="
				},

				{
					name: "接口15",
					api: "https://jiexi8.com/vip/index.php?url="
				},

				{
					name: "接口16",
					api: "https://www.xymav.com/?url="
				},

				{
					name: "接口17",
					api: "https://m2090.com/?url="
				},

				{
					name: "接口18",
					api: "http://api.xdiaosi.com/?url="
				},

				{
					name: "接口19",
					api: "https://jx.4080jx.cc/?url="
				},

				{
					name: "接口20",
					api: "https://jsap.attakids.com/?url="
				},

				{
					name: "接口21",
					api: "https://jx.ap2p.cn/?url="
				},
				{
					name: "接口22",
					api: "https://jx.ap2p.cn/?url="
				},
			],

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
		open_All_Two() {
			let all_index_two = 0;
			for (var i = 0; i < this.all_json_two.length; i++) {
				if (this.sel_api_alltwo == this.all_json_two[i].name) {
					all_index_two = i;
				}
			}
			open(this.all_json_two[all_index_two].api + this.input_alltwo_html, "_blank");
		},
		open_magnet() {
			let magnet_index = 0;
			for (var i = 0; i < this.magnet_json.length; i++) {
				if (this.sel_magnet_other == this.magnet_json[i].name) {
					magnet_index = i;
				}
			}
			open(this.magnet_json[magnet_index].api + this.magnet_other, "_blank");
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
