<script setup>

</script>
<template>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>  
      <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src="../assets/img/slider_1.jpg" class="d-block w-100 carrousel_img" alt="...">
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="../assets/img/slider_2.jpg" class="d-block w-100 carrousel_img" alt="...">
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="../assets/img/slider_3.jpg" class="d-block w-100 carrousel_img" alt="...">
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="../assets/img/slider_4.jpg" class="d-block w-100 carrousel_img" alt="...">
          </div>
          <div class="carousel-item " data-bs-interval="2000">
            <img src="../assets/img/slider_5.jpg" class="d-block w-100 carrousel_img" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
</template>