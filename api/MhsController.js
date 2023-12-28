const Mhs = require("./MhsModel.js");

const getMhs = async (req, res) => {
  try {
    const mahasiswas = await Mhs.find();
    res.json(mahasiswas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMhsById = async (req, res) => {
  try {
    const mahasiswa = await Mhs.findById(req.params.id);
    res.json(mahasiswa);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const saveMhs = async (req, res) => {
  const newMhs = new Mhs(req.body); // Use a different variable name
  try {
    const insertedMhs = await newMhs.save();
    res.status(201).json(insertedMhs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateMhs = async (req, res) => {
  try {
    const updatedMhs = await Mhs.updateOn;
    e({ _id: req.params.id }, { $set: req.body });
    res.status(200).json(updatedMhs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteMhs = async (req, res) => {
  try {
    const deletedMhs = await Mhs.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedMhs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getMhs,
  getMhsById,
  saveMhs,
  updateMhs,
  deleteMhs,
};
