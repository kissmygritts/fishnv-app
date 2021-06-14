<template>
  <div class="bg-gray-100 min-h-full">
    <div id="content" class="content">

      <h1>Fish Consumption Safety</h1>

      <h2>Mercury in Fish</h2>
      <p>
        The Nevada Department of Wildlife, the Nevada Division of Environmental
        protection, and the Division of Public and Behavioral Health (formerly
        Nevada State Health Division) have been working together to identify
        potential health risks to the public through monitoring methylmercury in
        fish from around the state.
      </p>
      <p>
        Nevada lakes, reservoirs, ponds, rivers, and streams contain mercury,
        which is converted into methylmercury by bacteria in the sediments.
        Methylmercury eventually moves up through the food chain to the top
        predatory fishes where it can concentrate in their muscle tissue.
        Generally, larger, older fish concentrate more mercury than smaller ones.
      </p>
      <p>
        <nuxt-link to="/health/mercury">Learn More</nuxt-link>
      </p>

      <h2>Fish Parasites</h2>
      <p>
        All wild, living animals, including Nevada fishes, have the potential to
        be infected with parasites. Parasites are organisms that live internally
        (endoparasite) or attach to the outside (ectoparasite) of a host. In this
        case, the host is a fish. If parasites occur in large numbers on a single
        fish, they can become harmful and possibly cause the fish to die. However,
        population die-offs from parasite infestations are rare and usually not a
        concern to fishery managers. Although parasites infecting fish may look
        disgusting or appear unappetizing, they are generally harmless to humans.
      </p>
      <p>
        <nuxt-link to="/health/parasites">Learn More</nuxt-link>
      </p>

      <h2>Harmful Algae Blooms (HABs)</h2>
      <p>
        The State of Nevada has been on the lookout for algae blooms that
        typically can develop in still waters (mostly lakes and reservoirs) to
        examine their potential for becoming harmful to you or your pet. Where
        specific algae (known as cyanobacteria) that produce toxins become
        elevated to unsafe levels, the state will post precautionary signs. It is
        best to follow the recommendations
      </p>
      <p>
        <nuxt-link to="/health/algal-blooms">Learn More</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HealthView'
}
</script>
