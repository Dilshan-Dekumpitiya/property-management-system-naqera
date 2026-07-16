<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::prefix('admin')->group(function () {

    // This handles: localhost:3000/admin
    Route::get('', function () {
        return view('dashboard'); // Renders admin/resources/views/welcome.blade.php
    });
});