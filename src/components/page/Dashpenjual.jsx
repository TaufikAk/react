import lukisan from "../asset/img/lukisant1.png"
import lukisans from "../asset/img/lukisant2.png"

export const Dashpenjual = () =>{
    return(
        <>
        <section>
          <p className="h3 fw-bold m-5">Penjualan</p>
          <div className="row d-flex justify-content-center p-2">
            <table className="table w-75 table-bordered border-2 bg-light" id="tabel-1">
              <tr>
                <td>
                  <table className="table table-borderless m-1">
                    <tbody>
                      <tr>
                        <td rowSpan={2} style={{maxWidth: "150px"}}><img src={lukisan} className="img-fluid" alt="lukisan"/></td>
                        <td>Nama Lukisan</td>
                        <td>Rp. XX.XXX.XXX.XXX,00</td>
                        <td>Diproses</td>
                      </tr>
                      <tr>
                        <td colSpan={2}>Jln. Soekarno no. 145 RT 05 RW 35 Kel. Ciburuy, Kec. Cimarewe, Kota Bogor</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table className="table table-borderless m-1">
                    <tbody>
                      <tr>
                        <td rowSpan={2} style={{maxWidth: "150px"}}><img src={lukisan} className="img-fluid" alt="lukisan"/></td>
                        <td>Nama Lukisan</td>
                        <td>Rp. XX.XXX.XXX.XXX,00</td>
                        <td>Selesai</td>
                      </tr>
                      <tr>
                        <td colSpan={2}>Jln. Soekarno no. 145 RT 05 RW 35 Kel. Ciburuy, Kec. Cimarewe, Kota Bogor</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table className="table table-borderless m-1">
                    <tbody>
                      <tr>
                        <td rowspan={2} style={{maxWidth: "150px"}}><img src={lukisan} className="img-fluid" alt="lukisan"/></td>
                        <td>Nama Lukisan</td>
                        <td>Rp. XX.XXX.XXX.XXX,00</td>
                        <td>Selesai</td>
                      </tr>
                      <tr>
                        <td colSpan={2}>Jln. Soekarno no. 145 RT 05 RW 35 Kel. Ciburuy, Kec. Cimarewe, Kota Bogor</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </table>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
            </li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
        <hr className="solid m-5"/>
        </section>
        <section>
            <p className="h3 fw-bold m-5">Pendaftaran Lukisan</p>
            <div className="row d-flex justify-content-center p-2">
              <table className="table w-75 table-bordered bg-light" id="tabel-2">
                <tr>
                  <td>
                    <table className="table table-borderless m-1">
                      <tbody>
                        <tr>
                          <td rowSpan={2} style={{maxWidth: "150px"}}><img src={lukisans} className="img-fluid" alt="lukisan"/></td>
                          <td>Nama Lukisan</td>
                          <td>Rp. XX.XXX.XXX.XXX,00</td>
                          <td>Diproses</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>Jln. Soekarno no. 145 RT 05 RW 35 Kel. Ciburuy, Kec. Cimarewe, Kota Bogor</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table className="table table-borderless m-1">
                      <tbody>
                        <tr>
                          <td rowSpan={2} style={{maxWidth: "150px"}}><img src={lukisans} className="img-fluid" alt="lukisan"/></td>
                          <td>Nama Lukisan</td>
                          <td>Rp. XX.XXX.XXX.XXX,00</td>
                          <td>Selesai</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>Jln. Soekarno no. 145 RT 05 RW 35 Kel. Ciburuy, Kec. Cimarewe, Kota Bogor</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table className="table table-borderless m-1">
                      <tbody>
                        <tr>
                          <td rowSpan={2} style={{maxWidth: "150px"}}><img src={lukisans} className="img-fluid" alt="lukisan"/></td>
                          <td>Nama Lukisan</td>
                          <td>Rp. XX.XXX.XXX.XXX,00</td>
                          <td>Selesai</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>Jln. Soekarno no. 145 RT 05 RW 35 Kel. Ciburuy, Kec. Cimarewe, Kota Bogor</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>
              <table className="table table-borderless w-75 mt-3 me-0" style={{maxHeight: "200px"}}>
                <tbody>
                    <tr>
                        <td>Nama Lukisan</td>
                        <td><input type="text" name="" id=""/></td>
                        <td rowSpan={4}>Deskripsi</td>
                        <td rowSpan={3}><textarea name="" id="" cols="50" rows="5"></textarea></td>
                    </tr>
                    <tr>
                        <td>Harga</td>
                        <td><input type="text" id="harga"/></td>
                        
                    </tr>
                    <tr>
                        <td>Kategori</td>
                        <td><select className="form-select" aria-label="Default select example">
                            <option selected>Pilih</option>
                            <option value="1">Cat Minyak</option>
                            <option value="2">Cat Air</option>
                            <option value="3">Pastel</option>
                          </select></td>
                    </tr>
                    <tr>
                        <td>Foto</td>
                        <td><input className="form-control" type="file" id="formFile"/></td>
                        <td><button type="button" className="btn btn-light w-50">+ Lukisan</button></td>
                    </tr>
                </tbody>
              </table>
          </div>
        </section>
      </>
    )
}