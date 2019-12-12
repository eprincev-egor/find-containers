# find-containers
Поиск минимального списка контейнеров для досмотра
  
  
  
Есть N контейнеров  
В каждом контейнере есть некоторое кол-во артикулов  
сколько нужно вскрыть контейнеров, чтобы получить все артикулы из возможных  
  
  
Поиск минимальной комбинации контейнеров работает так:  
берем примерную комбинацию контейнеров   
(по простому алгоритму findSimpleCombination)  
потом считаю длину этой комбинации (допустим 10)   
и начинаю подбирать все варианты с меньшим числом контейнеров.  
Если есть комбинация для 9 контейнеров, то продолжаю перебирать для 8 контейнеров,  
если есть и для 7, то перебираю для 6 и тд и тп  
пока не найду минимальную комбинацию контейнеров, которая содержит все возможные артикулы  
