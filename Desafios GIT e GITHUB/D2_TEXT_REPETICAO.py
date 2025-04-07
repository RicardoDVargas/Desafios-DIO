#Neste desafio, o solicitado é que a manipulação de strings (string);
#Numeros inteiros (Int)
#Multiplas repetições
#E entrada de dados

#Entrada dos dados
palavra = input("Digite uma palavra: ")
numero = int(input ("Digite um numero: "))

#Repetição
print(f"\nRepetindo a palavra {numero} vezes:")
print((palavra + "\n")*numero)

#manipulação de string
print(f"\nEm minusculas{palavra.lower()}")
print(f"Em maiúsculas{palavra.upper()}")
print(f"Primeira letra maiúscula{palavra.capitalize()}")

#Quantidade de letras na palavra escolhi
quantidade = len(palavra)
print(f'\nA palavra tem {quantidade} letras.')
