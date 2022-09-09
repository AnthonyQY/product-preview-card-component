import MobileImage from "./image-product-mobile.jpg";
import DesktopImage from "./image-product-desktop.jpg";
import CartIcon from "./icon-cart.svg";

import styles from "./Card.module.scss";

export default function Card() {
  return (
    <div className={styles.container}>
      <img
        className={styles.mobile__image}
        src={MobileImage.src}
        alt="Gabrielle Essence Eau De Parfum"
      />

      <img
        className={styles.desktop__image}
        src={DesktopImage.src}
        alt="Gabrielle Essence Eau De Parfum"
      />
      <div className={styles.info}>
        <h2 className={styles.category}>PERFUME</h2>
        <h1 className={styles.title}>Gabrielle Essence Eau De Parfum</h1>
        <p className={styles.description}>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className={styles.prices}>
          <div className={styles.current__price}>$149.99</div>
          <div className={styles.original__price}>$169.99</div>
        </div>
        <button className={styles.add__button}>
          <img src={CartIcon.src} /> Add to Cart
        </button>
      </div>
    </div>
  );
}
