# Body Training

## Descrição do projeto

O projeto consiste em um sistema que será responsável por cadastrar os treinos dos alunos de uma academia. Irão ser cadastrados os alunos e seus respectivos treinos, que serão passados por seu instrutor. Os treinos terão as seguintes divisões: A, AB, ABC, ABCD e ABCDE.

## Informações para cadastros

### Aluno:

- ID do aluno - **UUID**
- Nome completo - **Varchar**
- Telefone - **Varchar**
- E-mail - **Varchar**

### Treino:

- ID do treino - **UUID**
- ID do aluno - **UUID**
- Tipo de treino (A, AB…) - **Varchar**
- Treino A - **Varchar**
- Treino B - **Varchar**
- Treino C - **Varchar**
- Treino D - **Varchar**
- Treino E - **Varchar**

## Requisitos

- [x]  Cadastrar aluno
- [x]  Listar todos os alunos
- [x]  Listar um único aluno, pelo id
- [x]  Editar aluno
- [x]  Deletar aluno
- [x]  Cadastrar treino do aluno
- [x]  Editar treino do aluno
- [x]  Listar todo treino do aluno
