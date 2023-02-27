rubin = 1
print(rubin)
rubin = '바보'
print(rubin)


kdt = {
  '삼백오호' : '홀쭉',
  '나' : '너',
}

print(kdt['나'])

kdt_order = ['우리는','개발자','입니다']
print(kdt_order[0], kdt_order[1], kdt_order[2])

for index in kdt_order:
  print(index)
  
  def precent_clac(real_value, total_value):
    result = (real_value / total_value) *100
    return result