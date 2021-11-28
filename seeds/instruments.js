const { Instrument } = require("../models");

const instrumentData = [
  {
    instrument_name: "Guitar",
    user_id: 1,
  },
  {
    instrument_name: "Drums",
    user_id: 2,
  },
];

const seedInstrument = () => Instrument.bulkCreate(instrumentData);

module.exports = seedInstrument;
