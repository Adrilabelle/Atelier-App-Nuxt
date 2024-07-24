<template>
    <div>
        <header>
            
            <nav>
                <NuxtLink to="/">Nuxt-Atelier Merch</NuxtLink>
                <h2>Product's Layout</h2>
            </nav>
        </header>    

<!-- output the page content -->
        <div>
            <slot />
        </div>    
        
        <footer>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products">Products</NuxtLink></li>
                <li><NuxtLink to="/admin">Admin</NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>


<style  scoped>
    h1 {
        margin-bottom: 20px;
        font-size: 36px;
        color:rgb(247, 16, 8)
    }
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
        color:rgb(12, 67, 129)
    }
    p {
        margin: 20 px 0;
    }
</style>