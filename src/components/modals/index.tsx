import QRCode from "qrcode.react";
import { FaTimes } from "react-icons/fa";

export function QRCodeModal() {
  return (
    <dialog id="qrcode" className="modal z-50 flex items-center justify-center">
      <div className="rounded-[20px] bg-slate-800 w-max h-min">
        <div
          onClick={() => (document?.getElementById("qrcode") as any).close()}
          className="flex items-center justify-end border-b-2 border-white border-opacity-50 w-full p-6 cursor-pointer"
        >
          <FaTimes size={14} />
        </div>
        <QRCode
          value="https://www.example.com"
          size={200}
          bgColor={"#fff"}
          fgColor={"#000"}
          className="m-6 rounded-lg"
        />
      </div>
    </dialog>
  );
}
