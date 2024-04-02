const mongoose=require("mongoose")
const Product = require("./model/Product")

const dummy_data=[
    {
        name:"i phone 15",
        price:150000,
        img:"https://images.unsplash.com/photo-1688649593308-40dfbb552d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aSUyMHBob25lJTIwMTV8ZW58MHx8MHx8fDA%3D",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita nihil accusantium, consequatur quam asperiores."
    },
    {
        name:"macbook",
        price:250000,
        img:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita nihil accusantium, consequatur quam asperiores."
    },
    {
        name:"apple watch",
        price:45000,
        img:"https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita nihil accusantium, consequatur quam asperiores."
    },
    {
        name:"i pad",
        price:50000,
        img:"https://images.unsplash.com/photo-1546868871-0f936769675e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBpJTIwcGFkfGVufDB8fDB8fHww",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita nihil accusantium, consequatur quam asperiores."
    },
    {
        name:"apple vision pro",
        price:30000,
        img:"https://images.unsplash.com/photo-1707228773518-7ca0492d0c4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjB2aXNpb24lMjBwcm98ZW58MHx8MHx8fDA%3D",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita nihil accusantium, consequatur quam asperiores."
    },
    {
        name:"apple earpds",
        price:15000,
        img:"https://images.unsplash.com/photo-1535057929422-25260d3e1a54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGUlMjBlYXJwb2RzfGVufDB8fDB8fHww",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita nihil accusantium, consequatur quam asperiores."
    },
    {
        name:"apple tv",
        price:55000,
        img:"https://images.unsplash.com/photo-1592042221673-7320147c7482?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGUlMjB0dnxlbnwwfHwwfHx8MA%3D%3D",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita nihil accusantium, consequatur quam asperiores."
    },
    {
        name:"apple airtag",
        price:10000,
        img:"https://images.unsplash.com/photo-1619948543232-c515a389c22d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBwbGUlMjBhaXJ0YWdzfGVufDB8fDB8fHww",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita nihil accusantium, consequatur quam asperiores."
    },
]

mongoose.connect('mongodb://127.0.0.1:27017/eCommerce_secAX')
.then(async()=>{
   await Product.create(dummy_data)
})