<script setup>
import { ref } from 'vue'
import { Search, Plus, Filter, X } from 'lucide-vue-next'

const medicines = ref([
  { id: 1, name: 'พาราเซตามอล 500มก.', category: 'แก้ปวด', stock: 150, price: 50, status: 'มีสินค้า' },
  { id: 2, name: 'อะม็อกซีซิลลิน 250มก.', category: 'ยาปฏิชีวนะ', stock: 45, price: 120, status: 'สินค้าใกล้หมด' },
  { id: 3, name: 'เซทิริซีน 10มก.', category: 'แก้แพ้', stock: 200, price: 80, status: 'มีสินค้า' },
  { id: 4, name: 'โอเมพราโซล 20มก.', category: 'โรคกระเพาะ', stock: 8, price: 150, status: 'วิกฤต' },
  { id: 5, name: 'ไอบูโพรเฟน 400มก.', category: 'แก้ปวด', stock: 90, price: 65, status: 'มีสินค้า' },
])

const showAddModal = ref(false)
const newMedicine = ref({
  name: '',
  category: '',
  stock: 0,
  price: 0,
  status: 'มีสินค้า'
})

const getStatusColor = (status) => {
  switch (status) {
    case 'มีสินค้า': return 'bg-emerald-100 text-emerald-700'
    case 'สินค้าใกล้หมด': return 'bg-yellow-100 text-yellow-700'
    case 'วิกฤต': return 'bg-red-100 text-red-700'
    default: return 'bg-gray-100 text-gray-700'
  }
}

const handleAddMedicine = () => {
  medicines.value.push({
    id: medicines.value.length + 1,
    ...newMedicine.value
  })
  showAddModal.value = false
  newMedicine.value = { name: '', category: '', stock: 0, price: 0, status: 'มีสินค้า' }
}
</script>

<template>
  <div class="p-8 relative">
    <header class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">จัดการคลังยา</h1>
        <p class="text-gray-500">จัดการสต็อกยาและหมวดหมู่ของคุณ</p>
      </div>
      <button 
        @click="showAddModal = true"
        class="flex items-center gap-2 bg-primary hover:bg-secondary text-white px-4 py-2.5 rounded-lg transition-colors shadow-sm"
      >
        <Plus :size="20" />
        <span>เพิ่มยา</span>
      </button>
    </header>

    <!-- Filters -->
    <div class="bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-6 flex flex-col md:flex-row gap-4">
      <div class="relative flex-1">
        <Search :size="20" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input 
          type="text" 
          placeholder="ค้นหายา..." 
          class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        >
      </div>
      <button class="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600">
        <Filter :size="18" />
        <span>ตัวกรอง</span>
      </button>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left">
          <thead class="bg-gray-50 border-b border-gray-100">
            <tr>
              <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">ชื่อยา</th>
              <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">หมวดหมู่</th>
              <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">คงเหลือ</th>
              <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">ราคา (฿)</th>
              <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">สถานะ</th>
              <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">จัดการ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="item in medicines" :key="item.id" class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 font-medium text-gray-800">{{ item.name }}</td>
              <td class="px-6 py-4 text-gray-600">{{ item.category }}</td>
              <td class="px-6 py-4 text-gray-600">{{ item.stock }}</td>
              <td class="px-6 py-4 text-gray-600">{{ item.price }}</td>
              <td class="px-6 py-4">
                <span :class="`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`">
                  {{ item.status }}
                </span>
              </td>
              <td class="px-6 py-4 text-right">
                <button class="text-primary hover:text-secondary font-medium text-sm">แก้ไข</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Add Medicine Modal -->
    <div v-if="showAddModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-gray-800">เพิ่มยาใหม่</h2>
          <button @click="showAddModal = false" class="text-gray-400 hover:text-gray-600">
            <X :size="24" />
          </button>
        </div>
        
        <form @submit.prevent="handleAddMedicine" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อยา</label>
            <input v-model="newMedicine.name" required type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">หมวดหมู่</label>
            <input v-model="newMedicine.category" required type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">จำนวนคงเหลือ</label>
              <input v-model.number="newMedicine.stock" required type="number" min="0" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">ราคา (฿)</label>
              <input v-model.number="newMedicine.price" required type="number" min="0" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">สถานะ</label>
            <select v-model="newMedicine.status" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
              <option value="มีสินค้า">มีสินค้า</option>
              <option value="สินค้าใกล้หมด">สินค้าใกล้หมด</option>
              <option value="วิกฤต">วิกฤต</option>
            </select>
          </div>

          <div class="flex gap-3 mt-6">
            <button type="button" @click="showAddModal = false" class="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">
              ยกเลิก
            </button>
            <button type="submit" class="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary font-medium">
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
