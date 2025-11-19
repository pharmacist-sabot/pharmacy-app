<script setup>
import { ref } from 'vue'
import { Save, Store, Bell } from 'lucide-vue-next'

const generalInfo = ref({
  name: 'ฟาร์มาแคร์ สาขา 1',
  address: '123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110',
  phone: '02-123-4567'
})

const notifications = ref({
  lowStockThreshold: 10,
  emailAlerts: true,
  dailyReport: false
})

const isSaving = ref(false)

const handleSave = () => {
  isSaving.value = true
  // Simulate API call
  setTimeout(() => {
    isSaving.value = false
    alert('บันทึกการตั้งค่าเรียบร้อยแล้ว')
  }, 1000)
}
</script>

<template>
  <div class="p-8 max-w-4xl mx-auto">
    <header class="mb-8">
      <h1 class="text-2xl font-bold text-gray-800">ตั้งค่า</h1>
      <p class="text-gray-500">จัดการข้อมูลร้านและการแจ้งเตือน</p>
    </header>

    <form @submit.prevent="handleSave" class="space-y-6">
      <!-- General Information Section -->
      <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="p-6 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
          <div class="p-2 bg-primary/10 rounded-lg text-primary">
            <Store :size="20" />
          </div>
          <h2 class="text-lg font-bold text-gray-800">ข้อมูลทั่วไป</h2>
        </div>
        
        <div class="p-6 space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="col-span-2 md:col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อร้านยา</label>
              <input v-model="generalInfo.name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
            </div>
            <div class="col-span-2 md:col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์</label>
              <input v-model="generalInfo.phone" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
            </div>
            <div class="col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">ที่อยู่</label>
              <textarea v-model="generalInfo.address" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"></textarea>
            </div>
          </div>
        </div>
      </div>

      <!-- Notifications Section -->
      <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="p-6 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
          <div class="p-2 bg-orange-100 rounded-lg text-orange-600">
            <Bell :size="20" />
          </div>
          <h2 class="text-lg font-bold text-gray-800">การแจ้งเตือน</h2>
        </div>
        
        <div class="p-6 space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">แจ้งเตือนเมื่อสินค้าต่ำกว่า (ชิ้น)</label>
            <div class="flex items-center gap-4">
              <input v-model.number="notifications.lowStockThreshold" type="number" min="1" class="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
              <span class="text-sm text-gray-500">ระบบจะแจ้งเตือนเมื่อสต็อกลดลงถึงจำนวนนี้</span>
            </div>
          </div>

          <div class="space-y-4">
            <label class="flex items-center gap-3 cursor-pointer">
              <input v-model="notifications.emailAlerts" type="checkbox" class="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary">
              <span class="text-gray-700">รับการแจ้งเตือนทางอีเมล</span>
            </label>
            
            <label class="flex items-center gap-3 cursor-pointer">
              <input v-model="notifications.dailyReport" type="checkbox" class="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary">
              <span class="text-gray-700">รับรายงานสรุปยอดขายรายวัน</span>
            </label>
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <button 
          type="submit" 
          :disabled="isSaving"
          class="flex items-center gap-2 bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-lg transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <Save :size="20" />
          <span>{{ isSaving ? 'กำลังบันทึก...' : 'บันทึกการตั้งค่า' }}</span>
        </button>
      </div>
    </form>
  </div>
</template>
