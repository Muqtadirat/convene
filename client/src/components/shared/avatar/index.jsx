import styles from "./Avatar.module.css"
import clsx from "clsx";

const Avatar = ({alt, src, width, height, className}) => {
    return (
      <div className={clsx(styles.avatarWrapper, className)} style={{width: width, height:height}}>
        <img
          src={src}
          alt={alt}
        />
      </div>
    );
}

export default Avatar