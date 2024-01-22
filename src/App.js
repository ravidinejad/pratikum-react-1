import React, { Component } from "react";
import "./App.css";
import Alert from "./Components/Alert";
// import element Alert yang telah dibuat
import Media from "./Components/Media";
// Impor elemen Media
import FormOsis from "./Components/Osis";



class App extends Component {
  render() {
    return (
      <div>
        {/* Mencoba dengan HTML CSS */}
        <div className="App">
          <h3 className="judul">Ini Project Pertama React JS</h3>
          <p className="subjudul">Belajar React JS itu menyenagkan</p>
        </div>

        <br />

        {/* Membuat style dengan Bootstrap */}
        <div className="App container">
          <div className="alert alert-info">
            <h3>This is My First Project Based On React JS</h3>
            <p>Belajar React JS itu mudah</p>
            <button className="mr-1 btn btn-success">setuju</button>
            <button className="btn btn-info">yes ofc</button>
          </div>
        </div>

        <br />
        <br />

        {/* Membuat Custom Elemen menggunakan Props */}
        <div className="App container col-sm-6">
          <Alert type='dark' header='hitam'>
            Ini adalah type dark
          </Alert>
          <Alert type='light' header='putih'>
            Ini adalah type light
          </Alert>
          <Alert type='info' header='Info'>
            Ini adalah type info
          </Alert>
          <Alert type='danger' header='Danger'>
            Ini adalah type Danger
          </Alert>
          <Alert type='warning' header='Warning'>
            Ini adalah type info
          </Alert>
        </div>
        <br />

        {/* Membuat Custom Element dengan Prop #2 */}
        <div className="App container col-sm-6">
          <Media image="favicon.ico" title="React JS" type="info" >
            ReactJS dapat meningkatkan optimasi mesin pencari SEO pada aplikasi web dengan meningkatkan performa.
          </Media>
          <Media image="node.jpeg" title="Node JS" type="success">
            Node.js merupakan platform yang diciptakan secara khusus untuk membantu pengembangan aplikasi berbasis web
          </Media>
        </div>

        <br />
        <hr />

        {/* Pancasila */}
        <header>
          <div className='title'>PANCASILA</div>
          <br></br>
          <div className='head-text'>
            <div className='text-on-image'>
              <strong>Sila Pertama</strong>
              <br></br>
              Ketuhanan Yang Maha Esa
            </div>
            <Media image='sila ke 1.png'></Media>
          </div>

          <div className='head-text'>
            <div className='text-on-image'>
              <strong>Sila Kedua</strong>
              <br></br>
              Kemanusiaan Yang Adil dan Beradap
            </div>
            <Media image='sila ke 2.png'></Media>
          </div>

          <div className='head-text'>
            <div className='text-on-image'>
              <strong>Sila Ketiga</strong>
              <br></br>
              Persatuan indonesia
            </div>
            <Media image='sila ke 3.png'></Media>
          </div>

          <div className='head-text'>
            <div className='text-on-image'>
              <strong>Sila Keempat</strong>
              <br></br>
              Kerakyatan Yang Dipimpin Oleh Hikmad Kebijaksanaan Dalam Permusyawaratan Perwakilan
            </div>
            <Media image='sila ke 4.png'></Media>
          </div>

          <div className='head-text'>
            <div className='text-on-image'>
              <strong>Sila Kelima</strong>
              <br></br>
              Keadilan Sosial Bagi Seluruh Rakyat Indonesia
            </div>
            <Media image='sila ke 5.png'></Media>
          </div>
        </header>

        <hr />
        <br />

        {/* button warna warni */}
        <div className="container-button">
          <div className="button">
            <button className="button-merah">Merah</button>
            <button className="button-kuning">Kuning</button>
            <button className="button-hijau">Hijau</button>
            <button className="button-putih">Putih</button>
            <button className="button-hitam">Hitam</button>
          </div>
        </div>

        <hr />
        <br />

        {/* Form Osis */}
        <FormOsis />

      </div>

    );
  }
}




export default App;