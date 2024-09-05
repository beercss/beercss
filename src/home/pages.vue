<template lang="pug">
#pages
  .large-space
  h4
    span Pages
    button.chip.circle(@click="domain.showSamples(data, '#pages .page', 'Pages', null, 'https://github.com/beercss/beercss/blob/main/docs/PAGE.md')")
      i code
  nav.wrap
    button(@click="domain.updatePage('#page')") Default
    button(@click="domain.updatePage('#page-left')") Left
    button(@click="domain.updatePage('#page-top')") Top
    button(@click="domain.updatePage('#page-bottom')") Bottom
    button(@click="domain.updatePage('#page-right')") Right
  .space
  #page.page.active
    h5 Default
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum ante sit amet risus accumsan, id luctus massa gravida. Morbi fermentum vehicula leo sed rhoncus. Donec sapien lacus, rhoncus ut turpis at, elementum laoreet est. Sed ut diam eget tellus dictum varius eget vel mi. Morbi mattis posuere turpis viverra pulvinar. Sed purus nibh, tempus et sem vel, egestas consectetur eros. Sed tempus neque est. Etiam vitae eros vitae risus suscipit accumsan sed sit amet ex. Quisque eget sodales augue. Nullam eget viverra nunc. In interdum aliquam egestas. Suspendisse ultricies ante euismod, aliquam nisl eu, sagittis libero. Quisque vel condimentum ligula.
  #page-left.page.left
    h5 Left
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum ante sit amet risus accumsan, id luctus massa gravida. Morbi fermentum vehicula leo sed rhoncus. Donec sapien lacus, rhoncus ut turpis at, elementum laoreet est. Sed ut diam eget tellus dictum varius eget vel mi. Morbi mattis posuere turpis viverra pulvinar. Sed purus nibh, tempus et sem vel, egestas consectetur eros. Sed tempus neque est. Etiam vitae eros vitae risus suscipit accumsan sed sit amet ex. Quisque eget sodales augue. Nullam eget viverra nunc. In interdum aliquam egestas. Suspendisse ultricies ante euismod, aliquam nisl eu, sagittis libero. Quisque vel condimentum ligula.
  #page-top.page.top
    h5 Top
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum ante sit amet risus accumsan, id luctus massa gravida. Morbi fermentum vehicula leo sed rhoncus. Donec sapien lacus, rhoncus ut turpis at, elementum laoreet est. Sed ut diam eget tellus dictum varius eget vel mi. Morbi mattis posuere turpis viverra pulvinar. Sed purus nibh, tempus et sem vel, egestas consectetur eros. Sed tempus neque est. Etiam vitae eros vitae risus suscipit accumsan sed sit amet ex. Quisque eget sodales augue. Nullam eget viverra nunc. In interdum aliquam egestas. Suspendisse ultricies ante euismod, aliquam nisl eu, sagittis libero. Quisque vel condimentum ligula.
  #page-bottom.page.bottom
    h5 Bottom
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum ante sit amet risus accumsan, id luctus massa gravida. Morbi fermentum vehicula leo sed rhoncus. Donec sapien lacus, rhoncus ut turpis at, elementum laoreet est. Sed ut diam eget tellus dictum varius eget vel mi. Morbi mattis posuere turpis viverra pulvinar. Sed purus nibh, tempus et sem vel, egestas consectetur eros. Sed tempus neque est. Etiam vitae eros vitae risus suscipit accumsan sed sit amet ex. Quisque eget sodales augue. Nullam eget viverra nunc. In interdum aliquam egestas. Suspendisse ultricies ante euismod, aliquam nisl eu, sagittis libero. Quisque vel condimentum ligula.
  #page-right.page.right
    h5 Right
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum ante sit amet risus accumsan, id luctus massa gravida. Morbi fermentum vehicula leo sed rhoncus. Donec sapien lacus, rhoncus ut turpis at, elementum laoreet est. Sed ut diam eget tellus dictum varius eget vel mi. Morbi mattis posuere turpis viverra pulvinar. Sed purus nibh, tempus et sem vel, egestas consectetur eros. Sed tempus neque est. Etiam vitae eros vitae risus suscipit accumsan sed sit amet ex. Quisque eget sodales augue. Nullam eget viverra nunc. In interdum aliquam egestas. Suspendisse ultricies ante euismod, aliquam nisl eu, sagittis libero. Quisque vel condimentum ligula.
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
