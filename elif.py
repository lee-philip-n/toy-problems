#Given an integer, n, perform the following conditional actions:

#If  is odd, print Weird
#If  is even and in the inclusive range of 2 to 5, print Not Weird
#If  is even and in the inclusive range of 6 to 20, print Weird
#If  is even and greater than 20, print Not Weird

def else_if(number):
  if number % 2 != 0:
    print("Weird")
  elif number % 2 == 0 and number in range(2, 6):
    print("Not Weird")
  elif number % 2 == 0 and number in range(6, 21):
    print("Weird")
  elif number % 2 == 0 and number > 20:
    print("Not Weird")



if __name__ == '__main__':
  else_if(4)
  else_if(5)
  else_if(6)
  else_if(20)
  else_if(21)