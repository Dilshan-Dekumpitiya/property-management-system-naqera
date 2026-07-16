<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Naqera Admin</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-[#eef0f4] font-sans antialiased text-gray-900">

    <div class="flex min-h-screen">

        <x-sidebar />

        <div class="flex-1 ml-64 flex flex-col">

            <header class="flex justify-between items-center px-10 py-8">
                <div>
                    <h2 class="text-3xl font-bold text-gray-900">{{ $headerTitle ?? 'Dashboard' }}</h2>
                    <p class="text-gray-500 text-sm mt-1">Welcome Back!, Here is what's happening in your platform</p>
                </div>

                <div class="flex items-center space-x-4">
                    <button class="px-4 py-2 bg-[#d16d6a] text-white text-sm font-medium rounded-full flex items-center shadow-sm">
                        Today <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <button class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 shadow-sm">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                    </button>
                    <img src="https://i.pravatar.cc/150?img=11" alt="Profile" class="w-10 h-10 rounded-full border-2 border-white shadow-sm">
                </div>
            </header>

            <main class="px-10 pb-10 flex-1">
                {{ $slot }}
            </main>


        </div>
    </div>

</body>
</html>
