## Ejemplo de un patrón decorador
# Definir una función decoradora
def decorador(funcion):
    # Definir una función interna
    def funcion_interna():
        # Acciones adicionales que decoran
        print("Se está a punto de ejecutar la función...")
        # Ejecutar la función que llega como parámetro
        funcion()
        # Acciones adicionales que decoran
        print("Se finalizó la ejecución de la función.")
    # Devolver la función interna
    return funcion_interna

# Decorar una función
@decorador # Esto es lo mismo que decir: saludar = decorador(saludar)
def saludar():
    print("Hola mundo!")

# Ejecutar la función decorada
saludar()
