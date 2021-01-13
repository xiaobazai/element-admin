<template>
  <div class="container position-absolute">
    <div class="pb-3 px-3 rgbox position-absolute">
      <p>
        <router-link :to="{ name: 'loginIndexPage' }" exact>登陆</router-link
        ><i class="mx-2 crc"></i>
        <router-link :to="{ name: 'RegisterIndexPage' }" exact
          >注册</router-link
        >
      </p>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="0px"
        class="demo-ruleForm"
      >
        <el-form-item prop="accoutname">
          <el-input
            placeholder="用户名"
            v-model="ruleForm.accoutname"
            autocomplete="off"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            placeholder="密码"
            prefix-icon="el-icon-lock"
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input
            placeholder="确认密码"
            prefix-icon="el-icon-lock"
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <div
          type="primary"
          @click="submitForm('ruleForm')"
          class="rg-submit py-2 rounded"
        >
          提交
        </div>
        <!-- <el-form-item>
          <el-button
            size="medium"
            type="primary"
            @click="submitForm('ruleForm')"
            >提交</el-button
          >
        </el-form-item> -->
      </el-form>
      <p class="mt-2 cm">请点击提交确定注册一个新账号</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkAccoutname = (rule, value, callback) => {
      let reg = /^[a-zA-Z0-9]{3,10}$/;

      if (!reg.test(value)) {
        return callback(new Error("用户名至少3-10位字字母数字"));
      } else {
        callback();
      }

      //  callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        accoutname: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        accoutname: [{ validator: checkAccoutname, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios({
            method: "post",
            url: "/register",
            data: this.ruleForm,
          }).then((res) => {
            if (res.data.code == 4||res.data.code==1||res.data.code==2) {
              this.$message({
                showClose: true,
                message: res.data.msg,
                type: "error",
              });
              return
            }
            if (res.data.code == 5) {
              this.$message({
                showClose: true,
                message: res.data.msg,
                type: "success",
              });
              return
            }
        
            console.log(res.data);
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #eee;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .rgbox {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin: 0 auto;
    width: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #ccc;
    p.cm {
      text-align: right;
    }
    .rg-submit {
      background-color: #67c23a;
      color: #fff;
    }
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        font-size: 18px;
        font-weight: 400;
        color: #3c3a3a;
      }
      a.router-link-active {
        color: red;
        text-decoration: underline;
      }
    }
    .crc {
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 4px;
      margin: 30px 0;
      background-color: rgb(145, 140, 140);
    }
  }
}
</style>