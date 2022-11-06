import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="card mt-5 mx-2 col-3">
                <img src="https://source.unsplash.com/340x200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <Link className="card-title" to={`/post/${props.id}`} style={{textDecoration:"none"}}>{props.title}</Link>
                    <p className="card-text">{props.desc}</p>
                    <p className="card-text">Some quick example text</p>
                    <p className="card-text">Some quick example text</p>
                    <button className="btn">Tambah ke keranjang</button>
                </div>
            </div>


        </>
    )
}

export default Card;