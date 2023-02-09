import coverPicture from "../assets/Haruna.png";
export default function CoverImage({ src }) {
  return (
    <div>
      <img src={src || coverPicture} alt="cover" />
    </div>
  );
}
