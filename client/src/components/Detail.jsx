import React from "react";
import { useLoaderData, Link, Form } from "react-router-dom";
import axios from "axios";

export async function action({ request, params }) {
    const id = params?.id;

    let message;
    try {
        if (confirm("Hapus data ini?")) {
            const apiUrl = `https://form-mahasiswa-api.vercel.app/mahasiswa`;
            const response = await axios.delete(apiUrl);
            message= "data berhasil dihapus";
            return redirect("/");
        }
        return redirect(`/${id}`);
    } catch (error) {
        console.log(error);
        message= "data gagal dihapus";
        return redirect(`/${id}`);
    } finally {
        return {message};
    }
}

export async function loader({ params }) {
  const id = params?.id;
  try {
    const apiUrl = `https://form-mahasiswa-api.vercel.app/mahasiswa/id/${id}`;
    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error) {
    console.log(error)
    return error;
  }
}

export default function Detail() {
  const mhs = useLoaderData();
  return (
    <div style={{margin: "4rem"}}>
    <h1 style={{textAlign: "center", marginBottom: "2rem"}}>Detail Mahasiswa</h1>
    <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignContent: "center", border: "2px solid white", padding: "2rem", borderRadius: "1rem"}}>

      <table>
        <tr>
          <th>Nama</th>
          <td>{`: ${mhs.nama}`}</td>
        </tr>
        <tr>
          <th>NIM</th>
          <td>{`: ${mhs.nim}`}</td>
        </tr>
        <tr>
          <th>Jurusan</th>
          <td>{`: ${mhs.jurusan}`}</td>
        </tr>
        <tr>
          <th>Fakultas</th>
          <td>{`: ${mhs.fakultas}`}</td>
        </tr>
        <tr>
          <th>Jenis Kelamin</th>
          <td>{`: ${mhs.jenisKelamin}`}</td>
        </tr>
        <tr>
          <th>Tempat Lahir</th>
          <td>{`: ${mhs.tempatLahir}`}</td>
        </tr>
        <tr>
          <th>Tanggal Lahir</th>
          <td>{`: ${mhs.tanggalLahir}`}</td>
        </tr>
        <tr>
          <th>Nomor Telepon</th>
          <td>{`: ${mhs.noTelepon}`}</td>
        </tr>
        <tr>
          <th>Alamat</th>
          <td>{`: ${mhs.alamat}`}</td>
        </tr>
      </table>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "end", marginTop: "4rem"}}>
        <Link to={`/${mhs._id}/update`} style={{ color: "white" }}>
          <button>Edit</button>
        </Link>
        <Form method="post">
          <button type="submit">Hapus</button>
        </Form>
        <Link to={`/`} style={{ color: "white" }}>
          <button>Kembali</button>
        </Link>
      </div>
      </div>
    </div>
  );
}
