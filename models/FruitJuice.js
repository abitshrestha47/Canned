import mongoose from 'mongoose';

const fruitJuiceSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:mongoose.ObjectId,
        ref:'Category',
    },
    quantity:{
        type:Number,
        required:true,
    },
    photo:{
        data:Buffer,
        contentType:String,
    },
    shipping:{
        type:Boolean,
    }
},{
    timestamps:true,
});

export default mongoose.model('FruitJuices',fruitJuiceSchema);