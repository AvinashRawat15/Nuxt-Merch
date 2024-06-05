<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non totam iste autem animi error? Doloribus distinctio at modi a!</p>
        <p>api response: </p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
const {data} = await useFetch('/api/currency/INR')
</script>

<style scoped>
.h2{ 
    margin-bottom: 20px; 
    font-size: 36px;
}
.p{
    margin: 20px 0;
    
}

</style>