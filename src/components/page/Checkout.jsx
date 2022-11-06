

export const Checkout = () => {
    return(
        <div className="container">
    
    <section>
        <div className="h1 fw-bold mt-5">Checkout</div>
        <div className="row">
            <div className="col-12 my-5">
                <div className="h3">Penerima dan Alamat</div>
                <div className="penerima">Ujang Sajalan</div>
                <div className="alamat">Perumahan Beji Permai blok ZZZ/13 Kelurahan Beji, Kecamatan Beji, Kabupaten Depok, Jawa Barat 16421</div>
            </div>
            <div className="col-8">
                <div className="border border-3 bg-light">
                <div className="jasa" onclick="myEkspedisi('ekspedisi')">Jasa Ekspedisi 
                <img src="../Media/image/posindo.png" alt="" className="imeg"/>
                <img src="../Media/image/j&t.svg" alt="" className="imeg"/>
                <img src="../Media/image/jne.png" alt="" className="imeg"/>
                <img src="../Media/image/ninja.png" alt="" className="imeg"/>
                </div>
                <div className="eks">
                <div className="ekspedisi justify-content-center p-2">
                    <p><img src="../Media/image/posindo.png" alt="" className="imeg"/>
                    Pos Indonesia
                    Rp. XXX.XXX,00
                    <input className="form-check-input justify-content-center" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."/></p>
                </div>
                <div className="ekspedisi justify-content-center p-2">
                    <p><img src="../Media/image/j&t.svg" alt="" className="imeg"/>
                    Pos Indonesia
                    Rp. XXX.XXX,00
                    <input className="form-check-input justify-content-center" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."/></p>
                </div>
                <div className="ekspedisi justify-content-center p-2">
                    <p><img src="../Media/image/jne.png" alt="" className="imeg"/>
                    Pos Indonesia
                    Rp. XXX.XXX,00
                    <input className="form-check-input justify-content-center" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."/></p>
                </div>
                <div className="ekspedisi justify-content-center p-2">
                    <p><img src="../Media/image/ninja.png" alt="" className="imeg"/>
                    Pos Indonesia
                    Rp. XXX.XXX,00
                    <input className="form-check-input justify-content-center" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."/></p>
                </div>
              </div>
                </div>
                <div className="border border-3 bg-light mb-5">
                <div className="pembayaran" onclick="myBank('bang')">Pembayaran 
                <img src="../Media/image/mandiri.svg" alt="" className="imeg"/>
                <img src="../Media/image/bca.svg" alt="" className="imeg"/>
                <img src="../Media/image/bni.svg" alt="" className="imeg"/>
                <img src="../Media/image/bjb.svg" alt="" className="imeg"/>
                </div>
                <div className="bang">
                <div className="bank p-2">
                    <p><img src="../Media/image/mandiri.svg" alt="" className="imeg"/>
                    Bank Mandiri
                    <input className="form-check-input justify-content-center" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."/></p>
                </div>
                <div className="bank p-3">
                    <p><img src="../Media/image/bca.svg" alt="" className="imeg"/>
                    Bank BCA
                    <input className="form-check-input justify-content-center" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."/></p>
                </div>
                <div className="bank p-2">
                    <p><img src="../Media/image/bni.svg" alt="" className="imeg"/>
                    Bank BNI
                    <input className="form-check-input justify-content-center" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."/></p>
                </div>
                <div className="bank p-2">
                    <p><img src="../Media/image/bjb.svg" alt="" className="imeg"/>
                    Bank BJB
                    <input className="form-check-input justify-content-center" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."/></p>
                </div>
              </div>
                </div>
            </div>
            <div className="col-4">
                <p><div>Total Produk </div>
                <div> Rp. XX.XXX.XXX.XXX,00</div></p>
                <p><div>Biaya Ekspedisi </div>
                <div> Rp. XX.XXX.XXX.XXX,00</div></p>
                <p><div>Biaya Admin </div>
                <div> Rp. XX.XXX.XXX.XXX,00</div></p>
                <p><div>Total Biaya </div>
                <div> Rp. XX.XXX.XXX.XXX,00</div></p>
                <button className="btn btn-primary m-3" onclick="alert('')" type="button">Bayar</button>
            </div>
        </div>
       </section>
       </div>
    )
}