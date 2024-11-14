import coba from "../../assets/coba.jpeg";
import { useState, useEffect } from "react";

const Hero = () => {
  // => fungsional components
  const url = "https://fakestoreapi.com/products";
  const [product, setProducts] = useState([]); // => membuat state untuk menangani data yang ada di dalam functional component (semacam variabel yang menyimpan data)
  // setProduct digunakan untuk mengubah isi dari product
  const getDataProduct = async () => {
    const response = await fetch(url);
    const dataProduct = await response.json();

    setProducts(dataProduct); // memasukan data yang kita ambil dari api ke dalam state (product)
    console.log(product);
  };

  useEffect(() => {
    getDataProduct();
  }, []);   // => [] digunakan untuk menjalankan useeffect cuma sekali pada saat awal di render

  return (
    <div className="container grid grid-cols-3">
      {product.map((item) => (
        <div className="w-[250px] h-[300px] m-5 bg-slate-200" key={item.id}>
          <img src={item.image} alt="" className="w-full h-[150px] object-cover" />
          <h1 className="text-2xl">{item.title.substring(0, 20)}</h1>
          <p className="text-sm">
            {item.description.substring(0, 50)}
          </p>
          <button className="bg-slate-600 text-white text-sm px-4 py-3 mt-2 rounded-lg">
            Beli Sekarang
          </button>
        </div>
      ))}
    </div>
  );
};

export default Hero;
