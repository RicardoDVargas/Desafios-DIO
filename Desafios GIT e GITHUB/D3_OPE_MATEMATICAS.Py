#Solicitar 2 numeros e fazer uma operação com eles

num1 = int(input("Digite um número:"))
num2 = int(input("Digite outro número:"))

operacao = input("Me informe que tipo de operação você quer fazer (+, -, *, /): ")

if operacao == '+':
    print(num1 + num2)
elif operacao == '-':
    print(num1 - num2)
elif operacao == '*':
    print(num1 * num2)
elif operacao == '/':
    print(num1 / num2)
else:
    print("Essa operação esta errada")
