# Creado por Javier Ramírez

# Crear 2 ejemplos utilizandos List comprehensions
# El formato de una list comprehension es: 
# [ expresion for elemento in iterable if condicion ] 

# Enviar lista por parametro y devolver una lista con los numeros pares
# Primer ejemplo, se usa un list comprehension
def lista_numeros_pares(lista_numeros: list):
    try:
        # Validar que el parametro sea una lista
        if not isinstance(lista_numeros, list):
            print("El parametro debe ser una lista")
            return
    # Devolver lista con numeros pares
        lista_par = [numero for numero in lista_numeros if numero % 2 == 0]
    # Revisar si en la lista hay numeros pares, si no hay, devolver un mensaje
        if not lista_par:
            print("No hay numeros pares en la lista")
            return
        return lista_par
    except Exception as e:
        print("Ocurrió un error de tipo: ", e)
        return
        
    
# Segundo ejemplo, se usa también un list comprehension
def cargar_lista_numeros():
    entrada_usuario = input("Ingrese una lista de números separados por coma: ")   
    # Dividimos la entrada del usuario por coma
    # Split nos permite dividir un string en una lista
    lista_cadena = entrada_usuario.split(",")
    # Convertimos cada elemento de la lista a un numero
    # Aquí usaremos la Comprensión de Listas para transformar la lista de cadenas
    # separada en comas a una lista de números.
    lista_numeros = [int(numero) for numero in lista_cadena]
    return lista_numeros
    


def main():
    lista_numeros = cargar_lista_numeros()
    print(f"Se enviará la siguiente lista: {lista_numeros}")
    lista_par = lista_numeros_pares(lista_numeros)
    if(lista_par != None):
        print(f"Lista de números pares: {lista_par}")
# MAIN 
if __name__ == '__main__':
    main()
