<script>
    import Nav from './components/Nav.svelte';
    import Hero from './components/Hero.svelte';
    import Projects from './components/Projects.svelte';
    import Contact from './components/Contact.svelte';
  </script>
  
  <Nav />
  <main class="mt-16">
    <Hero />
    <Projects />
    <Contact />
  </main>
  
  <style lang="scss">
    @import './styles/global.scss';
  </style>
  