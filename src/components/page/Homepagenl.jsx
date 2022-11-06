import Bapa from "../asset/img/foto-bapa.jpg"
import Caro1 from "../asset/img/caro1.jpg"
import Caro2 from "../asset/img/caro2.jpeg"
import Caro3 from "../asset/img/caro3.jpg"
import Navbarnl from "../navbarfooter/navbarnl"

const HomeNL = () => {
    return (
        <>
            <main>
                <Navbarnl />
                <section>
                    <div className="row m-5">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Caro1} className="d-block w-100 " alt="foto" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Caro2} className="d-block w-100" alt="foto" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Caro3} className="d-block w-100" alt="foto" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="row pt-5 pb-5">
                            <p className="h1 text-center fw-bold mb-5">SELAMAT DATANG DI GALERI LUKIS JABAR</p>
                            <div className="col-4">
                                <img src={Bapa} className="rounded-3 img-fluid" alt="Achmad Kusumah" />
                            </div>
                            <div className="col-4">
                                <p>Galeri seni lukis Jawa Barat mangrupa website anu dijieun minangka wadah para pelukis tanah air Propinsi Jawa Barat pikeun mamerkeun hasil karyana. Salian ti jadi galeri paméran seni lukis pikeun masarakat umum jeung jadi wadah pikeun para pelukis pikeun mintonkeun hasil karyana, website ieu ogé dijadikeun forum silaturahmi para pelukis jeung kolektor seni Jawa Barat.
                                    Website ieu dipiharep bisa jadi salah sahiji tempat pilihan para aktivis seni lukis Jawa Barat pikeun memasarkeun kasenianna. Website ieu ogé dipiharep bisa jadi sarana pikeun ngagampangkeun pamasaran lukisan di Propinsi Jawa Barat.</p>
                            </div>
                            <div className="col-4">
                                <p>Galeri lukis Jabar merupakan website yang dibuat sebagai wadah bagi pelaku seni lukis (pelukis) tanah air yang berasal dari Provinsi Jawa Barat untuk memamerkan hasil karya seni ciptaannya. Selain sebagai galeri pameran seni lukis untuk masyarakat umum dan wadah bagi pelaku seni lukis untuk memamerkan hasil ciptaannya, website ini juga berfungsi sebagai wadah bagi pelaku seni lukis Jawa Barat dan kolektor seni untuk bertemu.
                                    Website ini diharapkan menjadi salah satu tempat pilihan yang digunakan para penggiat seni lukis Jawa Barat untuk memasarkan karya seninya. Website ini juga diharapkan sebagai sarana mempermudah pemasaran lukisan di Provinsi Jawa Barat.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row p-5 m-2">
                        <p className="h3 fw-bold mb-5">Lukisan Terbaru</p>
                        <div className="col pb-5 d-flex justify-content-between gap-3" style={{ overflowX: "scroll", width: "1480px" }}>
                            <div className="col-4">
                                <div className="card">
                                    <img src="https://source.unsplash.com/340x200" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" >
                                    <img src="https://source.unsplash.com/340x200" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" >
                                    <img src="https://source.unsplash.com/340x200" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" >
                                    <img src="https://source.unsplash.com/3400x200" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" >
                                    <img src="https://source.unsplash.com/340x200" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row p-5 m-2">
                        <p className="h3 fw-bold mb-5">Lukisan Termahal</p>
                        <div className="col pb-5 d-flex justify-content-between gap-3" style={{ overflowX: "scroll", width: "1480px" }}>
                            <div className="col-4">
                                <div className="card" >
                                    <img src="https://source.unsplash.com/340x200" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" >
                                    <img src="https://source.unsplash.com/340x200" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" >
                                    <img src="https://source.unsplash.com/340x200" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" >
                                    <img src="https://source.unsplash.com/340x200" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" >
                                    <img src="https://source.unsplash.com/340x200" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                <div className="row p-5 m-2" id="news">
                    <div className="col-lg-6 col-md-12 ps-5 pb-3 d-flex justify-content-between">
                        <div className="row pt-4 pe-5 me-lg-5 gap-3">
                            <p className="h3">Galeri Lukis Jabar</p>
                            <p className="h1">NEWSLETTER</p>
                            <p>Jangan lewatkan info mengenai karya seni terbaru, event, dan pameran seni di daerah provinsi Jawa Barat</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-5 mt-5 d-flex align-content-center justify-content-end gap-0">
                        <input type="text" name="" id="" />
                        <a href="" className="btn">DAFTAR</a>
                    </div>
                </div>
                </section>
                <section>
                    <div className="row p-5">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <p className="h5 mb-4">Hubungi kami</p>
                            <p><img src="../Media/image/whatsapp.png" alt="" />&emsp;081XXXXXXX</p>
                            <p><img src="../Media/image/email.png" alt="" />&emsp;galerilukisjabar@gmail.com</p>
                            <p><img src="../Media/image/facebook.png" alt="" />&emsp;galerilukisjabar</p>
                            <p><img src="../Media/image/instagram.png" alt="" />&emsp;galerilukisjabar</p>
                            <p><img src="../Media/image/twitter.png" alt="" />&emsp;galerilukisjabar</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <p className="h5 mb-4">Pembayaran</p>
                            <p><img src="../Media/image/mandiri.svg" alt="" />&emsp;Bank Mandiri</p>
                            <p><img src="../Media/image/bni.svg" alt="" />&emsp;Bank BNI</p>
                            <p><img src="../Media/image/bca.svg" alt="" />&emsp;Bank BCA</p>
                            <p><img src="../Media/image/bjb.svg" alt="" />&emsp;Bank BJB</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <p className="h5 mb-4">Pengiriman</p>
                            <p><img src="../Media/image/" alt="" />&emsp;Pos Indonesia</p>
                            <p><img src="../Media/image/" alt="" />&emsp;JNE</p>
                            <p><img src="../Media/image/" alt="" />&emsp;J&T</p>
                            <p><img src="../Media/image/image.png" alt="" />&emsp;Ninja</p>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="row p-3 text-center">
                        <span>&copy; copyright 2022 Galeri Lukis Jabar</span>
                    </div>
                </footer>
            </main>
        </>
    )
}

export default HomeNL;