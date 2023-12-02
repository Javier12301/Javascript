# Creado por Javier Ramírez
# En este python, se manejarán archivos txt, json y csv

# Primero, comenzaremos abriendo un archivo txt
# Los archivos txt lo podemos abrir en modo r: read, w: write, a: append
# la diferencia entre w y a es que w sobreescribe el archivo, mientras que a agrega al final del archivo

# Ejemplo, para abrir un archivo en modo lectura

# Primero, necesitamos una librería que nos permita meter por parametros el nombre del archivo
import sys
# sys.argv es una lista que contiene los argumentos que le pasamos al programa

if(len(sys.argv) == 2):
    # Sys.argv comprobará si se ha pasado el nombre del archivo por parámetro
    # Abrimos ahora el archivo en modo lectura
    f = open(sys.argv[1], "r")
    # Leemos el texto completo
    texto = f.read()
    # Imprimir la cantidad de caracteres que tiene el archivo
    print("El archivo tiene", len(texto), "Caracteres")
    # Ahora, imprimir cantidad de linesa de textos, o sea filas
    # Para esto, necesitamos separar el texto en lineas
    lineas = texto.splitlines()
    print("El archivo tiene", len(lineas), "lineas")
else:
    print("No se ha pasado el nombre del archivo por parámetro")
    exit()

## Ahora, abriremos un archivo en modo escritura y escribiremos algo en el
if(len(sys.argv) == 2):
    # abrimos el archivo en modo escritura
    f = open(sys.argv[1], "w")
    # Preguntamos al usuario que escribir
    texto = input("Escribe algo: ")
    # Escribimos en el archivo
    f.write(texto)
    # Cerramos el archivo
    f.close()
else:
    print("No se ha pasado el nombre del archivo por parámetro")
    exit()

