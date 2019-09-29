const mongo = require('mongoose');
const Clock = mongo.model('Clocks');

module.exports = {
    async index(req, res) {
        try {
            const clocks = await Clock.find({});
            return res.status(200).json(clocks);
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
        try {
            const clock = await Clock.create(req.body);
            return res.json(clock);
        } catch (error) {
            return res.json(error);
        }

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