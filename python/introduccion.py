import networkx as nx
import matplotlib.pyplot as plt

# Crear un objeto de grafo
G = nx.Graph()

# Agregar nodos
nodos = ["A", "B", "C", "D", "E", "F"]

for nodo in nodos:
    G.add_node(nodo)

# Agregar aristas
aristas = [("A", "B"), ("A", "C"), ("B", "D"), ("C", "E"), ("E", "F")]

G.add_edges_from(aristas)

# Dibujar el grafo
pos = nx.spring_layout(G)  # Distribución de los nodos
nx.draw(G, pos, with_labels=True, node_size=500, node_color='skyblue', font_size=12, font_color='black', font_weight='bold', width=2)

plt.title("Ejemplo de Grafo")
plt.show()

# Realizar una búsqueda en profundidad (DFS) desde el nodo "A"

#def dfs(graph, start_node):
 #   visited = set()
  #  stack = [start_node]

   # while stack:
    #    node = stack.pop()
     #   if node not in visited:
      #      print("Visitando nodo:", node)
       #     visited.add(node)
        #    stack.extend(neighbour for neighbour in graph[node] if neighbour not in visited)

# Iniciar DFS desde el nodo "A"
print("\nRecorrido DFS desde el nodo 'A':")
dfs(G, "A")
