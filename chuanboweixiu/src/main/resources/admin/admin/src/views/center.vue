<template>
  <div>
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      label-width="auto"
    >  
     <el-row>
                    <el-col :span="12">
           <el-form-item v-if="flag=='chuanjia'"  label='船家编号' prop="chuanjiaUuidNumber">
               <el-input v-model="ruleForm.chuanjiaUuidNumber"disabled="true"   placeholder='船家编号' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='chuanjia'"  label='船家姓名' prop="chuanjiaName">
               <el-input v-model="ruleForm.chuanjiaName"  placeholder='船家姓名' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='chuanjia'"  label='船家手机号' prop="chuanjiaPhone">
               <el-input v-model="ruleForm.chuanjiaPhone"  placeholder='船家手机号' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='chuanjia'"  label='船家身份证号' prop="chuanjiaIdNumber">
               <el-input v-model="ruleForm.chuanjiaIdNumber"  placeholder='船家身份证号' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='chuanjia'" label='船家头像' prop="chuanjiaPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.chuanjiaPhoto?$base.url+ruleForm.chuanjiaPhoto:''"
                         @change="chuanjiaPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='chuanjia'"  label='船家邮箱' prop="chuanjiaEmail">
               <el-input v-model="ruleForm.chuanjiaEmail"  placeholder='船家邮箱' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='weibaogongsi'"  label='维保公司编号' prop="weibaogongsiUuidNumber">
               <el-input v-model="ruleForm.weibaogongsiUuidNumber"disabled="true"   placeholder='维保公司编号' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='weibaogongsi'"  label='维保公司名称' prop="weibaogongsiName">
               <el-input v-model="ruleForm.weibaogongsiName"  placeholder='维保公司名称' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='weibaogongsi'"  label='负责人' prop="weibaogongsiFuzeren">
               <el-input v-model="ruleForm.weibaogongsiFuzeren"  placeholder='负责人' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='weibaogongsi'"  label='维保公司手机号' prop="weibaogongsiPhone">
               <el-input v-model="ruleForm.weibaogongsiPhone"  placeholder='维保公司手机号' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='weibaogongsi'" label='公司logo' prop="weibaogongsiPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.weibaogongsiPhoto?$base.url+ruleForm.weibaogongsiPhoto:''"
                         @change="weibaogongsiPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='weibaogongsi'"  label='公司位置' prop="weibaogongsiAddress">
               <el-input v-model="ruleForm.weibaogongsiAddress"  placeholder='公司位置' clearable></el-input>
           </el-form-item>
         </el-col>
        <!--<el-col :span="12" v-if="flag=='weibaorenyuan'">
            <el-form-item class="select" label="维保公司" prop="weibaogongsiId">
                <el-select v-model="ruleForm.weibaogongsiId" filterable placeholder="请选择维保公司" @change="weibaogongsiChange">
                    <el-option
                            v-for="(item,index) in weibaogongsiOptions"
                            v-bind:key="item.id"
                                            :label="item.weibaogongsiName"
                            :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-col>-->
         <el-col :span="12">
             <el-form-item v-if="flag=='weibaorenyuan'" label='维保公司编号' prop="weibaogongsiUuidNumber">
                 <el-input v-model="weibaogongsiForm.weibaogongsiUuidNumber" disabled></el-input>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='weibaorenyuan'" label='维保公司名称' prop="weibaogongsiName">
                 <el-input v-model="weibaogongsiForm.weibaogongsiName" disabled></el-input>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='weibaorenyuan'" label='负责人' prop="weibaogongsiFuzeren">
                 <el-input v-model="weibaogongsiForm.weibaogongsiFuzeren" disabled></el-input>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='weibaorenyuan'" label='维保公司手机号' prop="weibaogongsiPhone">
                 <el-input v-model="weibaogongsiForm.weibaogongsiPhone" disabled></el-input>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='weibaorenyuan'" label='公司logo' prop="weibaogongsiPhoto">
                 <el-image
                     style="width: 100px; height: 100px"
                     :src="weibaogongsiForm.weibaogongsiPhoto?$base.url+weibaogongsiForm.weibaogongsiPhoto:''"
                     :fit="fit">
                 </el-image>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='weibaorenyuan'" label='公司位置' prop="weibaogongsiAddress">
                 <el-input v-model="weibaogongsiForm.weibaogongsiAddress" disabled></el-input>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='weibaorenyuan'" label='账户状态' prop="jinyongTypes">
                 <el-input v-model="weibaogongsiForm.jinyongValue" disabled></el-input>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='weibaorenyuan'"  label='维保人员编号' prop="weibaorenyuanUuidNumber">
               <el-input v-model="ruleForm.weibaorenyuanUuidNumber"disabled="true"   placeholder='维保人员编号' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='weibaorenyuan'"  label='维保人员姓名' prop="weibaorenyuanName">
               <el-input v-model="ruleForm.weibaorenyuanName"  placeholder='维保人员姓名' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='weibaorenyuan'"  label='维保人员手机号' prop="weibaorenyuanPhone">
               <el-input v-model="ruleForm.weibaorenyuanPhone"  placeholder='维保人员手机号' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='weibaorenyuan'"  label='维保人员身份证号' prop="weibaorenyuanIdNumber">
               <el-input v-model="ruleForm.weibaorenyuanIdNumber"  placeholder='维保人员身份证号' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='weibaorenyuan'" label='维保人员头像' prop="weibaorenyuanPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.weibaorenyuanPhoto?$base.url+ruleForm.weibaorenyuanPhoto:''"
                         @change="weibaorenyuanPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='weibaorenyuan'"  label='维保人员邮箱' prop="weibaorenyuanEmail">
               <el-input v-model="ruleForm.weibaorenyuanEmail"  placeholder='维保人员邮箱' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-form-item v-if="flag=='users'" label="用户名" prop="username">
             <el-input v-model="ruleForm.username"
                       placeholder="用户名"></el-input>
         </el-form-item>
         <el-col :span="12">
             <el-form-item v-if="flag!='users' &&( 1==2|| flag=='chuanjia'
|| flag=='weibaorenyuan')"  label="性别" prop="sexTypes">
                 <el-select v-model="ruleForm.sexTypes" placeholder="请选择性别">
                     <el-option
                             v-for="(item,index) in sexTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="24">
             <el-form-item>
                 <el-button type="primary" @click="onUpdateHandler">修 改</el-button>
             </el-form-item>
         </el-col>
     </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
        ruleForm: {},
        flag: '',
        usersFlag: false,
        // sexTypesOptions : [],
// 注册表 船家
    // 注册的类型字段 船家
        // 性别
        sexTypesOptions : [],
        // 账户状态
        jinyongTypesOptions : [],
// 注册表 维保公司
    // 注册的类型字段 维保公司
        // 账户状态
        jinyongTypesOptions : [],
// 注册表 维保人员
    // 注册的类型字段 维保人员
        // 性别
        sexTypesOptions : [],
        // 账户状态
        jinyongTypesOptions : [],
    // 注册的级联表 维保人员
        // 维保公司列表
        weibaogongsiOptions : [],
        weibaogongsiForm:{},
    };
  },
  mounted() {
    //获取当前登录用户的信息
    var table = this.$storage.get("sessionTable");
    this.sessionTable = this.$storage.get("sessionTable");
    this.role = this.$storage.get("role");
    if (this.role != "管理员"){
    }

    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
// 注册表 船家
// 注册表 维保公司
// 注册表 维保人员
    // 注册的级联表 维保人员
        if(table == 'weibaorenyuan'){
            this.weibaogongsiChange(this.ruleForm.weibaogongsiId);
        }
      } else {
        this.$message.error(data.msg);
      }
    });

// 注册表 船家 的级联表
// 注册表 维保公司 的级联表
// 注册表 维保人员 的级联表
    // 注册的级联表 维保人员
        // 维保公司列表
    this.$http({
        url: `weibaogongsi/page?page=1&limit=100`,
        method: "get"
    }).then(({ data }) => {
        if (data && data.code === 0) {
        this.weibaogongsiOptions = data.data.list;
        }else{
            this.$message.error(data.msg);
        }
    });

      this.$http({
          url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=sex_types`,
          method: "get"
      }).then(({ data }) => {
          if (data && data.code === 0) {
              this.sexTypesOptions = data.data.list;
          } else {
              this.$message.error(data.msg);
          }
      });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=jinyong_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.jinyongTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=jinyong_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.jinyongTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=jinyong_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.jinyongTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
  },
  methods: {
    chongzhi() {
      this.$router.replace({ path: "/pay" });
    },
    tixian() {
      let _this=this;
      this.$confirm(`确定要提现么?`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
      }).then(() => {
          _this.ruleForm.newMoney=0;
          _this.$http({
              url: `${this.$storage.get("sessionTable")}/update`,
              method: "post",
              data: this.ruleForm
          }).then(({ data }) => {
              if (data && data.code === 0) {
                  _this.$message({message: "提现成功",type: "success",duration: 1500,onClose: () => {}});
              } else {this.$message.error(data.msg);}
          });
      });
    },
    chuanjiaPhotoUploadChange(fileUrls) {
        this.ruleForm.chuanjiaPhoto = fileUrls;
    },
    weibaogongsiPhotoUploadChange(fileUrls) {
        this.ruleForm.weibaogongsiPhoto = fileUrls;
    },
    weibaorenyuanPhotoUploadChange(fileUrls) {
        this.ruleForm.weibaorenyuanPhoto = fileUrls;
    },
// 注册表的级联表
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


    onUpdateHandler() {
                         if((!this.ruleForm.chuanjiaUuidNumber)&& 'chuanjia'==this.flag){
                             this.$message.error('船家编号不能为空');
                             return
                         }

                         if((!this.ruleForm.chuanjiaName)&& 'chuanjia'==this.flag){
                             this.$message.error('船家姓名不能为空');
                             return
                         }

                             if( 'chuanjia' ==this.flag && this.ruleForm.chuanjiaPhone&&(!isMobile(this.ruleForm.chuanjiaPhone))){
                                 this.$message.error(`手机应输入手机格式`);
                                 return
                             }
                         if((!this.ruleForm.chuanjiaIdNumber)&& 'chuanjia'==this.flag){
                             this.$message.error('船家身份证号不能为空');
                             return
                         }

                         if((!this.ruleForm.chuanjiaPhoto)&& 'chuanjia'==this.flag){
                             this.$message.error('船家头像不能为空');
                             return
                         }

                             if( 'chuanjia' ==this.flag && this.ruleForm.chuanjiaEmail&&(!isEmail(this.ruleForm.chuanjiaEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
                         if((!this.ruleForm.jinyongTypes)&& 'chuanjia'==this.flag){
                             this.$message.error('账户状态不能为空');
                             return
                         }

                         if((!this.ruleForm.weibaogongsiUuidNumber)&& 'weibaogongsi'==this.flag){
                             this.$message.error('维保公司编号不能为空');
                             return
                         }

                         if((!this.ruleForm.weibaogongsiName)&& 'weibaogongsi'==this.flag){
                             this.$message.error('维保公司名称不能为空');
                             return
                         }

                         if((!this.ruleForm.weibaogongsiFuzeren)&& 'weibaogongsi'==this.flag){
                             this.$message.error('负责人不能为空');
                             return
                         }

                             if( 'weibaogongsi' ==this.flag && this.ruleForm.weibaogongsiPhone&&(!isMobile(this.ruleForm.weibaogongsiPhone))){
                                 this.$message.error(`手机应输入手机格式`);
                                 return
                             }
                         if((!this.ruleForm.weibaogongsiPhoto)&& 'weibaogongsi'==this.flag){
                             this.$message.error('公司logo不能为空');
                             return
                         }

                         if((!this.ruleForm.weibaogongsiAddress)&& 'weibaogongsi'==this.flag){
                             this.$message.error('公司位置不能为空');
                             return
                         }

                         if((!this.ruleForm.jinyongTypes)&& 'weibaogongsi'==this.flag){
                             this.$message.error('账户状态不能为空');
                             return
                         }

                         if((!this.ruleForm.weibaogongsiId)&& 'weibaorenyuan'==this.flag){
                             this.$message.error('维保公司不能为空');
                             return
                         }

                         if((!this.ruleForm.weibaorenyuanUuidNumber)&& 'weibaorenyuan'==this.flag){
                             this.$message.error('维保人员编号不能为空');
                             return
                         }

                         if((!this.ruleForm.weibaorenyuanName)&& 'weibaorenyuan'==this.flag){
                             this.$message.error('维保人员姓名不能为空');
                             return
                         }

                             if( 'weibaorenyuan' ==this.flag && this.ruleForm.weibaorenyuanPhone&&(!isMobile(this.ruleForm.weibaorenyuanPhone))){
                                 this.$message.error(`手机应输入手机格式`);
                                 return
                             }
                         if((!this.ruleForm.weibaorenyuanIdNumber)&& 'weibaorenyuan'==this.flag){
                             this.$message.error('维保人员身份证号不能为空');
                             return
                         }

                         if((!this.ruleForm.weibaorenyuanPhoto)&& 'weibaorenyuan'==this.flag){
                             this.$message.error('维保人员头像不能为空');
                             return
                         }

                             if( 'weibaorenyuan' ==this.flag && this.ruleForm.weibaorenyuanEmail&&(!isEmail(this.ruleForm.weibaorenyuanEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
                         if((!this.ruleForm.jinyongTypes)&& 'weibaorenyuan'==this.flag){
                             this.$message.error('账户状态不能为空');
                             return
                         }

        if((!this.ruleForm.sexTypes) && (1==2|| this.flag=='chuanjia'
|| this.flag=='weibaorenyuan')){
            this.$message.error('性别不能为空');
            return
        }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
        this.$message.error(`用户名不能为空`);
        return	
      }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
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
</style>
