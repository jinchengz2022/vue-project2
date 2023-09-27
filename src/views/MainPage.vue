<template>
  <div class="main_wrapper">
    <a-layout :style="{ height: '100%' }">
      <a-layout-sider class="sider_style">
        <SiderModel />
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="header_style">
          <div class="header_left">
            <div @click="routeState.changeCollapsed" class="header_left_icon">
              <ZhanIcon v-if="routeState.isCollapsed" />
              <ShouIcon v-else />
            </div>
            <span>{{ routeState.path }}</span>
          </div>
          <div class="header_right">
            <span>功能栏</span>
          </div>
        </a-layout-header>
        <a-layout-content class="content_style">
          <MainContent/>
        </a-layout-content>
        <!-- <a-layout-footer class="footer_style">none</a-layout-footer> -->
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watchEffect } from 'vue'
import type { UnwrapRef } from 'vue'
import type { FormProps, FormInstance } from 'ant-design-vue'
import type { Rule } from 'ant-design-vue/es/form'
import { useRouter } from 'vue-router'

import { useRoutePath } from './../stores/routePath'
import { ShouIcon } from './../assets/ShouIcon'
import { ZhanIcon } from './../assets/ZhanIcon'
import SiderModel from './SiderModel.vue'
import MainContent from './MainContent.vue'

interface FormState {
  user: string
  password: string
}

const routeState = useRoutePath()

watchEffect(() => {
  console.log(routeState.isCollapsed)
})
</script>

<style lang="scss">
@import './style/MainPage.module.scss';
</style>
