class Vector {
  constructor (components) {
    this.components = components;
  }
  add(vector) {
    if (vector.components.length !== this.components.length) throw('error');
    let addComponents = [];
    for (let i = 0; i < vector.components.length; i++) {
      addComponents.push(this.components[i] + vector.components[i]);
    }
    return new Vector(addComponents)
  }
  subtract(vector) {
    if (vector.components.length !== this.components.length) throw('error');
    let subComponents = [];
    for (let i = 0; i < vector.components.length; i++) {
      subComponents.push(this.components[i] - vector.components[i]);
    }
    return new Vector(subComponents)
  }
  dot(vector) {
    if (vector.components.length !== this.components.length) throw('error');
    let dotComponents = [];
    for (let i = 0; i < vector.components.length; i++) {
      dotComponents.push(this.components[i]*vector.components[i]);
    }
    const sum = arr => arr.reduce((a,b) => a + b, 0)
    return sum(dotComponents)
  }
  norm() {
    let normComponents = [];
    for (let i = 0; i < this.components.length; i++) {
      normComponents.push(Math.sqrt(this.components[i]));
    }
    const sum = arr => arr.reduce((a,b) => a + b, 0)
    return Math.sqrt(sum(normComponents))
  }
  toString() {
    return '(' + this.components.join(',') + ')';
  };
  equals(vector) {
    return this.toString() == vector.toString();
  }
};
