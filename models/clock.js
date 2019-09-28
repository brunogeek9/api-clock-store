let mongoose = require('mongoose');
require('mongoose-double')(mongoose);
let Schema = mongoose.Schema;
let ClockSchema = new Schema({
    model:{
        type: String,
        required: 'modelo é obrigatorio'
    },
    quantity:{ type: Number, required: true },
    price: {type: SchemaTypes.Double},
    stile: {
        type: String,
        enum: ['Analogico', 'Digital']
    }
})

module.exports = mongoose.model('Clocks',ClockSchema);