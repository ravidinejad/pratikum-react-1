import React, { Component } from "react";
import Card from "../Components/Card";
import { Modal } from "bootstrap";
import "../CSS/galeri.css";

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      buku: [
        { isbn: "12345", judul: "Bulan", penulis: "tere liye", penerbit: "CV Harapan Kita", harga: 90000, cover: "https://th.bing.com/th/id/OIP.8CFZqfWJj7YkQo91CvaGvQHaK0?rs=1&pid=ImgDetMain" },
        { isbn: "56789", judul: "Anak Badai", penulis: "tere liye", penerbit: "CV Nusa Bangsa", harga: 80000, cover: "https://1.bp.blogspot.com/-zE3NBRhaY5E/XaJgQ9uypXI/AAAAAAAAALg/9NEEEfO3wgYLaXbiW-Y_YX_7jwA5ss3ogCLcBGAsYHQ/s1600/Si-anak-badai_dpn_low-768x1164.jpg" },
        { isbn: "54321", judul: "Bumi", penulis: "tere liye", penerbit: "CV Jaya Abadi", harga: 70000, cover: "https://1.bp.blogspot.com/-hwQ-Ahp78bs/XxGp4XdS1II/AAAAAAAABCM/7dh0OpyMlq8Gzr34Qi9VB9c1rDpp45s5QCLcBGAsYHQ/s1600/bumii.jpg" },
        { isbn: "0895", judul: "Hujan", penulis: "tere liye", penerbit: "CV Jaya Abadi", harga: 70000, cover: "https://th.bing.com/th/id/OIP.b--dSfMFwwV1iSOtTrqmSAHaK-?w=486&h=720&rs=1&pid=ImgDetMain" }
      ],
      filterBuku: [],
      action: "",
      isbn: "",
      judul: "",
      penulis: "",
      penerbit: "",
      harga: 0,
      cover: "",
      selectedItem: null,
      keyword: ""
    };
  }

  componentDidMount() {
    this.setState({ filterBuku: this.state.buku });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <input
            type="text"
            className="form-control my-2"
            placeholder="Pencarian"
            value={this.state.keyword}
            onChange={(ev) => this.setState({ keyword: ev.target.value })}
            onKeyUp={(ev) => this.searching(ev)}
          />

          {this.state.filterBuku.map((item, index) => (
            <Card
              key={index}
              judul={item.judul}
              penulis={item.penulis}
              penerbit={item.penerbit}
              harga={item.harga}
              cover={item.cover}
              onEdit={() => this.Edit(item)}
              onDrop={() => this.Drop(item)}
            />
          ))}
        </div>

        <button className="btn btn-success" onClick={() => this.add()}>
          Tambah Data
        </button>

        <div className="modal" id="modal_buku">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">Form Buku</div>

              <div className="modal-body">
                <form onSubmit={(ev) => this.save(ev)}>
                  {["Judul", "Penulis", "Penerbit", "Harga", "Cover"].map(
                    (label, index) => (
                      <input
                        key={index}
                        type={label === "Harga" ? "number" : "text"}
                        className="form-control mb-2"
                        value={this.state[label.toLowerCase()]}
                        onChange={(ev) =>
                          this.setState({ [label.toLowerCase()]: ev.target.value })
                        }
                        required
                        placeholder={`${label} Buku`}
                      />
                    )
                  )}

                  <button className="btn btn-info btn-block" type="submit">
                    Simpan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  add = () => {
    Modal.getOrCreateInstance("#modal_buku").show();
    this.setState({
      isbn: Math.random().toString(),
      judul: "",
      penulis: "",
      penerbit: "",
      cover: "",
      harga: 0,
      action: "insert"
    });
  };

  Edit = (item) => {
    Modal.getOrCreateInstance("#modal_buku").show();
    this.setState({
      isbn: item.isbn,
      judul: item.judul,
      penulis: item.penulis,
      penerbit: item.penerbit,
      cover: item.cover,
      harga: item.harga,
      action: "update",
      selectedItem: item
    });
  };

  save = (event) => {
    event.preventDefault();
    let tempBuku = this.state.buku;

    if (this.state.action === "insert") {
      tempBuku.push({
        isbn: this.state.isbn,
        judul: this.state.judul,
        penulis: this.state.penulis,
        penerbit: this.state.penerbit,
        cover: this.state.cover,
        harga: this.state.harga
      });
    } else if (this.state.action === "update") {
      let index = tempBuku.indexOf(this.state.selectedItem);
      tempBuku[index] = { ...tempBuku[index], ...this.state };
    }

    this.setState({ buku: tempBuku });
    Modal.getOrCreateInstance("#modal_buku").hide();
  };

  Drop = (item) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      let tempBuku = this.state.buku;
      let index = tempBuku.indexOf(item);
      tempBuku.splice(index, 1);
      this.setState({ buku: tempBuku });
    }
  };

  searching = (event) => {
    if (event.keyCode === 13) {
      let keyword = this.state.keyword.toLowerCase();
      let result = this.state.buku.filter((item) =>
        Object.values(item).some(
          (value) => typeof value === "string" && value.toLowerCase().includes(keyword)
        )
      );
      this.setState({ filterBuku: result });
    }
  };
}

export default Gallery;
