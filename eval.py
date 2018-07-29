def func(command, args):
    return "{}({})".format(''.join(command), ','.join(args))

if __name__ == '__main__':
    '''
      int(input()) = 12 
      input() = [
        "insert 0 5",
        "insert 1 10",
        "insert 0 6",
        "print",
        "remove 6",
        "append 9",
        "append 1",
        "sort",
        "print",
        "pop",
        "reverse",
        "print"
      ]
    '''
    N = int(input())
    l = []
    
    for _ in range(N):    
        cmd, *args = input().split()
        
        if cmd != 'print':
            eval("l."+ func(cmd, args))
        else:
            print(l)
            