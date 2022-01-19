AFRAME.registerComponent("change-color", {
  schema: {
    event: { type: "string", default: "click" },
  },

  init: function () {
    this.el.setAttribute("color", "orange");
  },

  update: function () {
    document.addEventListener(this.data.event, () => {
      const color =
        this.el.components.material.attrValue.color == "orange"
          ? "green"
          : "orange";
      this.el.setAttribute("color", color);
    });
  },
});
