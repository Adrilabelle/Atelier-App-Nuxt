<template>
    <div>
        <header class="shadow-sm bg-white">
            
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt-Atelier Merch</NuxtLink>
                <h2>Product's Layout</h2>
            </nav>
        </header>    

<!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>    
        
        <footer class="container mx-auto p-4 flex justify-between-border-t-2">
            <ul class="flex gap-4">
                <li><NuxtLink to="/" class="font-bold"><UButton :ui="{ rounded: 'rounded-full' }" color="amber" variant="solid">Home</UButton></NuxtLink></li>
                <li><NuxtLink to="/about"><UButton :ui="{ rounded: 'rounded-full' }" color="green" variant="solid">About</UButton></NuxtLink></li>
                <li><NuxtLink to="/products"><UButton :ui="{ rounded: 'rounded-full' }" color="pink" variant="solid">Products</UButton></NuxtLink></li>
                <li><NuxtLink to="/admin"><UButton :ui="{ rounded: 'rounded-full' }" color="purple" variant="solid">Admin</UButton></NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>


<style  scoped>
    .router-link-exact-active {
        color: rgb(245, 13, 25);
    }
</style>