<template>
  <div class="home_container">
    <div class="about_container">
      <span class="topic">All about <b /> crowdfund</span>
      <div class="divisor"></div>
      <div class="about_description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        ligula viverra aenean id. Pulvinar id adipiscing a mi commodo ultricies.
        Egestas elit ornare tortor odio laoreet montes, orci donec. Condimentum
        fringilla orci sodales auctor mi vel, accumsan.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.home_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 3em;
}
.home_container .about_container {
  width: 1320px;
  height: 517px;

  background: #ffffff;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.home_container .about_container .topic {
  width: 17em;
  height: 100%;
  font-size: 54px;
  color: #0d0a0bde;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home_container .about_container .divisor {
  border: 1px solid rgba(13, 10, 11, 0.363);
  width: 1px;
  height: 26em;
}

.home_container .about_container .about_description {
  width: 70em;
  height: 15em;
  padding: 5em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.09em;

  color: rgba(13, 10, 11, 0.57);
}
</style>
