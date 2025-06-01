# 📥 Guia de Contribuição — IonicNews

Obrigado por considerar contribuir com o **IonicNews**!  

Siga este guia para garantir que todas as contribuições sejam organizadas e padronizadas.

<br>

## 📝 Descrição do Projeto

O **IonicNews** é um aplicativo móvel desenvolvido com **Ionic**  e **Angular** que consome APIs públicas de notícias, permitindo aos usuários buscar, visualizar e salvar artigos personalizados.

<br>

## 💾 Como baixar o repositório

Execute os seguintes comandos no terminal:  

```bash
# Clonar o repositório
git clone https://github.com/David-Evangelist/IonicNews.git

# Acessar a pasta do projeto
cd IonicNews

# Instalar as dependências do app
cd ionicnewsapp
npm install

# Retornar à raiz e acessar a API (se houver)
cd ../ionicnewsapi
npm install
```
<br>

## ✅ Pré-requisitos

- Node.js (>= 16.x)
- NPM ou Yarn
- Ionic CLI (npm install -g @ionic/cli)
- Angular CLI (npm install -g @angular/cli)
- Editor de Código (Visual Studio Code recomendado)
- Navegador atualizado (para testes)
- Conta na NewsAPI para gerar a chave de acesso

<br>

## 🔀 Fluxo de trabalho com Git
### 🚀 Branches
Utilizamos a seguinte estratégia de branches:

| Branch |	Função |
|--------|--------|
| main |	Código estável, pronto para produção. |
| dev |	Desenvolvimento e integração de novas features. |
| feature/nome-da-feature |	Branches criadas para cada nova funcionalidade ou correção. |
<br>

**Exemplo de criação de branch:**

```bash
git checkout -b feature/login-auth
```
<br>

### 💡 Fluxo de desenvolvimento:  
Crie uma branch a partir de dev.

1. Desenvolva e faça commits seguindo a padronização.
2. Quando terminar, abra um Pull Request para dev.
3. Revisamos e, após testes, integramos ao main.

<br>

## ✍️ Padronização de Commits
Utilizamos o padrão **Conventional Commits**:

```bash
<tipo>: <descrição curta>
```
<br>

### Exemplos de tipos comuns:
| Tipo |	Quando usar |
|---------|---------|
| feat |	Nova funcionalidade |
| fix |	Correção de bug |
| docs |	Documentação |
| style |	Formatação, indentação, espaços, ponto e vírgula etc. |
| refactor |	Refatoração de código (sem alterar comportamento) |
| test |	Testes adicionados ou corrigidos |
| chore |	Manutenção, configuração, atualizações de dependências |

<br>

Exemplos:

```bash
feat: adiciona autenticação com Firebase
fix: corrige erro de exibição de notícias
docs: atualiza README com instruções de instalação
```

<br>

## 🤝 Como contribuir
Siga os passos abaixo para contribuir com o projeto:

1. Fork o projeto.
2. Crie uma branch com sua feature ou correção:

```bash
git checkout -b feature/nome-da-feature
```
3. Faça suas alterações.
4. Faça commit das alterações (seguindo o padrão):

```bash
git commit -m "feat: descreva sua alteração"
```
5. Envie a branch para o repositório remoto:

```bash
git push origin feature/nome-da-feature
```

6. Abra um Pull Request para a branch dev e aguarde revisão.

<br>

## 🧰 Ferramentas e Tecnologias
- Framework: Ionic + Angular
- Linguagem: TypeScript
- API de Notícias: [NewsAPI](https://newsapi.org/)
- Notificações: Capacitor Push Notifications
- Armazenamento: Local Storage ou SQLite
<!-- - Autenticação: Firebase ou JWT -->


## 📎 Documentos relacionados

- [Tutorial de Fluxo de Trabalho (Git)](./ionicnewsdocs/Fluxo/Tutorial-de-Fluxo-Git.pdf)
- [Definição de Ferramentas e Instalação](./ionicnewsdocs/Fluxo/Definição-de-Ferramentas-e-Dependências.pdf)
- [Diagrama do Fluxo de Trabalho](./ionicnewsdocs/Fluxo/Diagrama_Fluxo.png)

<br>

## 🤝 Obrigado!
Agradecemos por contribuir com o IonicNews!