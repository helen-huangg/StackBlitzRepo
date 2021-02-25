import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1 align="center">Form Pembeliah Buah</h1>
      <table cellPadding="10" cellSpacing="10">
        <tbody>
          <tr>
            <td>
              <b>Nama Pelanggan</b>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td className="vertical">
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
              <input type="submit" value="Kirim" className="tombol" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
