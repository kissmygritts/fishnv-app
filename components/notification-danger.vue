<template>
  <div class="w-full bg-red-100 text-red-900 rounded-sm p-4">
    <p>
      There is some risk when consuming fish from this water due to mercury.
      <nuxt-link to="/health/mercury" class="underline hover:text-red-700">
        Visit this link for more information.
      </nuxt-link>
    </p>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NotificationDanger'
}
</script>
