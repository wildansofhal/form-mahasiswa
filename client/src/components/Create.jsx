import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigate,
} from "react-router-dom";

export async function action({ request, params }) {
  try {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);

    const nama = updates.nama;
    const nim = updates.nim;
    const jurusan = updates.jurusan;
    const fakultas = updates.fakultas;
    const tempatLahir = updates.tempatLahir;
    const jenisKelamin = updates.jenisKelamin;
    const tanggalLahir = updates.tanggalLahir;
    const noTelepon = updates.noTelepon;
    const alamat = updates.alamat;

    const requestBody = {
      nama,
      nim,
      jurusan,
      fakultas,
      jenisKelamin,
      tempatLahir,
      tanggalLahir,
      noTelepon,
      alamat,
    };

    console.log(requestBody);
    const apiUrl = `https://form-mahasiswa-api.vercel.app/mahasiswa`;
    const response = await axios.post(apiUrl, requestBody);
    console.log(response);
    return { data: response.data, message: "data berhasil disimpan" };
  } catch (error) {
    console.log(error);
    return { message: "data gagal disimpan" };
  }
}

export async function loader({ params }) {
  const uid = params?.id;
  try {
    const apiUrl = `https://form-mahasiswa-api.vercel.app/mahasiswas`;
    const response = await axios.get(apiUrl);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
}

export default function Create() {
  const mhs = useLoaderData();
  const { status } = useActionData() || "";
  console.log(mhs, status);
  const [mahasiswa, setMahasiswa] = useState("");
  const [nim, setNim] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [fakultas, setFakultas] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [noTelepon, setNoTelepon] = useState("");
  const [alamat, setAlamat] = useState("");

  useEffect(() => {
    if (status?.message) {
      alert(status.message);
      if (status.message === "data berhasil disimpan") {
        setMahasiswa("");
        setNim("");
        setJurusan("");
        setFakultas("");
        setJenisKelamin("");
        setTempatLahir("");
        setTanggalLahir("");
        setNoTelepon("");
        setAlamat("");
      }
    }
  }, [status]);

  return (
    <>
      <div style={{ margin: "4rem" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Form Mahasiswa
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            border: "2px solid white",
            padding: "2rem",
            borderRadius: "1rem",
          }}
        >
        <Form method="POST">
          <div className="form-input">
            <label>Nama</label>
            <input
              name="nama"
              type="text"
              value={mahasiswa}
              onInput={(e) => setMahasiswa(e.target.value)}
              required
            />
          </div>
          <div className="form-input">
            <label>NIM</label>
            <input
              name="nim"
              type="number"
              value={nim}
              onInput={(e) => setNim(e.target.value)}
              required
            />
          </div>
          <div className="form-input">
            <label>Jurusan</label>
            <input
              name="jurusan"
              type="text"
              value={jurusan}
              onInput={(e) => setJurusan(e.target.value)}
              required
            />
          </div>
          <div className="form-input">
            <label>Fakultas</label>
            <input
              name="fakultas"
              type="text"
              value={fakultas}
              onInput={(e) => setFakultas(e.target.value)}
              required
            />
          </div>
          <div className="form-input">
            <label>Jenis Kelamin</label>
            <select
              name="jenisKelamin"
              value={jenisKelamin}
              onChange={(e) => setJenisKelamin(e.target.value)}
              required
            >
              <option value="laki-laki">Laki-laki</option>
              <option value="perempuan">Perempuan</option>
            </select>
          </div>
          <div className="form-input">
            <label>Tempat Lahir</label>
            <input
              name="tempatLahir"
              type="text"
              value={tempatLahir}
              onInput={(e) => setTempatLahir(e.target.value)}
              required
            />
          </div>
          <div className="form-input">
            <label>Tanggal Lahir</label>
            <input
              name="tanggalLahir"
              type="date"
              value={tanggalLahir}
              onInput={(e) => setTanggalLahir(e.target.value)}
              required
            />
          </div>
          <div className="form-input">
            <label>Nomor Telepon</label>
            <input
              name="noTelepon"
              type="text"
              value={noTelepon}
              onInput={(e) => setNoTelepon(e.target.value)}
              required
            />
          </div>
          <div className="form-input">
            <label>Alamat</label>
            <textarea
              name="alamat"
              value={alamat}
              onInput={(e) => setAlamat(e.target.value)}
            ></textarea>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <button type="submit">Simpan</button>
          </div>
        </Form>
        </div>
        
        <h1 style={{ textAlign: "center", margin: "2rem 0" }}>
          List Mahasiswa
        </h1>
        <div
          style={{
            borderRadius: "1rem",
          }}
        >
        
          {mhs?.map((mahasiswa) => (
            <div key={mahasiswa._id}
              style={{
                margin: "0.5rem 0",
                border: "0.25px solid white",
                padding: "2rem",
                borderRadius: "0.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              <div className="form-display">
                <h2>{`${mahasiswa.nama}`}</h2>
                <p>{`${mahasiswa.nim}`}</p>
              </div>
              <Link to={`/${mahasiswa._id}`} style={{ color: "white" }}>
                <button>Detail</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
