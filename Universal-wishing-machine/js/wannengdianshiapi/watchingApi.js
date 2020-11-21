
/* 
http://api.nobij.top/jx/?url=
http://appapi.svipv.kuuhui.com/plje/?id=
http://api.91exp.com/svip/?url=
http://www.82190555.com/index/qqvod.php?url=
http://vip.jlsprh.com/index.php?url=
http://at520.cn/jx/?url=
http://api.greatchina56.com/?url=
http://www.sfsft.com/admin.php?url=
https://jx.618g.com/?url=
http://aikan-tv.com/?url=
http://api.bbbbbb.me/vip/?url=
http://jx.api.163ren.com/vod.php?url=
http://api.nepian.com/ckparse/?url=
http://www.vipjiexi.com/yun.php?url=
http://kx28.com/vip/index.php?url= 
 */
  // 'jiekou1name' => '推荐线路',
  // 'jiekou1' => 'https://api.sigujx.com/?url=',
  // 'jiekou2name' => '会员线路1',
  // 'jiekou2' => 'https://jx.wslmf.com/?url=',
  // 'jiekou3name' => '会员线路2',
  // 'jiekou3' => 'https://jx.618g.com/?url=',
  // 'jiekou4name' => '备用线路1',
  // 'jiekou4' => 'https://vip.tadmin.cn/?url=',
  // 'jiekou5name' => '备用线路2',
  // 'jiekou5' => 'https://www.xymav.com/?url=',
  // 'jiekou6name' => '备用线路3',
  // 'jiekou6' => 'https://www.nxflv.com/?url=',

const CountApp = {
	data() {
		return {
			input_html: "https://www.iqiyi.com/v_ko3o3jgims.html",
			sel_api:'public-api-other-one',
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
			]
		}
	},
	mounted() {
		
	},
	methods:{
		open_blank(){
			let array_index = 0;
			// console.log(this.sel_api)
			//find array
			for(let i = 0;i<this.json.length;i++){
				if(this.sel_api==this.json[i].name){
					array_index = i;
				}
			}
			// console.log(this.json[array_index].api+this.input_html)
			open(this.json[array_index].api+this.input_html,"_blank")
		}
	}
}

Vue.createApp(CountApp).mount('#watching')
