
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
