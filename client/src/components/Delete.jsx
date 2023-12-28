import React from "react";
import { redirect } from "react-router-dom";

export async function action({ request, params }) {
    const id = params?.id;

    try {
        const apiUrl = `http://localhost:5000/mahasiswa`;
        const response = await axios.delete(apiUrl);
        console.log(response);
        return {message: "data berhasil dihapus"};
    } catch (error) {
        console.log(error);
        return {message: "data gagal dihapus"};
    } finally {
        return redirect("/");
    }
}