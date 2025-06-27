<script>
    let open = false;
  </script>
  <nav class="fixed w-full bg-white/80 backdrop-blur p-4 flex justify-between items-center">
    <div class="text-xl font-bold">My Portfolio</div>
    <button on:click={() => (open = !open)} class="md:hidden">☰</button>
    <ul class="hidden md:flex space-x-6">
      <li><a href="#">Home</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    {#if open}
      <ul class="flex flex-col space-y-2 md:hidden">
        <li><a href="#">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    {/if}
  </nav>