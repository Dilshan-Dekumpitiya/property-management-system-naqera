@props(['title', 'value', 'trend'])

<div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
    <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-500">
        {{ $icon }}
    </div>
    
    <h3 class="text-gray-500 font-medium mb-1">{{ $title }}</h3>
    
    <div class="flex items-baseline space-x-3">
        <span class="text-3xl font-bold text-gray-900">{{ $value }}</span>
        <span class="text-sm font-semibold text-green-500 flex items-center">
            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
            {{ $trend }}
        </span>
    </div>
    <p class="text-xs text-gray-400 mt-2">vs, last period</p>
</div>