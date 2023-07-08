class ProductManager {

    constructor () {
        this.products = [];
    };

    addProduct(title, description, price, thumbnail, code, stock) {
        const codeRepetido = this.products.find(p => p.code === code)
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: this.products.length + 1
        }
        if(title && description && price && thumbnail && code && stock != undefined && !codeRepetido){
            this.products.push(product)
        } else {
            console.log("Complete todo")
        }
    };

    getProducts(){
        return this.products
    };

    getProductsById(id){
        const productById = this.products.find(p => p.id == id)
        if (productById) {
            return productById
        }
        return console.error("Not Found")
    };
}

const productos1 = new ProductManager()
productos1.addProduct('Cafe', 'Taza de cafe', 600, 'url imagen', 1406, 200)
productos1.addProduct('Cafe con torta', 'Taza de cafe con una procion de torta', 1200, 'url imagen', 1422, 300)
productos1.addProduct('Cafe con leche', 'Taza de cafe con leche', 700, 'url imagen', 6022, 550)

const productoId1 = productos1.getProductsById(2)

productos1.getProductsById(5)

console.log(productos1.getProducts())

console.log(productoId1)