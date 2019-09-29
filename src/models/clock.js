let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ClockSchema = new Schema({
    model:{
        type: String,
        required: 'modelo é obrigatorio'
    },
    quantity:{ type: Number },
    price: {type: mongoose.Types.Decimal128},
    stile: {
        type: String
    },
    createAT:{
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Clocks',ClockSchema);