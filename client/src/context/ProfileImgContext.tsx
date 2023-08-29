import React, { ReactNode, createContext, useState, useEffect } from 'react';

type ImgContextType = {
  croppedImg: string | null | undefined;
  setCroppedImg: (croppedImg: string | Blob) => void;
  setUploadedImage: (uploadedImage: string | Blob) => void;
  uploadedImage: string | Blob | MediaSource | null | undefined;
};

export const ImgContext = createContext<ImgContextType | null>(null);

const ImageContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [croppedImg, setCroppedImg] = useState<string | null>();
  const [uploadedImage, setUploadedImage] = useState<
    null | Blob | MediaSource | undefined | string
  >(null);

  return (
    <ImgContext.Provider
      value={{
        croppedImg: croppedImg,
        setCroppedImg: setCroppedImg,
        setUploadedImage: setUploadedImage,
        uploadedImage: uploadedImage,
      }}
    >
      {children}
    </ImgContext.Provider>
  );
};

export default ImageContextProvider;
