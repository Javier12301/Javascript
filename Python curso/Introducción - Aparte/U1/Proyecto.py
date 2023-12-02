# Creamos un proyecto para verificar si un número es par o impar
def main():
    try:
        while True:
            limpiar_consola()
            # Solicitar al usuario que ingrese un número
            print("Calculadora para comprobar si un número es par o impar.")
            numero = int(input("Ingrese el número: "))
            resultado = verificar_paridad(numero)
            print(resultado)
            print("\n¿Desea probar con otro número?")
            respuesta = str(input("y/n: "))
            if respuesta == ("n" or "N"):
                break;                
    except ValueError:
        print("Error: Ingresa un numero valido.")
        
def verificar_paridad(numero):
    # Comprobamos el resto
    if numero % 2 == 0:
        return (f"El número {numero} es par")
    else:
        return (f"El número {numero} es impar")

def limpiar_consola():
    print("\033c", end='')   
# Ejecutar main
if __name__ == "__main__":
    main()