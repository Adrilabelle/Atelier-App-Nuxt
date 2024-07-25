<template>
    <div>
        
        <p>Product details for {{ id }}</p> <!-- double curly braces are used to display the value of a variable -->
        <p>{{product.title}}</p>
        <p>{{product.price}}</p>
        <p>{{product.id}}</p>

    </div>
</template>

<script setup>
    const { id } = useRoute().params //this tells vue the "id" variable is coming from the route parameters
    const uri = 'https://fakestoreapi.com/products/' + id

    //fetch the product

    const {data: product} = await useFetch(uri)

 
definePageMeta({
     layout: 'products',
     colorMode: 'light'
 })
</script>

<style  scoped>

</style>