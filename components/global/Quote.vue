<template>
  <div class="quote">
    <blockquote>
      <p><slot name="quote"></slot></p>
      <cite><slot name="cite"></slot></cite>
    </blockquote>
  </div>
</template>

<style lang="scss">
.quote {
  padding: 2rem;
  border-radius: 4px;
  max-width: 700px;
  margin: 0 auto;

  blockquote {
    display: flex;
    flex-wrap: wrap;

    &::before {
      content: url('~assets/images/fas-quote-left.svg');
      width: 1.5rem;
      flex-basis: 1.5rem;
      margin-right: 0.625rem;
    }

    p {
      flex-basis: calc(100% - 1.5rem - 10px);
      font-size: 1.5rem;
      line-height: 1.5;
      font-family: $font-family-display;
      font-weight: 800;
      margin-bottom: 0;
    }

    cite {
      display: block;
      flex-basis: 100%;
      width: 100%;
      text-align: right;
      margin-top: 1.25rem;
    }
  }
}
</style>
