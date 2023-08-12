# INTRODUCCIÓN A JAVASCRIPT

JavaScript es un lenguaje de programación ampliamente utilizado en el desarrollo web para crear interactividad y funcionalidad en las páginas web. Es un lenguaje de programación de alto nivel, interpretado por los navegadores web, lo que significa que se ejecuta directamente en el navegador del usuario sin necesidad de compilación previa.

_Diferencia entre JavaScript y Java:_
A pesar de su nombre similar, JavaScript y Java son dos lenguajes de programación completamente diferentes. Java es un lenguaje de programación versátil utilizado en una variedad de aplicaciones, mientras que JavaScript fue diseñado específicamente para interactuar con páginas web y mejorar la experiencia del usuario en la web.

_Uso de JavaScript en HTML:_
JavaScript se integra en páginas web mediante la inclusión de código JavaScript directamente en el código HTML de la página. Esto se logra utilizando la etiqueta `<script>` en el documento HTML. Hay dos formas principales de incorporar JavaScript en HTML:

1. _Incorporación en línea (Inline)_: Puedes agregar el código JavaScript directamente en el cuerpo (body) del documento HTML, entre las etiquetas `<script>` y `</script>`:

<!DOCTYPE html>
<html>
<head>
    <title>Mi Página Web</title>
</head>
<body>
    <h1>Mi Página Web</h1>
    <p>Hola desde JavaScript!</p>
    
    <script>
        // Código JavaScript aquí
        alert("¡Hola desde JavaScript!");
    </script>
</body>
</html>

2. _Enlazado externo (External)_: También puedes enlazar un archivo JavaScript externo usando el atributo `src` de la etiqueta `<script>`:

<!DOCTYPE html>
<html>
<head>
    <title>Mi Página Web</title>
    <script src="mi_script.js"></script>
</head>
<body>
    <h1>Mi Página Web</h1>
    <p>Hola desde JavaScript!</p>
</body>
</html>

Donde `mi_script.js` es el nombre del archivo JavaScript externo que contiene el código JavaScript.

## La interacción entre JavaScript y HTML permite a los desarrolladores web crear páginas dinámicas y atractivas, donde los elementos de la página pueden responder a eventos del usuario (como clics de botones o movimientos del mouse) y realizar acciones como modificar el contenido de la página, realizar cálculos, hacer solicitudes a servidores, y mucho más.

# VARIABLES Y TIPOS DE DATOS

En JavaScript, las variables se utilizan para almacenar y manipular datos. Los tipos de datos en JavaScript se dividen en dos categorías principales: primitivos y objetos. Aquí te presento una descripción de los tipos de datos primitivos y cómo se utilizan las variables en JavaScript:

_Variables:_
En JavaScript, puedes declarar una variable utilizando las palabras clave `var`, `let` o `const`. Aquí tienes ejemplos de cómo se declaran variables con estas palabras clave:

var edad = 25; // Declaración de variable con 'var'
let nombre = "Juan"; // Declaración de variable con 'let'
const PI = 3.1416; // Declaración de variable constante con 'const'

- `var`: Era la forma tradicional de declarar variables, pero tiene ciertas particularidades en cuanto a su alcance. Se utiliza con menos frecuencia en la actualidad.
- `let`: Introducido en versiones más recientes de JavaScript, tiene un alcance de bloque (limitado a un bloque de código) y es más preferible para declarar variables.
- `const`: Se utiliza para declarar constantes cuyo valor no cambiará después de su inicialización.

_Tipos de Datos Primitivos:_
JavaScript tiene varios tipos de datos primitivos que se utilizan para representar diferentes tipos de información. Aquí hay algunos ejemplos:

1. _Números (Number)_: Representa valores numéricos, ya sea enteros o decimales.

let edad = 30;
let peso = 68.5;

2. _Cadenas (String)_: Representa texto entre comillas simples o dobles.

javascript
let nombre = "Ana";
let mensaje = 'Hola, ¿cómo estás?';

3. _Booleanos (Boolean)_: Representa un valor de verdadero (true) o falso (false).

let esMayorDeEdad = true;
let estaLloviendo = false;

4. _Nulos (Null)_: Representa la ausencia intencional de valor.

javascript
let resultado = null;

5. _Indefinidos (Undefined)_: Representa una variable que ha sido declarada pero no tiene un valor asignado.

let variableSinValor;

6. _Símbolos (Symbol)_: Introducidos en versiones más recientes de JavaScript, se utilizan para crear identificadores únicos.

let id = Symbol("identificador");

Estos son algunos de los tipos de datos primitivos en JavaScript. Los objetos son otra categoría importante de tipos de datos en JavaScript y se utilizan para representar estructuras más complejas y personalizadas. Los objetos permiten agrupar múltiples valores y funciones en una sola entidad.

---

CONSOLE.LOG()

`console.log()` es una función proporcionada por la mayoría de los navegadores web y entornos de desarrollo que permite imprimir mensajes en la consola del navegador o en la salida del entorno de desarrollo. Es una herramienta esencial para los desarrolladores de JavaScript, ya que les permite depurar y entender el flujo de ejecución de su código.

_Uso de `console.log()`:_

La sintaxis básica para utilizar `console.log()` es la siguiente:

javascript
console.log(valor);

Donde `valor` es la información que deseas imprimir en la consola. Puede ser una variable, una cadena de texto, un número, un objeto, o cualquier otro tipo de dato que desees inspeccionar.

_Ejemplos de Uso:_

1. Imprimir valores de variables:

let nombre = "Ana";
let edad = 28;

console.log(nombre); // Imprime "Ana"
console.log(edad); // Imprime 28

2. Depuración de flujo de código:

function suma(a, b) {
console.log("Sumando " + a + " y " + b);
return a + b;
}

let resultado = suma(5, 3);
console.log("El resultado es: " + resultado);

3. Inspección de objetos y arreglos:

javascript
let persona = { nombre: "Carlos", edad: 32 };

console.log(persona); // Imprime el objeto completo
console.log(persona.nombre); // Imprime "Carlos"

_Ventajas de `console.log()`:_

- Ayuda en la depuración: Te permite ver los valores de variables y el flujo de ejecución de tu código, lo que facilita la detección de errores y problemas.
- Confirmación de lógica: Puedes usarlo para verificar si tu código está funcionando según lo esperado en diferentes etapas.
- Desarrollo interactivo: Es útil para probar y experimentar con diferentes partes de tu código en tiempo real.

_Cuidados con `console.log()`:_

- Recuerda eliminar o comentar tus declaraciones `console.log()` antes de implementar tu código en producción, ya que podrían ralentizar la ejecución y llenar la consola con información innecesaria.
- No uses `console.log()` para fines de seguridad, ya que el contenido de la consola puede ser accesible para los usuarios y presentar riesgos de seguridad en ciertos casos.

## En resumen, `console.log()` es una herramienta invaluable para el desarrollo de JavaScript que te permite imprimir información en la consola para depurar y entender el funcionamiento de tu código.

OPERACIONES Y EXPRESIONES
¡Con gusto! Los operadores y expresiones son componentes esenciales en JavaScript y en muchos otros lenguajes de programación. Permiten realizar cálculos, comparaciones y manipulación de datos. Vamos a explorar en detalle qué son los operadores y las expresiones en JavaScript:

_Operadores:_
Los operadores son símbolos que realizan operaciones en uno o más operandos para producir un resultado. Los operadores en JavaScript se dividen en varias categorías, como operadores aritméticos, de asignación, de comparación, lógicos, ternarios, entre otros.

1. _Operadores Aritméticos_: Realizan operaciones matemáticas básicas.

let suma = 5 + 3;
let resta = 10 - 4;
let multiplicacion = 6 \* 2;
let division = 20 / 5;
let modulo = 15 % 4; // Resto de la división

2. _Operadores de Asignación_: Asignan un valor a una variable.

javascript
let edad = 25;
edad += 5; // edad = edad + 5

3. _Operadores de Comparación_: Comparan valores y devuelven un valor booleano.

javascript
let resultado = (edad >= 18); // Devuelve true si edad es mayor o igual a 18

4. _Operadores Lógicos_: Realizan operaciones lógicas en valores booleanos.

javascript
let esMayorDeEdad = (edad >= 18);
let tieneLicencia = true;

let puedeConducir = esMayorDeEdad && tieneLicencia; // Devuelve true si ambas condiciones son verdaderas

5. _Operador Ternario_: Es una forma abreviada de una estructura condicional `if`.

javascript
let mensaje = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";

_Expresiones:_
Una expresión es una combinación de valores, variables y operadores que se evalúan para producir un resultado. En JavaScript, las expresiones pueden ser tan simples como un valor único o tan complejas como una ecuación matemática.

javascript
let resultado = (5 + 3) \* 2; // Una expresión compleja

En este ejemplo, `(5 + 3)` es una expresión que se evalúa a `8`, y luego esa expresión se multiplica por `2` para dar como resultado `16`.

_Uso Combinado:_
Las expresiones son fundamentales en la programación porque se utilizan con operadores para realizar cálculos y tomar decisiones lógicas. Puedes usar expresiones en todo, desde la asignación de variables hasta la definición de funciones y la manipulación de datos.

javascript
let total = (precioUnitario + impuestos) \* cantidad;
if (total > presupuesto) {
console.log("El total excede el presupuesto.");
}

## En resumen, los operadores y las expresiones en JavaScript son componentes clave para realizar operaciones matemáticas, comparaciones y toma de decisiones en tu código. Combinando operadores y expresiones, puedes construir lógica y funcionalidad compleja en tus programas.

# EXPRESIONES Y EVALUACIONES

Por supuesto, con gusto te proporcionaré una explicación detallada sobre las expresiones y las evaluaciones en JavaScript.

_Expresiones:_
En programación, una expresión es una combinación de valores, variables, operadores y funciones que se evalúa para producir un resultado. Las expresiones pueden ser tan simples como un solo valor o tan complejas como una fórmula matemática o una combinación de operaciones lógicas. Las expresiones pueden ser utilizadas en casi todas partes donde se espera un valor en JavaScript.

_Ejemplos de Expresiones:_

1. _Expresiones Aritméticas_:
   javascript
   let suma = 5 + 3;
   let division = 10 / 2;
   let expresionCompleja = (3 \* (4 + 2)) - (8 / 2);

2. _Expresiones de Comparación_:
   javascript
   let esMayor = (edad > 18);
   let esIgual = (numero1 === numero2);

3. _Expresiones Lógicas_:
   javascript
   let resultado = (esVerdadero && (!esFalso || esOtroVerdadero));

4. _Expresiones de Cadena_:
   javascript
   let saludo = "Hola, " + nombre;
   let mensaje = "La longitud de la cadena es: " + cadena.length;

5. _Expresiones de Funciones_:
   javascript
   let resultadoFuncion = miFuncion(parametro1, parametro2);

_Evaluación:_
La evaluación se refiere al proceso mediante el cual JavaScript calcula o resuelve el resultado de una expresión. Cuando una expresión es evaluada, JavaScript realiza las operaciones necesarias y produce un valor resultante.

_Ejemplo de Evaluación_:
javascript
let resultado = (5 + 3) \* 2; // La expresión se evalúa a 16

En este ejemplo, la expresión `(5 + 3) * 2` se evalúa en dos pasos: primero, se suma `5 + 3` para obtener `8`, y luego se multiplica `8 * 2` para obtener `16`. El resultado final es `16`.

Las evaluaciones son fundamentales en la programación, ya que permiten que los programas realicen cálculos, tomen decisiones y generen resultados basados en las operaciones y datos proporcionados. Las expresiones se evalúan en un orden específico, siguiendo las reglas de precedencia y asociatividad de operadores.

_Importante_:
Es importante entender la diferencia entre una expresión y una sentencia en JavaScript. Una expresión produce un valor y puede usarse como parte de una sentencia. Por ejemplo, `5 + 3` es una expresión que produce el valor `8`, y puedes usarla dentro de una sentencia como `let suma = 5 + 3;`.

En resumen, las expresiones son combinaciones de valores, variables y operadores que se evalúan para producir un resultado en JavaScript. La evaluación es el proceso mediante el cual se calcula el valor resultante de una expresión. Comprender cómo funcionan las expresiones y cómo se evalúan es esencial para escribir código efectivo y funcional en JavaScript.

---

# A QUE SE REFIERE EVALUACIÓN EN JAVASCRIPT

La evaluación en programación se refiere al proceso de calcular o resolver el valor resultante de una expresión. Cuando se tiene una expresión, que es una combinación de valores, operadores y posiblemente funciones, la evaluación implica llevar a cabo las operaciones necesarias según las reglas de precedencia y asociatividad de los operadores para determinar el valor final que representa esa expresión.

En términos más simples, es como resolver una ecuación matemática. Cuando tienes una expresión matemática como "3 + 5", evaluarías esa expresión para obtener el resultado "8". En programación, las expresiones pueden ser mucho más complejas y pueden involucrar diferentes tipos de operaciones (aritméticas, lógicas, de comparación, etc.), así como el uso de variables y funciones.

Por ejemplo, considera la siguiente expresión en JavaScript:

javascript
let resultado = (2 + 3) \* (7 - 4);

Para evaluar esta expresión, seguiríamos las reglas de precedencia de los operadores (primero realizaríamos las operaciones dentro de los paréntesis y luego la multiplicación):

1. Primero, evaluamos `(2 + 3)` para obtener `5`.
2. Luego, evaluamos `(7 - 4)` para obtener `3`.
3. Finalmente, multiplicamos `5 * 3` para obtener `15`.

Por lo tanto, el valor resultante de la evaluación de la expresión es `15`, y ese valor se asigna a la variable `resultado`.

## En resumen, la evaluación en programación implica tomar una expresión y calcular su valor final siguiendo las reglas de los operadores y el orden de las operaciones. Es un paso fundamental para realizar cálculos, tomar decisiones y producir resultados en un programa.

# CONDICIONALES EN JAVASCRIPT

Los condicionales son estructuras fundamentales en la programación que permiten que un programa tome decisiones y ejecute diferentes bloques de código en función de una condición. En JavaScript, existen dos tipos principales de condicionales: las estructuras de control de flujo "if" y "else", y los operadores ternarios.

_Condicionales Largos (if, else if, else):_
Las estructuras condicionales "if", "else if" y "else" son utilizadas para tomar decisiones en función de ciertas condiciones. Puedes encadenar múltiples "else if" si necesitas manejar más de dos casos.

javascript
if (condicion1) {
// Código a ejecutar si la condición1 es verdadera
} else if (condicion2) {
// Código a ejecutar si la condición2 es verdadera
} else {
// Código a ejecutar si ninguna de las condiciones anteriores es verdadera
}

_Ejemplo de Condicionales Largos:_
javascript
let edad = 18;

if (edad < 18) {
console.log("Eres menor de edad.");
} else if (edad >= 18 && edad < 65) {
console.log("Eres adulto.");
} else {
console.log("Eres un adulto mayor.");
}

_Condicionales Abreviados (Operador Ternario):_
El operador ternario es una forma abreviada de escribir una estructura condicional simple en una sola línea. Tiene la siguiente sintaxis:

# Objetos en JavaScript

¡Por supuesto! Los objetos son una parte fundamental de JavaScript y permiten representar y manipular datos de manera estructurada y eficiente. Un objeto en JavaScript es una colección de propiedades, donde cada propiedad consiste en un par clave-valor. Las claves son cadenas (strings) que actúan como nombres para acceder a los valores almacenados en el objeto.

Vamos a profundizar en el tema de los objetos en JavaScript:

**Creación de un Objeto:**
Puedes crear un objeto en JavaScript de varias maneras. La más común es utilizando la sintaxis de objeto literal:

javascript
const persona = {
nombre: "Juan",
edad: 30,
profesion: "Desarrollador"
};

**Acceso a Propiedades:**
Puedes acceder a las propiedades de un objeto utilizando la notación de punto (`objeto.propiedad`) o la notación de corchetes (`objeto["propiedad"]`):

javascript
console.log(persona.nombre); // Juan
console.log(persona["edad"]); // 30

**Modificación de Propiedades:**
Puedes cambiar el valor de una propiedad simplemente asignándole un nuevo valor:

javascript
persona.edad = 31;
persona.profesion = "Ingeniero";

console.log(persona.edad); // 31
console.log(persona.profesion); // Ingeniero

**Añadir y Eliminar Propiedades:**
Puedes agregar nuevas propiedades a un objeto o eliminar propiedades existentes:

javascript
persona.ciudad = "Madrid"; // Agregar nueva propiedad
delete persona.profesion; // Eliminar propiedad existente

console.log(persona);

**Objetos Anidados:**
Los objetos pueden contener propiedades que son a su vez otros objetos:

javascript
const coche = {
marca: "Toyota",
modelo: "Corolla",
detalles: {
año: 2022,
color: "Rojo"
}
};

console.log(coche.detalles.año); // 2022

**Métodos:**
Un método es una función que está asociada a un objeto. Puedes agregar métodos a un objeto de la misma manera que agregas propiedades:

javascript
const rectangulo = {
base: 5,
altura: 10,
calcularArea: function() {
return this.base \* this.altura;
}
};

console.log(rectangulo.calcularArea()); // 50

**"this" en Métodos:**
Dentro de un método, la palabra clave `this` hace referencia al objeto en sí mismo. En el ejemplo anterior, `this.base` y `this.altura` hacen referencia a las propiedades del objeto `rectangulo`.

Los objetos en JavaScript son poderosos y versátiles. Puedes usarlos para representar casi cualquier tipo de entidad o concepto en tus programas. Son la base para la programación orientada a objetos en JavaScript y se utilizan ampliamente en el desarrollo web y muchas otras aplicaciones.

Por supuesto, aquí tienes un ejemplo de un objeto que representa a una persona con todas las acciones desde la creación hasta el uso de métodos. En este caso, vamos a crear un objeto `persona` que tenga propiedades como nombre, edad y profesión, y también tendrá un método para presentarse a sí mismo.

javascript
const persona = {
nombre: "Ana",
edad: 28,
profesion: "Doctora",
presentarse: function() {
return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`;
}
};

console.log(persona.presentarse());

En este ejemplo:

- **Creación del Objeto**: Creamos un objeto llamado `persona` con propiedades como `nombre`, `edad` y `profesion`.
- **Acceso a Propiedades**: Utilizamos las propiedades del objeto para acceder a la información de la persona.
- **Método `presentarse`**: Definimos un método llamado `presentarse` que devuelve una cadena de texto que describe la persona y utiliza las propiedades del objeto mediante la palabra clave `this`.

Cuando ejecutes el código, debería imprimir en la consola:

Hola, mi nombre es Ana, tengo 28 años y soy Doctora.

```

Este ejemplo simula una situación de la vida real donde creamos un objeto que representa a una persona y le agregamos propiedades y un método que le permite presentarse a sí misma. Puedes expandir este ejercicio agregando más propiedades y métodos al objeto para representar otras características y acciones de una persona.
```
