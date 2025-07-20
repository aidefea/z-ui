const xscroll = {
  template: `
    <div 
      class="scroll-container" 
      ref="container"
      @wheel="handleWheel"
    >
      <div ref="scrollContent" class="scroll-content">
        <slot></slot>
      </div>
      <div class="scroll-indicator" :style="indicatorStyle">
        <div class="scroll-track"></div>
        <div class="scroll-thumb" :style="thumbStyle"></div>
      </div>
    </div>
  `,
  data() {
    return {
      scrollPosition: 0,
      maxScroll: 0,
      containerWidth: 0,
      contentWidth: 0,
    };
  },
  computed: {
    indicatorStyle() {
      return {
        width: `${this.containerWidth}px`,
        left: "0",
        bottom: "10px",
      };
    },
    thumbStyle() {
      const thumbWidth = Math.max(
        30,
        (this.containerWidth * this.containerWidth) / this.contentWidth
      );
      const thumbPosition =
        (this.scrollPosition * (this.containerWidth - thumbWidth)) /
        this.maxScroll;

      return {
        width: `${thumbWidth}px`,
        transform: `translateX(${thumbPosition}px)`,
      };
    },
  },
  mounted() {
    this.updateSize();
    this.observer = new ResizeObserver(() => this.updateSize());
    this.observer.observe(this.$refs.container);
  },
  beforeUnmount() {
    this.observer.disconnect();
  },
  methods: {
    handleWheel(e) {
      e.preventDefault();
      const delta = e.deltaY;
      this.scrollPosition = Math.max(
        0,
        Math.min(this.scrollPosition + delta, this.maxScroll)
      );
      this.$refs.scrollContent.style.transform = `translateX(-${this.scrollPosition}px)`;
    },
    scrollTo(position) {
      this.scrollPosition = Math.max(0, Math.min(position, this.maxScroll));
      this.$refs.scrollContent.style.transform = `translateX(-${this.scrollPosition}px)`;
    },
    updateSize() {
      if (!this.$refs.scrollContent) return;

      // 获取容器尺寸
      this.containerWidth = this.$refs.container.clientWidth;

      // 计算内容总宽度
      const children = this.$refs.scrollContent.children;
      let totalWidth = 0;

      for (let child of children) {
        const style = getComputedStyle(child);
        const margin =
          parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        totalWidth += child.offsetWidth + margin;
      }

      this.contentWidth = totalWidth;
      this.maxScroll = Math.max(0, totalWidth - this.containerWidth);
      this.$refs.scrollContent.style.width = `${totalWidth}px`;
    },
    addItem(element) {
      this.$refs.scrollContent.appendChild(element);
      this.updateSize();
    },
  },
};
