<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="auto"
                >
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='weibaogongsi'">
                    <el-form-item class="select" v-if="type!='info'"  label="维保公司" prop="weibaogongsiId">
                        <el-select v-model="ruleForm.weibaogongsiId" :disabled="ro.weibaogongsiId" filterable placeholder="请选择维保公司" @change="weibaogongsiChange">
                            <el-option
                                    v-for="(item,index) in weibaogongsiOptions"
                                    v-bind:key="item.id"
                                    :label="item.weibaogongsiName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='weibaogongsi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="维保公司编号" prop="weibaogongsiUuidNumber">
                        <el-input v-model="weibaogongsiForm.weibaogongsiUuidNumber"
                                  placeholder="维保公司编号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="维保公司编号" prop="weibaogongsiUuidNumber">
                            <el-input v-model="ruleForm.weibaogongsiUuidNumber"
                                      placeholder="维保公司编号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='weibaogongsi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="维保公司名称" prop="weibaogongsiName">
                        <el-input v-model="weibaogongsiForm.weibaogongsiName"
                                  placeholder="维保公司名称" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="维保公司名称" prop="weibaogongsiName">
                            <el-input v-model="ruleForm.weibaogongsiName"
                                      placeholder="维保公司名称" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='weibaogongsi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="负责人" prop="weibaogongsiFuzeren">
                        <el-input v-model="weibaogongsiForm.weibaogongsiFuzeren"
                                  placeholder="负责人" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="负责人" prop="weibaogongsiFuzeren">
                            <el-input v-model="ruleForm.weibaogongsiFuzeren"
                                      placeholder="负责人" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='weibaogongsi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="维保公司手机号" prop="weibaogongsiPhone">
                        <el-input v-model="weibaogongsiForm.weibaogongsiPhone"
                                  placeholder="维保公司手机号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="维保公司手机号" prop="weibaogongsiPhone">
                            <el-input v-model="ruleForm.weibaogongsiPhone"
                                      placeholder="维保公司手机号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='weibaogongsi' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.weibaogongsiPhoto" label="公司logo" prop="weibaogongsiPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (weibaogongsiForm.weibaogongsiPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.weibaogongsiPhoto" label="公司logo" prop="weibaogongsiPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.weibaogongsiPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='weibaogongsi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="公司位置" prop="weibaogongsiAddress">
                        <el-input v-model="weibaogongsiForm.weibaogongsiAddress"
                                  placeholder="公司位置" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="公司位置" prop="weibaogongsiAddress">
                            <el-input v-model="ruleForm.weibaogongsiAddress"
                                      placeholder="公司位置" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='weibaogongsi' ">
                    <el-form-item class="input" v-if="type!='info'"  label="账户状态" prop="jinyongValue">
                        <el-input v-model="weibaogongsiForm.jinyongValue"
                                  placeholder="账户状态" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="账户状态" prop="jinyongValue">
                            <el-input v-model="ruleForm.jinyongValue"
                                      placeholder="账户状态" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
            <input id="weibaogongsiId" name="weibaogongsiId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="账户" prop="username">
                       <el-input v-model="ruleForm.username"
                                 placeholder="账户" clearable  :readonly="ro.username"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="账户" prop="username">
                           <el-input v-model="ruleForm.username"
                                     placeholder="账户" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="维保人员编号" prop="weibaorenyuanUuidNumber">
                       <el-input v-model="ruleForm.weibaorenyuanUuidNumber"
                                 placeholder="维保人员编号" clearable  :readonly="ro.weibaorenyuanUuidNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="维保人员编号" prop="weibaorenyuanUuidNumber">
                           <el-input v-model="ruleForm.weibaorenyuanUuidNumber"
                                     placeholder="维保人员编号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="维保人员姓名" prop="weibaorenyuanName">
                       <el-input v-model="ruleForm.weibaorenyuanName"
                                 placeholder="维保人员姓名" clearable  :readonly="ro.weibaorenyuanName"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="维保人员姓名" prop="weibaorenyuanName">
                           <el-input v-model="ruleForm.weibaorenyuanName"
                                     placeholder="维保人员姓名" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="维保人员手机号" prop="weibaorenyuanPhone">
                       <el-input v-model="ruleForm.weibaorenyuanPhone"
                                 placeholder="维保人员手机号" clearable  :readonly="ro.weibaorenyuanPhone"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="维保人员手机号" prop="weibaorenyuanPhone">
                           <el-input v-model="ruleForm.weibaorenyuanPhone"
                                     placeholder="维保人员手机号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="维保人员身份证号" prop="weibaorenyuanIdNumber">
                       <el-input v-model="ruleForm.weibaorenyuanIdNumber"
                                 placeholder="维保人员身份证号" clearable  :readonly="ro.weibaorenyuanIdNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="维保人员身份证号" prop="weibaorenyuanIdNumber">
                           <el-input v-model="ruleForm.weibaorenyuanIdNumber"
                                     placeholder="维保人员身份证号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="upload" v-if="type!='info' && !ro.weibaorenyuanPhoto" label="维保人员头像" prop="weibaorenyuanPhoto">
                        <file-upload
                            tip="点击上传维保人员头像"
                            action="file/upload"
                            :limit="3"
                            :multiple="true"
                            :fileUrls="ruleForm.weibaorenyuanPhoto?$base.url+ruleForm.weibaorenyuanPhoto:''"
                            @change="weibaorenyuanPhotoUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.weibaorenyuanPhoto" label="维保人员头像" prop="weibaorenyuanPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.weibaorenyuanPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="性别" prop="sexTypes">
                        <el-select v-model="ruleForm.sexTypes" :disabled="ro.sexTypes" placeholder="请选择性别">
                            <el-option
                                v-for="(item,index) in sexTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="性别" prop="sexValue">
                        <el-input v-model="ruleForm.sexValue"
                            placeholder="性别" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="维保人员邮箱" prop="weibaorenyuanEmail">
                       <el-input v-model="ruleForm.weibaorenyuanEmail"
                                 placeholder="维保人员邮箱" clearable  :readonly="ro.weibaorenyuanEmail"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="维保人员邮箱" prop="weibaorenyuanEmail">
                           <el-input v-model="ruleForm.weibaorenyuanEmail"
                                     placeholder="维保人员邮箱" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="账户状态" prop="jinyongTypes">
                        <el-select v-model="ruleForm.jinyongTypes" :disabled="ro.jinyongTypes" placeholder="请选择账户状态">
                            <el-option
                                v-for="(item,index) in jinyongTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="账户状态" prop="jinyongValue">
                        <el-input v-model="ruleForm.jinyongValue"
                            placeholder="账户状态" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    import utilsJs, {getYearFormat,getMonthFormat,getDateFormat,getDatetimeFormat} from "../../../utils/utils.js";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                userId:"",//当前登录人的id
                weibaogongsiForm: {},
                ro:{
                    weibaogongsiId: false,
                    username: false,
                    password: false,
                    weibaorenyuanUuidNumber: true,
                    weibaorenyuanName: false,
                    weibaorenyuanPhone: false,
                    weibaorenyuanIdNumber: false,
                    weibaorenyuanPhoto: false,
                    sexTypes: false,
                    weibaorenyuanEmail: false,
                    jinyongTypes: false,
                },
                ruleForm: {
                    weibaogongsiId: '',
                    username: '',
                    password: '',
                    weibaorenyuanUuidNumber: new Date().getTime(),
                    weibaorenyuanName: '',
                    weibaorenyuanPhone: '',
                    weibaorenyuanIdNumber: '',
                    weibaorenyuanPhoto: '',
                    sexTypes: '',
                    weibaorenyuanEmail: '',
                    jinyongTypes: '',
                },
                sexTypesOptions : [],
                jinyongTypesOptions : [],
                weibaogongsiOptions : [],
                rules: {
                   weibaogongsiId: [
                              { required: true, message: '维保公司不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   username: [
                              { required: true, message: '账户不能为空', trigger: 'blur' },
                          ],
                   password: [
                              { required: true, message: '密码不能为空', trigger: 'blur' },
                          ],
                   weibaorenyuanUuidNumber: [
                              { required: true, message: '维保人员编号不能为空', trigger: 'blur' },
                          ],
                   weibaorenyuanName: [
                              { required: true, message: '维保人员姓名不能为空', trigger: 'blur' },
                          ],
                   weibaorenyuanPhone: [
                              {  required: true, message: '维保人员手机号不能为空', trigger: 'blur' },
                              {  pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
                                 message: '维保人员手机号格式不对',
                                 trigger: 'blur'
                              }
                          ],
                   weibaorenyuanIdNumber: [
                              { required: true, message: '维保人员身份证号不能为空', trigger: 'blur' },
                              { pattern: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
                                message: '维保人员身份证号格式有误！',
                                trigger: 'blur'
                              }
                          ],
                   weibaorenyuanPhoto: [
                              { required: true, message: '维保人员头像不能为空', trigger: 'blur' },
                          ],
                   sexTypes: [
                              { required: true, message: '性别不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   weibaorenyuanEmail: [
                              { required: true, message: '维保人员邮箱不能为空', trigger: 'blur' },
                              { pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
                                message: '维保人员邮箱只能是邮箱格式',
                                trigger: 'blur'
                              }
                          ],
                   jinyongTypes: [
                              { required: true, message: '账户状态不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");
            this.userId = this.$storage.get("userId");


            if (this.role != "管理员"){
            }else{
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=sex_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.sexTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=jinyong_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.jinyongTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `weibaogongsi/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.weibaogongsiOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            weibaogongsiChange(id){
                this.$http({
                    url: `weibaogongsi/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.weibaogongsiForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `weibaorenyuan/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                        _this.weibaogongsiChange(data.data.weibaogongsiId)
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.$http({
                            url:`weibaorenyuan/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.weibaorenyuanCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.weibaorenyuanCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片
            weibaorenyuanPhotoUploadChange(fileUrls){
                this.ruleForm.weibaorenyuanPhoto = fileUrls;
                this.addEditUploadStyleChange()
            },

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
	  height: 500px;

	  & /deep/ .ql-container {
		  height: 310px;
	  }
	}
	.amap-wrapper {
	  width: 100%;.editor{
	  height: 500px;

	  & /deep/ .ql-container {
		  height: 310px;
	  }
	}
	.amap-wrapper {
	  width: 100%;
	  height: 500px;
	}
	.search-box {
	  position: absolute;
	}
	.addEdit-block {
		margin: -10px;
	}
	.detail-form-content {
		padding: 12px;
		background-color: transparent;
	}
	.btn .el-button {
	  padding: 0;
	}
}</style>

