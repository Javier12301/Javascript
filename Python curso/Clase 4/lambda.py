# lista de numeros
numeros = [1,2,3,4,5]

# Utilizar map con una función lambda para obtener el cuadrado de cada numero
resultado = map(lambda x: x**2, numeros)

## Convertimos los resultados a una lista
resultado_lista = list(resultado)

print(resultado_lista)

# Ahora, un ejemplo de la misma funcionalidad anteriromente sin utilizar lambda
# Definir una función para calcular el cuadrado de un número
def calcular_cuadrado(x):
    return x ** 2

# Lista de números
numeros = [1, 2, 3, 4, 5]

# Utilizar map con la función definida para obtener el cuadrado de cada número
resultados = map(calcular_cuadrado, numeros)

# Convertir los resultados a una lista
resultados_lista = list(resultados)

print(resultados_lista)
# Salida: [1, 4, 9, 16, 25]

