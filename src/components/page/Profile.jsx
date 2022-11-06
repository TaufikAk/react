import Background from "../asset/img/bgprofile.jpg"
import profile from "../asset/img/propil.jpg"

export const Profile = () =>{
    return(
        <div className="row px-5 pb-5 d-flex justify-content-start" style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
            <div className="col-3 d-flex justify-content-start">
                <div>
                    <img className="rounded-circle img-fluid w-75 h-auto ms-5 mt-5" src={profile} alt=""/>
                    <div className="d-grid gap-2 col-6 my-3 mx-auto">
                        <button className="btn btn-primary" onclick="window.location.href='Homepage.html'" type="button">Simpan</button>
                      </div>   
                </div>
            </div>
            <div className="col-6 mt-5 pt-3 d-flex justify-content-center">
                <div>
                <p className="h1">PROFILE</p>
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
                            <input className="input w-100" type="email" disabled/>
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
                            <textarea name="" id="alamat" className="alamat w-100" rows="3"></textarea>
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
                            <select className="form-select" aria-label="Default select example" disabled>
                                <option value="penjual">Penjual/Seniman</option>
                                <option value="pembeli">Pembeli/Kolektor/Umum</option>
                              </select>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto mb-5">
                        <button className="btn btn-primary" onClick="window.location.href='Homepage.html'" type="button">Simpan</button>
                      </div>                 
                </form>
            </div>
            </div>
            </div>
        </div>
    )
}

