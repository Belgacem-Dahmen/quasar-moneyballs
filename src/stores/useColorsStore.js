import { defineStore } from "pinia";
import { ref } from "vue";
import { getValueFromLocalStorage,setValueToLocalStorage } from "src/use/useLocalStorage";

export const useColorsStore = defineStore("colors", ()=>{
      // État
      const primary = getValueFromLocalStorage("primary") ? ref(getValueFromLocalStorage("primary")) : ref("#00695c");
      const secondary = getValueFromLocalStorage("secondary") ? ref(getValueFromLocalStorage("secondary")) : ref('#26a69a');

    const colors = {
      primary : getValueFromLocalStorage("colors.primary") ? ref(getValueFromLocalStorage("colors.primary")) : ref("00695c"),
      secondary : getValueFromLocalStorage("colors.secondary") ? ref(getValueFromLocalStorage("colors.secondary")) : ref('#26a69a')

    }

    //Actions
      const updateColors = (object) => {
        console.log("updating colors");
        
        primary.value = object.primary.value;
        secondary.value = object.secondary.value;
        console.log(" colors updated in state ");
        console.log("saving to LS ");
        setValueToLocalStorage("primary", object.primary.value)
        console.log("savied to ls ")
      };
      return {
        primary,
        secondary,
        updateColors
      };
})



/**
 *
 *  $primary: #00695c;
$secondary: #26a69a;
$accent: #9c27b0;
$dark: #1d1d1d;
$dark-page: #121212;
$positive: #7eb004;
$negative: #d73f01;
$info: #31ccec;
$warning: #f2c037;
$white : #FFF
 */