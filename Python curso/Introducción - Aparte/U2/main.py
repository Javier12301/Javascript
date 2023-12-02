# Clase 2

def main():
    print(maximo(3 ,5))
    print("---")
    print(signo(7))
    print(signo(-1))
    print(signo(0))
    print("---")
    comprobar_vocales()

    
# Definir usando condicionales, la función máximo tal que máximo(x, y) es el máximo de x e y
# Maximo(2, 5) retornará: 5
def maximo(x, y):
    if x > y:
        return x
    else:
        return y

# Definir la función signo tal que signo(x) es el signo de x. ejemplo signo(5) -> 1 , signo(-7) -> -1 y signo(0) -> 0
def signo(x):
    if x > 0:
        return 1
    elif x < 0:
        return -1
    else:
        return 0

# Vocales que aparecen en una letra con un for
def comprobar_vocales():
    word = input("Introduce una palabra: ")
    vocals = ["a", "e", "i", "o", "u"]
    for vocal in vocals:
        times = 0
        for letter in word:
            if letter == vocal:
                times += 1
            print("La vocal " + vocal + " aparece un número de: " + str(times) + " veces")


if __name__ == "__main__":
    main()