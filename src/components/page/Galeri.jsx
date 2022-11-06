import Card from "../carouselcardpagin/card"
import axios from "axios"
import React, { useEffect, useState } from "react"

export const Galeri = () => {
    const [state, setState] = useState({
        post: [],
        datapost: {
            userId: 1,
            id: null,
            title: '',
            body: ''
        }
    })

    // state = {
    //     post: [],
    //     datapost: {
    //         userId: 1,
    //         id: null,
    //         title: '',
    //         body: ''
    //     }
    // }

    const getData = () => {
        axios.get('http://localhost:3004/posts?_limit=9')
            .then((response) => {
                console.log(response.data)
                setState({
                    post: response.data
                })

            })
    }

    useEffect(() => {
        getData()
    }, [])

    // componentDidMount = () =>{
    //     this.getData()
    // }

    return (
        <>
            <p className="h1 text-center fw-bold pb-3 m-5">GALERI</p>
            <div className="value d-flex gap-0 mb-5 justify-content-end">
                <input type="text" name="" id="search" placeholder=" search" />
                <button type="button" className="btn btn-primary btn-sm">Search</button>
            </div>
            <div className="row d-flex justify-content-evenly">
                {

                    state.post.map(isipost =>
                        <Card key={isipost.id} id={isipost.id} title={isipost.title} desc={isipost.body} />
                    )
                }
            </div>
        </>
    )
}
