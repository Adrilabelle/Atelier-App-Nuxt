<template>
    <div>
        
        <p>Product details for {{ id }}</p> <!-- double curly braces are used to display the value of a variable -->
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Consequatur exercitationem minima voluptatem, omnis saepe 
            numquam consequuntur aspernatur ab, nisi eius veritatis 
            accusamus id nostrum explicabo autem illum architecto debitis laudantium.</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params //this tells vue the "id" variable is coming from the route parameters
definePageMeta({
     layout: 'products',
 })
</script>

<style  scoped>

</style>