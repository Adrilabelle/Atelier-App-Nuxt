<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
                
               <ProductsCard :product="product" />
            </div>

        </div>
        
        <p>photo</p>
        
    </div>
</template>

<script setup>
 const {id} = useRoute().params
 const uri = `https://fakestoreapi.com/products/${id}`

definePageMeta({
layout: 'products',
colorMode: 'light'
 })

//fetch the products from the API
const {data: products} =await useFetch('https://fakestoreapi.com/products')
     
</script>
  
<style scoped>
   
</style>