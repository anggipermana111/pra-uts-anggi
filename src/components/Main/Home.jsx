import React, { useState } from 'react'
import {TbPlayerTrackPrevFilled} from 'react-icons/tb'
import {TbPlayerTrackNextFilled} from 'react-icons/tb'
import Product from './Product/Product';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "MacBook Air 15”",
            image: "/macbook_air_15.jpg",
            price: 26999999,
        },
        {
            id: 2,
            name: "iPhone 14 Pro",
            image: "/iphone_14_pro.jpg",
            price: 19999999,
        },
        {
            id: 3,
            name: "iPhone 14",
            image: "/iphone_14.jpg",
            price: 15999999,
        },
        {
            id: 4,
            name: "Apple Vision Pro",
            image: "/apple_vision_pro.jpg",
            price: 66999999,
        },
        {
            id: 5,
            name: "Apple Watch Series 8",
            image: "apple_watch_series_8.jpg",
            price: 7999999,
        },
        {
            id: 6,
            name: "iPad Pro",
            image: "/ipad_pro.jpg",
            price: 15999999,
        },
        {
            id: 7,
            name: "MacBook Air 15”",
            image: "/macbook_air_15.jpg",
            price: 26999999,
        },
        {
            id: 8,
            name: "iPhone 14 Pro",
            image: "/iphone_14_pro.jpg",
            price: 19999999,
        },
        {
            id: 9,
            name: "iPhone 14",
            image: "/iphone_14.jpg",
            price: 15999999,
        },
        {
            id: 10,
            name: "Apple Vision Pro",
            image: "/apple_vision_pro.jpg",
            price: 66999999,
        },
        {
            id: 11,
            name: "Apple Watch Series 8",
            image: "apple_watch_series_8.jpg",
            price: 7999999,
        },
        {
            id: 12,
            name: "iPad Pro",
            image: "/ipad_pro.jpg",
            price: 15999999,
        },
    ]);
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Infinity);
    const [sortBy, setSortBy] = useState("id");
    const [sortOrder, setSortOrder] = useState("asc");
    const [isEdit,setIsEdit] = useState(false)
    const sortedProduct = products.filter((product)=>product.name.toLowerCase().includes(keyword) && product.price>=minPrice && product.price<=maxPrice).toSorted((a,b)=>{
        return sortOrder==="asc"? (a[sortBy] < b[sortBy]? -1:1):(a[sortBy] > b[sortBy]? -1:1)
    })
    return (
        <main>
            <div className="action">
                <div className="search">
                    <label htmlFor='cari'>
                        Cari:
                    </label>
                    <input type="text" id='cari' onChange={(e)=>{
                        setPage(1)
                        setKeyword(e.target.value)
                    }}/>
                </div>
                <div className="price">
                    Harga:
                    <label>
                        minimal: <br />
                        <input type="number" onChange={(e)=>setMinPrice(e.target.value)}/>
                    </label>
                    <label>
                        maksimal: <br />
                        <input type="number" onChange={(e)=>setMaxPrice(e.target.value||Infinity)}/>
                    </label>
                </div>
                <div className="sort">
                    <select className="by" onChange={(e)=>setSortBy(e.target.value)}>
                        <option value="id">Id</option>
                        <option value="name">Nama</option>
                        <option value="price">Harga</option>
                    </select>
                    <select className="order" onChange={(e)=>setSortOrder(e.target.value)}>
                        <option value="asc">naik</option>
                        <option value="desc">Turun</option>
                    </select>
                </div>
            </div>
            <div className="container">
                {
                    sortedProduct.filter((_p,i)=>i >= 4 * page - 4 && i < 4 * page).map((product) => {
                        return <Product key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className="deskripsi">
                                <h3>{product.name}</h3>
                                <p>{product.price.toLocaleString()}</p>
                                <div className="button">
                                    <button>Edit</button>
                                    <button>Beli</button>
                                </div>
                            </div>
                        </Product>
                    })
                }
            </div>
            {
                isEdit&&(
                    <form>
                        <h1>Edit Product</h1>
                        <label htmlFor="name">Nama</label>
                        <input type="text" id='name' />
                        <label htmlFor=""></label>
                    </form>
                )
            }
            <div className="page">
                <button onClick={() => setPage(page - 1)} disabled={page === 1}><TbPlayerTrackPrevFilled size={34} color='white'/></button>
                <div><span>{page}</span></div>
                <button onClick={() => setPage(page + 1)} disabled={page >= Math.ceil(sortedProduct.length / 4)}><TbPlayerTrackNextFilled size={34} color='white'/></button>
            </div>
        </main>
    )
}

export default Home