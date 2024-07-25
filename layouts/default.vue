<template>
    <div>
        <header class="shadow-sm bg-white">
            <h2>Default Layout</h2>
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt-Atelier</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/" class="font-bold"><UButton :ui="{ rounded: 'rounded-full' }" color="amber" variant="solid">Home</UButton></NuxtLink></li>
                    <li><NuxtLink to="/about"><UButton :ui="{ rounded: 'rounded-full' }" color="green" variant="solid">About</UButton></NuxtLink></li>
                    <li><NuxtLink to="/products"><UButton :ui="{ rounded: 'rounded-full' }" color="pink" variant="solid">Products</UButton></NuxtLink></li>
                    <li><NuxtLink to="/admin"><UButton :ui="{ rounded: 'rounded-full' }" color="purple" variant="solid">Admin</UButton></NuxtLink></li>
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
