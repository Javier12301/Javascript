# Ejemplo de Variables
nombre = 'Javier'
edad = 15
es_estudiante = True

# Consultar Tipo de Dato
print(type("soy un string"))
print(type(5)) # Int
print(type(4.4)) # Float


# IF - ELIF - ELSE
if edad < 18:
    print('Eres menor de Edad')
elif edad >= 18 and edad < 60:
    print('Eres mayor de Edad')
else:
    print('Eres adulto mayor')
    
# Bucles For - While
# Ejemplo de Bucle For
for i in range(5):
    print(i)
    
# Ejemplo recorrido array con for
nombres = ['Javier', 'Maria', 'Pedro', 'Juan']
for nombre in nombres:
    print(nombre)

# Ejemplo While con Contador
contador = 0
while contador < 5:
    print(f"Contador: {contador}")
    contador += 1
    
# Crear varios print con todos los operadores aritmeticos de python
# Suma
print(5 + 5)
# Resta
print(5 - 5)
# Multiplicacion
print(5 * 5)
# Division
print(5 / 5)
# Modulo
print(5 % 5)
# Potencia
print(5 ** 5)
# Division Entera
print(5 // 5)