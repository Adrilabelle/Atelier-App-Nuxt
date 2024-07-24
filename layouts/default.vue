<template>
    <div>
        <header>
            <h1>Default Layout</h1>
            <nav>
                <NuxtLink to="/">Nuxt-Atelier</NuxtLink>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                    <li><NuxtLink to="/admin">Admin</NuxtLink></li>
                </ul>
            </nav>
        </header>    


        <div>
            <slot />
        </div>    
        
    </div>
</template>

<style  scoped>
    h1 {
        margin-bottom: 20px;
        font-size: 36px;
        color:rgb(79, 6, 197)
    }
    h2 {
        margin-bottom: 20px;
        font-size: 26px;
        color:rgb(11, 194, 139)
    }
    p {
        margin: 20 px 0;
    }
</style>
