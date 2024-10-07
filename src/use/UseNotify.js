import { Notify } from 'quasar';


const errorNotification = {
    color: "red-5",
    textColor: "white",
    icon: "warning",
    position : "top-right",
    progress: true,
  }


const successNotification = {
    color: "positive",
    textColor: "white",
     icon: "done",
    iconColor: "white",
    position : "top-right",
    progress: false,
  }
  
  
  export const useSuccessNotification = (message) => {
    Notify.create({
      ...successNotification,
      message : message
    });
  };


  export const useErrorNotification = (message) => {
    Notify.create({
      ...errorNotification,
      message : message
    });
  };
