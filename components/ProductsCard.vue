<template>
    <div class="card text-center">
        <img :src="product.image" alt="product thumb" class="thumbw-futll h-40 object-cothumbver">
        <p class="font-bold text-black-500 m4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/'${product.id}`">
            <p class="UIButton rounded-full bg-green-500 text-white">View Product</p>
        </NuxtLink> 
    </div>
</template>

<script setup>
 const { product } = defineProps(['product'])
</script>

<style  scoped>

     .thumb {
        max-height: 120px;
        max-width: 70%;
        margin: 0 auto;
    }
</style>