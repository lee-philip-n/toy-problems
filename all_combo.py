def all_combo_except_N(x, y, z, N):
  result =  [ [i, j, k] for i in range(x + 1) for j in range(y + 1) for k in range(z + 1) if ( (i + j + k) != N ) ] 
  print(result)

def all_combo_up_to(x, y, z):
  result = [ [i, j, k] for i in range(x + 1) for j in range(y + 1) for k in range(z + 1) ]
  print(result)

if __name__ == '__main__':
  all_combo_except_N(1, 1, 1, 2)
  all_combo_up_to(2, 2, 2)