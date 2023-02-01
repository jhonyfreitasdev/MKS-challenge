export async function getProducts() {
    const response = await fetch('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC')
    const json = await response.json()
    return json.products
}