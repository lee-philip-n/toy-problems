def func(names_score_array):

    #finds the second lowest grade in the list
    second_lowest = sorted(list(set([score for name, score in names_score_array])))[1]

    print(second_lowest)

    #filters the list by name who have second_lowest
    #second_lowest_names = sorted([name for name, score in names_score_array if score == second_lowest])
    second_lowest_names = sorted(filter(lambda student: student[1] == second_lowest , names_score_array))

    print(second_lowest_names)
    
    for student in second_lowest_names:
        print(student[0])

a = [ ['Philip', 100], ['Steph', 95], ['Jason', 90], ['Ken', 85], ['Kimi', 90] ]

func(a)
