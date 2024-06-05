<template>
    <div>

        <Head>
            <Title>Nuxt Page | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
import { useFetch } from '#app';
import ProductDetails from '~/components/ProductDetails.vue';
// const route= useRoute();
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

//fetch the products
const { data: product } = await useFetch(uri, { key: id })

if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not Found'})
}

definePageMeta({
    layout: 'products'
})

</script>

<style scoped></style>