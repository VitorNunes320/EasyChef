export interface topcard {
    bgcolor: string,
    icon: string,
    title: string,
    subtitle: string
}

export const topcards: topcard[] = [
    {
        bgcolor: 'primary',
        icon: 'bi bi-basket3',
        title: '12',
        subtitle: 'Vendas Hoje'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-basket3',
        title: '210',
        subtitle: 'Vendas semanais'
    },
    {
        bgcolor: 'success',
        icon: 'bi bi-basket3',
        title: '696',
        subtitle: 'Vendas Mensais'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-coin',
        title: 'R$ 21.000,00',
        subtitle: 'Ganhos Anuais'
    },
] 