var mongoose = require('mongoose');
const Clock = mongoose.model('Clocks');
// var Clock = require('./models/Clock');

module.exports = {
    async index(req, res) {
        try {
            const clocks = await Clock.find({});
            return res.json(clocks);
        } catch (error) {
            console.info(error)
            return res.json(error);
        }
        
    },

    async show(req, res) {
        const clock = await Clock.findById(req.params.id);
        return res.json(clock);
    },

    async store(req, res) {
        const clock = await Clock.create(req.body);
        return res.json(clock);
            
        

    },

    async update(req, res) {
        const clock = await Clock.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        return res.json(clock);
    },

    async destroy(req, res) {
        try {
            var result = await Clock.deleteOne({ _id: req.params.id }).exec();
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
        
    }
};