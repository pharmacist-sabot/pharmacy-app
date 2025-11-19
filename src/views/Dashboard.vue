<script setup>
import { TrendingUp, AlertCircle, DollarSign, Package } from 'lucide-vue-next'

const stats = [
  { title: 'ยอดขายรวม', value: '฿45,231', change: '+12%', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-100' },
  { title: 'สินค้าใกล้หมด', value: '12', change: 'ด่วน', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-100' },
  { title: 'ใบสั่งยาที่รอดำเนินการ', value: '48', change: '+5', icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-100' },
  { title: 'สินค้าทั้งหมด', value: '1,240', change: '', icon: Package, color: 'text-purple-600', bg: 'bg-purple-100' },
]
</script>

<template>
  <div class="p-8">
    <header class="mb-8">
      <h1 class="text-2xl font-bold text-gray-800">ภาพรวมแดชบอร์ด</h1>
      <p class="text-gray-500">ยินดีต้อนรับกลับ, เภสัชกร</p>
    </header>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div v-for="stat in stats" :key="stat.title" class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div class="flex items-center justify-between mb-4">
          <div :class="`p-3 rounded-lg ${stat.bg}`">
            <component :is="stat.icon" :class="`w-6 h-6 ${stat.color}`" />
          </div>
          <span v-if="stat.change" :class="stat.change === 'ด่วน' ? 'text-red-500 font-medium' : 'text-emerald-500 font-medium'">
            {{ stat.change }}
          </span>
        </div>
        <h3 class="text-gray-500 text-sm font-medium">{{ stat.title }}</h3>
        <p class="text-2xl font-bold text-gray-800 mt-1">{{ stat.value }}</p>
      </div>
    </div>

    <!-- Recent Activity / Placeholder -->
    <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <h2 class="text-lg font-bold text-gray-800 mb-4">ธุรกรรมล่าสุด</h2>
      <div class="text-center py-12 text-gray-400 bg-gray-50 rounded-lg border border-dashed border-gray-200">
        ไม่มีธุรกรรมล่าสุดที่จะแสดง
      </div>
    </div>
  </div>
</template>
