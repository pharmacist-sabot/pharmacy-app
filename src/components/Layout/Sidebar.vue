<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { LayoutDashboard, Pill, Settings, LogOut } from 'lucide-vue-next'

const route = useRoute()

const isActive = (path) => route.path === path
</script>

<template>
  <aside class="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
    <div class="p-6 flex items-center gap-3 border-b border-gray-100">
      <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
        Rx
      </div>
      <span class="text-xl font-bold text-gray-800">ฟาร์มาแคร์</span>
    </div>

    <nav class="flex-1 p-4 space-y-2">
      <RouterLink 
        to="/" 
        class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors"
        :class="isActive('/') ? 'bg-primary/10 text-primary font-medium' : 'text-gray-600 hover:bg-gray-50'"
      >
        <LayoutDashboard :size="20" />
        แดชบอร์ด
      </RouterLink>

      <RouterLink 
        to="/inventory" 
        class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors"
        :class="isActive('/inventory') ? 'bg-primary/10 text-primary font-medium' : 'text-gray-600 hover:bg-gray-50'"
      >
        <Pill :size="20" />
        คลังยา
      </RouterLink>

      <RouterLink 
        to="/settings" 
        class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors"
        :class="isActive('/settings') ? 'bg-primary/10 text-primary font-medium' : 'text-gray-600 hover:bg-gray-50'"
      >
        <Settings :size="20" />
        ตั้งค่า
      </RouterLink>
    </nav>

    <div class="p-4 border-t border-gray-100">
      <button class="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-600 hover:bg-red-50 transition-colors">
        <LogOut :size="20" />
        ออกจากระบบ
      </button>
    </div>
  </aside>
</template>
