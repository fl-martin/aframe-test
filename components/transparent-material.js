/*
* Componente diseñado para añadir un material transparente a una entidad.
* En caso de utilizarse en una <a-entity>, es necesario también añadir un componente `geometry`.
* Las propiedades de tipo `asset` toman como valor el `id` del <a-asset-item> necesario.
* Las propiedades de tipo `number` llevan como valor por defecto el mismo definido por THREE
*/

AFRAME.registerComponent("transparent-material", {
  schema: {
    color: { type: "string", default: "" },
    base: { type: "asset", default: "" },
    normal: { type: "asset", default: "" },
    alpha: { type: "asset", default: "" },
    metalness: { type: "number", default: 0.0},
    roughness: { type: "number", default: 1.0}
  },

  init: function () {
    this.textureLoader = new THREE.TextureLoader();
    
    this.map = this.textureLoader.load(this.data.base);
    this.normalMap = this.textureLoader.load(this.data.normal);
    this.alphaMap = this.textureLoader.load(this.data.alpha);
    
    this.material = new THREE.MeshStandardMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      metalness: this.data.metalness,
      roughness: this.data.roughness,
      map: this.map,
      normalMap: this.normalMap,
      alphaMap: this.alphaMap,
    });

    this.el.object3DMap.mesh.material = this.material;
  },
});
