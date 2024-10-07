<<<<<<< HEAD
import { Notify } from 'quasar'


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
=======

errorNotification = {
    color: "red-5",
    textColor: "white",
    icon: "warning",
    message: "You need to accept the license and terms first",
  }
successNotification = {
    color: "green-4",
    textColor: "white",
    icon: "cloud_done",
    message: "Vos informations ont été mises à jour",
  }
  
  
  export const useSuccessNotification =  () => {
    $q.notify(successNotification);
}


export const useErrorNotification =  () => {
    $q.notify(errorNotification);
}
>>>>>>> dfe824c577121bde6b15eefc4e951ec6ffc78d32
