<template>
    <div class="card text-center">
        <img :scr="product.image" alt="product thumb" class="thumbw-futll h-60 object-cothumbver">
        <p class="font-bold text-black-500 m4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/'${product.id}`">
            <p class="UIButton rounded-full bg-green-500 text-white">View Product</p>
        </NuxtLink> 

    </div>
</template>

<script setup>
 const {product}= defineProps(['product'])
</script>

<style  scoped>

</style>