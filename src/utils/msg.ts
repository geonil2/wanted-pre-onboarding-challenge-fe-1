import { toast } from "react-toastify";

type MsgType = "success" | "error";

const onMsg = (message: string, type: MsgType) => {
  if (type === "success") {
    toast.success(message, {
      autoClose: 3000,
      position: toast.POSITION.TOP_RIGHT,
      draggable: true,
    });
  }
  if (type === "error") {
    toast.error(message, {
      autoClose: 3000,
      position: toast.POSITION.TOP_RIGHT,
      draggable: true,
    });
  }
};

export default onMsg;
