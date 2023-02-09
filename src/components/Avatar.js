import profileImage from "../assets/blank.png";

export default function Avatar({ src, size }) {
  return (
    <img
      src={src || profileImage}
      className="Avatar-img"
      alt="user"
      width={size}
      height={size}
    />
  );
}
