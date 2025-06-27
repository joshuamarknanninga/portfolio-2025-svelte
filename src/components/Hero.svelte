<section class="min-h-[70vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
    <h1 class="text-5xl font-extrabold mb-4 animate-fade-in">Hi, I'm [Your Name]</h1>
    <p class="text-xl max-w-lg animate-fade-in delay-200">A JavaScript Developer crafting simple, dynamic experiences.</p>
  </section>
  
  // src/components/Projects.svelte
  <script>
    const projects = [
      { title: 'Project One', link: '#' },
      { title: 'Project Two', link: '#' },
      { title: 'Project Three', link: '#' },
    ];
  </script>
  <section id="projects" class="py-16 px-4">
    <h2 class="text-3xl font-bold mb-8 text-center">Projects</h2>
    <div class="grid md:grid-cols-3 gap-6">
      {#each projects as project}
        <a href={project.link} class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-semibold mb-2">{project.title}</h3>
          <p class="text-sm">View Details →</p>
        </a>
      {/each}
    </div>
  </section>