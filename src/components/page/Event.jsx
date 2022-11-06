import Event1 from"../asset/img/Event1.jpg"
import Event2 from"../asset/img/Event2.jpg"
import Event3 from"../asset/img/Event3.jpg"

const Event = () =>{
    return(
        <div className="container-fluid">
    
      <p className="h1 text-center fw-bold m-5 pb-5">EVENT DAN PAMERAN</p>
        <div className="row px-5 pt-5 pb-3" id="e-1">
        <div className="col-9 ps-5">
          <p className="h-4 fw-bold">Bangkit dengan Penuh Harapan</p>
          <p className="p">Pandemi global yang berkepanjangan cukup membuat kita semua frustasi, tapi sebagai seniman -yang
            konon adalah insan kreatif- kata patah semangat tidak ada dalam kamus kita,sebaliknya,situasi ini mendorong
            kita untuk menghasilkan karya karya yang dinamis. Merangkai kondisi tersebut *Komunitas Lukis Hegarmanah*
            menjadi bagian dalam Program *Bandung Art month ke 5* dengan menggelar *Pameran* bertajuk *Bangkit Dengan
            Penuh HARAPAN*.Pengantar Pameran Toni Masdiono @tmasdiono
            Pembukaan, Selasa, 30 Agustus ,pkl. 11.00 Wib di Galeri Hegarmanah @galerikhm , Gg. Cikapundung No. 34
            Bandung*.
            Pameran berlangsung : 30 Agustus - 30 September 2022. Pkl. 10.00 - 16.00 Wib. Sabtu & Minggu Libur. Salam
            Budaya
          </p>
        </div>
        <div className="col-3">
          <p><img src={Event1} alt="event" className="img-fluid w-50 h-50"/></p>
          <p>30 Agustus - 30 September 2022</p>
          <p>Gg. Cikapundung No. 34 Bandung</p>
        </div>
      </div>
      <div className="row px-5 pt-5 pb-3" id="e-2">
        <div className="col-3">
          <p><img src={Event2} alt="event" className="img-fluid w-50 h-50"/></p>
          <p>20 Agustus - 28 September 2022</p>
          <p>Jln. Tengah no. 12, Kec. Marga Asih</p>
        </div>
        <div className="col-9">
          <p className="h-4 fw-bold">Bangkit dengan Penuh Harapan</p>
          <p className="p">Pandemi global yang berkepanjangan cukup membuat kita semua frustasi, tapi sebagai seniman -yang
            konon adalah insan kreatif- kata patah semangat tidak ada dalam kamus kita,sebaliknya,situasi ini mendorong
            kita untuk menghasilkan karya karya yang dinamis. Merangkai kondisi tersebut *Komunitas Lukis Hegarmanah*
            menjadi bagian dalam Program *Bandung Art month ke 5* dengan menggelar *Pameran* bertajuk *Bangkit Dengan
            Penuh HARAPAN*.Pengantar Pameran Toni Masdiono @tmasdiono
            Pembukaan, Selasa, 30 Agustus ,pkl. 11.00 Wib di Galeri Hegarmanah @galerikhm , Gg. Cikapundung No. 34
            Bandung*.
            Pameran berlangsung : 30 Agustus - 30 September 2022. Pkl. 10.00 - 16.00 Wib. Sabtu & Minggu Libur. Salam
            Budaya
          </p>
        </div>
        </div>
        <div className="row px-5 ppt-5 pb-3" id="e-3">
        <div className="col-9 ps-5">
          <p className="h-4 fw-bold">Lalampahan</p>
          <p className="p">Pameran dengan tajuk la[lampah]an ini memuat dua kata dalam Bahasa Sunda yaitu lampah dan lalampahan. Secara umum kata lampah memiliki makna sebagai sebuah tindakan baik itu sebagai sebuah aksi, reaksi maupun respon terhadap sebuah fenomena maupun gagasan dalam diri. Sedangkan lalampahan merujuk pada makna perjalanan. Perjalanan merupakan sebuah pengalaman “hadir” pada sebuah titik, tempat, wahana maupun, situasi. Dengan merujuk pada dua kata tersebut para seniman memiliki ruang gerak yang bebas dalam menuangkan ekpresi dalam gagasannya untuk dihadirkan dalam pameran la[lampah]an ini.
            Cat air dan kertas sebagai medium ekpresi merupakan simbol bagaimana sebuah sejarah sebuah kota dan sebuah negara itu dibuat. Cat air dibuat secara berlapis-lapis sehingga membentuk bidang dan komposisi warna kemudian menjadi citra akhir karya.
      Dalam melukis menggunakan cat air, ia tidak dapat dihapus ataupun diulang dan memiliki ruang kejutan yang sangat besar karena hasil akhir dan gerak air yang tidak sepenuhnya bisa kita control. Seperti hal nya sejarah, tidak dapat dihapus ataupun diulang identik.      
          </p>
        </div>
        <div className="col-3">
          <p><img src={Event3} alt="event" className="img-fluid w-50 h-50"/></p>
          <p>18 Agustus - 18 September 2022</p>
          <p>Jalan Braga Nomor 10 Bandung</p>
        </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center m-5">
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

      </div>
    )
}

export default Event;