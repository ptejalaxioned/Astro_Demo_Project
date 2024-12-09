<template>
  <!-- main section start -->
  <main>
    <!-- banner section start -->
    <section class="banner">
      <div class="wrapper">
        <figure class="main-image">
          <img src="https://placehold.co/600x400/e0dad9/e0dad9" alt="Banner" />
        </figure>
        <div class="banner-content">
          <h1>
            <a
              href="./index.html"
              title="Gadget Site"
              target="_self"
              class="first-letter-caps"
            >
              gadget sites
            </a>
          </h1>
          <p class="first-letter-caps">website design template</p>
          <div class="banner-buttons">
            <a
              href="#FIXME"
              class="button orange-button"
              target="_self"
              title="About Us"
            >
              about us
            </a>
            <a
              href="#FIXME"
              class="button blue-button"
              target="_self"
              title="More Info"
            >
              more info
            </a>
          </div>
          <figure class="banner-content-image">
            <img src="https://placehold.co/600x400/a05245/a05245" alt="Banner Content Image" />
          </figure>
        </div>
      </div>
    </section>
    <!-- banner section end -->
  </main>
</template>

<script>
import mainImage from '@/assets/images/mbr.jpg';
import bannerContentImage from '@/assets/images/mbr-7.jpg';

export default {
  data() {
    return {
       mainImage,
      bannerContentImage,
    };
  },  
};
</script>



