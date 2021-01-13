<template>
  <div class="home">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning" round icon="el-icon-star-off"
        >警告按钮</el-button
      >
      <el-button type="danger" plain>危险按钮</el-button>

      <p class="mt-2">
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </p>
      <el-input-number
        v-model="num"
        @change="handleChange"
        :min="1"
        :max="10"
        label="描述文字"
      ></el-input-number>
    </el-row>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import request from "@/api/request";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      num: 1,
      value: true,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
  created() {
    request.get("/xiao/news").then((res) => {
      console.log(res.data);
    });
  },
};
</script>
