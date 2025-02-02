# DEVLINK

> Aplicação web para organização e compartilhamento de links, inspirada no Linktree.

O **DEVLINK** é uma plataforma intuitiva que permite aos usuários criar uma página personalizada para agrupar links de redes sociais e outras plataformas. Com proteção de rotas e um layout personalizável, o projeto foi desenvolvido com tecnologias modernas para oferecer praticidade e segurança.

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Deploy na Vercel](#deploy-na-vercel)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição do Projeto

O **DEVLINK** é uma aplicação que permite aos usuários criar e gerenciar páginas personalizadas de links. Com ele, você pode:

- Adicionar links de redes sociais, portfólios e outras plataformas relevantes.
- Personalizar o layout com cores e estilos diferentes.
- Garantir segurança com acesso restrito para administradores.

A aplicação utiliza **React**, **TypeScript**, **Tailwind CSS** e **Firebase** para oferecer uma experiência fluida e segura.

## Funcionalidades Principais

- **Layout Personalizável:** Personalize cores de fundo e texto para criar um design único.
- **Proteção de Rotas:** Somente administradores têm acesso ao painel de edição.
- **Integração com Redes Sociais:** Inclua links para redes sociais como Instagram, Twitter, LinkedIn, entre outras.
- **Inclusão de Outros Links:** Adicione links para portfólios, blogs e qualquer outro site relevante.

## Tecnologias Utilizadas

- **Vite:** Build rápido e eficiente para projetos modernos.
- **React:** Biblioteca para construção de interfaces dinâmicas e responsivas.
- **TypeScript:** Para um código mais seguro e escalável.
- **Tailwind CSS:** Estilização ágil com classes utilitárias.
- **Firebase:** Autenticação e armazenamento de dados.

## Como Usar

### 1. Clonar o Repositório:

```bash
git clone https://github.com/seu-usuario/devlinks.git
cd devlinks
```

### 2. Instalar Dependências:

Com `npm`:

```bash
npm install
```

Com `yarn`:

```bash
yarn install
```

### 3. Iniciar o Servidor de Desenvolvimento:

Com `npm`:

```bash
npm run dev
```

Com `yarn`:

```bash
yarn dev
```

### 4. Abrir no Navegador:

Acesse a aplicação em [DevLinks/Login](https://devlinks-steel.vercel.app/login). Utilize o usuário e senha de teste: **admin@admin.com** e **123456**. Após o login, você pode ver os links em [DevLinks](https://devlinks-steel.vercel.app).

## Deploy na Vercel

Este projeto está hospedado na **Vercel**. Para fazer o deploy, siga estas etapas:

1. Crie uma conta na [Vercel](https://vercel.com/), se ainda não tiver uma.
2. Clique em **"New Project"** no painel da Vercel.
3. Conecte sua conta do GitHub e selecione este repositório.
4. O Vercel detectará automaticamente o tipo de projeto e configurará o deploy para você.
5. Clique em **Deploy** e aguarde a publicação. Após o deploy, o link para acessar a aplicação será fornecido.

## Estrutura do Projeto

- **`public`**: Arquivos públicos.
- **`src`**:
  - **`Routes`**: Configuração de rotas.
  - **`components`**: Componentes reutilizáveis.
  - **`pages`**: Páginas principais.
  - **`services`**: Serviços da aplicação.

## Contribuição

Contribuições são bem-vindas! Para contribuir com o projeto, siga os seguintes passos:

1. **Fork** este repositório.
2. Crie uma nova branch (`git checkout -b minha-nova-feature`).
3. Faça suas alterações e adicione testes, se necessário.
4. **Commit** suas alterações (`git commit -am 'Adiciona nova feature'`).
5. **Push** para a branch (`git push origin minha-nova-feature`).
6. Abra um **Pull Request** explicando suas mudanças.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

---

### 🌟 **Organize e compartilhe seus links com o DEVLINK!**
