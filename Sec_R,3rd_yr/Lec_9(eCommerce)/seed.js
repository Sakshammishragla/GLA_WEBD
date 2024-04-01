const mongoose=require("mongoose")
const Product = require("./model/Product")


const dummy_data=[
    {
        name:"i phone 15",
        price:149000,
        img:"https://images.unsplash.com/photo-1688649593308-40dfbb552d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBpJTIwcGhvbmUlMjAxNXxlbnwwfHwwfHx8MA%3D%3D",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consectetur? Eaque sint voluptas consequatur omnis."
    },
    {
        name:"macbook",
        price:249000,
        img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consectetur? Eaque sint voluptas consequatur omnis."
    },{
        name:"apple vision pro",
        price:30000,
        img:"https://images.unsplash.com/photo-1707228773518-7ca0492d0c4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjB2aXNpb24lMjBwcm98ZW58MHx8MHx8fDA%3D",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consectetur? Eaque sint voluptas consequatur omnis."
    },{
        name:"apple watch",
        price:45000,
        img:"https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consectetur? Eaque sint voluptas consequatur omnis."
    },
    {
        name:"apple earpods",
        price:15000,
        img:"https://images.unsplash.com/photo-1535057929422-25260d3e1a54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGUlMjBlYXJwb2RzfGVufDB8fDB8fHww",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consectetur? Eaque sint voluptas consequatur omnis."
    },
    {
        name:"apple ipad",
        price:49000,
        img:"https://images.unsplash.com/photo-1552415183-52af5aef5816?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBpcGFkfGVufDB8fDB8fHww",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consectetur? Eaque sint voluptas consequatur omnis."
    },
    {
        name:"apple tv",
        price:12000,
        img:"https://images.unsplash.com/photo-1592042221673-7320147c7482?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGUlMjB0dnxlbnwwfHwwfHx8MA%3D%3D",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consectetur? Eaque sint voluptas consequatur omnis."
    },
    {
        name:"apple airtag",
        price:14000,
        img:"https://images.unsplash.com/photo-1620376153810-e891ca57d039?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBhaXJ0YWd8ZW58MHx8MHx8fDA%3D",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consectetur? Eaque sint voluptas consequatur omnis."
    },
]

mongoose.connect('mongodb://127.0.0.1:27017/eCommerce_secR')
.then(async()=>{
   await Product.create(dummy_data)
})