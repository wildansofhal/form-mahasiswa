const mongoose = require("mongoose");

const Mhs = mongoose.Schema({
    nama: {
        type: String,
        require: true,
    },

    nim: {
        type: Number,
        require: true,
        unique: true,
    },

    jurusan: {
        type: String,
        require: true,
    },

    fakultas: {
        type: String,
        require: true,
    },

    jenisKelamin: {
        type: String,
        require: true,
        enum: ["laki-laki", "perempuan"],
    },

    tempatLahir: {
        type: String,
        require: true,
    },

    tanggalLahir: {
        type: String,
        require: true,
    },

    noTelepon: {
        type: Number,
        require: true,
    },

    alamat: {
        type: String,
        require: true,
    },
  
})

module.exports = mongoose.model("Mhs", Mhs);