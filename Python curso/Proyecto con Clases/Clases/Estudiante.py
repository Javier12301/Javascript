class Estudiante:
    def __init__(self, nombre, edad, calificaciones=None):
        self.nombre = nombre
        self.edad = edad
        self.calificaciones = calificaciones or []
    def agregar_calificacion(self, calificacion):
        # se crea un append para agregar una calificacion
        # se usa self para referirse a la instancia este es igual 
        # a un this en java o c#
        self.calificaciones.append(calificacion)
    def obtener_promedio(self):
        if not self.calificaciones:
            return 0
        return sum(self.calificaciones) / len(self.calificaciones)
    # se utiliza el metodo __str__ para poder imprimir el objeto
    def __str__(self):
        return f"Estudiante: {self.nombre} Edad: {self.edad}, Promedio: {self.obtener_promedio()}"
