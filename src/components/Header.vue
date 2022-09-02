<template>
  <div>
    <div class="flex flex-center">
      <div class="flex flex-center q-mx-md q-my-md">
        <img src="public/avatar.png" width="110" height="110" class="ring r-margin" />
        <div class="flex column flex-start x-margin">
          <p class="header-minor q-pa-none q-ma-none">Art of</p>
          <p class="header-major q-pa-none q-ma-none">Flaf</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: $dark2;
}

.ring {
  border: 5px solid $border;
  border-radius: 100%;
}

.header-minor {
  font-size: 25px;
  font-weight: 300;
}

.header-major {
  font-size: 48px;
  font-weight: 600;
  line-height: 50px;
}

.x-margin {
  margin-left: 18px;
  margin-right: 18px;
}

.l-margin {
  margin-left: 14px;
}

.r-margin {
  margin-right: 14px;
}
</style>