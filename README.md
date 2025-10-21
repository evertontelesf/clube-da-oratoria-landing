# Clube da Oratória - Landing Page

Landing page desenvolvida com Next.js 15 e App Router.

## Tecnologias

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase

## Como executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start
```

## Estrutura do Projeto

```
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página principal
│   ├── not-found.tsx      # Página 404
│   └── globals.css        # Estilos globais
├── src/
│   ├── components/        # Componentes React
│   ├── lib/              # Utilitários
│   ├── hooks/            # Custom hooks
│   └── services/         # Serviços (API, etc)
└── public/               # Arquivos estáticos
```

## Variáveis de Ambiente

Crie um arquivo `.env.local` com:

```
NEXT_PUBLIC_SUPABASE_URL=sua_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave
```
