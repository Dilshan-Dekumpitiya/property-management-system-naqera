<aside class="w-64 bg-[#f4f5f8] h-screen flex flex-col fixed left-0 top-0 border-r border-gray-200 overflow-y-auto no-scrollbar">
    <div class="px-6 py-6 flex items-center justify-between mb-4">
        <h1 class="text-2xl font-black tracking-tighter">naqera</h1>
        <button class="text-gray-400 border hover:text-gray-600 p-1 rounded border-gray-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
            </svg>
        </button>
    </div>

    <nav class="flex-1 px-4 space-y-1 pb-8">
        
        <a href="#" class="flex items-center space-x-3 px-4 py-3 text-gray-600 font-medium rounded-lg hover:bg-gray-200 mb-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            <span>Dashboard</span>
        </a>

        <x-sidebar-group title="User Manager" :active="true">
            <x-slot name="icon">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </x-slot>
            <a href="#" class="block px-11 py-2 text-sm font-medium bg-[#dce1ef] text-[#31398c] rounded-md">Customer List</a>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Owner List</a>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Realtor List</a>
        </x-sidebar-group>

        <x-sidebar-group title="Country & Province">
            <x-slot name="icon">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </x-slot>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Country</a>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">City</a>
        </x-sidebar-group>

        <x-sidebar-group title="Modules">
            <x-slot name="icon">
                <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 5H11V11H5V5ZM6.5 6.5V9.5H9.5V6.5H6.5Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 13H11V19H5V13ZM6.5 14.5V17.5H9.5V14.5H6.5Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5H19V11H13V5ZM14.5 6.5V9.5H17.5V6.5H14.5Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 13H19V19H13V13ZM14.5 14.5V17.5H17.5V14.5H14.5Z" fill="currentColor"/>
                </svg>
            </x-slot>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Attribute</a>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Type</a>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Category</a>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Sub Category</a>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Aminities</a>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Extra Services</a>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Nearby</a>
        </x-sidebar-group>

        <x-sidebar-group title="Property Manager">
            <x-slot name="icon">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-2 0H5m14 0H5m4 0V9m3 12V9m3 12V9"></path>
                </svg>
            </x-slot>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Property List</a>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">City</a>
        </x-sidebar-group>

        <x-sidebar-group title="Booking Manager">
            <x-slot name="icon">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
            </x-slot>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">List of Booking</a>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">List of Regular Booking</a>
        </x-sidebar-group>

        <x-sidebar-group title="Payment Manager">
            <x-slot name="icon">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
            </x-slot>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Transaction</a>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Bookings and commission per protal</a>
        </x-sidebar-group>

        <x-sidebar-group title="Discount Code Manager">
            <x-slot name="icon">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.397.568l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                </svg>
            </x-slot>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Discounts</a>
        </x-sidebar-group>

        <x-sidebar-group title="Subcription Manager">
            <x-slot name="icon">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9l-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z"></path>
                </svg>
            </x-slot>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Subcription</a>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Subcription Transaction</a>
        </x-sidebar-group>

        <x-sidebar-group title="Request Manager">
            <x-slot name="icon">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
            </x-slot>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Contact Us</a>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">News Letter</a>
        </x-sidebar-group>

        <x-sidebar-group title="Configurations">
            <x-slot name="icon">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
            </x-slot>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Settings</a>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Email Template</a>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Sub Admin</a>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Notifications</a>
            <a href="#" class="block px-11 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Content</a>
        </x-sidebar-group>
        </nav>
</aside>