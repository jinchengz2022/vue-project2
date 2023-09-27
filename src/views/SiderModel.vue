<template>
  <div class="sider_wrapper">
    <div class="sider_title">
      <img src="./../assets/logo-63028018.png" alt="" />
      <span>Main Page</span>
    </div>
    <a-menu 
    :items="items"
     @click="clickMenu"
      mode="vertical"
       class="sider_menu"
        theme="dark" 
        />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, h } from 'vue'
import type { UnwrapRef } from 'vue'
import type { FormProps, FormInstance } from 'ant-design-vue'
import type { Rule } from 'ant-design-vue/es/form'
import { useRouter } from 'vue-router'

import { useRoutePath } from './../stores/routePath'
import { AccessIcon } from './../assets/Access'
import { ApplyIcon } from './../assets/Apply'
import { PhotoIcon } from './../assets/PhotoIcon'
import { GongnengIcon } from './../assets/Gongneng'

const r = useRoutePath();
const clickMenu = ({ item, key, keyPath }) => {
  r.changePath(keyPath)
  
}

const items = ref([
  {
    label: 'Dashboard',
    title: 'Dashboard',
    key: 'Dashboard',
    icon: () => h(ApplyIcon),
    children: [
      {
        label: '工作台',
        title: '工作台',
        key: '工作台'
      }
    ]
  },
  {
    label: '权限管理',
    title: '权限管理',
    key: '权限管理',
    icon: () => h(AccessIcon),
    children: [
      {
        label: '前端',
        title: '前端',
        key: '前端'
      }
    ]
  },
  {
    label: '功能',
    title: '功能',
    key: '功能',
    icon: () => h(GongnengIcon),
    children: [
      {
        label: '页面',
        title: '页面',
        key: '页面'
      }
    ]
  },
  {
    label: '图表',
    title: '图表',
    key: '图表',
    icon: () => h(PhotoIcon),
    children: [
      {
        label: '折线图',
        title: '折线图',
        key: '折线图'
      }
    ]
  }
])
</script>

<style lang="scss">
@import './style/SiderModel.module.scss';
</style>
