<x-admin-layout headerTitle="Dashboard">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <x-stat-card title="Total Users" value="1,234" trend="15%">
            <x-slot name="icon"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></x-slot>
        </x-stat-card>
        
        <x-stat-card title="Properties" value="456" trend="15%">
            <x-slot name="icon"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></x-slot>
        </x-stat-card>

        <x-stat-card title="Bookings" value="1,234" trend="15%">
            <x-slot name="icon"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></x-slot>
        </x-stat-card>

        <x-stat-card title="Revenue" value="1,234" trend="15%">
            <x-slot name="icon"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></x-slot>
        </x-stat-card>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 class="text-lg font-bold text-gray-900 mb-4">Recent Booking</h3>
            <table class="w-full text-left text-sm">
                <thead>
                    <tr class="text-gray-900 font-bold border-b border-gray-100">
                        <th class="pb-3">Booking Id</th>
                        <th class="pb-3">Customer</th>
                        <th class="pb-3 text-right">Status</th>
                    </tr>
                </thead>
                <tbody class="text-gray-500">
                    <tr class="border-b border-gray-50">
                        <td class="py-4">5345313354</td>
                        <td class="py-4">Suresh Gamlath</td>
                        <td class="py-4 text-right"><x-badge status="Pending" /></td>
                    </tr>
                    <tr class="border-b border-gray-50">
                        <td class="py-4">5345313354</td>
                        <td class="py-4">Suresh Gamlath</td>
                        <td class="py-4 text-right"><x-badge status="Confirmed" /></td>
                    </tr>
                    </tbody>
            </table>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 class="text-lg font-bold text-gray-900 mb-4">Recent Users</h3>
            <div class="space-y-5">
                
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 rounded-full bg-[#873e46] text-white flex items-center justify-center font-bold text-sm">
                            UI
                        </div>
                        <div>
                            <p class="text-sm font-semibold text-gray-900">Jane Cooper</p>
                            <p class="text-xs text-gray-500">janecooper@example.com</p>
                        </div>
                    </div>
                    <span class="text-xs text-gray-400">2h ago</span>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 rounded-full bg-[#31398c] text-white flex items-center justify-center font-bold text-sm">
                            UI
                        </div>
                        <div>
                            <p class="text-sm font-semibold text-gray-900">Esther Howard</p>
                            <p class="text-xs text-gray-500">estherhoward@example.com</p>
                        </div>
                    </div>
                    <span class="text-xs text-gray-400">2h ago</span>
                </div>
                
            </div>
        </div>

    </div>

</x-admin-layout>