import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRoutePath = defineStore('route_path', {
  state: () => ({ path: 'Dashboard', isCollapsed: false }),
  actions: {
    changePath(path: string[]) {
      this.path = path.join(' / ');
    },
    changeCollapsed() {
      
      this.isCollapsed = !this.isCollapsed;
    }
  }
})
