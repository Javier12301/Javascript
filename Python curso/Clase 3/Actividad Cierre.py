# Javier Ramírez y Ernesto Moretti
import time

def calcular_signo(x):
    if x > 0:
        return 1
    elif x < 0:
        return -1
    else:
        return 0

def calcular_signo_con_un_valor_ternario(x):
    return 1 if x > 0 else -1

# PAR E IMPAR
def ejemplo_for_con_range():
    # comprobar si es par o impar con un valor ternario
    numero = int(input("Ingrese un número: "))
    print("El número es par" if numero % 2 == 0 else "El número es impar")

def calcular_notas():
    subjects = ['matemáticas', 'física', 'química', 'historia', 'lengua']
    scores = []

    for subject in subjects:
        score = input(f"¿Qué nota has sacado en {subject}?\nEscribe tu nota: ")
        scores.append(score)

    print("\n\n// // /// /// /// NOTAS FINALES /// /// /// // // //")
    for i in range(len(subjects)):
        print(f"En {subjects[i]} has sacado {scores[i]}")

    print(f"\n* La nota más alta ha sido un {str(max(scores))}")
    time.sleep(3)

def menu_de_opciones():
    while True:
        print("\n\n// // /// /// /// MENU DE OPCIONES /// /// /// // // //")
        print("1. Calcular signo")
        print("2. Calcular signo con un valor ternario")
        print("3. Comprobar par o impar")
        print("4. Calcular notas")
        print("5. Salir")

        opcion = input("Elige una opción (1-5): ")

        if opcion == '1':
            numero = float(input("Ingrese un número: "))
            print(f"El signo es: {calcular_signo(numero)}")
        elif opcion == '2':
            numero = float(input("Ingrese un número: "))
            print(f"El signo es: {calcular_signo_con_un_valor_ternario(numero)}")
        elif opcion == '3':
            ejemplo_for_con_range()
        elif opcion == '4':
            calcular_notas()
        elif opcion == '5':
            print("Saliendo del programa. ¡Hasta luego!")
            # Al poner un break salimos del bucle while y termina el programa
            break
        else:
            print("Opción no válida. Por favor, elija una opción del 1 al 5.")

        time.sleep(3)  # Espera de 3 segundos antes de volver al menú

# Llamamos a la función del menú para iniciar el programa
menu_de_opciones()
