
//To render lists for components, you will need for loops and array map functions
//Suppose we have an array of products, we will need to render each product in a list

const products = [
    {
        id: 1,
        title: "Product 1",
        price: 100,
        description: "This is product 1",
        image: "https://picsum.photos/100/100"
    },
    {
        id: 2,
        title: "Product 2",
        price: 200,
        description: "This is product 2",
        image: "https://picsum.photos/101/101"
    },
    {
        id: 3,
        title: "Product 3",
        price: 300,
        description: "This is product",
        image: "https://picsum.photos/102/102"
    }
]

const ProductList = () => {
    //converting [] array to <li> list items
    const listItems = products.map(products => 
        <li key={products.id}>
            <img src={products.image} alt={products.title}/>
            <p>{products.title}</p>
            <p>Price : R{products.price},00</p>
        </li>
    )
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default ProductList