<template>
  <div>
    <h1>Hello !!!</h1>
    <el-form>
      <el-form-item>
        <el-select v-model="selected">
          <el-option :value="0" label="select 0"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      selected: 0,
    }
  },
})
</script>
