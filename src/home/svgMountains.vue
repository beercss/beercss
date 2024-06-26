<template lang="pug">
svg(:viewBox="viewBox", :class="className")
  rect(fill="#ff7700", width="1600", height="900")
  polygon(fill="#cc0000", points="957 450 539 900 1396 900")
  polygon(fill="#aa0000", points="957 450 872.9 900 1396 900")
  polygon(fill="#d6002b", points="-60 900 398 662 816 900")
  polygon(fill="#b10022", points="337 900 398 662 816 900")
  polygon(fill="#d9004b", points="1203 546 1552 900 876 900")
  polygon(fill="#b2003d", points="1203 546 1552 900 1162 900")
  polygon(fill="#d3006c", points="641 695 886 900 367 900")
  polygon(fill="#ac0057", points="587 900 641 695 886 900")
  polygon(fill="#c4008c", points="1710 900 1401 632 1096 900")
  polygon(fill="#9e0071", points="1710 900 1401 632 1365 900")
  polygon(fill="#aa00aa", points="1210 900 971 687 725 900")
  polygon(fill="#880088", points="943 900 1210 900 971 687")
</template>

<script setup lang="ts">
export interface IProps {
  className: string,
  viewBox: string,
}

withDefaults(defineProps<IProps>(), {
  className: "",
  viewBox: "0 0 1600 900",
});
</script>
