@props(['status'])

@php
    $classes = match(strtolower($status)) {
        'confirmed' => 'bg-green-100 text-green-600',
        'pending' => 'bg-orange-100 text-orange-500',
        default => 'bg-gray-100 text-gray-600'
    };
@endphp

<span class="px-3 py-1 text-xs font-semibold rounded-full {{ $classes }}">
    {{ $status }}
</span>