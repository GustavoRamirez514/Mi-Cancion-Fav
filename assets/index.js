import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const playButton = document.querySelector("#playButton");
playButton.onclick = () => player.togglePlay();

const muteButton = document.querySelector("#muteButton");
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

if ("serviceWorkerd" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  });
}

// -Cuando llamemos a un archivo de js en el html, es necesario ponerle la propiedad async ya que si no lo tiene
// el DOOM pausara su proceso para leer las lineas del script y despues seguir con el html. Pero con la propiedad
// async logramos que lo haga a la par.

// -la propiedad defer hace que el script se ejecute al final de leer el html.

// -el DOOM(Modelo de Objetos del Documento) que visualiza el documento de HTML como un árbol lo cual hace que el navegador
// entienda el contenido de una manera mas simple.

// -para importar un javascript a otro se utiliza: import "nombre" from "ruta" pero para que esto funcione el archivo
// que estamos importanto tiene que tener lo siguiente: export default "nombre"

// -la propiedad type="module" es una buena practica ya que le informa al navegador que es un modulo
// el cual contiene informacion relacionada y relevante para la organizacin.

// -let se utiliza para declarar variables cuyo valor se puede cambiar. Es decir, variables que pueden tener diferentes valores
// en diferentes momentos del programa
// -var es similar a let, ya que también se utiliza para declarar variables. Sin embargo, a diferencia de let, una variable declarada con var
//  no es de alcance de bloque, sino que es de alcance de función. Esto significa que una variable declarada con var es accesible en todo el
//  ámbito de la función en la que se declara.
// -const se utiliza para declarar variables cuyo valor no puede cambiar. Es decir, una vez que se asigna un valor a una variable const,
// no se puede asignar otro valor diferente

// -El visibilityChange forma parte del API del DOM llamado Page Visibility y nos deja saber si el elemento es visible,
// pude ser usado para ejecutar una acción cuando cambiamos de pestaña. Así podemos ahorrar batería y mejorar la UX.

// -El IntersectionObserver Sirve para observar elementos y si cruzan un umbral que nosotros definimos nos lo va a notificar para tomar acción.
// El umbral se define por el porcentaje que tiene intersección con el viewport, con la parte visible de nuestra página.


// -Patrones creacionales
// Corresponden a patrones de diseño de software que solucionan problemas de creación de instancias. Nos ayudan a encapsular y abstraer dicha 

// *Object Pool (no pertenece a los patrones especificados por GoF): se obtienen objetos nuevos a través de la clonación. Utilizado cuando el costo de crear una clase es mayor que el de clonarla. Especialmente con objetos muy complejos. Se especifica un tipo de objeto a crear y se utiliza una interfaz del prototipo para crear un nuevo objeto por clonación. El proceso de clonación se inicia instanciando un tipo de objeto de la clase que queremos clonar.
// *Abstract Factory (fábrica abstracta): permite trabajar con objetos de distintas familias de manera que las familias no se mezclen entre sí y haciendo transparente el tipo de familia concreta que se esté usando. El problema a solucionar por este patrón es el de crear diferentes familias de objetos, como por ejemplo, la creación de interfaces gráficas de distintos tipos (ventana, menú, botón, etc.).
// *Builder (constructor virtual): abstrae el proceso de creación de un objeto complejo, centralizando dicho proceso en un único punto.
// *Factory Method (método de fabricación): centraliza en una clase constructora la creación de objetos de un subtipo de un tipo determinado, ocultando al usuario la casuística, es decir, la diversidad de casos particulares que se pueden prever, para elegir el subtipo que crear. Parte del principio de que las subclases determinan la clase a implementar. A continuación se muestra un ejemplo de este patrón:
// *Prototype (prototipo): crea nuevos objetos clonándolos de una instancia ya existente.
// *Singleton (instancia única): garantiza la existencia de una única instancia para una clase y la creación de un mecanismo de acceso global a dicha instancia. Restringe la instanciación de una clase o valor de un tipo a un solo objeto. A continuación se muestra un ejemplo de este 
// *Model View Controller (MVC) ♙En español: Modelo Vista Controlador. Es un patrón de arquitectura de software que separa los datos y la lógica de negocio de una aplicación de la interfaz de usuario y el módulo encargado de gestionar los eventos y las comunicaciones. Este patrón plantea la separación del problema en tres capas: la capa model, que representa la realidad; la capa controller , que conoce los métodos y atributos del modelo, recibe y realiza lo que el usuario quiere hacer; y la capa vista, que muestra un aspecto del modelo y es utilizada por la capa anterior para interactuar con el usuario.

// -Patrones estructurales
// Son los patrones de diseño software que solucionan problemas de composición (agregación) de clases y objetos:

// *Adapter o Wrapper (Adaptador o Envoltorio): Adapta una interfaz para que pueda ser utilizada por una clase que de otro modo no podría utilizarla.
// *Bridge (Puente): Desacopla una abstracción de su implementación.
// *Composite (Objeto compuesto): Permite tratar objetos compuestos como si de uno simple se tratase.
// *Decorator (Decorador): Añade funcionalidad a una clase dinámicamente.
// *Facade (Fachada): Provee de una interfaz unificada simple para acceder a una interfaz o grupo de interfaces de un subsistema.
// *Flyweight (Peso ligero): Reduce la redundancia cuando gran cantidad de objetos poseen idéntica información.
// *Proxy: Proporciona un intermediario de un objeto para controlar su acceso.
// *Module: Agrupa varios elementos relacionados, como clases, singletons, y métodos, utilizados globalmente, en una entidad única.

// -Patrones de comportamiento
// Se definen como patrones de diseño software que ofrecen soluciones respecto a la interacción y responsabilidades entre clases y objetos, así como los algoritmos que encapsulan:

// *Chain of Responsibility (Cadena de responsabilidad): Permite establecer la línea que deben llevar los mensajes para que los objetos realicen la tarea indicada.
// *Command (Orden): Encapsula una operación en un objeto, permitiendo ejecutar dicha operación sin necesidad de conocer el contenido de la misma.
// *Interpreter (Intérprete): Dado un lenguaje, define una gramática para dicho lenguaje, así como las herramientas necesarias para interpretarlo.
// *Iterator (Iterador): Permite realizar recorridos sobre objetos compuestos independientemente de la implementación de estos.
// *Mediator (Mediador): Define un objeto que coordine la comunicación entre objetos de distintas clases, pero que funcionan como un conjunto.
// *Memento (Recuerdo): Permite volver a estados anteriores del sistema.
// *Observer (Observador): Define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambie de estado se notifique y actualicen automáticamente todos los objetos que dependen de él.
// *State (Estado): Permite que un objeto modifique su comportamiento cada vez que cambie su estado interno.
// *Strategy (Estrategia): Permite disponer de varios métodos para resolver un problema y elegir cuál utilizar en tiempo de ejecución.
// *Template Method (Método plantilla): Define en una operación el esqueleto de un algoritmo, delegando en las subclases algunos de sus pasos, esto permite que las subclases redefinan ciertos pasos de un algoritmo sin cambiar su estructura.
// *Visitor (Visitante): Permite definir nuevas operaciones sobre una jerarquía de clases sin modificar las clases sobre las que opera.

// -Patrones de interacción
// El primer intento por aplicar este concepto en el diseño de las interfaces de usuario se dio por Ward Cummingham y Kent Beck quienes adaptaron la propuesta de C. Alexander y crearon cinco patrones de interfaz: Window per task, Few panes, Standard panes, Nouns and verbs, y Short Menu. En años más recientes investigadores como Martin Van Welie, Jennifer Tidwell han desarrollado colecciones de patrones de interacción para la World Wide Web. En dichas colecciones captan la experiencia de programadores y diseñadores expertos en el desarrollo de interfaces usables y condensan esta experiencia en una serie de guías o recomendaciones, que puedan ser usadas por los desarrolladores novatos con el propósito de que en poco tiempo adquieran la habilidad de diseñar interfaces que incidan en la satisfacción de los usuarios. Los patrones de interacción buscan la reutilización de interfaces eficaces y un manejo óptimo de los recursos de las páginas web, haciendo más eficaz el consumo de tiempo en el diseño del sitio web y permitiendo a los programadores novatos adquirir más experiencia.