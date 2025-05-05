# Problema: Simulador de Pedidos en una Cafetería
En una cafetería moderna, es común que los clientes realicen pedidos que requieren preparación mientras se reciben nuevos pedidos. Una interfaz debe mostrar los pedidos en progreso, permitir que los baristas trabajen en ellos de manera asincrónica y actualizar el estado de los pedidos en tiempo real. El desafío consiste en simular este sistema mediante JavaScript, utilizando el Event Loop y diferentes mecanismos de asincronía como `setTimeout`, Promises y `async/await`.
## Instrucciones para resolver el problema:
1. Configura el entorno:
1.1. Crea un archivo HTML con un botón para agregar pedidos y un contenedor para mostrar los pedidos en la interfaz.
1.2. Crea un archivo JavaScript donde desarrollarás la lógica principal.
2. Estructura del código - Define funciones que manejen:
2.1. Recepción de un nuevo pedido.
2.2. Actualización visual del estado de los pedidos.
2.3. Simulación de la preparación de pedidos.
3. Comportamiento del sistema cuando el usuario haga clic en 'Agregar Pedido':
3.1. Se generará un pedido con un identificador único.
3.2. Se mostrará en la interfaz con el estado 'En Proceso'.
3.3. Después de un tiempo aleatorio (simulando la preparación), el estado cambiará a 'Completado'.
4. Mecanismos asincrónicos:
4.1. Usa `setTimeout` para simular el tiempo de preparación de los pedidos.
4.2. Implementa **Promises** para manejar la finalización de los pedidos.
4.3. Utiliza `async/await` para actualizar el estado en tiempo real.
* Puedes consultar un extracto de código para comenzar con la solución, se incluye un ejmplo de lo que se espera en la siguiente url: https://gist.github.com/heladio-devf-mx/2c120188609907595b51ed30d5f3f2d0