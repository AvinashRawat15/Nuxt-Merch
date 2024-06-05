<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
//fetch the product
const { data: products } = await useFetch('https://fakestoreapi.com/products')

definePageMeta({
    layout: 'products',
})

useHead({
    title: 'Nuxt App | Merch',
    meta: [
        { name: 'description', content: 'Nuxt Merch' }
    ]
})

</script>

<style scoped></style>