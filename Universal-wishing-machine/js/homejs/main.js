const main_app = {
	data() {
		return {
			sub_str: 2,
			sub_tips: "正常",
			sum_lun: 10,
			fixed_param: 1000000,
			ran: 1000,
			cj_floors: 10,
			param_array: [],
			user_list: [],
			user_list_name: '',
			user_list_weight: 0,
			user_list_tips:"运行正常",
			param_temp: {
				index: 0,
				result: false,
				isfloor: false,
				this_chance: 0,
				chances: 0,
				sum: 0,
			},

			temp_sum: 0,
			temp_gailv: 0,
			td_error: "td-error",
			td_dark: "td-dark",
			td_flag: true,
			user_flag: false,
		}
	},
	mounted() {

	},
	methods: {
		ran_getResult() {
			// this.temp_gailv = 0;
			// // console.log(rans+"本次概率:"+(rans/this.fixed_param));
			// for(let i = 0 ;i<this.sum_lun;i++){
			// 	this.temp_sum += 1;
			// 	let rans = Math.floor(Math.random()*this.fixed_param);
			// 	let param = this.param_temp;
			// 	this.temp_gailv += rans/this.fixed_param;
			// 	param = [];
			// 	param.index = i + 1;
			// 	if(rans <= this.ran){
			// 		param.result = true;
			// 	}else{
			// 		param.result = false;
			// 	}
			// 	param.this_chance = (rans/this.fixed_param);
			// 	param.chances = (this.temp_gailv/i);
			// 	param.sum= i+"/"+this.sum_lun;
			// 	this.param_array.push(param);
			// 	console.log(param)
			// }
			// this.$options.methods.getTest();
			// 使用之前index-1

			let sum = 0;
			let sum_ok = 0;

			let last_floors_index = 0;
			let last_flag = true;
			for (let i = 0; i < this.sum_lun; i++) {
				let flag = this.CJ();
				sum += 1;
				this.temp_sum += 1;
				last_floors_index += 1;
				if (flag == true) {
					sum_ok += 1;
					this.temp_gailv += 1;
					last_flag = false;
				}

				let inde = this.temp_sum;
				let tch = sum_ok / sum;
				let ch = this.temp_gailv / this.temp_sum;
				let user_gl = this.ran / this.fixed_param;
				let user_floor = false;

				if (last_floors_index == this.cj_floors) {
					if (last_flag == true) {
						//触发保底
						user_floor = true;
						this.user_flag = true;
					}
					console.log(last_floors_index + "xia");
					last_floors_index = 0;
					last_flag = false;
					this.user_flag = false;
				}


				this.param_array.push({
					index: inde,
					result: flag,
					isfloor: user_floor,
					this_chance: this.subStr(tch.toString()),
					chances: this.subStr(ch.toString()),
					sum: sum,
					this_gailv: user_gl,
				});

			}

		},
		CJ() {
			let temp_ran = Math.floor(Math.random() * this.fixed_param);
			let temp_flag = false;
			if (temp_ran <= this.ran) {
				temp_flag = true;

			} else {
				temp_flag = false;
			}
			return temp_flag;
		},
		subStr(str) {
			// if (str.length > 3) {
			// 	if (str.length > this.sub_str + 1) {
			// 		this.sub_tips = '正常'
			// 		return str.slice(0, this.sub_str + 2);
			// 	} else {
			// 		this.sub_tips = '输入越界,默认为2'
			// 		return str.slice(0, 2 + 2);
			// 	}

			// }else{
			// 	this.sub_tips = '输入越界为整参,不截取'
			// 	return str;
			// }
			if (Number(this.sub_str) > str.length) {
				this.sub_tips = '输入越界,默认为2(为0这样此提示))';
				return str.slice(0, 2 + 2);
			} else {
				this.sub_tips = '正常'
				return str.slice(0, 2 + Number(this.sub_str));
			}


		},
		clearArray() {
			this.param_array = [];
			this.temp_sum = 0;
			this.temp_gailv = 0;
			this.td_flag = true;
			this.user_flag = false;
		},
		addUserList() {
			if (this.user_list_name.length == 0) {
				this.user_list_tips = '请键入up物品名称'
				return;
			}else{
				this.user_list_tips = '添加成功'
			}
			if (this.user_list_weight == 0) {
				this.user_list_weight = 0;
				this.user_list_tips = '注意:你的权重为0'
			}else{
				this.user_list_tips = '添加成功'
			}
			let name = this.user_list_name;
			let weight = this.user_list_weight;
			let tempDate = new Date();
			let thisDate = tempDate.getFullYear() + "年" + tempDate.getMonth() + "月" + tempDate.getDay() + "日 - " + tempDate.getHours() +
				"时" + tempDate.getMinutes() + "分" + tempDate.getSeconds() + "秒";
			this.user_list.push({
				listName: name,
				listWeight: weight,
				listDate: thisDate,
			})
			console.log(this.user_list_name + this.user_list_weight)
		},
		delList(index){
			this.user_list.splice(index,1)
		},
		clearUserList(){
			this.user_list = [];
			this.user_list_tips = '成功清除';
			this.user_list_weight = 0;
			this.user_list_name = '';
		},
		printTable(){
			print();
		}
		


	}
}

Vue.createApp(main_app).mount('#main_content');
