<template>
  <div class="login">
    <h2>登录</h2>
    <a-form
      style="width: 60%"
      :rules="formRules"
      :model="formState"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
      ref="formRef"
    >
      <a-form-item name="user">
        <a-input v-model:value="formState.user" placeholder="Username" style="width: 100%" />
      </a-form-item>
      <a-form-item name="password">
        <a-input-password
          v-model:value="formState.password"
          placeholder="Password"
          style="width: 100%"
        />
      </a-form-item>
      <a-form-item name="save_password">
        <a-checkbox v-model:checked="formState.save_password">记住密码</a-checkbox>
      </a-form-item>
    </a-form>
    <a-button type="primary" @click="refClick" style="width: 60%">登录</a-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { UnwrapRef } from 'vue'
import type { FormInstance } from 'ant-design-vue'
import type { Rule } from 'ant-design-vue/es/form'
import { useRouter } from 'vue-router'

interface FormState {
  user: string
  password: string
}
const formRef = ref<FormInstance>()
const formState: UnwrapRef<FormState> = reactive({
  user: '',
  password: '',
  save_password: false
})
const route = useRouter();

const formRules: Record<string, Rule[]> = {
  user: [
    {
      required: true,
      validator: (_, value) =>
        new Promise((res, rej) => {
          if (value === 'user') {
            res()
          } else {
            rej('error~')
          }
        })
    }
  ],
   password: [
    {
      required: true,
      validator: (_, value) =>
        new Promise((res, rej) => {
          if (value === '123') {
            res()
          } else {
            rej('error~')
          }
        })
    }
  ]
} 

const refClick = () => {
  formRef.value.validate().then(() => {
    // 验证成功跳转功能页面
    route.push('/main')
  })
}
</script>

<style lang="scss">
@import './style/Mylogin.module.scss';
</style>
