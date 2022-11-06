import Background from '../asset/img/bgdaftar.jpg'

const Daftar = () =>{
    return(
        <div className="row px-5 pb-5 d-flex justify-content-center" id="bodyD" style={{backgroundSize: 'cover', backgroundImage:`url(${Background})`}}>
        <div className="col-6 mt-5 pt-3 d-flex justify-content-center">
            <div>
            <p className="h1">FORM PENDAFTARAN</p>
            <div className="form">
            <form action="" method="post">
                <div className="form-row my-3 d-flex">
                    <div className="nama w-25">Nama</div>
                    <div className="value w-75">
                        <input className="input w-100" type="text"/>
                    </div>
                </div>
                <div className="form-row my-3 d-flex">
                    <div className="nama w-25">Email</div>
                    <div className="value w-75">
                        <input className="input w-100" type="email"/>
                    </div>
                </div>
                <div className="form-row my-3 d-flex">
                    <div className="nama w-25">Password</div>
                    <div className="value w-75">
                        <input className="input w-100" type="password"/>
                    </div>
                </div>
                <div className="form-row my-3 d-flex">
                    <div className="nama w-25">Ulangi Password</div>
                    <div className="value w-75">
                        <input className="input w-100" type="password"/>
                    </div>
                </div>
                <div className="form-row my-3 d-flex">
                    <div className="nama w-25">Tanggal Lahir</div>
                    <div className="value w-75">
                        <input className="input w-100" type="date"/>
                    </div>
                </div>
                <div className="form-row my-3 d-flex">
                    <div className="nama w-25">Alamat</div>
                    <div className="value w-75">
                        <textarea name="" id="alamat" cols="38" rows="3"></textarea>
                    </div>
                </div>
                <div className="form-row my-3 d-flex">
                    <div className="nama w-25">Provinsi</div>
                    <div className="value w-75">
                        <input className="input w-100" type="text" disabled placeholder="Jawa Barat"/>
                    </div>
                </div>
                <div className="form-row my-3 d-flex">
                    <div className="nama w-25">Kota/Kab</div>
                    <div className="value w-75">
                        <select className="form-select" aria-label="Default select example">
                            <option value="kotaBandung">Kota Bandung</option>
                            <option value="kotaBogor">Kota Bogor</option>
                            <option value="kabBandung">Kab. Bandung</option>
                            <option value="kabBogor">Kab. Bogor</option>
                          </select>
                    </div>
                </div>
                <div className="form-row my-3 d-flex">
                    <div className="nama w-25">Kecamatan</div>
                    <div className="value w-75">
                        <select className="form-select" aria-label="Default select example">
                            <option value="antapani">Antapani</option>
                            <option value="arcamanik">Arcamanik</option>
                            <option value="cibiru">Cibiru</option>
                            <option value="panyileukan">Panyileukan</option>
                          </select>
                    </div>
                </div>
                <div className="form-row my-3 d-flex">
                    <div className="nama w-25">Jenis User</div>
                    <div className="value w-75">
                        <select className="form-select" aria-label="Default select example">
                            <option value="penjual">Penjual/Seniman</option>
                            <option value="pembeli">Pembeli/Kolektor/Umum</option>
                          </select>
                    </div>
                </div>
                <div className="form-row my-3 d-flex">
                    <div className="nama text-end">Sudah punya akun? <a href="HomepagenL.html">Kembali ke Home</a></div>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto mb-5">
                    {/* <button className="btn btn-primary" onClick={window.location.href='HomepagenL.html'} type="button">Daftar</button> */}
                  </div>                 
            </form>
        </div>
        </div>
        </div>
    </div>
    )
}

export default Daftar;