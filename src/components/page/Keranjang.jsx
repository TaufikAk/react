

const Keranjang = () =>{
    return(
        <div className="container-fluid">
    <section>
      <p className="h3 fw-bold m-5">Keranjang</p>
        <div className="row">
      <div className="col-9">
        
      <div className="row p-2 justify-content-center">
        <table className="table w-75 table-bordered bg-light" id="table-s">
          <tr>
            <td>
              <table className="table table-borderless p-1">
                <tbody>
                  <tr className="row">
                    <td className="col-3 text-center"><img src="../Media/image/lukisant1.png" className="img-fluid" alt="lukisan"/></td>
                    <td className="col-3 text-center">Nama Lukisan</td>
                    <td className="col-3 text-center">Rp. XX.XXX.XXX,00</td>
                    <td className="col-3 text-center">Diproses</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table className="table table-borderless p-1">
                <tbody>
                  <tr className="row">
                    <td className="col-3 text-center"><img src="../Media/image/lukisant1.png" className="img-fluid" alt="lukisan"/></td>
                    <td className="col-3 text-center">Nama Lukisan</td>
                    <td className="col-3 text-center">Rp. XX.XXX.XXX.XXX,00</td>
                    <td className="col-3 text-center">Selesai</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table className="table table-borderless m-1">
                <tbody>
                  <tr className="row">
                    <td className="col-3 text-center"><img src="../Media/image/lukisant1.png" className="img-fluid" alt="lukisan"/></td>
                    <td className="col-3 text-center">Nama Lukisan</td>
                    <td className="col-3 text-center">Rp. XX.XXX.XXX.XXX,00</td>
                    <td className="col-3 text-center">Selesai</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>
    </div>
</div>
<div className="col-3 justify-content-center text-center">
   

        <div>Total Harga</div>
        <div>Rp. XX.XXX.XXX.XXX,00</div>
        <button className="btn btn-primary m-3" onclick="window.location.href='Checkout.html'" type="button">Checkout</button>
              
    
</div>
</div>
    </section>
</div>
    )
}

export default Keranjang