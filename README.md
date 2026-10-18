# PULSE — ASCEN

Demonstração de business intelligence para retalho, em português europeu. **Todos os dados são sintéticos**; não existem clientes ou resultados de empresas reais.

## Executar

Node.js 22 ou superior. `npm install`, `npm run dev`. Produção: `npm run build` e `npm start`. Testes de cálculos: `npm test`.

Next.js App Router, TypeScript, Tailwind CSS 4 e Recharts. A aplicação funciona inteiramente no navegador, sem credenciais ou base de dados. O tema é guardado em localStorage.

## Funcionalidades

Visão geral, vendas, clientes, produtos, relatórios e definições. Filtros globais por datas, categoria e produto. Comparação com o período imediatamente anterior de igual duração. Gráficos de área/linha, barras e donut, tooltips e categorias clicáveis. Tabela com pesquisa, ordenação e paginação. CSV UTF-8 com todas as linhas filtradas e pesquisadas, independentemente da página.

## Metodologia

Gerador determinístico com semente 42, de 19/10/2025 a 18/10/2026. Uma linha representa uma encomenda de um produto, com 1–3 unidades. Receita = preço em cêntimos × quantidade. Sem impostos, portes, devoluções ou descontos. Valor médio = receita / encomendas. Clientes = identificadores únicos no período. Recorrentes = clientes com mais de uma encomenda no período. Crescimento = (atual − anterior) / anterior. Sem base anterior, apresenta-se indisponível. A comparação é suprimida quando não há cobertura completa do período anterior.

Os totais das categorias, produtos e canais reconciliam com os KPIs. A pesquisa aplica-se à tabela e exportação; os filtros globais aplicam-se também aos gráficos e KPIs.

## Publicar

Importar este repositório na Vercel com o preset Next.js. Não são necessárias variáveis de ambiente.
