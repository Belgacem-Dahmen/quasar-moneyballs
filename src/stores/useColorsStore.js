import { defineStore } from "pinia";
import { ref } from "vue";

export const useColorsStore = defineStore("colors", ()=>{
      // État
      const primary = ref("#00695c");
      const secondary = ref('#26a69a')



    //Actions
      const updateColors = (object) => {
        primary.value = object.primary.value;
        secondary.value = object.secondary.value;
       
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