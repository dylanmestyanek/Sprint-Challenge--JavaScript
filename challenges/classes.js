  class CuboidMaker {
    constructor(cuboidAttrs){
      this.length = cuboidAttrs.length;
      this.width = cuboidAttrs.width;
      this.height = cuboidAttrs.height;
    }
  
    volume(){
      return this.length * this.width * this.height;
    }
  
    surfaceArea(){
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  }
  
  class CubeMaker extends CuboidMaker {
    constructor(cubeAttrs){
      super(cubeAttrs);
    }
  
    cubeVolume(){
      return Math.pow(this.length, 3);
    }
  
    cubeSurfaceArea(){
      return 6 * (this.width * this.height);
    }
  }
  
  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  });
  
  const cube = new CubeMaker({
    length: 12,
    width: 12,
    height: 12
  })
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130
  console.log(cube.cubeVolume()); 
  console.log(cube.cubeSurfaceArea()); 
  
  
  