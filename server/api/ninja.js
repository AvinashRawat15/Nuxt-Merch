export default defineEventHandler(async (event) => {
    //handle query params
    // const {name} = getQuery(event);

    // //handle post data
    // const {age} = await useBody(event);

    //api call with private key
    const { currencyKey } = useRuntimeConfig()


    const { data } = await $fetch('https://api.currencyapi.com/v1/latest?apikey=cur_live_sXZyZp1GOmxF42QLl308wPz4QxwmcRK2M5x6LsYx')

    return data
})