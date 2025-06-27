<script>
    import { fade } from 'svelte/transition';
  
    const projects = [
      { title: 'Project One', link: '#' },
      { title: 'Project Two', link: '#' },
      { title: 'Project Three', link: '#' },
    ];
  </script>
  
  <section id="projects" class="py-16 px-4">
    <h2 class="text-3xl font-bold mb-8 text-center">Projects</h2>
    <div class="grid md:grid-cols-3 gap-6">
      {#each projects as project, i}
        <a
          href={project.link}
          class="block p-6 bg-white rounded-lg shadow-lg transform
                 transition-transform duration-300
                 hover:-translate-y-2 hover:shadow-2xl"
          in:fade={{ delay: i * 150, duration: 500 }}
        >
          <h3 class="text-xl font-semibold mb-2">{project.title}</h3>
          <p class="text-sm">View Details →</p>
        </a>
      {/each}
    </div>
  </section>
  