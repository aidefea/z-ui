<template>
  <button
    :class="buttonClasses"
    v-bind="$attrs"
    :disabled="disabled || loading"
    :type="nativeType"
    @click="getss"
  >
    <span class="button-content">
      <i v-if="loading" class="button-loading"></i>
      <!-- <span v-if="$slots.default"><slot></slot></span> -->
      按钮组件
    </span>
  </button>
</template>

<script>
export default {
  name: "zbutton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: function (value) {
        return [
          "default",
          "primary",
          "success",
          "warning",
          "danger",
          "info",
          "text",
        ].includes(value);
      },
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["medium", "small", "mini"].includes(value);
      },
    },
    nativeType: {
      type: String,
      default: "button",
      validator: function (value) {
        return ["button", "submit", "reset"].includes(value);
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClasses() {
      return [
        "el-button",
        this.type ? "el-button--" + this.type : "",
        this.size ? "el-button--" + this.size : "",
        {
          "is-disabled": this.disabled,
          "is-loading": this.loading,
          "is-plain": this.plain,
          "is-round": this.round,
          "is-circle": this.circle,
        },
      ];
    },
  },
  methods: {
    getss() {
      console.log("111");
    },
  },
};
</script>

<style module>
.el-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  position: relative;
}

.el-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}

.el-button:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
}

/* 按钮类型 */
.el-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.el-button--primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
}

.el-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.el-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}

.el-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

/* 朴素按钮样式 */
.el-button.is-plain {
  background: #fff;
}

.el-button.is-plain:hover {
  background: #fff;
}

.el-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
}

/* 禁用状态 */
.el-button.is-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* 加载动画 */
.button-loading {
  animation: rotating 1s linear infinite;
  margin-right: 5px;
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid #ccc;
  border-top-color: transparent;
  border-radius: 50%;
}

@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* 尺寸 */
.el-button--medium {
  padding: 10px 20px;
  font-size: 14px;
}

.el-button--small {
  padding: 9px 15px;
  font-size: 12px;
}

.el-button--mini {
  padding: 7px 15px;
  font-size: 12px;
}

/* 圆角 */
.el-button.is-round {
  border-radius: 20px;
}

/* 圆形按钮 */
.el-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
</style>
