#We add a Leap Day on February 29, almost every four years. The leap day is an extra, or intercalary day and 
#we add it to the shortest month of the year, February. 
#In the Gregorian calendar three criteria must be taken into account to identify leap years:
#
#The year can be evenly divided by 4, is a leap year, unless:
#The year can be evenly divided by 100, it is NOT a leap year, unless:
#The year is also evenly divisible by 400. Then it is a leap year.
#This means that in the Gregorian calendar, the years 2000 and 2400 are leap years, while 1800, 1900, 2100, 2200, 2300 and 2500 are NOT leap years.Source
#
#Task
#You are given the year, and you have to write a function to check if the year is leap or not.
#
#Note that you have to complete the function and remaining code is given as template.

def leap_year(year):
  if year % 4 == 0:
    if year % 100 == 0:
      if year % 400 == 0:
        print(True)
      else:
        print(False)
    else:
      print(True)
  else:
    print(False)

if __name__ == '__main__':
  leap_year(2000)
  leap_year(2016)
  leap_year(2017)
  leap_year(2020)
  leap_year(2400)
  leap_year(1800)
  leap_year(1900)
  leap_year(2100)
  leap_year(2200)
  leap_year(2300)
  leap_year(2500)