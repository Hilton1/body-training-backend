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

- [ ]  Cadastrar aluno
- [ ]  Listar todos os alunos
- [ ]  Listar um único aluno, pelo id
- [ ]  Editar aluno
- [ ]  Deletar aluno
- [ ]  Cadastrar tipo de treino do aluno
- [ ]  Editar tipo de treino do aluno (A, AB, ABC, ABCD ou ABCDE)
- [ ]  Editar treino do aluno
- [ ]  Listar todo treino do aluno
- [ ]  Listar treino de acordo com o dia selecionado (A, B, C, D ou E)
