<script>
  import { fly, fade } from 'svelte/transition';
</script>

<section
  class="min-h-[70vh] flex flex-col justify-center items-center text-center
         bg-gradient-to-b from-blue-500 to-indigo-600 text-white"
>
  <h1
    class="text-5xl font-extrabold mb-4"
    in:fly={{ y: 50, duration: 600 }}
  >
    Hi, I’m [Your Name]
  </h1>
  <p
    class="text-xl max-w-lg"
    in:fade={{ delay: 200, duration: 800 }}
  >
    A JavaScript Developer crafting simple, dynamic experiences.
  </p>
</section>
