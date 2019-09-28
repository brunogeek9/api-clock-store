var mongoose = require('mongoose');
Clock = mongoose.model('Clocks');

module.exports = {
    async index(req, res) {
        // const page = req.query.page;
        const clocks = await Clock.find({});
        return res.json(clocks);
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
        await Clock.findByIdAndRemove(req.params.id);
        return res.send();
    }
};