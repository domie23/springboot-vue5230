<template>
    <div>
        <div class="container">
            <div class="login-form">
                <h1 class="h1" style="color:#000;fontSize:28px;">船舶维保管理系统注册</h1>
                <el-form class="rgs-form">
                    <el-form-item label="账号" class="input">
                        <el-input v-model="ruleForm.username" autocomplete="off" placeholder="账号"  />
                    </el-form-item>
                    <el-form-item label="密码" class="input">
                        <el-input type="password" v-model="ruleForm.password" autocomplete="off" show-password/>
                    </el-form-item>
                    <el-form-item label="重复密码" class="input">
                        <el-input type="passwo   rd" v-model="ruleForm.repetitionPassword" autocomplete="off" show-password/>
                    </el-form-item>
                        <!--
                            <el-form-item label="船家编号" class="input" v-if="tableName=='chuanjia'">
                                <el-input v-model="ruleForm.chuanjiaUuidNumber" autocomplete="off" placeholder="船家编号"  />
                           </el-form-item>
                        -->
                        <el-form-item label="船家姓名" class="input" v-if="tableName=='chuanjia'">
                            <el-input v-model="ruleForm.chuanjiaName" autocomplete="off" placeholder="船家姓名"  />
                        </el-form-item>
                        <el-form-item label="船家手机号" class="input" v-if="tableName=='chuanjia'">
                            <el-input v-model="ruleForm.chuanjiaPhone" autocomplete="off" placeholder="船家手机号"  />
                        </el-form-item>
                        <el-form-item label="船家身份证号" class="input" v-if="tableName=='chuanjia'">
                            <el-input v-model="ruleForm.chuanjiaIdNumber" autocomplete="off" placeholder="船家身份证号"  />
                        </el-form-item>
                        <!--
                            <el-form-item v-if="chuanjiaPhotoFlag">
                            </el-form-item>
                            <el-form-item label="船家头像" class="input" v-if="tableName=='chuanjia'">
                                    <file-upload
                                        tip="点击上传船家头像"
                                        action="file/upload"
                                        :limit="1"
                                        :multiple="true"
                                        :fileUrls="ruleForm.chuanjiaPhoto?$base.url+ruleForm.chuanjiaPhoto:''"
                                        @change="chuanjiaPhotoUploadChange"
                                    ></file-upload>
                           </el-form-item>
                        -->
                        <el-form-item label="船家邮箱" class="input" v-if="tableName=='chuanjia'">
                            <el-input v-model="ruleForm.chuanjiaEmail" autocomplete="off" placeholder="船家邮箱"  />
                        </el-form-item>
                        <!--
                            <el-form-item label="账户状态" class="input" v-if="tableName=='chuanjia'">
                                <el-input v-model="ruleForm.jinyongTypes" autocomplete="off" placeholder="账户状态"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="创建时间" class="input" v-if="tableName=='chuanjia'">
                                <el-input v-model="ruleForm.createTime" autocomplete="off" placeholder="创建时间"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="维保公司编号" class="input" v-if="tableName=='weibaogongsi'">
                                <el-input v-model="ruleForm.weibaogongsiUuidNumber" autocomplete="off" placeholder="维保公司编号"  />
                           </el-form-item>
                        -->
                        <el-form-item label="维保公司名称" class="input" v-if="tableName=='weibaogongsi'">
                            <el-input v-model="ruleForm.weibaogongsiName" autocomplete="off" placeholder="维保公司名称"  />
                        </el-form-item>
                        <!--
                            <el-form-item label="负责人" class="input" v-if="tableName=='weibaogongsi'">
                                <el-input v-model="ruleForm.weibaogongsiFuzeren" autocomplete="off" placeholder="负责人"  />
                           </el-form-item>
                        -->
                        <el-form-item label="维保公司手机号" class="input" v-if="tableName=='weibaogongsi'">
                            <el-input v-model="ruleForm.weibaogongsiPhone" autocomplete="off" placeholder="维保公司手机号"  />
                        </el-form-item>
                        <!--
                            <el-form-item v-if="weibaogongsiPhotoFlag">
                            </el-form-item>
                            <el-form-item label="公司logo" class="input" v-if="tableName=='weibaogongsi'">
                                    <file-upload
                                        tip="点击上传公司logo"
                                        action="file/upload"
                                        :limit="1"
                                        :multiple="true"
                                        :fileUrls="ruleForm.weibaogongsiPhoto?$base.url+ruleForm.weibaogongsiPhoto:''"
                                        @change="weibaogongsiPhotoUploadChange"
                                    ></file-upload>
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="公司位置" class="input" v-if="tableName=='weibaogongsi'">
                                <el-input v-model="ruleForm.weibaogongsiAddress" autocomplete="off" placeholder="公司位置"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="账户状态" class="input" v-if="tableName=='weibaogongsi'">
                                <el-input v-model="ruleForm.jinyongTypes" autocomplete="off" placeholder="账户状态"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="创建时间" class="input" v-if="tableName=='weibaogongsi'">
                                <el-input v-model="ruleForm.createTime" autocomplete="off" placeholder="创建时间"  />
                           </el-form-item>
                        -->
                       <!--<el-form-item class="select" label="维保公司">
                            <el-select style="width: 399px;height: 40px;" v-model="ruleForm.weibaogongsiId" placeholder="请选择维保公司">
                                <el-option
                                        v-for="(item,index) in weibaogongsiOptions"
                                        v-bind:key="item.id"
                                        :label="item.weibaogongsiName"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>-->
                        <!--
                            <el-form-item label="维保人员编号" class="input" v-if="tableName=='weibaorenyuan'">
                                <el-input v-model="ruleForm.weibaorenyuanUuidNumber" autocomplete="off" placeholder="维保人员编号"  />
                           </el-form-item>
                        -->
                        <el-form-item label="维保人员姓名" class="input" v-if="tableName=='weibaorenyuan'">
                            <el-input v-model="ruleForm.weibaorenyuanName" autocomplete="off" placeholder="维保人员姓名"  />
                        </el-form-item>
                        <el-form-item label="维保人员手机号" class="input" v-if="tableName=='weibaorenyuan'">
                            <el-input v-model="ruleForm.weibaorenyuanPhone" autocomplete="off" placeholder="维保人员手机号"  />
                        </el-form-item>
                        <el-form-item label="维保人员身份证号" class="input" v-if="tableName=='weibaorenyuan'">
                            <el-input v-model="ruleForm.weibaorenyuanIdNumber" autocomplete="off" placeholder="维保人员身份证号"  />
                        </el-form-item>
                        <!--
                            <el-form-item v-if="weibaorenyuanPhotoFlag">
                            </el-form-item>
                            <el-form-item label="维保人员头像" class="input" v-if="tableName=='weibaorenyuan'">
                                    <file-upload
                                        tip="点击上传维保人员头像"
                                        action="file/upload"
                                        :limit="1"
                                        :multiple="true"
                                        :fileUrls="ruleForm.weibaorenyuanPhoto?$base.url+ruleForm.weibaorenyuanPhoto:''"
                                        @change="weibaorenyuanPhotoUploadChange"
                                    ></file-upload>
                           </el-form-item>
                        -->
                        <el-form-item label="维保人员邮箱" class="input" v-if="tableName=='weibaorenyuan'">
                            <el-input v-model="ruleForm.weibaorenyuanEmail" autocomplete="off" placeholder="维保人员邮箱"  />
                        </el-form-item>
                        <!--
                            <el-form-item label="账户状态" class="input" v-if="tableName=='weibaorenyuan'">
                                <el-input v-model="ruleForm.jinyongTypes" autocomplete="off" placeholder="账户状态"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="创建时间" class="input" v-if="tableName=='weibaorenyuan'">
                                <el-input v-model="ruleForm.createTime" autocomplete="off" placeholder="创建时间"  />
                           </el-form-item>
                        -->
                    <div style="display: flex;flex-wrap: wrap;width: 100%;justify-content: center;">
                        <el-button class="btn" type="primary" @click="login()">注册</el-button>
                        <el-button class="btn close" type="primary" @click="close()">取消</el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                },
                tableName:"",
                rules: {},
                sexTypesOptions : [],
                weibaogongsiOptions : [],
                chuanjiaPhotoFlag:false,//用于刷新文件上传
                weibaogongsiPhotoFlag:false,//用于刷新文件上传
                weibaorenyuanPhotoFlag:false,//用于刷新文件上传
            };
        },
        mounted(){
            let table = this.$storage.get("loginTable");
            this.tableName = table;

            //级联表的下拉框查询

            this.$http({
                url: `weibaogongsi/page?page=1&limit=100`,
                method: "get"
            }).then(({ data }) => {
                if (data && data.code === 0) {
                    this.weibaogongsiOptions = data.data.list;
                }else {
                    alert(data.msg);
                }
            });

        },
        methods: {
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            chuanjiaPhotoUploadChange(fileUrls) {
               this.ruleForm.chuanjiaPhoto = fileUrls;
                if(this.chuanjiaPhotoFlag){
                    this.chuanjiaPhotoFlag=false;
                }else{
                    this.chuanjiaPhotoFlag=true;
                }
            },
            weibaogongsiPhotoUploadChange(fileUrls) {
               this.ruleForm.weibaogongsiPhoto = fileUrls;
                if(this.weibaogongsiPhotoFlag){
                    this.weibaogongsiPhotoFlag=false;
                }else{
                    this.weibaogongsiPhotoFlag=true;
                }
            },
            weibaorenyuanPhotoUploadChange(fileUrls) {
               this.ruleForm.weibaorenyuanPhoto = fileUrls;
                if(this.weibaorenyuanPhotoFlag){
                    this.weibaorenyuanPhotoFlag=false;
                }else{
                    this.weibaorenyuanPhotoFlag=true;
                }
            },
            close(){
                this.$router.push({ path: "/login" });
            },
            // 注册
            login() {

                            if((!this.ruleForm.username)){
                                this.$message.error('账号不能为空');
                                return
                            }
                            if((!this.ruleForm.password)){
                                this.$message.error('密码不能为空');
                                return
                            }
                            if((!this.ruleForm.repetitionPassword)){
                                this.$message.error('重复密码不能为空');
                                return
                            }
                            if(this.ruleForm.repetitionPassword != this.ruleForm.password){
                                this.$message.error('密码和重复密码不一致');
                                return
                            }
                            // chuanjia 中的 船家编号 判空处理
                            // if('chuanjia' == this.tableName && (this.ruleForm.chuanjiaUuidNumber== null ||this.ruleForm.chuanjiaUuidNumber== "")){
                            //     this.$message.error("船家编号不能为空");
                            //     return
                            // }
                            if((!this.ruleForm.chuanjiaName)&& 'chuanjia'==this.tableName){
                                this.$message.error('船家姓名不能为空');
                                return
                            }
                             if('chuanjia' == this.tableName && this.ruleForm.chuanjiaPhone&&(!this.$validate.isMobile(this.ruleForm.chuanjiaPhone))){
                                 this.$message.error('手机应输入手机格式');
                                 return
                             }
                            if((!this.ruleForm.chuanjiaIdNumber)&& 'chuanjia'==this.tableName){
                                this.$message.error('船家身份证号不能为空');
                                return
                            }
                            // chuanjia 中的 船家头像 判空处理
                            // if('chuanjia' == this.tableName && (this.ruleForm.chuanjiaPhoto== null ||this.ruleForm.chuanjiaPhoto== "")){
                            //     this.$message.error("船家头像不能为空");
                            //     return
                            // }
                            if('chuanjia' == this.tableName && this.ruleForm.chuanjiaEmail&&(!this.$validate.isEmail(this.ruleForm.chuanjiaEmail))){
                                this.$message.error("邮箱应输入邮件格式");
                                return
                            }
                            // chuanjia 中的 账户状态 判空处理
                            // if('chuanjia' == this.tableName && (this.ruleForm.jinyongTypes== null ||this.ruleForm.jinyongTypes== "")){
                            //     this.$message.error("账户状态不能为空");
                            //     return
                            // }
                            // chuanjia 中的 创建时间 判空处理
                            // if('chuanjia' == this.tableName && (this.ruleForm.createTime== null ||this.ruleForm.createTime== "")){
                            //     this.$message.error("创建时间不能为空");
                            //     return
                            // }
                            // weibaogongsi 中的 维保公司编号 判空处理
                            // if('weibaogongsi' == this.tableName && (this.ruleForm.weibaogongsiUuidNumber== null ||this.ruleForm.weibaogongsiUuidNumber== "")){
                            //     this.$message.error("维保公司编号不能为空");
                            //     return
                            // }
                            if((!this.ruleForm.weibaogongsiName)&& 'weibaogongsi'==this.tableName){
                                this.$message.error('维保公司名称不能为空');
                                return
                            }
                            // weibaogongsi 中的 负责人 判空处理
                            // if('weibaogongsi' == this.tableName && (this.ruleForm.weibaogongsiFuzeren== null ||this.ruleForm.weibaogongsiFuzeren== "")){
                            //     this.$message.error("负责人不能为空");
                            //     return
                            // }
                             if('weibaogongsi' == this.tableName && this.ruleForm.weibaogongsiPhone&&(!this.$validate.isMobile(this.ruleForm.weibaogongsiPhone))){
                                 this.$message.error('手机应输入手机格式');
                                 return
                             }
                            // weibaogongsi 中的 公司logo 判空处理
                            // if('weibaogongsi' == this.tableName && (this.ruleForm.weibaogongsiPhoto== null ||this.ruleForm.weibaogongsiPhoto== "")){
                            //     this.$message.error("公司logo不能为空");
                            //     return
                            // }
                            // weibaogongsi 中的 公司位置 判空处理
                            // if('weibaogongsi' == this.tableName && (this.ruleForm.weibaogongsiAddress== null ||this.ruleForm.weibaogongsiAddress== "")){
                            //     this.$message.error("公司位置不能为空");
                            //     return
                            // }
                            // weibaogongsi 中的 账户状态 判空处理
                            // if('weibaogongsi' == this.tableName && (this.ruleForm.jinyongTypes== null ||this.ruleForm.jinyongTypes== "")){
                            //     this.$message.error("账户状态不能为空");
                            //     return
                            // }
                            // weibaogongsi 中的 创建时间 判空处理
                            // if('weibaogongsi' == this.tableName && (this.ruleForm.createTime== null ||this.ruleForm.createTime== "")){
                            //     this.$message.error("创建时间不能为空");
                            //     return
                            // }
                            //// 维保人员 的 维保公司
                            // if((!this.ruleForm.weibaogongsiId)&& 'weibaorenyuan'==this.tableName){
                            //     this.$message.error('维保公司不能为空');
                            //     return
                            // }
                            // weibaorenyuan 中的 维保人员编号 判空处理
                            // if('weibaorenyuan' == this.tableName && (this.ruleForm.weibaorenyuanUuidNumber== null ||this.ruleForm.weibaorenyuanUuidNumber== "")){
                            //     this.$message.error("维保人员编号不能为空");
                            //     return
                            // }
                            if((!this.ruleForm.weibaorenyuanName)&& 'weibaorenyuan'==this.tableName){
                                this.$message.error('维保人员姓名不能为空');
                                return
                            }
                             if('weibaorenyuan' == this.tableName && this.ruleForm.weibaorenyuanPhone&&(!this.$validate.isMobile(this.ruleForm.weibaorenyuanPhone))){
                                 this.$message.error('手机应输入手机格式');
                                 return
                             }
                            if((!this.ruleForm.weibaorenyuanIdNumber)&& 'weibaorenyuan'==this.tableName){
                                this.$message.error('维保人员身份证号不能为空');
                                return
                            }
                            // weibaorenyuan 中的 维保人员头像 判空处理
                            // if('weibaorenyuan' == this.tableName && (this.ruleForm.weibaorenyuanPhoto== null ||this.ruleForm.weibaorenyuanPhoto== "")){
                            //     this.$message.error("维保人员头像不能为空");
                            //     return
                            // }
                            if('weibaorenyuan' == this.tableName && this.ruleForm.weibaorenyuanEmail&&(!this.$validate.isEmail(this.ruleForm.weibaorenyuanEmail))){
                                this.$message.error("邮箱应输入邮件格式");
                                return
                            }
                            // weibaorenyuan 中的 账户状态 判空处理
                            // if('weibaorenyuan' == this.tableName && (this.ruleForm.jinyongTypes== null ||this.ruleForm.jinyongTypes== "")){
                            //     this.$message.error("账户状态不能为空");
                            //     return
                            // }
                            // weibaorenyuan 中的 创建时间 判空处理
                            // if('weibaorenyuan' == this.tableName && (this.ruleForm.createTime== null ||this.ruleForm.createTime== "")){
                            //     this.$message.error("创建时间不能为空");
                            //     return
                            // }
                this.$http({
                    url: `${this.tableName}/register`,
                    method: "post",
                    data:this.ruleForm
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                    this.$message({
                        message: "注册成功,请登录后在个人中心页面补充个人数据",
                        type: "success",
                        duration: 1500,
                        onClose: () => {
                        this.$router.replace({ path: "/login" });
                }
                });
                } else {
                    this.$message.error(data.msg);
                }
            });
            }
        }
    };
</script>
<style lang="scss" scoped>
	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.h1 {
		margin-top: 10px;
	}

	body {
		padding: 0;
		margin: 0;
	}


	.nk-navigation {
		margin-top: 15px;

		a {
			display: inline-block;
			color: #fff;
			background: rgba(255, 255, 255, .2);
			width: 100px;
			height: 50px;
			border-radius: 30px;
			text-align: center;
			display: flex;
			align-items: center;
			margin: 0 auto;
			justify-content: center;
			padding: 0 20px;
		}

		.icon {
			margin-left: 10px;
			width: 30px;
			height: 30px;
		}
	}

	.register-container {
		margin-top: 10px;

		a {
			display: inline-block;
			color: #fff;
			max-width: 500px;
			height: 50px;
			border-radius: 30px;
			text-align: center;
			display: flex;
			align-items: center;
			margin: 0 auto;
			justify-content: center;
			padding: 0 20px;

			div {
				margin-left: 10px;
			}
		}
	}

	.container {
		height: 100vh;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url(/chuanboweixiu/img/back-img-bg.jpg);



		.login-form {
			right: 50%;
			top: 50%;
			transform: translate3d(50%, -50%, 0);
			border-radius: 10px;
			background-color: rgba(255,255,255,.5);
			font-size: 14px;
			font-weight: 500;
      box-sizing: border-box;

			width: 420px;
			height: auto;
			padding: 15px;
			margin: 0 auto;
			border-radius: 30px;
			border-width: 10px;
			border-style: solid;
			border-color: var(--publicMainColor);
			background-color: rgba(240, 240, 255, 1);
			box-shadow: 0 0 0px rgba(255,0,0,.1);

			.h1 {
				width: 90%;
				height: auto;
				line-height:auto;
				color: #000;
				font-size: 28px;
				padding: 0;
				margin: 20px auto;
				border-radius: 0;
				border-width: 0;
				border-style: solid;
				border-color: rgba(255,0,0,0);
				background-color: rgba(255,0,0,0);
				box-shadow: 0 0 6px rgba(255,0,0,0);
				text-align: center;
			}

			.rgs-form {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

        .el-form-item {
          width: 100%;
          display: flex;

          & /deep/ .el-form-item__content {
            flex: 1;
            display: flex;
          }
        }

				.input {
          width: 100%;
          height:auto;
          padding: 0;
          margin: 0 0 12px 0;
          border-radius: 0;
          border-width: 0;
          border-style: solid;
          border-color: rgba(255,0,0,0);
          background-color: rgba(255,0,0,0);
          box-shadow: 0 0 6px rgba(255,0,0,0);

					& /deep/ .el-form-item__label {
            width: 84px;
            line-height:44px;
            color: #606266;
            font-size: 14px;
            padding: 0 10px 0 0;
            margin: 0;
            border-radius: 0;
            border-width: 0;
            border-style: solid;
            border-color: rgba(255,0,0,0);
            background-color: rgba(255,0,0,0);
            box-shadow: 0 0 6px rgba(255,0,0,0);
					}

					& /deep/ .el-input__inner {
            width: 100%;
            height: 44px;
            line-height:44px;
            color: #606266;
            font-size: 14px;
            padding: 0 12px;
            margin: 0;
            border-radius: 4px;
            border-width: 1px;
            border-style: solid;
            border-color: #606266;
            background-color: #fff;
            box-shadow: 0 0 6px rgba(255,0,0,0);
            text-align: left;
					}
				}

        .send-code {
          & /deep/ .el-input__inner {
            width: 200px;
            height: 44px;
            line-height:44px;
            color: #606266;
            font-size: 14px;
            padding: 0 12px;
            margin: 0;
            border-radius: 0;
            border-width: 1;
            border-style: solid;
            border-color: #606266;
            background-color: #fff;
            box-shadow: 0 0 6px rgba(255,0,0,0);
            text-align: left;
          }

          .register-code {
            margin: 0;
            padding: 0;
            width: 86px;
            height: 44px;
            line-height:44px;
            color: #fff;
            font-size: 14px;
            border-width: 1px 1px 1px 0;
            border-style: solid;
            border-color: rgba(0, 0, 0, 1);
            border-radius: 0;
            background-color: var(--publicSubColor);
            box-shadow: 0 0 6px rgba(255,0,0,0);
          }
        }

				.btn {
					margin: 0 10px;
          padding: 0;
					width: 88px;
					height: 44px;
          line-height:44px;
					color: #fff;
					font-size: 14px;
					border-width: 1px;
					border-style: solid;
					border-color: var(--publicMainColor);
					border-radius: 4px;
					background-color: var(--publicMainColor);
          box-shadow: 0 0 6px rgba(255,0,0,0);
				}

				.close {
          margin: 0 10px;
          padding: 0;
          width: 88px;
          height: 44px;
          line-height:44px;
          color: var(--publicMainColor);
          font-size: 14px;
          border-width: 1px;
          border-style: solid;
          border-color: var(--publicMainColor);
          border-radius: 4px;
          background-color: #FFF;
          box-shadow: 0 0 6px rgba(255,0,0,0);
				}

			}
		}
	}
</style>


