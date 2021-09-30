import { getFireStore } from "../firebase/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

export const generateOrder = (client, cart, total) => {
  return new Promise(async (resolve, reject) => {
    const db = getFireStore();

    let flag = false;

    const orders = db.collection("orders");
    const newOrder = {
      client: client,
      items: cart,
      total: total,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    const updateItems = db.collection("productos").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cart.map((prod) => prod.id)
    );

    const batch = db.batch();
    const query = await updateItems.get();

    const outOfStock = [];
    query.docs.forEach((doc) => {
      const itemInCart = cart.find((el) => el.id === doc.id);

      if (doc.data().stock >= itemInCart.quantity) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemInCart.quantity,
        });
      } else {
        outOfStock.push({ id: doc.id, ...doc.data() });
      }
    });

    if (outOfStock.length === 0) {
      orders
        .add(newOrder)
        .then((res) => {
          batch.commit();
          resolve(res.id);
        })
        .catch((err) => {
          reject(err);
        });

      flag = true;
    } else {
      reject({
        error: "Productos sin stock",
      });
    }

    if (flag) {
      cart.forEach((prod) => {
        const docRef = db.collection("productos").doc(prod.id);
        docRef.get().then((doc) => {
          docRef.update({
            stock: doc.data().stock - prod.quantity,
          });
        });
      });
    }
  });
};
