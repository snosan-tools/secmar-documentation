<template>
    <div v-if="!isToggleHidden" class="sidebar__toggle">
        <span class="arrow"
            :class="[isSidebarHidden ? 'right' : 'left']"/>
        <span class="sidebar__toggle-label" @click="toggleSidebar">
            {{ isSidebarHidden ? this.$localeConfig.toggle.showText : this.$localeConfig.toggle.hideText }}
        </span>
    </div>
</template>

<script>
export default {
  data() {
    return {
        isSidebarHidden: false,
        isToggleHidden: false
    }
  },
  methods: {
      toggleSidebar() {
          let sidebarClassList = document.getElementsByClassName('sidebar')[0].classList
          let pageClassList = document.getElementsByClassName('page')[0].classList

          if (document.body.clientWidth >= 720) {
            if (this.isSidebarHidden) {
                sidebarClassList.remove('shrink')
                pageClassList.remove('widen')
            }
            else {
                sidebarClassList.add('shrink')
                pageClassList.add('widen')
            }
          }

          this.isSidebarHidden = !this.isSidebarHidden
      }
  },
  beforeMount() {
      document.getElementsByClassName('sidebar')[0].classList.remove('shrink')
  },
  mounted() {
      window.addEventListener('resize', () => {
          let sidebarClassList = document.getElementsByClassName('sidebar')[0].classList
          if (document.body.clientWidth < 720) {
              this.isToggleHidden = true
              sidebarClassList.add('hide')
          }
          else {
              this.isToggleHidden = false
              sidebarClassList.remove('hide')
          }

      })
  }
}
</script>

<style lang="stylus">
@import '../theme/styles/config.styl'

.page
    transition all .25s ease
    &.widen
        padding-left 0

.content
    position relative

.sidebar
    white-space nowrap
    transition all .25s ease
    &.shrink
        transform translateX(-85%)
    &.hide
        transform translateX(-100%)
    &__toggle
        padding-right .25rem
        display inline-block
        position absolute
        right 0
        top 0
        height 100%
        writing-mode vertical-lr
        text-align center

        &-label
            font-size small
            font-weight 500
            color lighten($textColor, 25%)
            margin-left .25rem
            cursor pointer
@media (max-width: $MQMobile)
  .sidebar
    &__toggle
      display none
</style>
