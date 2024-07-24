<template>
    <div>
        <header class="shadow-sm bg-white">
            <h1>Default Layout</h1>
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt-Atelier</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/" class="font-bold">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                    <li><NuxtLink to="/admin">Admin</NuxtLink></li>
                </ul>
            </nav>
        </header>    

<!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>    
        
    </div>
</template>

<style  scoped>
    .router-link-exact-active {
        color: rgb(7, 155, 105);
    }
</style>
