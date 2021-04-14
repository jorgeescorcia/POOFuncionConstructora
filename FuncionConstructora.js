function Animal(nombre,edad,raza){
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza; 
  
 this.saludar = function(){
   console.log(`
   Mi nombre es ${this.nombre}
   Mi edad es ${this.edad}
   Mi raza es ${this.raza}
   `)
 }
}

let perro = new Animal("Enzo", 2, "Pincher")
console.log(perro.saludar())