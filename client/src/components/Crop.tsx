import { useContext, useRef } from 'react';
import { Cropper, CropperRef } from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/style.css';
import { Xmark } from '../assets/Icons';
import { ImgContext } from '../context/ProfileImgContext';
import Btn from './uikit/Btn';

export const ImgCropper: React.FC<{
  HandleCropper: () => void;
}> = ({ HandleCropper }) => {
  const cropperRef = useRef<CropperRef>(null);
  const Img = useContext(ImgContext);

  const onCrop = () => {
    const cropper = cropperRef.current;
    if (cropper) {
      const canvas = cropper.getCanvas();
      if (canvas) {
        canvas && Img?.setCroppedImg(canvas.toDataURL());
      }
      HandleCropper();
    }
  };

  const Preview = () => {
    const newTab = window.open();
    const cropper = cropperRef.current;
    if (cropper) {
      const canvas = cropper.getCanvas();
      if (newTab && canvas) {
        newTab.document.body.innerHTML = `<img style="margin:100px" src="${canvas.toDataURL()}"></img>`;
      }
    }
  };

  return (
    <div
      className={
        'cropper absolute z-50 w-full  h-screen top-0 left-0 flex backdrop-blur-lg flex-col justify-center items-center  bg-black/50'
      }
    >
      <Xmark
        style="absolute top-4 right-5 w-8 h-8 fill-customBlue cursor-pointer hover:stroke-error stroke-white"
        onClick={() => HandleCropper()}
      />
      <Cropper
        ref={cropperRef}
        src={URL.createObjectURL(Img?.uploadedImage && Img?.uploadedImage)}
        className={'cropper  z-50 w-[90%] xs:w-[70%] h-[70%]'}
      />
      <div className="flex-row flex gap-x-4">
        <Btn
          type="button"
          style=" bg-customBlue rounded-[.4em] text-sm   text-center px-3 py-[0.5em] xs:px-7 xs:py-[1em] text-white mt-[1.8em] hover:bg-softBlue"
          text="Save Changes"
          onClick={onCrop}
        />
        <Btn
          type="button"
          style="bg-customBlue rounded-[.4em]  text-center px-3 xs:px-7 py-[0.5em] xs:py-[1em] text-white mt-[1.8em] hover:bg-softBlue"
          text="Preview This"
          onClick={Preview}
        />
      </div>
    </div>
  );
};
