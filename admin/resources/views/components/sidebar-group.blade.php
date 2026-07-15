@props(['title', 'icon', 'active' => false])

<div class="mb-1">
    <button onclick="toggleMenu(this)" 
            class="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm text-white bg-blue-900 hover:bg-blue-950">
        <div class="flex items-center gap-2">
            <span>{{ $icon }}</span>
            <span>{{ $title }}</span>
        </div>
        <svg class="arrow w-4 h-4 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
    </button>
    
    <div class="menu-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out bg-gray-200">
        <div class="pt-1 space-y-1">
            {{ $slot }}
        </div>
    </div>
</div>