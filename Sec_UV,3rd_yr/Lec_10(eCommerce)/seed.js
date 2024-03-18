const mongoose = require("mongoose")
const Product = require("./model/Product")

const dummy_data = [
    {
        name: "i phone 15",
        price: 80000,
        img: "https://images.unsplash.com/photo-1688649593308-40dfbb552d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aSUyMHBob25lJTIwMTV8ZW58MHx8MHx8fDA%3D",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
    {
        name: "macbook",
        price: 200000,
        img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
    {
        name: "apple earpods",
        price: 45000,
        img: "https://images.unsplash.com/photo-1535057929422-25260d3e1a54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGUlMjBlYXJwb2RzfGVufDB8fDB8fHww",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
    {
        name: "apple watch",
        price: 50000,
        img: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
    {
        name: "apple airtag",
        price: 12000,
        img: "https://images.unsplash.com/photo-1620376153436-02f9a4b44d88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBhaXJ0YWd8ZW58MHx8MHx8fDA%3D",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
    {
        name: "apple tv",
        price: 16000,
        img: "https://images.unsplash.com/photo-1592042221673-7320147c7482?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGUlMjB0dnxlbnwwfHwwfHx8MA%3D%3D",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
    {
        name: "apple vision pro",
        price: 300000,
        img: "https://images.unsplash.com/photo-1707228773518-7ca0492d0c4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGUlMjB2aXNpb258ZW58MHx8MHx8fDA%3D",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
    {
        name: "apple mac mini",
        price: 50000,
        img: "https://images.unsplash.com/photo-1611648695058-f7df03849bc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlJTIwbWFjfGVufDB8fDB8fHww",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
]

mongoose.connect('mongodb://127.0.0.1:27017/eCommerce_secUV')
    .then(async () => {
        await Product.create(dummy_data)
    })