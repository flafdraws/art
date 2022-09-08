<template>
  <div class="notes">
    <div class="flex justify-start items-center">
      <q-icon class="q-mr-sm" color="warning" name="mdi-comment-alert" size="sm"></q-icon>
      <h5>Notes</h5>
    </div>
    <div>
      <q-icon name="mdi-chevron-right" size="sm" />
      See my
      <a target="_blank" href="https://trello.com/b/u4aypX98/flaf-commissions"><b>Commission Board</b></a>
      to check ongoing commissions and past orders.
    </div>
    <div>
      <q-icon name="mdi-chevron-right" size="sm" />
      Public commissions may be streamed at my
      <a target="_blank" href="https://www.twitch.tv/flafdraws"><b>Twitch Channel</b></a>
      or showcased at my
      <a target="_blank" href="https://www.youtube.com/channel/UCLq1fsQwY9fP3dOF8JBhjLw?sub_confirmation=1"><b>Youtube
          Channel</b></a>.
    </div>
    <div>
      <q-icon name="mdi-chevron-right" size="sm" />
      I may decline any commission request for any reason.
    </div>
  </div>
</template>

<style scoped lang="scss">
.notes {
  font-size: 0.95rem;
}

a:link,
:visited {
  color: $secondary;

  :hover {
    color: $primary;
  }

  :active {
    color: $info;
  }
}

h5 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1.375rem;
  letter-spacing: 0.1rem;

  @media(max-aspect-ratio: 1/1) and (max-width: 480px) {
    font-size: 1.2rem;
  }
}
</style>