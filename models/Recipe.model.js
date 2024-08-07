const { default: mongoose } = require("mongoose");

// Your code here ...
const recipeSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    instruction:{
        type: String,
        requered: true
    },
    level:{
        type: [String],
        enum:['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']
    },
    image:{
        teype: String,
        default: "https://images.media-allrecipes.com/images/75131.jpg"
    },
    duration:{
        type: Number,
        min:[0]
    },
    isArchived:{
        type: Boolean,
        default: false,
        created:{
            type: Date,
            default: Date.now
        }
    }

})

const Recipe = mongoose.model('recipe', recipeSchema)

module.exports = Recipe;