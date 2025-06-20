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
                <el-col :span="12"  v-if="sessionTable !='chuanjia'">
                    <el-form-item class="select" v-if="type!='info'"  label="船家" prop="chuanjiaId">
                        <el-select v-model="ruleForm.chuanjiaId" :disabled="ro.chuanjiaId" filterable placeholder="请选择船家" @change="chuanjiaChange">
                            <el-option
                                    v-for="(item,index) in chuanjiaOptions"
                                    v-bind:key="item.id"
                                    :label="item.chuanjiaName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='chuanjia' ">
                    <el-form-item class="input" v-if="type!='info'"  label="船家编号" prop="chuanjiaUuidNumber">
                        <el-input v-model="chuanjiaForm.chuanjiaUuidNumber"
                                  placeholder="船家编号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="船家编号" prop="chuanjiaUuidNumber">
                            <el-input v-model="ruleForm.chuanjiaUuidNumber"
                                      placeholder="船家编号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='chuanjia' ">
                    <el-form-item class="input" v-if="type!='info'"  label="船家姓名" prop="chuanjiaName">
                        <el-input v-model="chuanjiaForm.chuanjiaName"
                                  placeholder="船家姓名" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="船家姓名" prop="chuanjiaName">
                            <el-input v-model="ruleForm.chuanjiaName"
                                      placeholder="船家姓名" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='chuanjia' ">
                    <el-form-item class="input" v-if="type!='info'"  label="船家手机号" prop="chuanjiaPhone">
                        <el-input v-model="chuanjiaForm.chuanjiaPhone"
                                  placeholder="船家手机号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="船家手机号" prop="chuanjiaPhone">
                            <el-input v-model="ruleForm.chuanjiaPhone"
                                      placeholder="船家手机号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='chuanjia' ">
                    <el-form-item class="input" v-if="type!='info'"  label="船家身份证号" prop="chuanjiaIdNumber">
                        <el-input v-model="chuanjiaForm.chuanjiaIdNumber"
                                  placeholder="船家身份证号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="船家身份证号" prop="chuanjiaIdNumber">
                            <el-input v-model="ruleForm.chuanjiaIdNumber"
                                      placeholder="船家身份证号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='chuanjia' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.chuanjiaPhoto" label="船家头像" prop="chuanjiaPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (chuanjiaForm.chuanjiaPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.chuanjiaPhoto" label="船家头像" prop="chuanjiaPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.chuanjiaPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='chuanjia' ">
                    <el-form-item class="input" v-if="type!='info'"  label="船家邮箱" prop="chuanjiaEmail">
                        <el-input v-model="chuanjiaForm.chuanjiaEmail"
                                  placeholder="船家邮箱" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="船家邮箱" prop="chuanjiaEmail">
                            <el-input v-model="ruleForm.chuanjiaEmail"
                                      placeholder="船家邮箱" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='chuanjia' ">
                    <el-form-item class="input" v-if="type!='info'"  label="账户状态" prop="jinyongValue">
                        <el-input v-model="chuanjiaForm.jinyongValue"
                                  placeholder="账户状态" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="账户状态" prop="jinyongValue">
                            <el-input v-model="ruleForm.jinyongValue"
                                      placeholder="账户状态" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
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
            <input id="chuanjiaId" name="chuanjiaId" type="hidden">
            <input id="weibaogongsiId" name="weibaogongsiId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="船舶编号" prop="chaunboUuidNumber">
                       <el-input v-model="ruleForm.chaunboUuidNumber"
                                 placeholder="船舶编号" clearable  :readonly="ro.chaunboUuidNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="船舶编号" prop="chaunboUuidNumber">
                           <el-input v-model="ruleForm.chaunboUuidNumber"
                                     placeholder="船舶编号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="船舶名字" prop="chaunboName">
                       <el-input v-model="ruleForm.chaunboName"
                                 placeholder="船舶名字" clearable  :readonly="ro.chaunboName"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="船舶名字" prop="chaunboName">
                           <el-input v-model="ruleForm.chaunboName"
                                     placeholder="船舶名字" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="upload" v-if="type!='info' && !ro.chaunboPhoto" label="船舶照片" prop="chaunboPhoto">
                        <file-upload
                            tip="点击上传船舶照片"
                            action="file/upload"
                            :limit="3"
                            :multiple="true"
                            :fileUrls="ruleForm.chaunboPhoto?$base.url+ruleForm.chaunboPhoto:''"
                            @change="chaunboPhotoUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.chaunboPhoto" label="船舶照片" prop="chaunboPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.chaunboPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="upload" v-if="type!='info' && !ro.chaunboFile" label="附件" prop="chaunboFile">
                        <file-upload
                                tip="点击上传附件"
                                action="file/upload"
                                :limit="3"
                                :multiple="true"
                                :fileUrls="ruleForm.chaunboFile?$base.url+ruleForm.chaunboFile:''"
                                @change="chaunboFileUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.chaunboFile" label="附件" prop="chaunboFile">
                            <a type="text" style="text-decoration:none" class="el-button" :href="$base.url+ruleForm.chaunboFile"  >附件下载</a>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="船舶类型" prop="chaunboTypes">
                        <el-select v-model="ruleForm.chaunboTypes" :disabled="ro.chaunboTypes" placeholder="请选择船舶类型">
                            <el-option
                                v-for="(item,index) in chaunboTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="船舶类型" prop="chaunboValue">
                        <el-input v-model="ruleForm.chaunboValue"
                            placeholder="船舶类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="船舶状态" prop="chaunboZhuangtaiTypes">
                        <el-select v-model="ruleForm.chaunboZhuangtaiTypes" :disabled="ro.chaunboZhuangtaiTypes" placeholder="请选择船舶状态">
                            <el-option
                                v-for="(item,index) in chaunboZhuangtaiTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="船舶状态" prop="chaunboZhuangtaiValue">
                        <el-input v-model="ruleForm.chaunboZhuangtaiValue"
                            placeholder="船舶状态" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info' && !ro.chaunboContent"  label="船舶介绍" prop="chaunboContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.chaunboContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.chaunboContent" label="船舶介绍" prop="chaunboContent">
                            <span v-html="ruleForm.chaunboContent"></span>
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
                chuanjiaForm: {},
                weibaogongsiForm: {},
                ro:{
                    chuanjiaId: false,
                    weibaogongsiId: false,
                    chaunboUuidNumber: true,
                    chaunboName: false,
                    chaunboPhoto: false,
                    chaunboFile: false,
                    chaunboTypes: false,
                    chaunboZhuangtaiTypes: false,
                    chaunboContent: false,
                    insertTime: false,
                },
                ruleForm: {
                    chuanjiaId: '',
                    weibaogongsiId: '',
                    chaunboUuidNumber: new Date().getTime(),
                    chaunboName: '',
                    chaunboPhoto: '',
                    chaunboFile: '',
                    chaunboTypes: '',
                    chaunboZhuangtaiTypes: '',
                    chaunboContent: '',
                    insertTime: '',
                },
                chaunboTypesOptions : [],
                chaunboZhuangtaiTypesOptions : [],
                chuanjiaOptions : [],
                weibaogongsiOptions : [],
                rules: {
                   chuanjiaId: [
                              { required: true, message: '船家不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   weibaogongsiId: [
                              { required: true, message: '维保公司不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   chaunboUuidNumber: [
                              { required: true, message: '船舶编号不能为空', trigger: 'blur' },
                          ],
                   chaunboName: [
                              { required: true, message: '船舶名字不能为空', trigger: 'blur' },
                          ],
                   chaunboPhoto: [
                              { required: true, message: '船舶照片不能为空', trigger: 'blur' },
                          ],
                   chaunboFile: [
                              { required: true, message: '附件不能为空', trigger: 'blur' },
                          ],
                   chaunboTypes: [
                              { required: true, message: '船舶类型不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   chaunboZhuangtaiTypes: [
                              { required: true, message: '船舶状态不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   chaunboContent: [
                              { required: true, message: '船舶介绍不能为空', trigger: 'blur' },
                          ],
                   insertTime: [
                              { required: true, message: '上传时间不能为空', trigger: 'blur' },
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
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=chaunbo_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.chaunboTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=chaunbo_zhuangtai_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.chaunboZhuangtaiTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `chuanjia/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.chuanjiaOptions = data.data.list;
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
            chuanjiaChange(id){
                this.$http({
                    url: `chuanjia/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.chuanjiaForm = data.data;
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
                    url: `chaunbo/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                        _this.chuanjiaChange(data.data.chuanjiaId)
                        _this.weibaogongsiChange(data.data.weibaogongsiId)
                        _this.ruleForm.chaunboContent = _this.ruleForm.chaunboContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.ruleForm.chaunboContent = this.ruleForm.chaunboContent.replaceAll(this.$base.url,"");
                        this.$http({
                            url:`chaunbo/${!this.ruleForm.id ? "save" : "update"}`,
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
                                        this.parent.chaunboCrossAddOrUpdateFlag = false;
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
                this.parent.chaunboCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片
            chaunboPhotoUploadChange(fileUrls){
                this.ruleForm.chaunboPhoto = fileUrls;
                this.addEditUploadStyleChange()
            },
            chaunboFileUploadChange(fileUrls){
                this.ruleForm.chaunboFile = fileUrls;
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

