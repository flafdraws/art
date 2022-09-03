<template>
  <div class="flex justify-center items-start">

    <div class="flex column justify-center items-center q-pt-md avatar-column">
      <img src="avatar.png" width="200" height="200" class="ring r-margin" />
      <span class="text-h6 w500 q-mt-lg">FLÁVIO FREITAS</span>
      <span class="w200 q-mt-sm">FREELANCE ILLUSTRATOR</span>
      <span class="text-caption email q-mt-sm text-grey-4">
        flafdraws.buy@gmail.com<br>
        flafdraws#5176 (Discord)
      </span>
    </div>

    <div class="flex column flex-center text-column">
      <p class="text-subtitle1 q-mt-lg q-mb-md welcome">Welcome!</p>
      <div class="flex column flex-start q-my-sm">
        <span>
          I am Flaf, a freelance artist from Brazil.<br>
          I like games, anime and honing my art skills. _〆(。。)<br><br>
          You can find my art commissions info on this website..
        </span>

      </div>
      <span class="q-mt-md">Thank you for your visit!</span>
      <div class="q-my-xl"></div>
      <div class="q-my-xl"></div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.welcome {
  font-weight: 500;
}

.avatar-column {
  margin-right: 12px;
}

.text-column {
  margin-left: 12px;
}

span {
  font-weight: 200;
  max-width: 270px;
  line-height: 22px;
}

.ring {
  // border: 5px solid $border;
  box-shadow: 0rem 0.15rem 0.15rem 0.15rem $border;
  border-radius: 100%;
}

.w500 {
  font-weight: 500;
}

.w200 {
  font-weight: 200;
}

.email {
  text-align: center;
  line-height: 18px;
}
</style>