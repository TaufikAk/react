import lukisan from "../asset/img/lukisant1.png"

export const Dashpembeli = () =>{
    return(
        <section>
      <p className="h3 fw-bold m-5">Pembeli</p>
      <div className="row d-flex justify-content-center p-2">
        <table className="table w-75 table-bordered bg-light" id="table-s">
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
    </section>
    )
}