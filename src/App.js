import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1 align="center">Form Pembeliah Buah</h1>
      <table cellpadding="10" cellspacing="10">
        <tr>
          <td>
            <b>Nama Pelanggan</b>
          </td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td class="vertical">
            <b>Daftar Item</b>
          </td>
          <td>
            <input type="checkbox" />
            Semangka
            <br />
            <input type="checkbox" />
            Jeruk
            <br />
            <input type="checkbox" />
            Nanas
            <br />
            <input type="checkbox" />
            Salak
            <br />
            <input type="checkbox" />
            Anggur
            <br />
          </td>
        </tr>
        <tr>
          <td>
            <input type="submit" value="Kirim" class="tombol" />
          </td>
        </tr>
      </table>
    </div>
  );
}
