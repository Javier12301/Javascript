# Cadenas
a = "Hola"
b = "Dos"
# La variable c se imprimirá dos veces
c = a * 2

# Números y Comparación
x = 5
y = "5"

if x == y:
    print("Son iguales y del mismo tipo")
else:
    print("Son diferentes")

print(c)

# Ejemplo de una lista en Python
# Una lista es una estructura de datos que puede contener cualquier tipo de dato
# Las listas se declaran con corchetes
lista = [1, True, "Una lista", [1, 2]]

# Tuplas, es una estructura de datos similar a una lista
# pero no se puede modificar; se crean usando paréntesis
mi_tupla = (1, "dos", 3.0, True)

# Acceder a un elemento de la tupla
print(mi_tupla[1])
print(mi_tupla[2])

# Excluir el primer elemento
print(mi_tupla[1:])
# Esto quiere decir que seleccionamos los elementos desde el principio
# pero no incluimos el primer elemento

# Docstring es una cadena de texto que se usa para documentar una función
# Ejemplo tenemos una función de suma
def sumar(num1: int, num2: int):
    """Función que retorna la suma de dos enteros."""
    return num1 + num2

# Al poner el puntero del mouse en sumar se mostrará la documentación
sumar(1, 2)

# Valore por defecto para parámetros
def imprimir(texto, veces = 1):
    print(texto * veces)

imprimir("Hola")
imprimir("Hola", 5)

# También podemos definir en la función parametros opcionales con *
def sumar_varios(param1, *otros):
    for val in otros:
        param1 += val
    return param1

print("La suma de varios es: ", sumar_varios(2,2,2))

# Función que acepta un parámetro obligatorio y otros parámetros adicionales como un diccionario
def sumar_varios(param1, **otros):
    # Imprime el valor del parámetro obligatorio
    print(f"Parámetro 1: {param1}")

    # Imprime los valores del diccionario
    print("Parámetros adicionales:")
    for clave, valor in otros.items():
        print(f"{clave}: {valor}")

    # Suma los valores del parámetro obligatorio y del diccionario
    resultado = param1 + sum(otros.values())
    
    return resultado
resultado_suma = sumar_varios(10, param2=5, param3=8, param4=3)

print(f"Resultado de la suma: {resultado_suma}")

# Diccionario
mi_diccionario = {'clave1': 'valor1', 'clave2': 'valor2', 'clave3': 'valor3'}
print(mi_diccionario['clave1'])