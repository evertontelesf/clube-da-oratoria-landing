# Migração para Next.js 15

## Passos para completar a migração

### 1. Remover arquivos antigos do Vite

```bash
# Remover arquivos de configuração do Vite
del vite.config.ts
del index.html
del tsconfig.app.json
del tsconfig.node.json
del eslint.config.js

# Remover arquivos antigos do src
del src\main.tsx
del src\App.tsx
del src\App.css
del src\index.css
del src\vite-env.d.ts

# Remover pasta pages antiga
rmdir /s src\pages
```

### 2. Instalar dependências

```bash
# Remover node_modules e lock files antigos
rmdir /s /q node_modules
del package-lock.json
del bun.lockb

# Instalar novas dependências
npm install
```

### 3. Executar o projeto

```bash
npm run dev
```

O projeto estará disponível em http://localhost:3000

## Mudanças principais

- ✅ Migrado de Vite para Next.js 15
- ✅ Implementado App Router
- ✅ Convertido páginas para componentes do App Router
- ✅ Atualizado variáveis de ambiente (VITE_ → NEXT_PUBLIC_)
- ✅ Adicionado "use client" nos componentes interativos
- ✅ Criado QueryProvider para React Query
- ✅ Atualizado configurações do TypeScript
- ✅ Atualizado Tailwind CSS config

## Estrutura de arquivos

```
app/
├── layout.tsx          # Layout raiz com providers
├── page.tsx            # Página principal (/)
├── not-found.tsx       # Página 404
└── globals.css         # Estilos globais

src/
├── components/         # Componentes React (mantidos)
├── lib/               # Utilitários (mantidos)
├── hooks/             # Custom hooks (mantidos)
└── services/          # Serviços (mantidos)
```

## Notas importantes

- Todos os componentes que usam hooks (useState, useEffect, etc) precisam ter "use client" no topo
- Imagens estáticas devem estar em /public
- Variáveis de ambiente devem começar com NEXT_PUBLIC_ para serem acessíveis no cliente
