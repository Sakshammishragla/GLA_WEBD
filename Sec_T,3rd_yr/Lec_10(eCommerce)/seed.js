const Product = require("./model/Product");
const mongoose=require("mongoose")

const dummy_data=[
    {
        name:"i phone 15 pro",
        price:150000,
        img:"https://images.unsplash.com/photo-1688649593308-40dfbb552d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aSUyMHBob25lJTIwMTV8ZW58MHx8MHx8fDA%3D",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eos enim excepturi, consectetur ducimus nisi",
    },
    {
        name:"macbook air",
        price:200000,
        img:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eos enim excepturi, consectetur ducimus nisi",
    },
    {
        name:"i Pad",
        price:50000,
        img:"https://images.unsplash.com/photo-1546868871-0f936769675e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aSUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eos enim excepturi, consectetur ducimus nisi",
    },
    {
        name:"apple watch",
        price:45000,
        img:"https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eos enim excepturi, consectetur ducimus nisi",
    },
    {
        name:"apple vision pro",
        price:500000,
        img:"https://images.unsplash.com/photo-1707228773518-7ca0492d0c4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjB2aXNpb24lMjBwcm98ZW58MHx8MHx8fDA%3D",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eos enim excepturi, consectetur ducimus nisi",
    },
    {
        name:"apple earpods",
        price:150000,
        img:"https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBhaXJwb2RzfGVufDB8fDB8fHww",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eos enim excepturi, consectetur ducimus nisi",
    },
    {
        name:"apple airtags",
        price:20000,
        img:"https://images.unsplash.com/photo-1624204732809-9995dce9d77c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBhaXIlMjB0YWd8ZW58MHx8MHx8fDA%3D",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eos enim excepturi, consectetur ducimus nisi",
    },
    {
        name:"apple tv",
        price:16000,
        img:"https://images.unsplash.com/photo-1592042221673-7320147c7482?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGUlMjB0dnxlbnwwfHwwfHx8MA%3D%3D",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eos enim excepturi, consectetur ducimus nisi",
    },
]

mongoose.connect('mongodb://127.0.0.1:27017/eCommerce_secT')
.then( async()=>{
   await Product.create(dummy_data)
})