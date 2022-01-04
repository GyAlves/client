<template>
  <div class="sub_header_container">
    <div class="logo_container">Crowd<br />fund.</div>
    <div class="sub_header_menu_container">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Discover</a></li>
        <li><a href="#">Create a fund</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubHeader",
};
</script>

<style>
.sub_header_container {
  width: 100%;
  height: 6.5em;

  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sub_header_container .logo_container {
  width: 30%;
  height: 2em;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2em;

  font-weight: bold;
  font-size: 36px;
  line-height: 42px;

  color: rgba(13, 10, 11, 0.35);
}

.sub_header_container .sub_header_menu_container {
  width: 40%;
  padding-right: 1em;
}

.sub_header_container .sub_header_menu_container ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.sub_header_container .sub_header_menu_container ul li a {
  text-decoration: none;
  font-weight: bold;
  font-size: 22px;
  line-height: 28px;

  color: rgba(13, 10, 11, 0.58);
}
</style>
