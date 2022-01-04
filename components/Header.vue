<template>
  <div class="hero_container">
    <img class="image" src="~assets/images/image-hero-desktop.jpg" />
    <div class="description_container">
      <div class="title">Crowd<br />fund.</div>
      <div class="menu_cont">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/discover">Discover</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.hero_container {
  display: inline-block;
  position: relative;
}

.description_container {
  position: absolute;
  width: 90%;
  top: 40px;
  right: 70px;
  font-size: 40px;
  color: #ffffff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
}

.description_container .title {
  font-size: 94px;
}

.description_container .menu_cont {
  width: 40%;
  height: 6em;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  padding-top: 1em;
  text-decoration: none;

  border: 2px solid;
}

.description_container .menu_cont ul {
  list-style-type: none;
}

.description_container .menu_cont ul li a {
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}
.description_container .menu_cont ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
