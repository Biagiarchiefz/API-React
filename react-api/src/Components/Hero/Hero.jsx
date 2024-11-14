import coba from "../../assets/coba.jpeg";
import { useState, useEffect } from "react";

const Hero = () => {                                // => fungsional components
  const url = "https://fakestoreapi.com/products";
  const [product, setProducts] = useState([]); // => membuat state untuk menangani data yang ada di dalam functional component (semacam variabel yang menyimpan data)
                                               // setProduct digunakan untuk mengubah isi dari product
  const getDataProduct = async () => {
    const response = await fetch(url);              // => fetch(url) adalah cara untuk mengambil data dari api
                                                   // await digunakan untuk menunggu hasil dari fetch. menunggu fetch sampai menerima data, ketika fetch sudah menerima data dia akan melanjutkan ke baris berikutnya

    const dataProduct = await response.json();    // => response.json() mengubah response dari API yang tadinya berbentuk teks mentah menjadi (objek JSON) yang bisa kita gunakan di JavaScript.
                                                  // await di sini juga digunakan untuk menunggu sampai proses pengubahan ke JSON selesai.
                                                  // dataProduct sekrang menyimpan data product yang kita ambil dari API

    setProducts(dataProduct);         // memasukan data yang kita ambil dari api ke dalam state (product) melalui setProduct
                                      // product sekarang berisi data produk terbaru yang kita ambil dari API.
    console.log(product);
  };

  useEffect(() => {     // () => { getDataProduct(); } adalah fungsi yang akan dijalankan oleh useEffect.
    getDataProduct();   // Saat komponen pertama kali muncul di layar, useEffect langsung menjalankan getDataProduct().
  }, []);   // => [] digunakan untuk menjalankan useeffect cuma sekali saja pada saat awal di render (bisa di pake bisa tidak)

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
