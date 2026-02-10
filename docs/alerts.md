# Alerts - Rocket.CSS

Componente de alertas para exibir mensagens ao usuário com diferentes níveis de severidade.

## Uso Básico

```html
<div class="rk-alert rk-alert-verde">
  Mensagem de sucesso
</div>
```

## Variações

### Verde (Sucesso)
```html
<div class="rk-alert rk-alert-verde">
  Operação realizada com sucesso!
</div>
```
- **Cor de fundo**: `--rk-cor-verde`
- **Cor do texto**: Branco (#fff)

### Vermelho (Erro)
```html
<div class="rk-alert rk-alert-vermelho">
  Erro ao processar a solicitação
</div>
```
- **Cor de fundo**: `--rk-cor-vermelho-claro`
- **Cor do texto**: Preto (`--rk-cor-preto`)

### Azul (Informação)
```html
<div class="rk-alert rk-alert-azul">
  Informação importante
</div>
```
- **Cor de fundo**: `--rk-cor-azul`
- **Cor do texto**: Preto (`--rk-cor-preto`)

### Amarelo (Aviso)
```html
<div class="rk-alert rk-alert-amarelo">
  Atenção: verifique os dados
</div>
```
- **Cor de fundo**: `--rk-cor-amarelo`
- **Cor do texto**: Preto (`--rk-cor-preto`)

### Roxo (Customizado)
```html
<div class="rk-alert rk-alert-roxo">
  Mensagem customizada
</div>
```
- **Cor de fundo**: `--rk-cor-roxo`
- **Cor do texto**: Preto (`--rk-cor-preto`)

## Propriedades CSS

| Propriedade | Valor |
|---|---|
| Padding | 1rem |
| Border Radius | 0.5rem |
| Font Size | 12px |
| Font Weight | 500 |
| Margin Bottom | 1rem |

## Implementação

O componente está definido em [`scss/classes/_alert.scss`](../scss/classes/_alert.scss) e utiliza variáveis CSS para as cores, permitindo fácil customização através do tema.

## Notas

- O alerta possui margem inferior padrão (`margin-bottom: 1rem`) para espaçamento
- As cores utilizam variáveis CSS definidas no arquivo `_colors.scss`
- Todos os alertas possuem font-size de 12px com weight 500 (semi-bold)
