export interface Feed {
    class: string,
    icon: string,
    task: string,
    time: string
}

export const Feeds: Feed[] = [

    {
        class: 'bg-info',
        icon: 'bi bi-bell',
        task: '4 novos pedidos adicionados.',
        time: '2 minutos atrás'
    },
    {
        class: 'bg-success',
        icon: 'bi bi-bag-check',
        task: 'Pedido N° 21 foi entregue.',
        time: '2 Horas atrás'
    },
    {
        class: 'bg-warning',
        icon: 'bi bi-bag',
        task: 'Pedido N° 21 em preparação.',
        time: '2 Horas atrás'
    },    
    {
        class: 'bg-primary',
        icon: 'bi bi-person',
        task: '1 novo pedido adicionado.',
        time: '2 Horas atrás'
    },
    {
        class: 'bg-info',
        icon: 'bi bi-bell',
        task: 'Uma nova receita foi criada.',
        time: '02/10/2022'
    },
] 