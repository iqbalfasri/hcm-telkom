import React, { Component } from 'react';

const imageUrl = 'https://images.unsplash.com/photo-1536443527011-81700919d4c0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=339cd72fb332fcf1a88e53d34d0425d3&auto=format&fit=crop&w=1350&q=80';

export default class Content extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="content-head">Daftar Cerita</h1>

        {/* Featured Konten */}
        <div className="row">
          <div className="col-md-6">
            <a href="" class="card">
              <img class="card-img-top" src={imageUrl} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Membangun Budaya Solid, Speed, Smart di Witel Banten</h5>
                <p class="card-text"><small class="text-muted">Sept 03 - 3 menit baca</small></p>
                <p class="card-text">
                  Vivamus leo nibh, pretium sed sem at, rhoncus fermentum mauris. Curabitur in quam pharetra, consequat ligula vitae, viverra ante. Nullam mollis neque sit amet nunc egestas rutrum. In placerat nisi a turpis congue tristique. Aliquam viverra quam sit amet orci consectetur, vitae interdum lacus consectetur. <br /><br />Sed ullamcorper luctus elementum. In hac habitasse platea dictumst. Praesent suscipit mauris sit amet nulla lacinia, a hendrerit erat pharetra. Etiam efficitur dui at mi efficitur vestibulum. Mauris vitae fringilla mi. Vestibulum dictum elit id fermentum ultricies. Curabitur viverra eu libero vitae rhoncus. Vivamus consequat sapien eu nulla facilisis varius.
                </p>
              </div>
            </a>
          </div>
          {/* Baris Sebelah Kanan untuk kontent kecil */}
          <div className="col-md-6">
            {/* Bagian Atas */}
            <div className="row">
              <a className="col-md-6">
                <a href="" class="card">
                  <img class="card-img-top" src={imageUrl} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Membangun Budaya Solid, Speed, Smart di Witel Banten</h5>
                    <p class="card-text"><small class="text-muted">Sept 03 - 3 menit baca</small></p>
                  </div>
                </a>
              </a>
              <div className="col-md-6">
                <a href="" class="card">
                  <img class="card-img-top" src={imageUrl} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Membangun Budaya Solid, Speed, Smart di Witel Banten</h5>
                    <p class="card-text"><small class="text-muted">Sept 03 - 3 menit baca</small></p>
                  </div>
                </a>
              </div>
            </div>

            {/* Bagian Bawah */}
            <div className="row" style={{ marginTop: 15 }}>
              <div className="col-md-6">
                <a href="" class="card">
                  <img class="card-img-top" src={imageUrl} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Membangun Budaya Solid, Speed, Smart di Witel Banten</h5>
                    <p class="card-text"><small class="text-muted">Sept 03 - 3 menit baca</small></p>
                  </div>
                </a>
              </div>
              <div className="col-md-6">
                <a href="" class="card">
                  <img class="card-img-top" src={imageUrl} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Membangun Budaya Solid, Speed, Smart di Witel Banten</h5>
                    <p class="card-text"><small class="text-muted">Sept 03 - 3 menit baca</small></p>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* List Konten */}
        <div className="row" style={{ marginBlockStart: 50, marginBlockEnd: 120 }}>
          <div className="col-md-4">
            <a href="" class="card">
              <img class="card-img-top" src={imageUrl} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Membangun Budaya Solid, Speed, Smart di Witel Banten</h5>
                <p class="card-text"><small class="text-muted">Sept 03 - 3 menit baca</small></p>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="" class="card">
              <img class="card-img-top" src={imageUrl} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Membangun Budaya Solid, Speed, Smart di Witel Banten</h5>
                <p class="card-text"><small class="text-muted">Sept 03 - 3 menit baca</small></p>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="" class="card">
              <img class="card-img-top" src={imageUrl} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Membangun Budaya Solid, Speed, Smart di Witel Banten</h5>
                <p class="card-text"><small class="text-muted">Sept 03 - 3 menit baca</small></p>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
