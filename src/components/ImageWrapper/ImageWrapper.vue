<template>
  <div class="image-wrapper">
    <img class="img" :src="src" :alt="desc" />
    <!-- 如果使用该组织的使用者没用 slot，则默认 div.desc 来输出传递的 desc 属性 -->
    <slot name="desc">
      <div class="desc" v-if="desc">{{ desc }}</div>
    </slot>
  </div>
</template>

<script>
export default {
    name: 'ImageWrapper',
    props: {
        src: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            default: null
        }
    },
    data () {
        return {
        }
    }
}
</script>

<style lang="less" scoped>

.image-wrapper {
  padding: 0 20px 8px;
  background: #f2f4f5;
  width: 400px;
  margin: 0 auto;
  text-align: center;

  .img {
      vertical-align: middle;
      max-width: calc(100% - 32px);
      margin: 2.4em 1em;
      box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
  }

  .desc {
      font-size: 1em;
      color: #000;
  }
}
</style>
