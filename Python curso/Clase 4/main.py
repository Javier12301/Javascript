# Función de orden superior que toma otra función como argumento
def aplicar_operacion(funcion, lista):
    resultado = []
    for elemento in lista:
        resultado.append(funcion(elemento))
    return resultado

# Funciones simples que podríamos usar
def cuadrado(x):
    return x ** 2

def doble(x):
    return x * 2

# Lista de números
numeros = [1, 2, 3, 4, 5]

# Aplicar la función cuadrado a la lista de números usando la función de orden superior
resultado_cuadrado = aplicar_operacion(cuadrado, numeros)
print("Cuadrado:", resultado_cuadrado)

# Aplicar la función doble a la lista de números usando la función de orden superior
resultado_doble = aplicar_operacion(doble, numeros)
print("Doble:", resultado_doble)


### MAP ###
# Lista de números
numeros = [1, 2, 3, 4, 5]

# Función para elevar al cuadrado
def cuadrado(x):
    return x ** 2

# Aplicar la función cuadrado a cada elemento de la lista usando map
resultados = map(cuadrado, numeros)

# Convertir los resultados a una lista
resultados_lista = list(resultados)

print(resultados_lista)
# Salida: [1, 4, 9, 16, 25]


#### FILTER #### 
# Lista de números
numeros = [1, 2, 3, 4, 5]

# Función de prueba para números pares
def es_par(x):
    return x % 2 == 0

# Filtrar los números pares usando filter
numeros_pares = filter(es_par, numeros)

# Convertir los resultados a una lista
pares_lista = list(numeros_pares)

print(pares_lista)
# Salida: [2, 4]

### REDUCE ###
from functools import reduce

# Lista de números
numeros = [1, 2, 3, 4, 5]

# Función para sumar dos números
def suma(x, y):
    return x + y

# Aplicar la función suma de manera acumulativa a la lista usando reduce
resultado_suma = reduce(suma, numeros)

print(resultado_suma)
# Salida: 15 (1 + 2 + 3 + 4 + 5)

