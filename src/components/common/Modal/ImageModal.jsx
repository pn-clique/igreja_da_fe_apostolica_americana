import { GALLERY } from "../../../infra";
export default function ImageModal({ id, onClose }) {
  return (
    <div
      onClick={() => {
        localStorage.setItem("image-view", "");
        onClose();
      }}
      className={`fixed w-full h-full flex items-center justify-center z-50 bg-[#00000099]`}
    >
      <div className="xs:w-4/5 lg:w-3/5 xs:h-[50vh] lg:h-[70vh] rounded-lg">
        {GALLERY.map(
          (gal, index) =>
            gal.id === id && (
              <img
                key={index}
                src={gal.id === Number(id) ? gal.image : ""}
                alt=""
                className="w-full h-full rounded-lg object-cover"
              />
            )
        )}
      </div>
    </div>
  );
}
