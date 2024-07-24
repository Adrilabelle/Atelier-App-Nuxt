<template>
    <div>
        <header>
            <h1>My App</h1>
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


        <h2>Home</h2>
        <p>page Home.</p>
        
    </div>
</template>

<script setup>

</script>

<style  scoped>

    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20 px 0;
    }
</style>

   
