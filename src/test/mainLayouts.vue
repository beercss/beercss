<template lang="pug">
div(:dir="rtlValue ? 'rtl' : ''", :style="safeAreaValue ? '--top:24px;--bottom:24px;--left:24px;--right:24px;' : ''")
  nav.top(v-if="topValue")
    div &lt;nav&gt;
  nav.bottom(v-if="bottomValue")
    div &lt;nav&gt;
  nav.left(v-if="leftValue")
    div &lt;nav&gt;
  nav.right(v-if="rightValue")
    div &lt;nav&gt;
  header(v-if="headerValue", :class="{ fixed: fixedValue, responsive: responsiveValue }")
    div &lt;header&gt;
  main(:class="{ responsive: responsiveValue }")
    aside.right
      div &lt;aside&gt;
    div
      div &lt;main&gt;
      nav.wrap
        label.checkbox
          input(v-model="safeAreaValue", type="checkbox")
          span 24px
        label.checkbox
          input(v-model="rtlValue", type="checkbox")
          span rtl
        label.checkbox
          input(v-model="responsiveValue", type="checkbox")
          span responsive
        label.checkbox
          input(v-model="fixedValue", type="checkbox")
          span fixed
        label.checkbox
          input(v-model="headerValue", type="checkbox")
          span header
        label.checkbox
          input(v-model="footerValue", type="checkbox")
          span footer
        label.checkbox
          input(v-model="topValue", type="checkbox")
          span nav.top
        label.checkbox
          input(v-model="bottomValue", type="checkbox")
          span nav.bottom
        label.checkbox
          input(v-model="leftValue", type="checkbox")
          span nav.left
        label.checkbox
          input(v-model="rightValue", type="checkbox")
          span nav.right
      nav.wrap
        button(data-ui="#dialog") Dialog
        button(data-ui="#dialog-max") Max
        button(data-ui="#dialog-left") left
        button(data-ui="#dialog-right") Right
        button(data-ui="#dialog-top") Top
        button(data-ui="#dialog-bottom") Bottom
      p Lorem ipsum<sup>123</sup> dolor<sub>123</sub> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    dialog#dialog-max.max(data-ui="#dialog-max")
      h5(aria-hidden="true") Dialog
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      nav.right-align
        button Close
    dialog#dialog-left.left(data-ui="#dialog-left")
      h5(aria-hidden="true") Dialog
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      nav.right-align
        button Close
    dialog#dialog-right.right(data-ui="#dialog-right")
      h5(aria-hidden="true") Dialog
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      nav.right-align
        button Close
    dialog#dialog-top.top(data-ui="#dialog-top")
      h5(aria-hidden="true") Dialog
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      nav.right-align
        button Close
    dialog#dialog-bottom.bottom(data-ui="#dialog-bottom")
      h5(aria-hidden="true") Dialog
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      nav.right-align
        button Close
    dialog#dialog(data-ui="#dialog")
      h5(aria-hidden="true") Dialog
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      nav.right-align
        button Close
  footer(v-if="footerValue", :class="{ fixed: fixedValue, responsive: responsiveValue }")
    div &lt;footer&gt;
</template>

<script lang="ts" setup>
import { ref } from "vue";
import utils from "../shared/utils";

const safeAreaValue = ref(false);
const rtlValue = ref(false);
const responsiveValue = ref(false);
const headerValue = ref(true);
const footerValue = ref(true);
const topValue = ref(true);
const leftValue = ref(true);
const bottomValue = ref(true);
const rightValue = ref(true);
const fixedValue = ref(true);

function updateDialog(css: string) {
  const elements = document.querySelectorAll("#dialog");
  utils.removeClass(elements, ["left", "right", "bottom", "top", "max"]);
  utils.addClass(elements, [css]);
}
</script>