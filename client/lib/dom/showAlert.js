import { getNode } from "./getNode.js";
import { addClass, removeClass } from './css.js'





export function showAlert(){
  getNode('.alert-error').textContent = '정확한 이름을 입력해 주세요.'
  addClass('.alert-error','is-active');
  setTimeout(() => {
    removeClass('.alert-error','is-active');
  }, 1500);
}