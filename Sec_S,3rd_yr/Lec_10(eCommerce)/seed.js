const mongoose=require("mongoose")
const Product = require("./model/Product")

const dummy_data=[
    {
        name:"i phone 15",
        price:150000,
        img:"https://images.unsplash.com/photo-1688649593308-40dfbb552d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aSUyMHBob25lJTIwMTV8ZW58MHx8MHx8fDA%3D",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nam enim. Atque blanditiis porro exercitationem?"
    },
    {
        name:"macbook",
        price:200000,
        img:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nam enim. Atque blanditiis porro exercitationem?"
    },
    {
        name:"apple watch",
        price:45000,
        img:"https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nam enim. Atque blanditiis porro exercitationem?"
    },
    {
        name:"apple earpods",
        price:15000,
        img:"https://images.unsplash.com/photo-1645191424218-3a98a3cea1be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlJTIwYWlycG9kfGVufDB8fDB8fHww",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nam enim. Atque blanditiis porro exercitationem?"
    },
    {
        name:"apple airtag",
        price:12000,
        img:"https://images.unsplash.com/photo-1620787203332-208556f87858?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwcGxlJTIwYWlydGFnfGVufDB8fDB8fHww",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nam enim. Atque blanditiis porro exercitationem?"
    },
    {
        name:"apple tv",
        price:150000,
        img:"https://images.unsplash.com/photo-1592042221673-7320147c7482?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGUlMjB0dnxlbnwwfHwwfHx8MA%3D%3D",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nam enim. Atque blanditiis porro exercitationem?"
    },
    {
        name:"i pad",
        price:45000,
        img:"https://images.unsplash.com/photo-1552415183-52af5aef5816?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBpcGFkfGVufDB8fDB8fHww",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nam enim. Atque blanditiis porro exercitationem?"
    },
    {
        name:"apple vision pro",
        price:30000,
        img:"https://images.unsplash.com/photo-1707228773518-7ca0492d0c4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjB2aXNpb24lMjBwcm98ZW58MHx8MHx8fDA%3D",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nam enim. Atque blanditiis porro exercitationem?"
    },
]

mongoose.connect('mongodb://127.0.0.1:27017/eCommerce_secS')
.then(async()=>{
   await Product.create(dummy_data)
})