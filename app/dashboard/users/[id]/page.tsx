// import { updateUser } from "@/app/lib/actions";
// import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async () => {
  //   const { id } = params;
  //   const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          {/* <Image src={user.img || "/noavatar.png"} alt="" fill /> */}
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Arif
      </div>
      <div className={styles.formContainer}>
        {/* <form action={updateUser} className={styles.form}> */}
        {/* <form className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea type="text" name="address" placeholder={user.address} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true" selected={user.isAdmin}>
              Yes
            </option>
            <option value="false" selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value="true" selected={user.isActive}>
              Yes
            </option>
            <option value="false" selected={!user.isActive}>
              No
            </option>
          </select>
          <button>Update</button>
        </form> */}
        <form className={styles.form}>
          <input type="hidden" name="id" value="arif" />
          <label>Username</label>
          <input type="text" name="username" placeholder="Arif" />
          <label>Email</label>
          <input type="email" name="email" placeholder="arif@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="98772e2332" />
          <label>Address</label>
          <textarea  name="address" placeholder="sdfds sdggs dsg" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true" >
              Yes
            </option>
            <option value="false">
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value="true" >
              Yes
            </option>
            <option value="false">
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
