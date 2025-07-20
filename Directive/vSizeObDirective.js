// vSizeObDirective.js
export function vSizeObDirective(el, binding) {
  const updateSize = () => {
    const { width, height } = el.getBoundingClientRect();
    binding.value({ width, height });
  };

  const resizeObserver = new ResizeObserver(updateSize);
  resizeObserver.observe(el);

  // 返回清理函数
  return () => {
    resizeObserver.disconnect();
  };
}
