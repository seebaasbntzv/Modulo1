
class Usuario {
  constructor(id_usuario,Nombre,Edad,Ciudad,Profesion){
    this.id_usuario = id_usuario;
    this.Nombre = Nombre;
    this.Edad = Edad;
    this.Ciudad = Ciudad;
    this.Profesion = Profesion;
    this.amigos = [];
    this.publicaciones = [];


  }

  agregarAmigo(amigo) {
    this.amigos.push(amigo);
  }

  eliminarAmigo(amigo) {
    const indice=this.amigos.indexOf(amigo);
    if (indice !== -1) {
      this.amigos.splice(indice,1);
    }
  }

  agregarPubli(publicacion) {
    this.publicaciones.push(publicacion);
  }

  modificarPubli(indice, publicacion) {
    if (indice >= 0 && indice < this.publicacion.length ) {
      this.publicaciones[indice] = nuevaPublicacion;
    }
  }

  eliminarPubli(indice) {
    if (indice >= 0 && indice < this.publicaciones.length ) {
      this.publicaciones.splice(indice, 1);

    }
  }

  

  
}

class Publicacion {
  constructor  (contenido) {
    this.contenido = contenido;
    this.likes = 0;
    this.comentarios = [];
  }

  Like() {
    this.likes++;
  }

  AggComentario(comentario) {
    this.comentarios.push(comentario);
  }

  
}





const usuario1 = new Usuario(1, "Usuario1", 19, "Asuncion", "Bibliotecario");
const usuario2 = new Usuario(2, "Usuario2", 20, "Luque", "Profesor");

usuario1.agregarAmigo(usuario2);
usuario2.agregarAmigo(usuario1);

const publicacion1 = new Publicacion("Esta es la primera publicación.");
const publicacion2 = new Publicacion("Otra publicación interesante.");

usuario1.agregar(publicacion1);
usuario2.agregarPubli(publicacion2);

publicacion1.Like();
publicacion2.Like();

publicacion1.AggComentario("Craack");
publicacion2.AggComentario("Buena foto");



   