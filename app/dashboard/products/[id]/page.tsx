// import { updateProduct } from "@/app/lib/actions";
// import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async () => {
//   const { id } = params;
//   const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {/* {product.title} */} Food
      </div>
      <div className={styles.formContainer}>
        {/* <form action={updateProduct} className={styles.form}> */}
        {/* <form className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
          />
          <label>Size</label>
          <textarea
          
            name="size"
            placeholder={product.size || "size"}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
          
            placeholder={product.desc}
          ></textarea>
          <button>Update</button>
        </form> */}
         <form className={styles.form}>
          <input type="hidden" name="id" value="3324335" />
          <label>Title</label>
          <input type="text" name="title" placeholder="Roce" />
          <label>Price</label>
          <input type="number" name="price" placeholder="900" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="InStock" />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder="color"
          />
          <label>Size</label>
          <textarea
          
            name="size"
            placeholder={"size"}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
          
            placeholder="good"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;