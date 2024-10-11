<template>
  <div class="notes">
    <div class="flex justify-start items-center">
      <q-icon class="q-mr-sm" color="warning" name="mdi-comment-alert" size="sm"></q-icon>
      <h5>Notes</h5>
    </div>
    <div class="flex flex-start row no-wrap">
      <q-icon name="mdi-chevron-right" size="sm" />
      <div class="note-item">
        See my
        <a target="_blank" href="https://trello.com/b/u4aypX98/flaf-commissions">
          <q-icon name="mdi-trello" color="light-blue" class="mini-icon"></q-icon>
          <b>Commission Board</b>
        </a>
        to check ongoing commissions and past orders.
      </div>
    </div>
    <div class="flex flex-start row no-wrap">
      <q-icon name="mdi-chevron-right" size="sm" />
      <div class="note-item">
        Public commissions may be streamed at my
        <a target="_blank" href="https://www.twitch.tv/flafdraws">
          <q-icon name="mdi-twitch" color="purple" class="mini-icon"></q-icon>
          <b>Twitch Channel</b>
        </a>
        or showcased at my
        <a target="_blank" href="https://www.youtube.com/channel/UCLq1fsQwY9fP3dOF8JBhjLw?sub_confirmation=1">
          <q-icon name="mdi-youtube" color="red" class="mini-icon"></q-icon>
          <b>Youtube Channel</b>
        </a>.
      </div>
    </div>
    <div class="flex flex-start row no-wrap">
      <q-icon name="mdi-chevron-right" size="sm" />
      <div class="note-item">
        I may decline any commission request for any reason.
      </div>
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
  margin: 0;
  font-weight: 500;
  font-size: 1.375rem;
  letter-spacing: 0.1rem;

  @media(max-aspect-ratio: 1/1) and (max-width: 480px) {
    font-size: 1.2rem;
  }
}

.note-item {
  flex-grow: 999;
  text-align: left;
}

.mini-icon {
  padding-right: 3px;
}
</style>